import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kassandra",
  lastName: "Cardenas",
  name: "Kassandra Cardenas",
  role: "Computer Science @ UW • Neural & Computational Engineering • Builder + Student Leader",
  avatar: "/images/gallery/kass.jpg",
  email: "kassac2@uw.edu",
  location: "America/Los_Angeles",
  languages: ["English", "Spanish"],
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/KassandraCar",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kasscardenas",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/kassisnofun/",
    essential: false,
  },
  {
    name: "kassandra383450@gmail.com",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description:"Kassandra Cardenas — UW Computer Science student working across distributed systems, embedded/biomedical research, and community leadership.",
  headline: <>Hi, I'm Kass!</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I’m a Computer Science student at the University of Washington with a minor in
      Neural &amp; Computational Engineering. I build systems across full-stack web,
      distributed systems, and embedded/biomedical research — and I co-lead AVELA to
      expand access to STEM education.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a UW CS student working across systems, research, and community leadership.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Kassandra (Kass) Cardenas — a Computer Science student at the University of Washington
        with a minor in Neural &amp; Computational Engineering. I’m interested in research that
        connects computation and biological systems, and I build projects across full-stack web,
        distributed systems, and embedded/biomedical engineering.
      <br />
      <br />
        Outside of coursework and labs, I’m deeply involved in community work. I co-lead AVELA (A
        Vision for Engineering Literacy &amp; Access), supporting K–12 outreach, scholarship nights,
        and campus partnerships that expand access to STEM opportunities.
        </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Seattle Children’s Hospital",
        timeframe: "Sept 2024 – Present",
        role: "Research & Development Engineer",
        achievements: [
          "Prototype otoacoustic emission (OAE) systems; designed for acoustic isolation and electrical integrity.",
          "Analyzed failure modes including stimulus leakage, impedance mismatch, and microphone bias routing issues.",
          "Proposed probe geometry and connector architecture improvements to increase signal fidelity.",
        ],
        images: [],
      },
      {
        company: "Valkyra Technologies",
        timeframe: "Jun 2025 – Present",
        role: "Software Engineer",
        achievements: [
          "Develop XR/Unity experiences while exploring real-time human-pose integration using MediaPipe and Blender.",
          "Prototype movement-tracking workflows using Python + Unity to validate joint trajectories and pose quality.",
          "Build tooling to handle edge cases (including ground-contact poses) for more robust tracking.",
        ],
        images: [],
      },
      {
        company: "Lyers Lab",
        timeframe: "Jun 2025 – Aug 2025",
        role: "Embedded Systems Engineer Intern",
        achievements: [
          "Designed low-power circuits and supported hardware bring-up for constrained sensing/communication prototypes.",
          "Programmed microcontroller tooling in C/C++ and Python to support data collection and control experiments.",
          "Ran lab testing and debugging workflows to improve reliability and iteration speed.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Washington",
        description: <>B.S. Computer Science • Minor: Neural &amp; Computational Engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Full-stack Web",
        description: <>Next.js, React, TypeScript, Supabase/Postgres, REST APIs, auth, and deployments (Vercel).</>,
        tags: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Supabase" }],
        images: [],
      },
      {
        title: "Distributed Systems",
        description: <>Primary-backup replication, Paxos/Multi-Paxos, linearizability, leader election, sharded KV stores.</>,
        tags: [{ name: "Java" }],
        images: [],
      },
      {
        title: "Embedded + Biomedical",
        description: <>Microcontrollers, low-power constraints, signal integrity, lab instrumentation, prototyping.</>,
        tags: [{ name: "C/C++" }, { name: "Python" }],
        images: [],
      },
      {
        title: "Accessibility",
        description: <>Audits + fixes: semantic structure, keyboard navigation, focus visibility, and contrast improvements.</>,
        tags: [{ name: "WCAG" }],
        images: [],
      },
    ],
  },
};
const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing",
  description: `Notes on accessibility, research, engineering, and student leadership.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected projects across software, systems, and applied research.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/becu.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Hike.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/kass.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Library.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/olympia.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/temple.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/temple1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/tree.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const philosophy = {
  path: "/philosophy",
  label: "Philosophy",
  title: `Leadership Philosophy – ${person.name}`,
  description: "Kassandra Cardenas's leadership philosophy: equity-centered, relational, and grounded in responsibility to others.",
};

export { person, social, home, about, blog, work, gallery, philosophy };
