export const INITIAL_STUDENT_DATA = {
  name: "Alex",
  track: "Full-Stack Developer",
  avatar: "A",
  currentDay: 12,
  totalDays: 60,
  currentStreak: 11,
  bestStreak: 18,
  completedDays: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  missedDays: [],
  profileComplete: true,
  isMissedState: false,
  isFirstDayState: false,
};

export const MISSION_DAY_12 = {
  dayNumber: 12,
  title: "Build a responsive portfolio website",
  shortDesc: "Create a personal portfolio with a hero section, projects, about section and contact section.",
  fullDesc: "Create a personal portfolio that clearly communicates who you are, what you build, and what projects you have completed.",
  estimatedTime: "45 minutes",
  difficulty: "Intermediate",
  techStack: ["HTML", "CSS", "JavaScript"],
  checklist: [
    { id: 1, text: "Hero section", completed: false },
    { id: 2, text: "About section", completed: false },
    { id: 3, text: "Projects section", completed: false },
    { id: 4, text: "Contact section", completed: false },
    { id: 5, text: "Responsive mobile layout", completed: false },
  ],
  brief: `Build a single-page responsive portfolio website.

Your page should include:
• Your name and introduction
• At least three projects
• Short About section
• Contact information
• Responsive layout for mobile screens

Focus on clean HTML, CSS and responsive design.`,
  submissionRequirements: [
    { step: "01", text: "Your page works on mobile" },
    { step: "02", text: "Your code is pushed to GitHub" },
    { step: "03", text: "You shared your progress on LinkedIn" },
  ]
};

export const ACHIEVEMENTS = [
  { id: 1, icon: "🔥", title: "11 Day Streak", desc: "Consistency beast" },
  { id: 2, icon: "⚡", title: "10 Builds Shipped", desc: "Double digits reached" },
  { id: 3, icon: "🏆", title: "First Milestone", desc: "Completed Day 10" },
];

export const RECENT_ACTIVITY = [
  { day: 11, title: "Landing page", status: "completed", date: "Yesterday" },
  { day: 10, title: "JavaScript quiz", status: "completed", date: "2 days ago" },
  { day: 9, title: "Weather app", status: "completed", date: "3 days ago" },
];
