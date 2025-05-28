import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(req: Request) {
  const { data, lang, user } = await req.json();

  try {
    const prompt = `You are an empathetic, insightful companion with the emotional intelligence of a seasoned therapist. I will provide you with a ${
      user.Age
    } year old person’s answers to five emotionally reflective questions. Your goal is to:
1. Understand the emotional core of what the person is experiencing — what’s really going on beneath the surface.
2. Identify any emotional patterns, beliefs, or pain points that are weighing them down.
3. Gently reflect back their feelings in a way that helps them feel seen and understood.
4. Offer compassionate insights that help them make sense of their emotional state.
5. Suggest 2–3 practical and emotionally supportive actions they can take to feel lighter, more empowered, and cared for — without sounding clinical or preachy.
Keep your tone friendly, warm, and natural — like a wise, emotionally attuned friend who listens deeply and wants the best for them.
Here are the five questions they were asked, along with their answers:
${
  lang
    ? `
    1.ഇപ്പോൾ മനസ്സിൽ ബുദ്ധിമുട്ടായി തോന്നുന്ന കാര്യം എന്തെങ്കിലും ഉണ്ടോ?
    answer : ${data.answer_1}
    
    2.മറ്റുള്ളവർ കാണാതെ നിങ്ങൾ എപ്പോഴെങ്കിലും വളരെയധികം വിഷമിച്ചിട്ടുണ്ടോ?
    answer : ${data.answer_2}
    
    3.നിങ്ങളെക്കുറിച്ച് മറ്റുള്ളവർ മനസ്സിലാക്കണം എന്ന് ആഗ്രഹിക്കുന്ന ഒരു കാര്യമുണ്ടോ?
    answer : ${data.answer_3}

    4.നിങ്ങൾ വിഷമിച്ചിരിക്കുന്ന സമയത്ത്, ആരെങ്കിലും നിങ്ങൾക്കു ചെയ്തു തന്നിരുന്നെങ്കിൽ എന്ന്  ആഗ്രഹിക്കുന്ന കാര്യം എന്താണ്?
    answer : ${data.answer_4}

    5.നിങ്ങൾ നിങ്ങളെ തന്നെ കുറ്റപ്പെടുത്തുന്നതും, അതിൽ നിന്ന് മോചനം ലഭിക്കാൻ ആഗ്രഹിക്കുന്നതുമായ ഒന്നുണ്ടോ?
    answer : ${data.answer_5}
    `
    : `q1. Is there something on your mind that’s been feeling heavy lately?
  answer : ${data.answer_1}
  
  q2. Can you remember a time you felt hurt, even if no one else noticed?
  answer : ${data.answer_2}
  
  q3. What’s something you wish people really understood about you?
  answer : ${data.answer_3}
  
  q4. When you’re feeling low, what’s one thing you wish someone would do for you?
  answer : ${data.answer_4}
  
  q5. Is there something you’ve been blaming yourself for, that you want to let go of?
  answer : ${data.answer_5}`
}
Please return the response as HTML, using <p>, <br>, <ul>, etc., so I can render it directly on a web page. Makre sure it is ready to render, and no markup tags gets displayed in the rendered output.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
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
    // eslint-disable-next-line
  } catch (error: any) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
