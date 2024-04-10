import { z, defineCollection } from 'astro:content'

const blog = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        })
    })
})

export const collections = {
    blog,
}

