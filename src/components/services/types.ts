export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  metrics?: Metric[];
  isPrimary?: boolean;
}

export interface ServiceCardProps extends Service {
  index: number;
}