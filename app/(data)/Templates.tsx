export default [
  {
    name: "Blog Title Generator",
    description:
      "Generate compelling and SEO-friendly blog titles tailored to your niche and content outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    prompt:
      "Generate **5 unique and attention-grabbing** blog title ideas based on the provided niche and outline. Titles should be **SEO-friendly, engaging, and designed for high click-through rates**. Output results as a bullet list.",
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
      "Write a **detailed, well-researched, and engaging** blog post based on the given topic and outline. Ensure the content is **structured with clear headings, subheadings, bullet points, and optimized for readability**. Avoid introductory and concluding filler phrases. Output in plain text.",
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
      "Generate **5 unique, trending, and SEO-optimized** blog topic ideas based on the given niche. Topics should be **engaging, relevant, and structured to attract readers**. Output results as a bullet list.",
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
    category: "YouTube Tools",
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
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    prompt:
      "Write a **concise, engaging, and keyword-rich** YouTube video description based on the given topic and outline. Use **emojis, line breaks, and formatting** for better readability. Keep it between **4-5 lines** for optimal engagement. Output in plain text.",
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
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
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
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
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
];
