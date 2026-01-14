import { ReactNode } from "react";

export type CompanyValue = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type CompanyDifferential = {
  title: string;
  icon: ReactNode;
};

export type CompanyStat = {
  value: string;
  label: string;
};

export interface TimelineItem {
    year: string
    text: string
  }