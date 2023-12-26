import { useCallback, useEffect, useState } from 'react'
import { commentSchema, commentsSchema } from '../definitions'
import { getCommentsByPostId } from '../data'

export default function useFetchComment(postId: number): {
  comments: commentSchema[]
  onAdd: (comment: commentSchema) => void
} {
  const [comments, setComments] = useState<commentSchema[] | []>([])

  const onAdd = useCallback(function onAdd(comment: commentSchema) {
    setComments((prevState) => [comment, ...prevState])
  }, [])

  useEffect(() => {
    let ignore = false
    async function fetchComments() {
      const data: commentsSchema = await getCommentsByPostId(postId)
      const comments: commentSchema[] = data?.comments
      if (!ignore) {
        setComments(comments)
      }
    }

    fetchComments()

    return () => {
      ignore = true
    }
  }, [postId])

  return { comments, onAdd }
}
