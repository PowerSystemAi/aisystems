export interface PricingTier {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    title: 'Basic',
    description: 'For businesses looking to start with AI and automations.',
    features: [
      '1 Developer',
      'Basic chatbots & Model',
      '5 Monthly Check Ups',
      'Cancel & pause anytime'
    ]
  },
  {
    title: 'Professional',
    description: 'For businesses looking to outperform their competition with AI and automations.',
    features: [
      '2 developers',
      'Custom chatbots & Models',
      '15 Monthly Check Ups',
      'Cancel & pause anytime'
    ],
    highlighted: true
  },
  {
    title: 'Enterprise',
    description: 'For businesses looking to fully leverage AI and automations to become an industry leader.',
    features: [
      '3 developers',
      'Premium Custom chatbots & Models',
      'Unlimited Check Ups',
      'Cancel & pause anytime'
    ]
  }
] as const;