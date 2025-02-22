export default [
  // ==================== BLOG ====================
  {
    name: "Blog Title Generator",
    description:
      "Generate attention-grabbing blog titles that are both SEO-friendly and highly engaging for your audience.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/8089/8089953.png",
    slug: "generate-blog-title",
    prompt:
      "Give me 5 unique and engaging blog titles in bullet points, based only on the provided blog niche. Ensure that the titles are SEO-friendly and reflect current trends. Return the result in rich text format.",
    form: [
      {
        label: "Enter your blog niche (e.g., tech, travel, fitness)",
        field: "input",
        name: "blog_niche",
        required: true,
      },
    ],
  },

  {
    name: "Blog Post Outline",
    description:
      "Generate a structured outline for your blog post to streamline your writing process and improve readability.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/13376/13376259.png",
    slug: "generate-blog-post-outline",
    prompt:
      "Create a detailed outline for a blog post on the topic of [provided topic]. The outline should include an introduction, key sections, and a conclusion. Make sure it is structured logically for readability and SEO.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "blog_topic",
        required: true,
      },
    ],
  },

  // ==================== CONTENT WRITING ====================
  {
    name: "Rewrite Article",
    description:
      "Instantly rewrite an article while keeping its original meaning intact. Improve clarity, readability, or SEO.",
    category: "Content Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/13942/13942018.png",
    slug: "rewrite-article",
    prompt:
      "Rewrite the following article while keeping its meaning intact. Improve readability, grammar, and SEO without changing the core message.",
    form: [
      {
        label: "Paste the article to rewrite",
        field: "textarea",
        name: "article_content",
        required: true,
      },
    ],
  },

  {
    name: "Listicle Generator",
    description:
      "Generate structured list-style content for blogs, social media, or articles to present ideas concisely.",
    category: "Content Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/4394/4394562.png",
    slug: "generate-listicle",
    prompt:
      "Create a well-structured listicle on [provided topic]. The list should be engaging, informative, and formatted for readability.",
    form: [
      {
        label: "Enter your listicle topic",
        field: "input",
        name: "listicle_topic",
        required: true,
      },
    ],
  },

  // ==================== SEO ====================
  {
    name: "Meta Description Generator",
    description:
      "Generate SEO-optimized meta descriptions for blog posts or webpages to improve search rankings.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/11701/11701221.png",
    slug: "generate-meta-description",
    prompt:
      "Generate a concise and SEO-optimized meta description (155-160 characters) for the following topic. Make sure it includes primary keywords and is attractive for search engine results.",
    form: [
      {
        label: "Enter your content or topic",
        field: "textarea",
        name: "content_topic",
        required: true,
      },
    ],
  },

  // ==================== SOCIAL MEDIA ====================
  {
    name: "Social Media Post Caption",
    description:
      "Generate catchy captions for social media posts to maximize engagement and reach.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/16823/16823329.png",
    slug: "generate-social-media-caption",
    prompt:
      "Generate 5 catchy and engaging social media captions for a post about [topic]. The captions should be concise, engaging, and suitable for platforms like Instagram, Twitter, or Facebook.",
    form: [
      {
        label: "Enter your content or topic",
        field: "input",
        name: "content_topic",
        required: true,
      },
    ],
  },

  {
    name: "Hashtag Generator",
    description:
      "Create a set of optimized hashtags for social media posts based on your topic or niche.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    slug: "generate-hashtags",
    prompt:
      "Generate 10 high-performing hashtags related to [provided topic]. Ensure they are optimized for engagement and reach on social media.",
    form: [
      {
        label: "Enter your content topic",
        field: "input",
        name: "hashtag_topic",
        required: true,
      },
    ],
  },

  // ==================== VIDEO ====================
  {
    name: "YouTube Description Generator",
    description:
      "Generate engaging and keyword-rich YouTube descriptions to boost video SEO and attract more viewers.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    slug: "generate-youtube-description",
    prompt:
      "Create a compelling and SEO-optimized YouTube video description for [provided video title]. Include a strong hook, video summary, relevant keywords, and a call-to-action.",
    form: [
      {
        label: "Enter your video title or topic",
        field: "input",
        name: "video_title",
        required: true,
      },
    ],
  },

  // ==================== BRANDING ====================
  {
    name: "Slogan Generator",
    description:
      "Generate catchy and memorable slogans for brands, businesses, or marketing campaigns.",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/18131/18131275.png",
    slug: "generate-slogan",
    prompt:
      "Create 5 catchy and memorable slogans for [brand name or product]. Ensure they reflect the brand's identity and are easy to remember.",
    form: [
      {
        label: "Enter the brand or product name",
        field: "input",
        name: "brand_name",
        required: true,
      },
    ],
  },

  {
    name: "Tagline Generator",
    description:
      "Generate unique and impactful taglines that reinforce brand identity and resonate with the target audience.",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/16871/16871407.png",
    slug: "generate-tagline",
    prompt:
      "Create 5 impactful and memorable taglines for [brand or product]. Ensure they are concise and aligned with the brand's vision.",
    form: [
      {
        label: "Enter the brand or product name",
        field: "input",
        name: "brand_name",
        required: true,
      },
    ],
  },

  // ==================== MARKETING ====================
  {
    name: "Call-to-Action (CTA) Generator",
    description:
      "Generate compelling calls-to-action for landing pages, ads, or email campaigns to increase conversions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4321/4321132.png",
    slug: "generate-cta",
    prompt:
      "Generate 5 powerful and persuasive call-to-action phrases for [provided purpose]. Ensure they are clear, action-driven, and conversion-focused.",
    form: [
      {
        label: "Enter the purpose of the CTA",
        field: "input",
        name: "cta_purpose",
        required: true,
      },
    ],
  },

  {
    name: "Landing Page Copy Generator",
    description:
      "Generate persuasive landing page copy designed to capture leads and drive conversions.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/8901/8901502.png",
    slug: "generate-landing-page-copy",
    prompt:
      "Create a compelling and persuasive landing page copy for [provided product or service]. Ensure it includes a strong headline, value proposition, and call-to-action.",
    form: [
      {
        label: "Enter the product or service name",
        field: "input",
        name: "product_service_name",
        required: true,
      },
    ],
  },
];
