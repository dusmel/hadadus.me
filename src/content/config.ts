import { z, defineCollection } from "astro:content";
const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    link: z.string(),
    date: z.string(),
    description: z.array(z.string()),
    image: z.string().optional(),
    ps: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  experience: experienceCollection,
  projects: projectCollection,
};
