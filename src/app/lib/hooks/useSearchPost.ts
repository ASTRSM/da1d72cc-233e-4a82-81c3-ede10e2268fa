import { useEffect, useState } from 'react'
import { postsSchema } from '../definitions'
import { getAllPost } from '../data'
import useSearch from './useSearch'

const initialState: postsSchema = {
  posts: [],
  total: -1,
  skip: 0,
  limit: 0
}

export default function useSearchPost() {
  const [posts, setPosts] = useState(initialState)
  const [isLoading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const { term, handleSearch } = useSearch()

  async function handleClick() {
    try {
      setLoading(true)
      const data: postsSchema = await getAllPost(offset + 10, term)
      setPosts((prevPosts) => ({
        posts: [...prevPosts?.posts, ...data?.posts],
        total: data?.total,
        skip: data?.skip,
        limit: data?.limit
      }))
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
    setOffset((prevOffset) => prevOffset + 10)
  }

  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      try {
        setLoading(true)
        const data: postsSchema = await getAllPost(0, term)
        if (!ignore) {
          setPosts(data)
          setOffset(0)
        }
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    if (term) {
      fetchData()
    } else {
      setPosts(initialState)
    }

    return () => {
      ignore = true
    }
  }, [term])

  return { posts, isLoading, handleClick, handleSearch }
}
