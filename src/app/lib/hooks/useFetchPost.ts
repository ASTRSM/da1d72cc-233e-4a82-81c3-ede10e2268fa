import { useCallback, useEffect, useState } from 'react'
import { postSchema, postsSchema } from '../definitions'
import { getAllPost } from '../data'

const initialState: postsSchema = {
  posts: [],
  total: 0,
  skip: 0,
  limit: 0
}

export default function useFetchPost(): {
  posts: postsSchema
  isLoading: boolean
  handleClick: () => void
  onAddPost: (newPost: postSchema) => void
} {
  const [posts, setPosts] = useState(initialState)
  const [isLoading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  function handleClick() {
    setOffset((prevOffset) => prevOffset + 10)
  }

  const onAddPost = useCallback(function onAddPost(newPost: postSchema) {
    setPosts((prevPosts) => ({
      posts: [newPost, ...prevPosts?.posts],
      total: prevPosts.total + 1,
      skip: prevPosts.skip,
      limit: prevPosts.limit
    }))
  }, [])
  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      try {
        const data: postsSchema = await getAllPost(offset)
        setLoading(true)
        if (!ignore) {
          setPosts((prevPosts) => ({
            posts: [...prevPosts?.posts, ...data?.posts],
            total: data?.total,
            skip: data?.skip,
            limit: data?.limit
          }))
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

  return { posts, isLoading, handleClick, onAddPost }
}
