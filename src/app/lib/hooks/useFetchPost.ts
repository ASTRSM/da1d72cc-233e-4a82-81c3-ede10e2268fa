import { useCallback, useEffect, useState } from 'react'
import { postSchema, postsSchema } from '../definitions'
import { getAllPost } from '../data'

export default function useFetchPost(): {
  posts: postSchema[]
  isLoading: boolean
  handleClick: () => void
  onAddPost: (newPost: postSchema) => void
} {
  const [posts, setPosts] = useState<postSchema[] | []>([])
  const [isLoading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  function handleClick() {
    setOffset((prevOffset) => prevOffset + 10)
  }

  const onAddPost = useCallback(function onAddPost(newPost: postSchema) {
    setPosts((prevState) => [newPost, ...prevState])
  }, [])

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

  return { posts, isLoading, handleClick, onAddPost }
}
