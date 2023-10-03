import { z, defineCollection } from "astro:content";
const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    link: z.array(z.array(z.string())).optional(),
    date: z.string(),
    description: z.array(z.string()),
    image: z.string().optional(),
    ps: z.string().optional(),
    tags: z.array(z.string()).optional(),
    sortOrder: z.number(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
    sortOrder: z.number(),
  }),
});

const skillsCollection = defineCollection({
  type: "data",
  schema: z.object({
    languages: z.array(z.string()),
    Framework: z.array(z.string()),
    devops: z.array(z.string()),
    testing: z.array(z.string()),
    database: z.array(z.string()),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectCollection,
  skills: skillsCollection,
};
