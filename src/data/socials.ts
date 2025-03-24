export const tag: string = "@cojocaru-david";
export const author: string = "XingLuo";
export const github: string = "https://github.com";

export const title: string = "Xingluo";
export const description: string =
  `Student / Photographer / Designer 
  \n I am a new media operator with [X] years of experience in this dynamic field. My job mainly revolves around leveraging various new media platforms to promote brands, engage with audiences, and drive business growth.`;
export const country: string = "China";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:zbn@xl.ac.cn",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "David Cojocaru - Home",
  description:
    "Discover the portfolio and blog of David Cojocaru, a 16-year-old software developer and cybersecurity enthusiast from Romania. Explore his expertise in web development, programming languages, and more.",
  keywords: [
    "david cojocaru",
    "junior software developer",
    "junior",
    "cybersecurity enthusiast",
    "web development",
    "programming",
    "portfolio",
    "blog",
    "romania",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "David Cojocaru - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Web Development": Category[];
  "Development Tools": Category[];
  "Hosting and Cloud Services": Category[];
  "Operating Systems": Category[];
  "Other Programming Languages and Technologies": Category[];
  "Web Servers": Category[];
  Databases: Category[];
  "Other Software": Category[];
};

export const technologies: Technologies = {
  "Web Development": [
    { text: "HTML", logo: "mdi:language-html5" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "CSS", logo: "mdi:language-css3" },
    { text: "PHP", logo: "mdi:language-php" },
    { text: "Astro", logo: "simple-icons:astro" },
    { text: "Tailwind CSS", logo: "mdi:tailwind" },
  ],
  "Development Tools": [
    { text: "Visual Studio Code", logo: "mdi:visual-studio-code" },
    { text: "Git", logo: "mdi:git" },
  ],
  "Hosting and Cloud Services": [
    { text: "DigitalOcean", logo: "mdi:digital-ocean" },
    { text: "Cloudflare", logo: "cib:cloudflare" },
    { text: "Netlify", logo: "cib:netlify" },
  ],
  "Operating Systems": [
    { text: "Windows", logo: "mdi:windows" },
    { text: "Ubuntu", logo: "mdi:ubuntu" },
  ],
  "Other Programming Languages and Technologies": [
    { text: "Lua", logo: "mdi:language-lua" },
    { text: "Golang", logo: "mdi:language-go" },
    { text: "Node.js", logo: "mdi:nodejs" },
  ],
  "Web Servers": [
    { text: "Apache", logo: "cib:apache" },
    { text: "Nginx", logo: "cib:nginx" },
  ],
  Databases: [
    { text: "MySQL", logo: "cib:mysql" },
    { text: "MongoDB", logo: "cib:mongodb" },
  ],
  "Other Software": [
    { text: "Discord", logo: "mdi:discord" },
    { text: "Spotify", logo: "mdi:spotify" },
    { text: "Visual Studio", logo: "mdi:visual-studio" },
    { text: "Brave", logo: "cib:brave" },
  ],
};
