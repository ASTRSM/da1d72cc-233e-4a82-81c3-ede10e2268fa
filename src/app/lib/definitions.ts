import { z } from 'zod';

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()).optional(),
  reactions: z.number().optional(),
});

export const postsSchema = z.object({
  posts: postSchema.array(),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
}); 

export type postSchema = z.infer<typeof postSchema>
export type postsSchema = z.infer<typeof postsSchema>

export const userSchema = z.object({
  id: z.number(),
  username: z.string()
})

export const commentSchema = z.object({
  id: z.number(),
  body: z.string(),
  postId: z.number(),
  user: userSchema,
})

export const commentsSchema = z.object({
  comments: commentSchema.array(),
  total: z.number(),
  skip: z.number(),
  limit: z.number()
})

export type userSchema = z.infer<typeof userSchema>
export type commentSchema = z.infer<typeof commentSchema>
export type commentsSchema = z.infer<typeof commentsSchema>

export const postFormSchema = z.object({
  title: z
    .string()
    .max(150, { message: 'Must be 150 or fewer characters long' })
    .min(1, { message: 'Title is Required' }),
  body: z.string().min(1, { message: 'Body is Required' })
})

export type postState = {
  success?: boolean
  message?: string | null
  errors?: { title?: string[]; body?: string[] }
  data?: postSchema | null
}

export const commentFormSchema = commentSchema.pick({body: true})

export type commentState = {
  success?: boolean
  message?: string | null
  errors?: { body?: string[] }
  data?: commentSchema | null
}





