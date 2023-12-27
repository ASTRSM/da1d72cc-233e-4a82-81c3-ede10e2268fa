import { ZodError } from 'zod'
import { postsSchema, postSchema, commentsSchema } from './definitions'
import { unstable_noStore as noStore } from 'next/cache'

export async function getAllPost(offset: number, query?: string) {
  try {
    const queryAble = query?.replace(/ /g, '+')
    const resource = queryAble
      ? `https://dummyjson.com/posts/search?q=${queryAble}&limit=10&skip=${offset}`
      : `https://dummyjson.com/posts?limit=10&skip=${offset}`

    const res = await fetch(resource)
    const data = await res.json()
    postsSchema.parse(data)

    return data
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Validation error:', error.errors)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}

export async function getPost(id: number) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json()
    postSchema.parse(data)

    return data
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Validation error:', error.errors)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}

export async function getCommentsByPostId(postId: number) {
  noStore()
  try {
    const res = await fetch(`https://dummyjson.com/comments/post/${postId}`)
    const data = await res.json()
    commentsSchema.parse(data)

    return data
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Validation error:', error.errors)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}
