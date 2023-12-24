import { z } from 'zod';

const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()),
  reactions: z.number(),
});

export const postsSchema = z.object({
  posts: postSchema.array(),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
}); 

export type postSchema = z.infer<typeof postSchema>
export type postsSchema = z.infer<typeof postsSchema>