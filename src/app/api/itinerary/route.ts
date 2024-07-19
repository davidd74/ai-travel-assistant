import axios from "axios";
import { NextResponse } from "next/server";
import OpenAI from "openai";

type DateObject = {
  calendar: {
    identifier: string;
  };
  era: string;
  year: number;
  month: number;
  day: number;
};

function calculateDaysBetweenDates(
  startDate: DateObject,
  endDate: DateObject
): number {
  const start = new Date(startDate.year, startDate.month - 1, startDate.day);
  const end = new Date(endDate.year, endDate.month - 1, endDate.day);

  const timeDifference = end.getTime() - start.getTime();

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference + 1;
}

export async function POST(request: Request) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const requestData = await request.json();
    const { answers } = requestData;
    const subscriptionKey = process.env.AZURE_KEY;
    const host = "api.bing.microsoft.com";
    const path = "/v7.0/images/search";
    const term = `${answers.destination}`;

    // Extract the offset query parameter from the request, default to 0 if not provided
    const urlParams = new URL(request.url);
    const offset = urlParams.searchParams.get("offset") || "0";

    // Construct the search URL with count and offset for pagination
    let firstImage;

    const url = `https://${host}${path}?q=${encodeURIComponent(
      term
    )}&count=1&offset=${offset}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Ocp-Apim-Subscription-Key": subscriptionKey,
        },
      });

      // Return only first image
      firstImage = response.data.value[0];
    } catch (error) {
      console.error("Error fetching image search results:", error);
      return new Response(
        JSON.stringify({ error: "Error fetching image search results" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        }
      );
    }

    const numberOfDays = calculateDaysBetweenDates(
      answers.date.start,
      answers.date.end
    );

    console.log(numberOfDays);

    const systemPrompt = `
    Generate a trip itinerary in JSON format based on the user data provided below.
    
    User data:
    - Budget: $${answers.budget}
    - Number of days: ${numberOfDays}
    - Destination: ${answers.destination}
    - Activities: ${answers.activities.join(", ")}
    
    Requirements:
    1. Divide each day into three parts: morning, afternoon, and evening.
    2. DONT DECIDE THE PLACE WHERE THE USER IS GOING TO STAY, THEY WILL CHOOSE THAT BY THEMSELVES. IF THEY ASK YOU ABOUT ACCOMODATION OPTIONS, SUGGEST THEM.
    3. Give LONG AND DETAILED plan for morning, afternoon, and evening with as many details as possible. When suggesting people to visit something, give the 
    4. For the first day, include only entering the accommodation at noon and possibly dinner in the evening.
    5. On the last day, include departure after breakfast in the morning because in most accomodations you have to leave early morning. Don't add things like N/A, just provide empty string ""
    6. Ensure the itinerary spans the entire duration of the trip, following the sample JSON format provided.
    7. If possible, include activities given in the tripDetails
   place name. Dont say have rooftop lunch, say go to "place name" and have rooftop lunch.  
    8. On the first day, dont say things like flight to destination name because you can't know how the user arrived.
    Sample output JSON format, MAKE SURE THAT THE FORMAT IS PERFECT:
    
      "tripDetails": {
        "numberOfDays": "${numberOfDays}",
        "destination": "${answers.destination}",
        "destinationImage": "${firstImage?.contentUrl}",
        "activities": "${answers.activities.join(", ")}",
        "travelers": "${answers.goers}"
        "dates": {
          "start": {
            "day": "${answers.date.start.day}",
            "month": "${answers.date.start.month}",
            "year": "${answers.date.start.year}"
          },
          "end": {
            "day": "${answers.date.end.day}",
            "month": "${answers.date.end.month}",
            "year": "${answers.date.end.year}"
          },
          destinationSummary: "STRING - SUMMARY OF THE DESTINATION THAT THE USER WANTS TO TRAVEL TO"
        }
      },
      "itinerary": [
        {
          "day": "NUMBER",
          "morning": "STRING",
          "afternoon": "STRING",
          "evening": "Dinner.",
          "daySummary": "STRING"

          // make sure that the daysummary doesnt have more than 4 words
        }
        // Plans for other days based on the trip details...
      ]
    
    
    //EXTREMELY IMPORTANT NOTE: YOU MUST RETURN ONLY A RESPONSE IN JSON FORMAT, NOTHING ELSE.
        `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }],
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
