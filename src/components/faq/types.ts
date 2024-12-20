export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}