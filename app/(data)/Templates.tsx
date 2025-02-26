export const CategoryColors = {
  'Blog': 'bg-blue-100 text-blue-800',
  'Content Creation': 'bg-green-100 text-green-800',
  'Language & Writing': 'bg-purple-100 text-purple-800',
  'Coding': 'bg-orange-100 text-orange-800',
  'Business & Marketing': 'bg-pink-100 text-pink-800',
  'Business Communication': 'bg-indigo-100 text-indigo-800',
  'Career Development': 'bg-violet-100 text-violet-800',
  'Social Media': 'bg-cyan-100 text-cyan-800',
  'Technical Writing': 'bg-amber-100 text-amber-800',
  'Productivity': 'bg-emerald-100 text-emerald-800',
  'Rewriting Tool': 'bg-red-100 text-red-800'
} as const;

export default [
  {
    name: "Blog Title Generator",
    description:
      "Generate compelling and SEO-friendly blog titles tailored to your niche and content outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    prompt:
      "Generate **5 unique and attention-grabbing** blog title ideas based on the provided niche and outline. Titles should be **SEO-friendly, engaging, and designed for high click-through rates**. Output results as a bullet list. **Avoid generic introductions or conclusions**.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content Generator",
    description:
      "Create high-quality, well-structured blog content based on your topic and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    prompt:
      "Write a **detailed, well-researched, and engaging** blog post based on the given topic and outline. Format with **proper spacing, paragraphs, bold highlights, and bullet points** for optimal readability. Use **descriptive subheadings and consistent formatting**. **Start directly with the content**. Output in plain text with markdown formatting.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas Generator",
    description:
      "Generate trending and engaging blog topic ideas tailored to your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    prompt:
      "Generate **5 unique, trending, and SEO-optimized** blog topic ideas based on the given niche. Topics should be **engaging, relevant, and structured to attract readers**. Output results as a bullet list. **Skip any introductory or concluding statements**.",
    form: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Title Generator",
    description:
      "Create engaging, click-worthy, and SEO-optimized YouTube video titles.",
    category: "Content Creation", // Updated category
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    prompt:
      "Generate **5 high-converting, attention-grabbing, and SEO-optimized** YouTube video titles based on the given keywords and outline. Titles should maximize **click-through rates and ranking potential**. Output results as a bullet list.",
    form: [
      {
        label: "Enter your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter YouTube video description outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    description:
      "Generate compelling and keyword-rich YouTube video descriptions with proper formatting.",
    category: "Content Creation", // Updated category
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    prompt:
      "Write a **concise, engaging, and keyword-rich** YouTube video description. Use **strategic line breaks**, **relevant emojis**, and **organized sections** for better readability. Format with: ▶️ Main Hook, 📝 Key Points, 🔗 Links, #️⃣ Tags. Keep it between **4-5 lines**. **Start with key information**. Output in plain text.",
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube video description outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Article Rewriter (Plagiarism-Free)",
    description:
      "Rewrite any article while keeping the original meaning intact and making it plagiarism-free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    prompt:
      "Rewrite the given article **while maintaining its original meaning but making it plagiarism-free and AI-detection safe**. Ensure it remains **engaging, well-structured, and easy to read**. Avoid generic introductory or concluding remarks. Output in plain text.",
    form: [
      {
        label: "Provide the article/blog post to rewrite",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Translator",
    description: "Translate text between different languages with ease.",
    category: "Language & Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/8361/8361117.png",
    slug: "text-translator",
    prompt:
      "Translate the provided text from the **source language** to the **target language**. Ensure the translation is accurate, maintains the original meaning, and is natural. Output the translated text in plain text.",
    form: [
      {
        label: "Enter text to translate",
        field: "textarea",
        name: "text",
        required: true,
      },
      {
        label: "Source Language",
        field: "input",
        name: "sourceLanguage",
        required: true,
      },
      {
        label: "Target Language",
        field: "input",
        name: "targetLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    description:
      "Generate efficient and well-structured code snippets in any programming language.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    prompt:
      "Generate a **clean, efficient, and optimized** code snippet based on the given description and programming language. Follow **best coding practices** and provide a **short explanation if necessary**. Output inside a properly formatted code block.",
    form: [
      {
        label: "Describe the code you need (include programming language)",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    description:
      "Analyze and debug code by identifying errors and providing optimized solutions.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding",
    slug: "code-bug-detector",
    prompt:
      "Analyze the given code and **identify any errors, bugs, or inefficiencies**. Provide a **detailed explanation** of the issue and an **optimized solution**. Output in a structured format with a code block.",
    form: [
      {
        label: "Enter the code you want to debug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    description:
      "Generate unique, catchy, and brand-aligned taglines for your business or product.",
    category: "Business & Marketing", // Updated category
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    slug: "tagline-generator",
    prompt:
      "Generate **5-10 creative, memorable, and brand-aligned** taglines based on the given product/brand details. Ensure they are **engaging, unique, and resonate with the target audience**. Output results as a bullet list.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Describe the product/service",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    description:
      "Create persuasive and SEO-optimized product descriptions for e-commerce and marketing.",
    category: "Business & Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    slug: "product-description",
    prompt:
      "Generate a **compelling, SEO-friendly, and persuasive** product description based on the given product name and details. Ensure it is **engaging, clear, and optimized for conversions**. Avoid unnecessary introduction or conclusion. Output in plain text.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Email Response Generator",
    description:
      "Craft professional and contextual email responses in seconds.",
    category: "Business Communication",
    icon: "https://cdn-icons-png.flaticon.com/128/2165/2165347.png",
    slug: "email-response",
    prompt:
      "Generate a **professional, contextually appropriate, and well-structured** email response. The tone should be **{tone}** and the response should be **concise yet comprehensive**. Include appropriate greeting and closing. **Avoid unnecessary pleasantries or filler sentences**. Format with proper spacing and paragraphs.",
    form: [
      {
        label: "Paste the email you're responding to",
        field: "textarea",
        name: "originalEmail",
        required: true,
      },
      {
        label: "Enter tone",
        field: "input",
        name: "tone",
        required: true,
      },
      {
        label: "Additional context (optional)",
        field: "textarea",
        name: "context",
      },
    ],
  },
  {
    name: "Resume Bullet Points",
    description:
      "Transform job responsibilities into powerful resume achievements.",
    category: "Career Development",
    icon: "https://cdn-icons-png.flaticon.com/128/9119/9119108.png",
    slug: "resume-bullets",
    prompt:
      "Transform the given job responsibilities into **powerful, achievement-focused bullet points** for a resume. Use **strong action verbs, quantifiable metrics, and highlight the impact**. Format: • [Action Verb] [Achievement] resulting in [Impact]. Output 3-5 optimized bullet points.",
    form: [
      {
        label: "Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "List your responsibilities/achievements",
        field: "textarea",
        name: "responsibilities",
        required: true,
      },
    ],
  },
  {
    name: "Meeting Summarizer",
    description:
      "Convert lengthy meeting transcripts into clear, actionable summaries.",
    category: "Business Communication",
    icon: "https://cdn-icons-png.flaticon.com/128/684/684930.png",
    slug: "meeting-summary",
    prompt:
      "Format the meeting transcript into clearly structured sections with bullet points, bold highlights, and precise wording for quick scanning.\n\n📌 Key Points – Summarize major topics discussed, performance insights, and strategic goals.\n⚡ Action Items – List responsibilities assigned to each person, with deadlines in bold and a 📅 emoji for visibility.\n✅ Decisions Made – Summarize confirmed choices, including budget allocations, strategies, and key initiatives.\n➡️ Next Steps – Clearly outline the upcoming meeting date and any follow-ups needed.\n\nEnsure all deadlines are in bold and marked with a 📅 emoji. Keep the tone professional and action-oriented. Avoid introductory phrases or explanations—deliver the structured summary directly and concisely.",
    form: [
      {
        label: "Paste meeting transcript/notes",
        field: "textarea",
        name: "transcript",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Calendar",
    description: "Generate a week's worth of engaging social media content.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/12822/12822791.png",
    slug: "social-calendar",
    prompt:
      "Generate a 7-day social media content calendar for {platform}. Each day should include post text, hashtags, and content type (image/video/poll/etc.). Ensure posts are engaging, platform-appropriate, and aligned with the brand voice. Format strictly as: Day 1: [Post text], Day 2: [Post text], etc. No filler sentences.",
    form: [
      {
        label: "Social Media Platform",
        field: "select",
        name: "platform",
        options: ["LinkedIn", "Twitter", "Instagram", "Facebook"],
        required: true,
      },
      {
        label: "Brand/Business Description",
        field: "textarea",
        name: "brandInfo",
        required: true,
      },
      {
        label: "Content Goals/Theme",
        field: "input",
        name: "contentGoals",
        required: true,
      },
    ],
  },
  {
    name: "Technical Documentation",
    description:
      "Create clear, user-friendly technical documentation and guides.",
    category: "Technical Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/12422/12422859.png",
    slug: "tech-docs",
    prompt:
      "Generate **clear, well-structured technical documentation** for the specified feature/process. Include **Overview**, **Prerequisites**, **Step-by-Step Guide**, **Common Issues**, and **Troubleshooting**. Use **clear headings, code examples where relevant, and explain technical terms**. **Start directly with content and avoid unnecessary introductions or conclusions**.",
    form: [
      {
        label: "Feature/Process Name",
        field: "input",
        name: "featureName",
        required: true,
      },
      {
        label: "Technical Details",
        field: "textarea",
        name: "technicalDetails",
        required: true,
      },
      {
        label: "Target Audience Level",
        field: "select",
        name: "audienceLevel",
        options: ["Beginner", "Intermediate", "Advanced"],
        required: true,
      },
    ],
  },
  {
    name: "API Documentation",
    description: "Generate comprehensive API endpoint documentation.",
    category: "Technical Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/9748/9748663.png",
    slug: "api-docs",
    prompt:
      "Create **detailed API endpoint documentation** including **Endpoint Description**, **Request/Response Format**, **Parameters**, **Authentication Requirements**, and **Example Usage**. Include both **successful and error responses**. Format in a clear, technical style with code blocks. **Skip introductory phrases like 'Here's the documentation' or 'In this guide'**.",
    form: [
      {
        label: "Endpoint Details",
        field: "textarea",
        name: "endpointDetails",
        required: true,
      },
      {
        label: "Authentication Method",
        field: "input",
        name: "authMethod",
        required: true,
      },
      {
        label: "Sample Request/Response",
        field: "textarea",
        name: "sampleData",
        required: true,
      },
    ],
  },
  {
    name: "Error Message Translator",
    description:
      "Convert technical error messages into user-friendly explanations.",
    category: "Technical Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2581/2581801.png",
    slug: "error-translator",
    prompt:
      "Transform the technical error message into a **user-friendly explanation** with **clear steps to resolve**. Include: 1) Simple explanation of what went wrong, 2) Why it happened, 3) Step-by-step solution, 4) Prevention tips. Use **non-technical language** and maintain a helpful tone. **Avoid phrases like 'Here's what happened' or 'Let me explain'**.",
    form: [
      {
        label: "Paste the error message",
        field: "textarea",
        name: "errorMessage",
        required: true,
      },
      {
        label: "Context (when/where error occurred)",
        field: "textarea",
        name: "context",
        required: true,
      },
    ],
  },
  {
    name: "Daily Planner",
    description:
      "Organize and plan your day effectively by setting tasks and priorities.",
    category: "Productivity",
    icon: "https://cdn-icons-png.flaticon.com/128/9206/9206851.png",
    slug: "daily-planner",
    prompt:
      "Create a **personalized, prioritized, and time-blocked daily plan** based on the given tasks and goals. Organize the day with time slots for each task 🕒 and include reminders for breaks 🛑. The plan should ensure **maximum productivity**, keeping the day balanced ⚖️ and efficient. **Start directly with the schedule**. Output in plain text with clear time blocks and emojis for better clarity. 🌟",
    form: [
      {
        label: "Enter your tasks for the day",
        field: "textarea",
        name: "tasks",
        required: true,
      },
      {
        label: "Enter your goals for the day (optional)",
        field: "textarea",
        name: "goals",
      },
    ],
  },
];
