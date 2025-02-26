export const BILLING_CONFIG = {
  plans: {
    free: {
      name: "Free Plan",
      price: 0,
      interval: "month",
      wordLimit: 5000,
      features: [
        "5,000 words per month",
        "Access to all templates",
        "Basic support"
      ],
      isCurrentPlan: true
    },
    pro: {
      name: "Pro Plan",
      price: 9.99,
      interval: "month",
      wordLimit: Infinity,
      features: [
        "Unlimited words",
        "Priority access to new features",
        "Premium support",
        "Advanced analytics"
      ],
      isRecommended: true
    }
  },
  currency: "USD",
  currencySymbol: "$"
};