import axios from "axios";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const requestData = await request.json();
  console.log(requestData);

  const { tripDetails, messages } = requestData;

  const systemPrompt = {
    role: "system",
    content: `
    Give extremely helpful answers to the questions that the user asked about their trip plan.

    Here are the rules for providing useful answers: 
    1. Nicely refuse and let the user know that you cannot answer any questions that are not related to the trip.
    2. Give detailed answers, often times asking the user for more information so you can help them even more. 

    Here are trip details in JSON format so you can do your best to help the user: 

    Destination: ${tripDetails.tripDetails.destination}
    Number of Days: ${tripDetails.itinerary.length}

    Here is the plan for each day of the trip in case the user asks something about specific day of the trip or the place they are visiting on one of the days: ${tripDetails.itinerary
      .map(
        (day: any) => `
      Day ${day.day}: ${day.morning} ${day.afternoon} ${day.evening}`
      )
      .join("")}
    Make sure to remember this itinerary AT ALL TIMES.
    `,
  };

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [systemPrompt, ...messages],
  });

  return NextResponse.json(response);
}
