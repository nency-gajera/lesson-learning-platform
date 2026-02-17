import { ReactNode } from "react";

export const fileSubjectMap: Record<string, string[]> = {
  English: [
    "Grammar",
    "Essay Writing",
    "Poetry",
    "Story Reading",
  ],
  History: [
    "Ancient Egypt",
    "World War II",
    "Freedom Struggle",
    "Medieval India",
  ],
  Science: [
    "Physics Basics",
    "Chemistry Reactions",
    "Human Biology",
    "Solar System",
  ],
  Mathematics: [
    "Algebra",
    "Trigonometry",
    "Geometry",
    "Statistics",
  ],
};

export type yearGroup = {
    label: string
}

export const yearGroupMap: yearGroup[] = [
    {
        label: "1 year"
    },
    {
        label: "2 year"
    },
    {
        label: "3 year"
    },
    {
        label: "4 year"
    },
    {
        label: "5 year"
    },
    {
        label: "6 year"
    },
    {
        label: "7 year"
    },
];

export type lesson = {
    title: string
}

export const lessonMap: lesson[] = [
    { title: "1 lesson" },
    { title: "2 lessons" },
    { title: "3 lessons" },
    { title: "4 lessons" },
    { title: "5 lessons" },
    { title: "6 lessons" },
    { title: "7 lessons" },
    { title: "8 lessons" },
]