import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;  
  href: string;
  icon: IconType;
}

export interface HighlightFeature {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
}

export interface AboutBulletPoint {
  id: string;
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
export interface AcademicProgram {
  id: string;
  level: string;
  grades: string;
  description: string;
  subjects: string[];
  icon: IconType;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface FacilityDetail {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  points: string[];
  icon: IconType;
  reverse?: boolean;
}

export interface AdmissionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: IconType;
}

export interface AdmissionRequirement {
  id: string;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface ExtendedGalleryItem {
  id: string;
  src: string;
  alt: string;
  label: string;
  category: string;
  size: "small" | "medium" | "large" | "wide" | "tall";
}

export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconType;
}
