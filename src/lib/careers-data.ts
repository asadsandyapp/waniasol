export type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Contract";
  department: string;
};

export const openRoles: Job[] = [
  {
    id: "sr-frontend",
    title: "Senior Frontend Engineer",
    location: "Remote (US/EU overlap)",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: "staff-backend",
    title: "Staff Backend Engineer",
    location: "Remote (Global)",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: "pm-principal",
    title: "Principal Product Manager",
    location: "London / Remote",
    type: "Full-time",
    department: "Product",
  },
  {
    id: "devops-sre",
    title: "Senior DevOps / SRE",
    location: "Remote (Middle East friendly hours)",
    type: "Full-time",
    department: "Platform",
  },
];
