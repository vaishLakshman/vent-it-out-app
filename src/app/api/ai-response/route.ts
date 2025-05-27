import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(req: Request) {
  const { data, lang } = await req.json();

  try {
    const prompt = `
The following are some questions regarding mental wellness asked to a stranger, with their corresponding answers:

What's been on your mind a lot these days? : ${data.answer_1},
Is there something that's been especially hard or frustrating for you lately? : ${
      data.answer_2
    },
Has anything changed recently that's made things feel heavier or different? : ${
      data.answer_3
    },
What's the hardest part about what you're going through right now?: ${
      data.answer_4
    }
What do you think might help even a little, or make things feel a bit more manageable right now?: ${
      data.answer_5
    }

Act as a friend and a therapist, and conclude the major reasons for their current scenario & also suggest some easy ways to make things right in their current scenario, in a natural tone. Don't repeat the asked questions again, rather give answers about them in listed manner. Please return the response as HTML, using <p>, <br>, <ul>, etc., so I can render it directly on a web page.  
${
  lang &&
  "Give the answers in Malayalam. Give a fluent Malayalam translation, using natural vocabulary, polite tone, and native sentence structure."
}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    return new Response(
      JSON.stringify({ output: response.choices[0].message.content }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
