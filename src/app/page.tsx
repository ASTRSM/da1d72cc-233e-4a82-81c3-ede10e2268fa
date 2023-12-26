'use client'
import { toast } from 'react-toastify'
import useFetchPost from './lib/hooks/useFetchPost'
import AddPost from './ui/AddPost'
import PostsWrapper from './ui/PostsWrapper'
import { addPost } from './lib/action'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'

export default function Home() {
  const userId = 1 // user example
  // Because manipulating the API won't change any data, we use the local state only
  const { posts, isLoading, handleClick, onAddPost } = useFetchPost()
  const initialState = { message: null, errors: {}, data: null }
  const addPostWithUserId = addPost.bind(null, userId)
  const [state, dispatch] = useFormState(addPostWithUserId, initialState)

  useEffect(() => {
    if (state?.success) {
      toast.success('The World can see your post now!!', {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 'post-success',
        theme: 'dark',
      })
      if (state?.data) onAddPost(state?.data)
    }
  }, [onAddPost, state?.data, state?.success])

  return (
    <div className='flex flex-col justify-center mb-12'>
      <AddPost dispatch={dispatch} state={state} key={state?.data?.id}/>
      <PostsWrapper
        posts={posts}
        isLoading={isLoading}
        handleClick={handleClick}
      />
    </div>
  )
}
