export default [
  {
    name: "Blog Title Generator",
    description:
      "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    prompt:
      "Generate 5 unique and engaging blog title ideas based on the given niche and outline. Ensure the titles are **catchy, SEO-friendly, and compelling**. Output the results in bullet points inside a rich text editor.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content Generator",
    description:
      "An AI tool that generates high-quality blog content based on your topic and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    prompt:
      "Write a detailed and **well-structured** blog post based on the provided topic and outline. Ensure the content is **engaging, informative, and optimized for readability**. Format the output in rich text with headings, subheadings, and bullet points where necessary.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas Generator",
    description:
      "An AI tool that generates creative and engaging blog topic ideas based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    prompt:
      "Generate 5 unique blog topic ideas based on the given niche. Ensure the topics are **trendy, attention-grabbing, and suitable for SEO**. Output the results in bullet points inside a rich text editor.",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Title Generator",
    description:
      "An AI tool that generates high-ranking, SEO-optimized YouTube titles.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    prompt:
      "Generate **5 highly engaging, click-worthy, and SEO-optimized** YouTube video titles based on the given keywords and outline. Ensure the titles are designed for high ranking and audience engagement. Format the output using HTML tags for better readability.",
    form: [
      {
        label: "Enter your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter YouTube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    description:
      "An AI tool that generates engaging and concise YouTube video descriptions.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    prompt:
      "Generate a **concise, engaging, and keyword-rich** YouTube video description based on the provided topic and outline. Use **emojis and formatting** to enhance readability. The description should be between **4-5 lines** and formatted in a rich text editor.",
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Article Rewriter (Plagiarism-Free)",
    description:
      "Use this tool to rewrite existing articles or blog posts to make them plagiarism-free while maintaining quality.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    prompt:
      "Rewrite the given article while **maintaining its original meaning** but making it **plagiarism-free, AI-detection safe, and naturally written**. Ensure the text remains engaging and well-structured. Format the output in a rich text editor.",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    description: "An AI model that generates programming code in any language.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    prompt:
      "Generate a **well-structured, efficient, and optimized** code snippet based on the given description and programming language. Ensure proper syntax and best coding practices. Output the code inside a formatted code block.",
    form: [
      {
        label:
          "Enter a description of the code you want, along with the programming language",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    description:
      "This AI tool analyzes your code, identifies bugs, and provides solutions.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding",
    slug: "code-bug-detector",
    prompt:
      "Analyze the given code, identify any **errors or bugs**, and provide **a detailed explanation** of the issue along with an optimized solution. Format the response in a rich text editor with a structured breakdown inside a formatted code block.",
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
      "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
    slug: "tagline-generator",
    prompt:
      "Generate **5-10 catchy and memorable** taglines based on the given brand name and product description. Ensure the taglines are **creative, engaging, and aligned with the brand identity**. Output the results in a rich text editor.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketing",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    description:
      "This AI tool creates compelling, SEO-friendly product descriptions for e-commerce.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    prompt:
      "Generate a **concise, compelling, and SEO-optimized** product description based on the given product name and details. Ensure it is **engaging and persuasive** to encourage conversions. Format the output in a rich text editor.",
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
