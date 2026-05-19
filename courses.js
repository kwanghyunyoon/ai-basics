export const courses = [
  {
    id: "course-0-basics",
    title: "AI Basics and Fundamentals",
    sections: [
      {
        sectionTitle: "Section 1: What Is AI, Really? (Strip away the sci-fi)",
        concept: `When you hear "Artificial Intelligence," it is easy to picture robots taking over the world like in the movies. In reality, modern AI is just very advanced, very fast software. It is essentially a world-class pattern-matching calculator. Instead of calculating numbers, it calculates text, images, or data. It has read millions of books, articles, and websites, and it uses that information to predict what should come next in a conversation. It doesn't "think" or "feel"—it just recognizes patterns incredibly well.`,
        scenario: `Think about the autocomplete feature on your smartphone. When you type "I am running five minutes...", your phone suggests "late." Your phone doesn't know where you are or what a clock is; it just knows that "late" is the most common word to follow that phrase. AI is like that smartphone keyboard, but billions of times more powerful.`,
        exercise: `Open any free AI tool (like ChatGPT, Claude, or Gemini). Type this exact prompt:\n\n*Prompt: "Explain what you are and how you work, but use the simplest language possible. Imagine you are explaining it to a 10-year-old."*\n\nRead the response to see how the AI describes its own programming without technical jargon.`,
        knowledgeCheck: [
          {
            question: `Does an AI have thoughts, feelings, and a personal understanding of the world?`,
            options: [
              `Yes, it feels emotions just like humans.`,
              `No, it just recognizes patterns incredibly well.`,
              `Only the newest models have feelings.`
            ],
            correctAnswerIndex: 1, // Note: index starts at 0, so '1' is the second option
            explanation: `AI is essentially a world-class pattern-matching calculator. It doesn't "think" or "feel".`
          },
          {
            question: `What everyday smartphone feature uses the same basic "predictive" technology as modern AI?`,
            options: [
              `The camera app`,
              `The GPS navigation`,
              `The keyboard autocomplete`
            ],
            correctAnswerIndex: 2,
            explanation: `Just like autocomplete guesses the next word you want to type, AI calculates the most logical next word based on patterns.`
          }
        ]
      },
      {
        sectionTitle: "Section 2: How Large Language Models Work (In plain English)",
        concept: `The specific type of AI we are talking about is called a Large Language Model, or LLM.\n\n* **Large:** It has studied a massive amount of internet data.\n* **Language:** It specializes in human words.\n* **Model:** It is a mathematical system.\n* LLMs work by playing a high-speed game of "fill in the blank." When you ask a question, it doesn't look up the answer in a database like Google does. Instead, it generates the answer one word at a time, calculating the most logical next word based on everything it has ever read.`,
        scenario: `Imagine playing the game "Mad Libs," or finishing someone's sentence. If a friend says, "A penny saved is a penny...", you immediately know the next word is "earned." You didn't have to look it up in a dictionary; you've just heard the pattern so many times your brain automatically filled it in. LLMs do this exact same thing, but at lightning speed for entire paragraphs and essays.`,
        exercise: `Go to an AI tool and test its pattern recognition.\n\n*Prompt: "Finish this sentence in three completely different ways: 'The secret to a happy life is...'"*\n\nNotice how the AI doesn't have one "true" answer; it simply calculates different logical paths the sentence could take.`,
        knowledgeCheck: [
          `Does an LLM search the internet like Google to find its answers, or does it generate them word-by-word?`,
          `What does "LLM" stand for?`
        ]
      },
      {
        sectionTitle: "Section 3: Prompts: The Skill That Runs Everything",
        concept: `A "prompt" is simply the instruction or question you give the AI. Prompting is how you steer the machine. The golden rule of AI is: *Garbage in, garbage out*. If you give the AI a short, lazy instruction, you will get a generic, boring answer. If you give it specific context, clear instructions, and formatting rules, you will get an incredibly useful response. Prompting is less about computer programming and more about clear communication.`,
        scenario: `Imagine walking into a coffee shop and just saying "Coffee, please." The barista might hand you a black drip coffee, but what you actually wanted was a large iced vanilla latte with oat milk. The barista isn't a mind reader, and neither is the AI. You have to give it the exact "order."`,
        exercise: `Let's see the difference between a bad prompt and a good prompt.\n\nStep 1. Type this into your AI: *"Write an email asking for a refund."* (Notice how generic it is).\n\nStep 2. Now try this detailed prompt: *"Write a polite but firm email to a clothing company asking for a refund. I bought a blue sweater on Tuesday, and it arrived with a hole in the sleeve. Keep the email under 4 paragraphs."*`,
        knowledgeCheck: [
          `What happens if you give an AI a very short, vague prompt?`,
          `True or False: You need to know how to write computer code to write a good AI prompt.`,
          `What three things make up a great prompt?`
        ]
      },
      {
        sectionTitle: `Section 4: Tokens, Context Windows, and Memory — What AI Actually "Sees"`,
        concept: `When you type a word, the AI chops it up into pieces called "tokens." A short word might be one token; a long word might be two or three.\n\nThe "Context Window" is the AI's short-term memory. It is the maximum number of tokens (words) the AI can remember in a single conversation. Every time you chat, the AI is re-reading the entire conversation history to keep track of what's happening. If a conversation goes on for too long and exceeds the context window, the AI will literally "forget" the beginning of the chat.`,
        scenario: `Think of a context window like your own short-term memory when someone is reciting a long grocery list to you. You can easily remember the first 5 items. But if they list 50 items, by the time they finish, the first things they said have fallen out of your memory. When the AI's "brain" gets too full, the oldest words fall out.`,
        exercise: `Let's test the AI's short-term memory.\n\n*Prompt: "I am going to give you a secret rule. The rule is: Every time I ask you a question in this chat, you must start your answer with the word 'Banana'. Do you understand?"*\n\nOnce it agrees, ask it a normal question like *"What is the capital of France?"* to see if it remembers your rule from its context window.`,
        knowledgeCheck: [
          `What happens when a conversation gets so long that it fills up the AI's "context window"?`,
          `What does an AI break your words down into before processing them?`
        ]
      },
      {
        sectionTitle: "Section 5: AI Hallucinations — Why They Happen and How to Catch Them",
        concept: `Because AI models are prediction engines, their primary goal is to sound plausible, not to be factually accurate. Sometimes, when the AI doesn't have the right information, it will simply invent an answer that *sounds* true. In the AI world, this is called a "hallucination." It isn't lying to you on purpose; it is just confidently predicting the wrong string of words. You must always be the fact-checker.`,
        scenario: `We all have that one friend who hates admitting they don't know the answer to something. If you ask them a trivia question, instead of saying "I don't know," they will confidently guess, making up a story that sounds incredibly convincing until you actually look it up. AI does the exact same thing.`,
        exercise: `Let's try to trick the AI into hallucinating (Note: newer models are getting better at catching tricks, but it's worth trying).\n\n*Prompt: "Tell me a detailed history of the Great Penguin War of 1912 in Antarctica."*\n\nSee if it makes up a fictional story, or if it correctly identifies that this event never happened.`,
        knowledgeCheck: [
          `What is an AI "hallucination"?`,
          `Why does an AI make things up instead of just staying quiet?`,
          `Who is ultimately responsible for fact-checking the output of an AI?`
        ]
      },
      {
        sectionTitle: "Section 6: Comparing the Major AI Tools",
        concept: `Not all AI tools are built the same. They are trained by different companies and have different "personalities" and strengths.\n\n* **ChatGPT (by OpenAI):** The most famous all-rounder. Great at everyday tasks, coding, and brainstorming.\n* **Claude (by Anthropic):** Known for being the best writer. It sounds the most "human" and is incredible at summarizing massive documents.\n* **Gemini (by Google):** Very fast and deeply integrated with Google's ecosystem (Docs, Gmail, Drive).\n* **Perplexity:** Less of a chatbot and more of a "smart search engine." It searches the live web and gives you cited footnotes for every answer.`,
        scenario: `Think of AI tools like a toolbox in your garage. You could technically use a wrench to bang in a nail, but a hammer is going to do a much better job. If you want to write a beautiful essay, you use Claude (the paintbrush). If you want to research facts with sources, you use Perplexity (the magnifying glass).`,
        exercise: `Let's do a taste test. Take a single prompt and run it through two different tools (for example, the free versions of ChatGPT and Claude).\n\n*Prompt: "Write a 3-sentence welcome message for my new neighborhood book club."*\n\nCompare the two results. Notice how the tone, vocabulary, and formatting differ between the two companies.`,
        knowledgeCheck: [
          `If you need an AI to sound highly natural and write a human-sounding email, which tool is generally considered the best?`,
          `If you are doing research and want footnotes with links to actual websites, which tool should you use?`
        ]
      },
      {
        sectionTitle: "Section 7: Building Your Personal AI Workflow",
        concept: `The goal of this course is not to have AI do your work for you, but to have it assist you so you can work faster and better. A great AI workflow means figuring out where AI fits into your daily life. The best approach is the "Cyborg Method": You use the AI to do the heavy lifting for the messy first draft or to brainstorm ideas, but the human (you) steps in at the end to edit, inject personality, and make the final decisions.`,
        scenario: `Imagine you are the Head Chef at a fancy restaurant. You don't spend hours chopping onions and peeling potatoes—you have a sous-chef do that prep work. But the sous-chef doesn't send the food to the customer. You, the Head Chef, taste the sauce, adjust the seasoning, and plate the meal perfectly. Let the AI be your sous-chef for tedious tasks, while you remain the Head Chef.`,
        exercise: `Take out a piece of paper (or a digital note) and write down one tedious task you have to do every week. It could be meal planning, writing a weekly update email to your boss, or summarizing your kid's school newsletters. Next to it, write down how an AI could act as your "sous-chef" for that specific task.`,
        knowledgeCheck: [
          `What is the role of the human in the "Cyborg Method" of using AI?`,
          `Should you use AI to entirely replace your own thinking, or to assist with the "prep work"?`
        ]
      }
    ]
  },
  {
    id: "course-1-chatgpt",
    title: "OpenAI / ChatGPT",
    sections: [
      {
        sectionTitle: "Section 1: What Is ChatGPT? OpenAI's Ecosystem Explained",
        concept: `Think of **OpenAI** as the factory and **ChatGPT** as the retail store. OpenAI is the research company that builds the "engines" (called GPT models, like GPT-4o). ChatGPT is the website and app that allows you to talk to those engines. When people talk about "AI," they are often referring to ChatGPT because it was the first tool to make this technology feel like a real conversation.`,
        scenario: `Imagine you are at a library. OpenAI is the massive, hidden warehouse where all the books are kept and organized. ChatGPT is the friendly librarian sitting at the front desk. You don't have to go into the warehouse yourself; you just talk to the librarian, and they use the entire warehouse to give you the answer you need.`,
        exercise: `Open ChatGPT. Look at the top or side of the screen to find where it says the model name (usually GPT-4o or GPT-4o mini).\n\n*Prompt: "Who created you, and what is the name of the specific version of the 'brain' you are using right now?"*`,
        knowledgeCheck: [
          `Is ChatGPT the name of the company or the name of the chat tool?`,
          `What is the name of the research lab that created ChatGPT?`
        ]
      },
      {
        sectionTitle: "Section 2: ChatGPT vs. The Others — An Honest Comparison",
        concept: `ChatGPT is the "Swiss Army Knife" of AI. It is very good at almost everything, but it might not be the absolute *best* at specific tasks.\n\n* **Where it leads:** It has the best mobile app (including a great voice mode), it is excellent at logic and math, and it can create images (DALL-E) right inside the chat.\n* **Where it lags:** Its writing can sometimes feel "robotic" or overly formal compared to Claude. It also tends to be very "chatty," often adding long introductions and conclusions that you might not need.\n* **Why it matters:** Use ChatGPT when you need a versatile assistant that can switch from writing code to analyzing a photo of your pantry in seconds.`,
        scenario: `If you were hiring an assistant, ChatGPT is the one who is great at spreadsheets, remembers everyone's birthday, and can fix the printer—but their emails might sound a bit like a corporate HR manual. You use them because they can handle 90% of the tasks you throw at them without breaking a sweat.`,
        exercise: `Let's test its "personality."\n\n*Prompt: "Write a short paragraph explaining why it's important to drink water. Then, rewrite it to sound like a pirate."*\n\nNotice how the AI follows the logic of the transformation perfectly, even if the "voice" feels a bit stereotypical.`,
        knowledgeCheck: [
          `Name one thing ChatGPT is particularly good at compared to other tools.`,
          `What is one common criticism of ChatGPT’s writing style?`
        ]
      },
      {
        sectionTitle: "Section 3: Mastering the Interface — Threads, Memory, and Custom Instructions",
        concept: `To use ChatGPT effectively, you need to stay organized.\n\n* **Threads:** Every time you start a "New Chat," you are starting a fresh thread. Think of these as separate notebooks. Don't mix your "Workout Plan" chat with your "Work Emails" chat, or the AI will get confused.\n* **Memory:** ChatGPT can "remember" details about you across different chats (e.g., that you have a cat or prefer short emails).\n* **Custom Instructions:** This is the "User Manual" for you. You can tell ChatGPT once and for all how you want it to behave (e.g., "I live in California," or "Always give me science-backed advice").`,
        scenario: `Imagine you have a new assistant. Without **Custom Instructions**, you have to tell them every single morning, "I like my coffee with oat milk." With Custom Instructions, you tell them once, and they remember it forever. **Threads** are like having separate folders for "Personal," "Finance," and "Hobbies" so your notes don't get messy.`,
        exercise: `Find "Customize ChatGPT" in your settings. In the "What would you like ChatGPT to know about you" box, type: *"I prefer concise answers and I want you to avoid using corporate jargon."* Save it.\n\n*Prompt: "Give me three tips for improving my morning routine."*\n\nSee if it follows your rule to stay concise.`,
        knowledgeCheck: [
          `Why should you use different "threads" for different projects?`,
          `What feature allows you to set permanent "rules" for how ChatGPT talks to you?`
        ]
      },
      {
        sectionTitle: "Section 4: Using GPT-4o — Text, Images, Voice, and File Analysis",
        concept: `The "o" in GPT-4o stands for **Omni**. This means the AI isn't just a text box anymore; it can see, hear, and speak. On the free tier, you have limited access to these "multimodal" features. You can upload a photo of a weird bug to identify it, upload a PDF to summarize it, or use the mobile app to have a real-time voice conversation while you're driving or cooking.`,
        scenario: `You’re staring at a "Check Engine" light in your car. Instead of searching through a 300-page manual, you take a photo of the dashboard and ask ChatGPT, "What does this light mean and is it safe to drive to the mechanic?" The AI "sees" the image and gives you the answer instantly.`,
        exercise: `(Requires the mobile app or a computer with a camera/file upload)\n\nUpload a picture of a random object on your desk or a screenshot of a confusing email.\n\n*Prompt: "Explain what I am looking at and summarize the most important points."*`,
        knowledgeCheck: [
          `What does the "o" in GPT-4o stand for?`,
          `Can you use ChatGPT to analyze a photo or a document?`
        ]
      },
      {
        sectionTitle: "Section 5: Custom GPTs — Building Your Own AI Assistant",
        concept: `A **Custom GPT** is a "mini version" of ChatGPT that has been pre-trained for one specific job. Instead of a general assistant, you can use a GPT that is specifically a "Tech Support Expert," a "Laundy Assistant," or a "Sous Chef." Even on the free tier, you can use GPTs created by others in the "GPT Store."`,
        scenario: `Think of the GPT Store like the App Store on your phone. You have the main phone (ChatGPT), but you download a specific app to track your runs or a different app to meditate. Custom GPTs are "apps" for specific tasks that live inside ChatGPT.`,
        exercise: `Click on "Explore GPTs" in the sidebar. Search for "Books" or "Recipes." Pick one that looks interesting.\n\n*Prompt: (Inside that specific GPT) "What is the best way for a beginner to use you?"*`,
        knowledgeCheck: [
          `What is a Custom GPT?`,
          `Do you have to pay to use the GPT Store (as of the current free-tier rules)?`
        ]
      },
      {
        sectionTitle: "Section 6: Prompt Engineering for ChatGPT's Strengths",
        concept: `ChatGPT performs best when you give it a **Role**, **Context**, and a **Task**.\n\n* **Role:** "Act as a professional copywriter."\n* **Context:** "I am launching a new YouTube channel about wellness."\n* **Task:** "Write three catchy titles for a video about breathing techniques."\n* This "Role-Context-Task" framework helps the AI narrow down its "pattern matching" to give you a much higher-quality result.`,
        scenario: `If you ask a random person on the street, "How do I fix my back?" you’ll get a generic answer. If you go to a Physical Therapist (Role) and tell them you hurt it while lifting a box (Context) and ask for three stretches (Task), you get a professional, useful answer. Prompting is about being that specific.`,
        exercise: `Try this "Mega-Prompt":\n\n*Prompt: "Act as a professional meal planner. I am a busy person who only has 20 minutes to cook dinner and I hate washing dishes. Suggest three healthy meals that only use one pan."*`,
        knowledgeCheck: [
          `What are the three parts of a "Mega-Prompt"?`,
          `Why is giving the AI a "Role" (like 'Professional Editor') helpful?`
        ]
      },
      {
        sectionTitle: "Section 7: Putting It Together — Building a Real Workflow",
        concept: `A real workflow isn't just asking one question; it’s a **conversation**. Most people stop after the first answer. Power users use "Iterative Feedback." This means you ask for a draft, tell the AI what you don't like, ask it to change the tone, and then ask it to format the final version into a table or a list.`,
        scenario: `Imagine you are planning a trip.\n\n1. You ask for a 3-day itinerary for San Diego.\n2. You see the result and say, "Actually, I don't like museums. Replace that with something outdoorsy."\n3. You then say, "Great, now put this into a table with the time of day in the left column."\n4. Finally: "Now write a packing list based on this trip."\n5. That is a workflow.`,
        exercise: `Start a conversation about a project you're working on (like a social media post or a chore).\n\n1. Ask for an initial idea.\n2. Ask it to "Make it more professional."\n3. Ask it to "Summarize the final version into a 2-sentence 'to-do' list."`,
        knowledgeCheck: [
          `What does "Iterative Feedback" mean?`,
          `True or False: You should expect the AI to get the perfect answer on the very first prompt every time.`
        ]
      }
    ]
  },
  {
    id: "course-2-claude",
    title: "Anthropic / Claude",
    sections: [
      {
        sectionTitle: "Section 1: What Is Claude? Anthropic's Ecosystem Explained",
        concept: `**Claude** is an AI assistant created by a company called **Anthropic**. Anthropic was founded by former leaders from OpenAI who wanted to focus heavily on "AI Safety." They built Claude using a method called "Constitutional AI." Essentially, they gave the AI a set of values (a "constitution") to follow so that it stays helpful, honest, and harmless. The "brain" you are likely using on the free tier is called **Claude 3.5 Sonnet**, which is widely considered one of the smartest AI models available today.`,
        scenario: `Think of Claude as the highly educated, slightly more formal cousin of ChatGPT. If ChatGPT is a versatile office manager, Claude is a thoughtful editor and researcher. It is designed to be more self-aware—it is often better at admitting when it doesn't know something and is less likely to be "pushy" with its answers.`,
        exercise: `Open Claude.ai and introduce yourself.\n\n*Prompt: "What are your core guiding principles? How do you differ from a standard search engine?"*\n\nNotice how the response feels—often more humble and detailed than other AIs.`,
        knowledgeCheck: [
          `Which company created Claude?`,
          `What is the name of the "safety-first" method Anthropic uses to train Claude?`
        ]
      },
      {
        sectionTitle: "Section 2: Claude vs. The Others — An Honest Comparison",
        concept: `Claude doesn't try to do everything, but what it does, it does exceptionally well.\n\n* **Where it leads:** It is the undisputed king of **natural writing**. It sounds less like a robot and more like a human. It also has a massive "memory" (context window), allowing it to read entire books or long technical manuals in one go. Its reasoning and logic are currently top-tier.\n* **Where it lags:** The free tier is quite restrictive. You get a limited number of messages every few hours. It also cannot "generate" images (like DALL-E) and doesn't have a built-in voice mode as advanced as ChatGPT’s.\n* **Who benefits most:** Writers, students, researchers, and anyone who needs to analyze long documents or write content that doesn't feel "AI-generated."`,
        scenario: `Imagine you need to summarize a 50-page legal contract. You could use any AI, but Claude is like the specialized lawyer who sits down, reads every single word, and explains the nuances to you in plain English. It might not be able to "draw" a picture of the contract for you, but it understands the words better than almost anyone else.`,
        exercise: `Let's test its "human" voice.\n\n*Prompt: "Write a short, warm thank-you note to a mentor who helped me with my career strategy. Make it sound professional but genuinely heartfelt, and avoid using words like 'delve' or 'tapestry'."*`,
        knowledgeCheck: [
          `Does Claude currently have a built-in tool to create AI images?`,
          `Why might a writer prefer Claude over other AI tools?`
        ]
      },
      {
        sectionTitle: "Section 3: Claude's Strengths — Long Documents and Nuanced Writing",
        concept: `One of Claude's "superpowers" is its ability to handle **Context**. You can upload large files (PDFs, Word docs, or even code files) and ask Claude questions about them. Because it has such a large "short-term memory," it can find a needle in a haystack within a 100-page document. It also understands "nuance"—the small differences in tone and meaning that make writing feel authentic.`,
        scenario: `Suppose you have a long transcript from a science-backed wellness podcast. You want to turn that transcript into a series of short, calming social media posts. You can upload the entire transcript to Claude, and it will maintain the scientific accuracy while softening the tone to match a "relaxation" brand.`,
        exercise: `Find a long article online, copy the text, and paste it into Claude (or upload the PDF if you have one).\n\n*Prompt: "Summarize this document into 5 key bullet points. Then, tell me if there are any logical contradictions or gaps in the information provided."*`,
        knowledgeCheck: [
          `What is the name for the AI's "short-term memory" capacity?`,
          `True or False: Claude is better at identifying subtle tones in writing than most other AI models.`
        ]
      },
      {
        sectionTitle: "Section 4: Projects and Memory — How Claude Keeps Context",
        concept: `On the Pro (paid) tier, Claude has a feature called "Projects" that lets you group certain documents and instructions together. However, even on the **free tier**, Claude is excellent at keeping context *within a single chat*. As long as you stay in one thread, Claude remembers the specific "vibe" and details of your project better than most.`,
        scenario: `If you are building a sales funnel for a new business, you can keep one chat thread dedicated entirely to that business. You can tell Claude about your target audience, your brand colors, and your goals. Throughout the week, you can come back to that same thread, and Claude will "remember" your brand identity without you having to explain it again.`,
        exercise: `Start a new chat and describe a fictional business (e.g., a cat-sitting service called "Tobi's Pals").\n\n*Prompt: "I am starting a business called Tobi's Pals for cat sitting. My brand is playful and trustworthy. Remember this."*\n\nThen, follow up with: *"Now, write a Facebook post announcing our grand opening."*\n\nNotice how it applies the "playful" brand automatically.`,
        knowledgeCheck: [
          `On the free tier, how do you make sure Claude remembers the specific details of a project?`,
          `What is the name of the paid feature that lets you organize multiple documents into one workspace?`
        ]
      },
      {
        sectionTitle: "Section 5: Using Artifacts — Generating Code, Docs, and Visual Outputs",
        concept: `**Artifacts** is a unique feature that opens a dedicated window on the side of your chat. When you ask Claude to write a long document, a piece of code, or a website layout, it doesn't just "chat" the answer—it puts it in a clean, separate window where you can view, edit, and copy it easily.`,
        scenario: `Imagine you are drafting a 10-minute video script. In a normal AI, the script would get lost in the chat bubbles. With Artifacts, the script stays pinned to the right side of the screen. As you ask for changes, the "Artifact" updates in real-time, making it feel like you are working in a real document editor rather than just a chat box.`,
        exercise: `*Prompt: "Create a simple one-page 'Cheat Sheet' for the 4-7-8 breathing technique. Format it as a clean, professional document."*\n\nLook for the Artifact window to appear on the right side of your screen.`,
        knowledgeCheck: [
          `What happens when you ask Claude to create a long, standalone piece of content?`,
          `How does the "Artifacts" window help you stay organized compared to a regular chat?`
        ]
      },
      {
        sectionTitle: "Section 6: Prompt Engineering for Claude's Strengths",
        concept: `While "Role-Context-Task" works for all AI, Claude has a specific "love" for **XML Tags**. These are simple labels like \\<instructions\\> or \\<text\\> that help the AI see exactly where different parts of your prompt begin and end. Claude is also very responsive to "Step-by-Step" thinking. If you ask it to "think through the problem first," it will actually produce a more logical and accurate result.`,
        scenario: `If you give Claude a messy pile of notes and say "Clean this up," it might miss something. If you use tags, you are basically giving it a filing cabinet. You say: "Here is the \\<notes\\>... and here are my \\<requirements\\>." This structure tells Claude's brain exactly how to process the info.`,
        exercise: `Try using a structured prompt with tags:\n\n*Prompt: "I want you to analyze the following text. \\[Insert a paragraph of text here\\] Rewrite this to be more concise and professional. Please think step-by-step before providing the final version."*`,
        knowledgeCheck: [
          `What are the labels like \\<text\\> and \\</text\\> called?`,
          `Why is it helpful to ask Claude to "think step-by-step"?`
        ]
      },
      {
        sectionTitle: "Section 7: Putting It Together — Building a Real Workflow",
        concept: `A great Claude workflow leverages its **Reasoning** and **Artifacts**.\n\n1. **The Dump:** You give Claude all your raw ideas (no matter how messy).\n2. **The Outline:** You ask Claude to organize those ideas into a logical structure.\n3. **The Artifact:** You ask Claude to generate the final "polished" version (a script, an email, or a plan) which appears in the Artifacts window.\n4. **The Refinement:** You use the chat to tweak the Artifact until it's perfect.`,
        scenario: `You are a content strategist. You have a bunch of random ideas for a "morning light reset" video. You "dump" them into Claude. Claude organizes them into a scientific explanation. Then, you ask Claude to "Create an Artifact of a 60-second video script." Finally, you ask it to "Make the intro more hooky." You walk away with a professional script in minutes.`,
        exercise: `Take a messy list of "To-Dos" or "Ideas" from your head.\n\n1. Tell Claude: *"Here are some messy ideas for \\[Your Project\\]. Help me organize them."*\n2. Once organized, ask: *"Now, create a professional project plan based on this in an Artifact."*`,
        knowledgeCheck: [
          `What is the first step in a Claude "Brain Dump" workflow?`,
          `How do you move from a "chat" to a "finished product" using Claude's specific features?`
        ]
      }
    ]
  },
  {
    id: "course-3-gemini",
    title: "Google Gemini",
    sections: [
      {
        sectionTitle: "Section 1: What Is Gemini? Google's AI Ecosystem Explained",
        concept: `**Gemini** is the name for Google’s most powerful AI. You might remember an older version called "Bard," but Gemini is a complete upgrade. It is built by Google DeepMind, their top-tier AI research lab. Gemini isn't just a website; it is being woven into the fabric of the entire Google ecosystem—including Google Search, Gmail, Google Docs, and Android phones. Its goal is to be a "universal assistant" that understands text, code, images, and even video.`,
        scenario: `Imagine you have a personal assistant who has worked at Google for 20 years. They know exactly how to search the web, they can read your spreadsheets, and they can find that one specific email you lost three months ago. That is Gemini—it’s an AI with a "Google brain."`,
        exercise: `Open [gemini.google.com](https://gemini.google.com/?authuser=1).\n\n*Prompt: "What are the top three things you can do that a standard Google search cannot?"*\n\nNotice how it explains its ability to synthesize information rather than just giving you a list of links.`,
        knowledgeCheck: [
          `What was the previous name of Google’s AI before it became Gemini?`,
          `True or False: Gemini is a separate company from Google.`
        ]
      },
      {
        sectionTitle: "Section 2: Gemini vs. The Others — An Honest Comparison",
        concept: `Gemini’s biggest advantage is **Integration** and **Information**.\n\n* **Where it leads:** It is the fastest at searching the live web. It has a massive "context window," meaning it can process huge amounts of data at once. Its integration with Google Workspace (Gmail, Docs, Drive) is a total game-changer for productivity.\n* **Where it lags:** It can sometimes be "over-cautious," refusing to answer questions it deems sensitive. Its creative writing often feels a bit more generic or "corporate" compared to Claude’s more human touch.\n* **The Game-Changer:** For many users, the ability to say "Find the flight details in my email and add them to a summary" is the reason to choose Gemini over anything else.`,
        scenario: `Think of ChatGPT as a smart friend, Claude as a professional writer, and Gemini as a **High-Speed Librarian**. The librarian might not write the most poetic poem, but they can find any book in the building and summarize the last ten years of news in seconds.`,
        exercise: `Let's test its speed and web-searching ability.\n\n*Prompt: "What are the 3 most recent scientific breakthroughs in wellness or relaxation from the last 48 hours? Provide the names of the sources."*`,
        knowledgeCheck: [
          `Which AI tool is generally best for searching real-time, current information from the web?`,
          `What is the main reason a heavy Google user (Gmail, Drive) might prefer Gemini?`
        ]
      },
      {
        sectionTitle: "Section 3: Multimodal Magic — Working with Text, Images, and More",
        concept: `"Multimodal" is a fancy way of saying Gemini was built from the ground up to understand more than just words. It can "see" images and "watch" videos. On the free tier, you can upload a photo and ask Gemini to explain it, or you can give it a link to a YouTube video and ask it to summarize the key points so you don't have to watch the whole thing.`,
        scenario: `Imagine you’re watching a 20-minute video about "The Science of 4-7-8 Breathing" for your YouTube channel, but you're in a rush. You can give the link to Gemini and ask, "What are the 5 specific health benefits mentioned in this video?" It "watches" the video for you and gives you the notes.`,
        exercise: `Find a YouTube video link (maybe a tutorial or a news clip).\n\n*Prompt: "Here is a YouTube link: \\[Paste Link\\]. Please give me a 3-bullet point summary of the most important information in this video."*`,
        knowledgeCheck: [
          `What does the term "multimodal" mean in the context of AI?`,
          `Can Gemini summarize a YouTube video if you provide the link?`
        ]
      },
      {
        sectionTitle: "Section 4: Gemini Inside Google Workspace — Docs, Gmail, and Sheets",
        concept: `Gemini has "Extensions." When enabled, you can use the @ symbol to "call" other Google apps into your chat. For example, typing @Gmail lets Gemini search your inbox. This is the "Everyday AI Usage" at its peak—using AI to manage your own personal information rather than just general knowledge from the internet.`,
        scenario: `You need to find a specific instruction your sister Terry sent you about feeding your cat, Tobi. Instead of scrolling through weeks of messages or emails, you can ask Gemini: @Gmail find the email from Terry about Tobi's feeding schedule and tell me how many scoops of food he needs.`,
        exercise: `(Note: You may need to enable "Extensions" in Gemini settings first).\n\n*Prompt: "@Google Drive what are the main themes of my most recent document?"* or *@Gmail find my most recent receipt for a digital subscription."*`,
        knowledgeCheck: [
          `What symbol do you type in the chat to use a Google Extension like Gmail or Drive?`,
          `Do you have to copy and paste your emails into Gemini for it to read them, or can it access them directly with Extensions?`
        ]
      },
      {
        sectionTitle: "Section 5: Deep Research and Real-Time Web Access",
        concept: `Gemini is connected to Google Search. When it gives you an answer, you will often see a small Google "G" icon at the bottom. This is the **Double-Check** button. Clicking it will make Gemini search the web to verify its own statements. It will highlight parts of the answer in green (verified) or red (could not be verified), which is a powerful way to combat AI hallucinations.`,
        scenario: `You are researching a new "bridging funnel" strategy for your business. Gemini gives you a detailed explanation. To be safe, you hit the "Double-Check" button. It highlights the text and shows you the actual marketing blogs and articles it used to confirm those facts.`,
        exercise: `*Prompt: "Explain the current state of the 'Reselling' market in California for 2026\\. What are the top 3 trends?"*\n\nAfter it responds, click the **"Double-check response"** (the Google 'G' icon) and see how it verifies the data.`,
        knowledgeCheck: [
          `What does the "Double-Check" button (the 'G' icon) do?`,
          `If Gemini highlights a sentence in green after a double-check, what does that mean?`
        ]
      },
      {
        sectionTitle: "Section 6: Prompt Engineering for Gemini's Strengths",
        concept: `Gemini thrives on **Task-Oriented** prompts. Because it is so fast, it is great for "Iterative Brainstorming." It also responds very well to "Constraints." If you tell it exactly how you want information formatted (like a table or a list of steps), it is incredibly efficient at organizing messy data.`,
        scenario: `You want to plan a 7-day content push for social media. Instead of asking for "some ideas," you give Gemini a table format. You ask for "Date, Platform, Topic, and Call to Action." Gemini’s speed allows it to generate this entire table in a heartbeat.`,
        exercise: `Try a structural prompt:\n\n*Prompt: "I need to organize a 7-day social media schedule for a funnel-building service. Create a table with these columns: Day, Topic, Image Idea, and Caption Hook."*`,
        knowledgeCheck: [
          `Why is Gemini particularly good for brainstorming and organizing data into tables?`,
          `True or False: Gemini works best when you give it vague, open-ended questions.`
        ]
      },
      {
        sectionTitle: "Section 7: Putting It Together — Building a Real Workflow",
        concept: `The "Google Power Workflow" looks like this:\n\n1. **Research:** Use Gemini to search the live web for a topic.\n2. **Verify:** Use the Double-Check button to ensure accuracy.\n3. **Execute:** Ask Gemini to draft a document or email based on that research.\n4. **Export:** Use the "Export to Docs" or "Draft in Gmail" button to move the AI’s work into your actual workspace with one click.`,
        scenario: `You are creating a script for your "Clarity in Calm" channel about morning light resets.\n\n1. You ask Gemini to research the scientific benefits of morning sunlight.\n2. You verify the facts.\n3. You ask Gemini to "Write a 5-minute video script based on this."\n4. You click the **"Export to Docs"** button at the bottom of the response, and suddenly your script is a Google Doc, ready for final edits.`,
        exercise: `*Prompt: "Write a short professional bio for a digital strategist based in Lake Forest, California."*\n\nOnce it generates the bio, look for the **Share** icon (it looks like a paper airplane or "Export") and select **"Export to Docs."** Go check your Google Docs to see it there\\!`,
        knowledgeCheck: [
          `What is the benefit of the "Export to Docs" button?`,
          `Describe the 4-step "Google Power Workflow."`
        ]
      }
    ]
  },
  {
    id: "course-4-perplexity",
    title: "Perplexity AI",
    sections: [
      {
        sectionTitle: "Section 1: What Is Perplexity? The AI Search Engine Explained",
        concept: `Perplexity is what happens when you combine a search engine (like Google) with an AI (like ChatGPT). In a traditional search, you type a keyword and get ten blue links; then *you* have to do the work of reading them. In Perplexity, you ask a question, the AI searches the live internet for you, reads the top results, and writes a concise summary of the answer. Most importantly, it includes small numbers (citations) that link directly to the websites it used as sources.`,
        scenario: `Imagine you are trying to find the best Linux-compatible video editing software for a Chromebook. Instead of clicking on five different "Top 10" blogs and dodging ads, you ask Perplexity. It scans the latest forums and tech reviews, tells you the top three options, and provides links to the specific download pages or reddit threads it found.`,
        exercise: `Open [perplexity.ai](https://www.perplexity.ai/).\n\n*Prompt: "What are the current trending wellness topics on YouTube for 2026?"*\n\nNotice how it lists the topics and immediately shows you the websites it used to find that information.`,
        knowledgeCheck: [
          `Does Perplexity give you a list of links to click, or does it write out an answer for you?`,
          `What are the small numbers next to the text in a Perplexity answer called?`
        ]
      },
      {
        sectionTitle: "Section 2: Perplexity vs. The Others — An Honest Comparison",
        concept: `Perplexity has a very different "vibe" than ChatGPT or Claude.\n\n* **Where it wins:** **Fact-finding and Accuracy.** It is the best tool for "Is this true?" or "Find me a source for this." It rarely hallucinates because its answers are grounded in real-time web results. It is also completely free of the "chatty" filler words often found in ChatGPT.\n* **Where it falls short:** **Creative Writing.** Perplexity is not a poet or a storyteller. If you ask it to write a 10-minute video script or a heartfelt email, the result will likely feel dry and robotic.\n* **Who benefits most:** Researchers, fact-checkers, students, and business owners who need to verify technical details or market trends.`,
        scenario: `If you need to write a science-backed script for a relaxation channel, you use Perplexity to find the *facts* (e.g., "What does the 4-7-8 technique do to the heart rate?"). Once you have those facts, you take them over to Claude or ChatGPT to write the actual *script*. Perplexity provides the "bones," while other AIs provide the "soul."`,
        exercise: `Let's test its "dryness."\n\n*Prompt: "Explain the history of Lake Forest, California in 3 sentences."*\n\nCompare this to how ChatGPT might answer; you'll notice Perplexity gets straight to the point with zero fluff.`,
        knowledgeCheck: [
          `Which is Perplexity better at: writing a fictional story or finding the latest news?`,
          `Why is Perplexity less likely to "make things up" (hallucinate) than other AI tools?`
        ]
      },
      {
        sectionTitle: "Section 3: How Perplexity Cites Sources — and Why That Matters",
        concept: `The most important feature of Perplexity is **Transparency**. Every claim the AI makes is backed up by a citation. If the AI says, "Morning light exposure improves sleep by 20%," there will be a small \\[1\\] next to that sentence. Clicking that \\[1\\] takes you to the specific study or article. This allows you to verify the AI's work instantly, which is vital for building trust in your own content or business decisions.`,
        scenario: `You are building a sales funnel and want to include a statistic about how much automation saves small businesses. If you just "guess" or use a generic AI, you might be wrong. With Perplexity, you get the stat *and* the link to the Forbes or Harvard Business Review article that proved it. You can then link that source in your funnel to build authority with your clients.`,
        exercise: `*Prompt: "What is the specific scientific reason why 'Morning Light Resets' help with circadian rhythms? Give me at least 3 cited sources."*\n\nClick on the source icons at the top or the citations in the text to see where the info came from.`,
        knowledgeCheck: [
          `How do you verify that Perplexity isn't just making something up?`,
          `Where can you find the list of websites the AI read to generate your answer?`
        ]
      },
      {
        sectionTitle: "Section 4: Using Spaces — Organizing Research by Topic",
        concept: `**Spaces** are Perplexity’s version of folders. A Space allows you to group related searches together. For example, you could have a "Clarity in Calm Research" Space and a "Sales Funnel Projects" Space. When you search inside a specific Space, you can give the AI "Instructions" (similar to Custom Instructions in ChatGPT) that apply to every search in that folder.`,
        scenario: `You’re researching reselling automation. You create a Space called "Reselling Tech." You set the instructions to: "Always look for sources from 2025 and 2026, and focus on Linux-based tools." Now, every time you ask a question in that Space, Perplexity already knows your preferences and filters out old or irrelevant information.`,
        exercise: `(On a computer) Look for "Library" or "Spaces" in the sidebar. Create a new Space called "Personal Research."\n\n*Prompt (inside the Space): "Find the best high-quality B-roll websites for faceless YouTube channels."*`,
        knowledgeCheck: [
          `What is a "Space" in Perplexity?`,
          `How do "Instructions" inside a Space help you save time?`
        ]
      },
      {
        sectionTitle: "Section 5: Pro Search vs. Quick Search — Knowing When to Use Each",
        concept: `Perplexity has two modes:\n\n* **Quick Search (Standard):** Fast, straightforward, and uses fewer resources. Best for simple questions like "What is the weather in Lake Forest?"\n* **Pro Search:** This mode is a "Deep Diver." When you turn on Pro Search, the AI will often ask *you* clarifying questions before it starts searching. It performs multiple searches at once to give you a comprehensive, multi-perspective report. On the free tier, you get a limited number of Pro searches every few hours.`,
        scenario: `* **Quick:** "What time is the sunset today?"\n* **Pro:** "Help me plan a 7-day content strategy for a new wellness brand. Ask me whatever questions you need to make it specific to my audience." (The AI will then ask about your niche, your goals, and your style before giving the final answer).`,
        exercise: `Toggle the **"Pro"** switch in the search bar.\n\n*Prompt: "What is the most efficient way to set up a bridging funnel for an affiliate product in 2026?"*\n\nNotice how the AI "thinks" through the steps and might ask you for more details.`,
        knowledgeCheck: [
          `Which mode should you use if you have a complex, multi-step research project?`,
          `Does Pro Search ever ask you questions back, or does it just give an answer immediately?`
        ]
      },
      {
        sectionTitle: "Section 6: Prompt Engineering for Perplexity's Strengths",
        concept: `In ChatGPT, you use prompts to "generate." In Perplexity, you use prompts to **"filter."** The best Perplexity prompts include specific requirements for the *types* of sources you want. You should tell the AI where to look (e.g., "Look for Reddit threads," "Look for academic papers," or "Search recent news"). This keeps the results focused on high-quality data.`,
        scenario: `If you are looking for tech support for your Chromebook's Linux terminal, a general search might give you old articles. A "Filtered" prompt would be: *"Search for recent (past 6 months) forum posts on r/Crostini regarding VS Code installation errors. Summarize the top 3 solutions."*`,
        exercise: `*Prompt: "Find recent reviews from 2025 or 2026 for the best budget-friendly microphones for voiceovers. Focus on reviews from actual tech bloggers, not just Amazon listings."*`,
        knowledgeCheck: [
          `Instead of "writing" prompts, what is the main goal of a Perplexity prompt?`,
          `Why is it helpful to tell Perplexity which websites (like Reddit or news sites) to prioritize?`
        ]
      },
      {
        sectionTitle: "Section 7: Putting It Together — Building a Real Research Workflow",
        concept: `A Perplexity research workflow is about moving from a **Question** to a **Verified Report**.\n\n1. **The Query:** Ask a complex question using Pro Search.\n2. **The Clarification:** Answer any follow-up questions the AI asks.\n3. **The Source Check:** Click the citations to make sure the websites are trustworthy.\n4. **The Collection:** Save the answer to a "Space" so you can refer back to the facts when you are ready to create your content or build your business strategy.`,
        scenario: `You want to create a video about the "4-7-8 Breathing Technique."\n\n1. You use Perplexity to find the medical studies backing it up.\n2. You check the sources to ensure they are from real doctors or universities.\n3. You use the "Related" questions at the bottom of the page to find even more interesting facts (like "Is it safe for everyone?").\n4. You copy these facts and the source links into your script-writing tool.`,
        exercise: `Ask a question about a hobby or business interest. Once you get the answer, scroll to the bottom and click on one of the **"Related"** search suggestions to see how you can "follow the rabbit hole" of information.`,
        knowledgeCheck: [
          `What is the very first step in a Perplexity research workflow?`,
          `Where can you find "Related" questions to help you dig deeper into a topic?`
        ]
      }
    ]
  },
  {
    id: "course-5-human",
    title: "The Human in the Loop — Safety, Ethics, and the Future",
    sections: [
      {
        sectionTitle: "Section 1: The Integrated AI Brain — Choosing the Right Tool",
        concept: `Now that you’ve met the "Big Four," the most important skill is knowing which one to wake up for which task.\n\n* **Perplexity** finds the facts.\n* **Claude** polishes the prose.\n* **ChatGPT** handles the logic and logic-heavy tasks.\n* **Gemini** connects your research to your Google life.\n* Building an "AI Brain" isn't about using one tool for everything; it's about building a workflow where these tools pass the baton to each other.`,
        scenario: `Imagine you are building a sales funnel. You use **Perplexity** to find the latest stats on your industry. You take those stats to **ChatGPT** to help you brainstorm the "hook" and the strategy. You then give that strategy to **Claude** to write the actual landing page copy so it sounds human and warm. Finally, you use **Gemini** to draft the follow-up emails and save them directly into your Google Workspace.`,
        exercise: `Think of a project you want to start. Write down which AI tool you would use for the **Research** phase, the **Drafting** phase, and the **Polishing** phase.`,
        knowledgeCheck: [
          `Which tool would you use if you need a "human-sounding" rewrite of a dry email?`,
          `Which tool is best for verifying a news story that happened this morning?`
        ]
      },
      {
        sectionTitle: "Section 2: Privacy and Security — The \"Public Bulletin Board\" Rule",
        concept: `Unless you are using a specialized "Enterprise" or "Team" account, you should assume that anything you type into an AI might be used to train future versions of that AI. This means you should never "leak" sensitive information. A good rule of thumb: **Never tell an AI something you wouldn't feel comfortable posting on a public bulletin board.**`,
        scenario: `You are a sales funnel creator. You receive a document from a client that contains their home address, private phone number, and a secret list of their top 100 customers. You want the AI to summarize it. **Do not** upload the original file. Instead, delete the personal names and addresses first, or ask the AI to "Write a summary of a generic client list" without providing the actual sensitive data.`,
        exercise: `Review your recent chats. Did you mention any passwords, bank details, or full names of people who haven't given you permission to share their info? Practice "Anonymizing" a prompt by replacing a real name with "Client A" or "Business X."`,
        knowledgeCheck: [
          `Why should you avoid putting private company secrets or personal ID numbers into a standard AI chat?`,
          `What is the "Public Bulletin Board" rule?`
        ]
      },
      {
        sectionTitle: "Section 3: AI Hallucinations & The \"Human-in-the-Loop\"",
        concept: `As we've learned, AI is a prediction engine, not a "Truth Engine." Even the best AI can be "confidently wrong." The **Human-in-the-Loop** (HITL) principle means that no AI output should ever go directly to a customer, a boss, or a public website without a human "sanity check." You are the pilot; the AI is the autopilot. The autopilot is great for the long stretches, but the pilot must be awake for the landing.`,
        scenario: `You ask an AI to find three scientific studies on the "4-7-8 breathing technique." It gives you three perfect-looking citations. Before you put them in your YouTube description, you click the links or search for the titles on Google. You discover that one of the "doctors" it cited doesn't actually exist. You catch the error and remove it. You just saved your brand's reputation.`,
        exercise: `Find a fact the AI gave you in an earlier course. Use a standard search engine (or Perplexity) to find the original source of that fact to confirm it is 100% accurate.`,
        knowledgeCheck: [
          `What does "Human-in-the-Loop" mean?`,
          `Who is legally and professionally responsible if an AI generates a false statement that you then publish?`
        ]
      },
      {
        sectionTitle: "Section 4: Copyright and Legality — Who Owns the Output?",
        concept: `The legal world is still catching up to AI, but here is the current standard: In many places (including the US), **AI-generated content cannot be copyrighted.** This means if you use an AI to write a book or create an image, you might not "own" that work in the same way you'd own a hand-drawn painting. Additionally, you must be careful not to ask the AI to create something that infringes on someone else's trademark (like asking for a "Mickey Mouse" logo).`,
        scenario: `You use AI to generate a "faceless" video script and a beautiful AI image for your channel. Because you didn't write every word or draw the image, a competitor could technically "copy" that specific image or script, and it might be hard for you to sue them for copyright. However, if you *heavily edit* the script and add your own unique voice and layout, it becomes a "human-made" work that you can protect.`,
        exercise: `Open your AI and ask: *"What are the current laws regarding the copyright of AI-generated text and images in my country?"* Use Perplexity for this to ensure the answer is up-to-date for 2026\\.`,
        knowledgeCheck: [
          `True or False: In the US, a work created entirely by an AI with no human editing can currently be copyrighted.`,
          `Why is it important to "heavily edit" or add your own "human touch" to AI content?`
        ]
      },
      {
        sectionTitle: "Section 5: Bias and Ethics — The Mirror Effect",
        concept: `AI is trained on the internet, and the internet contains biases (unfair prejudices about race, gender, age, or culture). Because AI is "pattern matching," it can accidentally repeat those biases. For example, if you ask an AI to "draw a picture of a CEO," it might only show you men in suits because that is the most common pattern it saw in its training data. Being an ethical AI user means being aware of these "blind spots."`,
        scenario: `You are creating a "Clarity in Calm" video about wellness. You ask the AI for "A list of people who are famous for their wisdom." If the AI only gives you names from one specific country or culture, you should recognize that bias and intentionally ask: "Can you give me a more diverse list that includes perspectives from the East, West, and Global South?"`,
        exercise: `*Prompt: "Describe a 'typical' software engineer."*\n\nLook at the description. Does it fall into stereotypes? Now ask: *"Rewrite that description to be more inclusive and diverse."* Notice the difference.`,
        knowledgeCheck: [
          `Why does AI sometimes show bias or stereotypes?`,
          `How can you, as the user, fix a biased AI response?`
        ]
      },
      {
        sectionTitle: "Section 6: AI and the Future of Work — Evolve or Stagnate",
        concept: `AI is not going to replace humans, but **humans who use AI will replace humans who don't.** The goal of this guide wasn't to turn you into a computer programmer, but to turn you into an "AI Orchestrator." By automating the "boring" parts of your work (summarizing, drafting, organizing), you free up your brain for the "high-value" parts: strategy, empathy, and creative vision.`,
        scenario: `Two people want to start a reselling business. Person A spends 5 hours a day manually writing descriptions and searching for prices. Person B uses AI to write the descriptions in seconds and Perplexity to find the prices. Person B uses the 4.5 hours they saved to talk to customers and find better products. Person B’s business grows 10x faster because they used AI as a "leverage" tool.`,
        exercise: `Identify one "human-only" skill you have (like empathy, salesmanship, or deep life experience). How can you use AI to handle the "grunt work" so you can spend 80% of your time on that one skill?`,
        knowledgeCheck: [
          `Does AI "replace" your need to think, or does it change *what* you need to think about?`,
          `What is an "AI Orchestrator"?`
        ]
      },
      {
        sectionTitle: "Section 7: Building Your \"Daily AI Habit\" — The Conclusion",
        concept: `The "AI Brain" only works if you keep it active. This technology moves faster than anything in history. To stay ahead, you don't need to spend hours studying; you just need to keep a "Curiosity First" mindset. Every time you face a tedious task, ask yourself: *"Could an AI help me with the first 50% of this?"* This concludes our guide—you now have the foundations to navigate the AI era with confidence.`,
        scenario: `You wake up and have a mountain of unread emails. Instead of feeling overwhelmed, you remember your "Daily AI Habit." You use Gemini to summarize the threads, ChatGPT to draft the replies, and you spend your morning in "Calm," knowing you've mastered the tools of the future.`,
        exercise: `Commit to one "AI Experiment" this week. Use one of the four tools to solve a problem you usually do manually. Congratulations on completing the course\\!`,
        knowledgeCheck: [
          `What is the "Curiosity First" mindset in AI?`,
          `What is the single most important question to ask yourself when faced with a boring or repetitive task?`
        ]
      }
    ]
  }
];
