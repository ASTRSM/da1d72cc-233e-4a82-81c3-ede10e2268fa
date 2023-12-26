'use client'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { addComment } from '../lib/action'
import useFetchComment from '../lib/hooks/useFetchComment'
import { toast } from 'react-toastify'
import { Submit } from './buttons'

export default function CommentSection({ postId }: { postId: number }) {
  const userId = 1
  const { comments, onAdd } = useFetchComment(postId)

  const addCommentWithIds = addComment.bind(null, userId, postId)
  const initialState = { message: null, errors: {}, data: null }
  const [state, dispatch] = useFormState(addCommentWithIds, initialState)

  useEffect(() => {
    if (state?.success) {
      toast.success('The World can see your comment now!!', {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 'post-success',
        theme: 'dark'
      })
      if (state?.data) onAdd(state?.data)
    }
  }, [onAdd, state?.data, state?.success])

  return (
    <div>
      <form action={dispatch} className='flex flex-col' key={state?.data?.body}>
        <textarea
          name='body'
          placeholder='Leave a comment...'
          required
          className='bg-transparent p-2 placeholder:text-sm text-sm focus:outline-0 focus:placeholder:text-white border-y border-grey'
          data-test='body-input'
        />
        <Submit name='Comment' />
      </form>
      {comments?.map((comment) => {
        return (
          <div
            key={comment?.id}
            data-test='comment'
            className='text-sm border-y border-grey p-4'
          >
            <p className='italic font-bold text-accent-1'>
              {comment?.user?.username}
            </p>
            <p className='text-justify my-2'>{comment.body}</p>
          </div>
        )
      })}
    </div>
  )
}
