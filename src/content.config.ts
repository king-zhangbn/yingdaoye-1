import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "src/posts" }),
  schema: ({ image }: { image: () => z.ZodType<any> }) =>
    z.object({
      title: z.string().max(80).min(10),
      slug: z.string(),
      hero: image(),
      heroAlt: z.string(),
      description: z.string().max(220).min(1),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = { 
  blog,
  // projects: projectsCollection
 };

// const projectsCollection = defineCollection({
// 	loader: glob({ pattern: "**/[^_]*.{yml,yaml}", base: "./src/data/projects" }),
// 	schema: z.object({
// 		title: z.string(),
// 		description: z.string().optional(),
// 		url: z.string(),
// 		order: z.number(),
// 	}),
// });
