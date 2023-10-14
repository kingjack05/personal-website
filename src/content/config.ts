import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
})

const shortsCollection = defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
    }),
})

export const collections = {
    blog: blogCollection,
    shorts: shortsCollection,
}
