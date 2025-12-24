export interface ContentSection {
  id: string;
  title: string;
  content?: string;
  subsections?: ContentSection[];
}

export interface Question {
  id: string;
  question: string;
  category: string;
}

export interface Author {
  name: string;
  position: string;
  affiliation: string;
}

export interface BibliographyItem {
  id: string;
  title: string;
  authors: string;
  year?: string;
  publisher?: string;
  url?: string;
}

export interface AppInfo {
  version: string;
  developedBy: string;
  description: string;
  features: string[];
}