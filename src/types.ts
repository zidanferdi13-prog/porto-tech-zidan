export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  category: "IoT" | "Industrial" | "Web";
  year: string;
  details?: string[];
  image?: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; proficiency: number; icon: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface TelemetryData {
  timestamp: string;
  vibration: number;
  temperature: number;
  starchStiffness?: number; // for the starch project
  weightValue?: number; // for the load cell project
  fatigueIndex?: number; // for operators fatigue AI
  status: "NORMAL" | "WARNING" | "CRITICAL";
}
