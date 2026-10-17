export type Lang = 'en' | 'vi';

/** A piece of copy in every supported language. */
export type Text = Record<Lang, string>;

/** Year and month, e.g. `2025-09`. */
export type YearMonth = string;

export interface WorkProject {
  id: string;
  name: Text;
  client?: Text;
  role: Text;
  team: number;
  from: YearMonth;
  to: YearMonth | null;
  summary: Text;
  points: Text[];
}

export interface Company {
  name: string;
  /** Job title at the company, shown when it isn't tied to a listed project. */
  role?: Text;
  from: YearMonth;
  to: YearMonth | null;
  stack: string[];
  projects: WorkProject[];
}

export interface SideProject {
  name: string;
  url: string;
  stack: string[];
  description: Text;
}

export interface Skill {
  label: string | Text;
  core?: boolean;
}

export interface SkillGroup {
  title: Text;
  items: Skill[];
}
