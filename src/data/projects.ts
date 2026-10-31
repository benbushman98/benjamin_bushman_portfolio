export type Category = "local" | "company" | "app" | "group";

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: Category;
  summary: string;
  place?: string;
  tags: string[];
  featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  local: "Local businesses",
  company: "Companies & stores",
  app: "Apps",
  group: "Groups & causes",
};

export const projects: Project[] = [
  {
    slug: "tetongear",
    name: "Teton Gear",
    url: "https://tetongear.com",
    category: "company",
    summary:
      "A full rebuild of Teton's online store for tents, sleeping bags, cots and packs, including the accessibility work to make it ADA compliant.",
    tags: ["Shopify", "E-commerce", "Accessibility"],
    featured: true,
  },
  {
    slug: "networkprovidersinc",
    name: "Network Providers, Inc.",
    url: "https://networkprovidersinc.com",
    category: "company",
    summary:
      "The website for a managed IT and cybersecurity firm that has supported Utah healthcare, legal and professional businesses since 1998.",
    place: "Draper, Utah",
    tags: ["React", "Tailwind", "SEO"],
    featured: true,
  },
  {
    slug: "bearlakeconstruction",
    name: "Bear Lake Construction",
    url: "https://bearlakeconstruction.com",
    category: "local",
    summary:
      "A builder with 25+ years in the valley: new homes, remodels, excavation, roads, utilities, flooring and tile.",
    place: "Bloomington, Idaho",
    tags: ["React", "Vite"],
    featured: true,
  },
  {
    slug: "rollingheads",
    name: "Rolling Heads",
    url: "https://rollingheads.app",
    category: "app",
    summary:
      "Guillotine fantasy football. Leagues of any size, weekly eliminations, and the last team standing takes the crown.",
    tags: ["Web app", "React", "Accounts"],
    featured: true,
  },
  {
    slug: "bearlakemarineworks",
    name: "Bear Lake Marine Works",
    url: "https://bearlakemarineworks.com",
    category: "local",
    summary:
      "Custom docks, seasonal installation and removal, moorings, dock repair, boat towing, dredging and pile driving on Bear Lake.",
    place: "Bear Lake County, Idaho",
    tags: ["React"],
  },
  {
    slug: "bearlakeaxe",
    name: "Bear Lake Axe Throwing",
    url: "https://bearlakeaxe.com",
    category: "local",
    summary:
      "A mobile axe throwing trailer that comes to reunions, vacations and parties. One flat rate for the full day.",
    place: "Bear Lake, Idaho",
    tags: ["React", "Vite"],
  },
  {
    slug: "pariscreekstorage",
    name: "Paris Creek Storage",
    url: "https://pariscreekstorage.com",
    category: "local",
    summary:
      "Drive-up storage units, shipping containers and RV and boat storage, with sizes and monthly prices laid out up front.",
    place: "Paris, Idaho",
    tags: ["React", "Vite"],
  },
  {
    slug: "clovercreekheights",
    name: "Clover Creek Heights",
    url: "https://clovercreekheights.com",
    category: "local",
    summary:
      "Three-bedroom, two-bath apartments, with a site that walks renters from first call to front-door keys.",
    place: "Montpelier, Idaho",
    tags: ["React", "Vite"],
  },
  {
    slug: "cannycancleaners",
    name: "Canny Can Cleaners",
    url: "https://cannycancleaners.com",
    category: "local",
    summary:
      "Trash can cleaning with 2900 psi, 190°F water, with quarterly, semiannual and one-time plans to sign up for online.",
    tags: ["WordPress"],
  },
  {
    slug: "peppertreekitchen",
    name: "Peppertree Kitchen & Bath",
    url: "https://peppertreekitchen.com",
    category: "company",
    summary:
      "Custom cabinetry and kitchen and bath design since 1986, with showrooms in West Jordan, Utah and Jackson, Wyoming.",
    place: "Utah & Wyoming",
    tags: ["React", "Vite"],
  },
  {
    slug: "gotemgood",
    name: "Got 'Em Good",
    url: "https://gotemgood.com",
    category: "app",
    summary:
      "A Windows app for theHunter: Call of the Wild that logs every harvest automatically: species, trophy rating and fur.",
    tags: ["Desktop app", "Website", "Accounts"],
  },
  {
    slug: "blcas",
    name: "BLC Ambulance Service",
    url: "https://blcas.org",
    category: "app",
    summary:
      "A staff portal for Bear Lake County Ambulance Service: schedules, on-call, protocols and more, behind a secure sign-in.",
    place: "Bear Lake County, Idaho",
    tags: ["Web app", "Accounts"],
  },
  {
    slug: "bearriverrifleman",
    name: "Bear River Rifleman",
    url: "https://bearriverrifleman.com",
    category: "group",
    summary:
      "A member-owned gun club with rifle, pistol and .22LR matches all season, plus membership sign-up and range rules.",
    place: "Montpelier, Idaho",
    tags: ["React", "Vite"],
  },
  {
    slug: "callforcivility",
    name: "Call for Civility",
    url: "https://callforcivility.com",
    category: "group",
    summary:
      "A national movement asking Americans to sign a pledge of civility, with the founding letter, videos and sponsors.",
    tags: ["React", "Vite"],
  },
  {
    slug: "takecoveraz",
    name: "Take Cover! AZ",
    url: "https://takecoveraz.com",
    category: "group",
    summary:
      "A rock and pop cover band playing across Arizona. Upcoming shows, videos, a playlist and booking.",
    place: "Arizona",
    tags: ["React", "Vite"],
  },
];
