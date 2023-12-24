'use client'
import { useEffect, useState } from 'react'
import { postSchema, postsSchema } from '../lib/definitions'
import PostWrapper from './PostWrapper'
import { getAllPost } from '../lib/data'
import { Loading } from './skeletons'

export default function PostsWrapper() {
  const [posts, setPosts] = useState<postSchema[] | []>([])
  const [isLoading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      try {
        const data: postsSchema = await getAllPost(offset)
        setLoading(true)
        if (!ignore) {
          setPosts((prevPosts) => [...prevPosts, ...data.posts])
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [offset])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='text-sm min-h-screen'>
        {posts?.map((post: postSchema) => {
          return (
            <PostWrapper
              key={post?.id}
              id={post?.id}
              title={post?.title}
              body={post?.body}
              tags={post?.tags}
              userId={post?.userId}
              reactions={post?.reactions}
            />
          )
        })}
      </div>
      {!isLoading && (
        <button
          type='button'
          className='bg-transparent text-accent-1 border border-accent-1 text-center p-2 hover:bg-accent-1 hover:text-background transition my-6'
          onClick={() => setOffset(offset + 10)}
          data-test='load-more-button'
        >
          Load more...
        </button>
      )}
    </>
  )
}
