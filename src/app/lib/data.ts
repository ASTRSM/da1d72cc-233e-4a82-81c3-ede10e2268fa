import { ZodError } from 'zod'
import { postsSchema } from './definitions'

export async function getAllPost(offset: number) {
  try {
    const res = await fetch(`https://dummyjson.com/posts?limit=10&skip=${offset}`)
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