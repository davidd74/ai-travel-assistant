import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const requestData = await request.json();
    const { messages } = requestData;

    console.log(messages);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// const response = await anthropic.messages.create({
//   max_tokens: 1024,
//   messages: message,
//   temperature: 0,
//   system:
//     'Based on the user data below, generate a trip itinerary in JSON.\nUser data:\nbudget: 500euros\ndays: 10\ndestination: Novalja\nactivities: exploration of nature, partying\nGenerate 3 parts of the day, morning, afternoon, evening\nFirst and last day of the trip dont put anything besides entering the accommodation, eventually dinner at the end of the day and departing on the last day breakfast\n\nSample output JSON you must follow:\n[{\n  "day": 1,\n  "morning": "plan for the morning",\n  "afternoon": "plan for the afternoon",\n  "evening": "plan for the evening",\n  "destination": "place where the user is residing",\n  "budget": "amount of money the user is ready to spend during the trip",\n  "activities": ["activities the user", "wants to include in their trip"]\n}]. VERY IMPORTANT NOTE: YOU MUST RETURN ONLY A RESPONSE IN JSON, NOTHING ELSE, 0 CONVERSATIONS.',
//   model: "claude-3-haiku-20240307",
// });
