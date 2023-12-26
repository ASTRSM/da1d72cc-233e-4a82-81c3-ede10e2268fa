'use server'
import { revalidatePath } from 'next/cache'
import { boolean, z } from 'zod'
import {
  commentFormSchema,
  commentState,
  postFormSchema,
  postSchema,
  postState
} from './definitions'

export async function addPost(
  userId: number,
  prevState: postState,
  formData: FormData
) {
  const validatedFields = postFormSchema.safeParse({
    title: formData.get('title'),
    body: formData.get('body')
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add Post',
      data: null
    }
  }

  try {
    const res = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...validatedFields.data })
    })

    const data = await res.json()
    revalidatePath('/')
    return {
      success: true,
      errors: {},
      message: 'Adding Post Successful',
      data
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Add Post.'
    }
  }
}

export async function addComment(
  postId: number,
  userId: number,
  prevState: commentState,
  formData: FormData
) {
  const validatedFields = commentFormSchema.safeParse({
    body: formData.get('body')
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Add Comment',
      data: null
    }
  }

  const { body } = validatedFields?.data

  try {
    const res = await fetch('https://dummyjson.com/comments/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body,
        postId,
        userId
      })
    })

    const data = await res.json()
    revalidatePath('/')
    return {
      success: true,
      errors: {},
      message: 'Adding Comment Successful',
      data
    }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Add Comment.'
    }
  }
}
