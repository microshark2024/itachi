
export interface Message {
  role: 'user' | 'itachi';
  content: string;
}

export interface Skill {
  name: string;
  value: number;
  fullMark: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}
