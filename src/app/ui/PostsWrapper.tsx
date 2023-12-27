import { postSchema } from '../lib/definitions'
import PostWrapper from './PostWrapper'
import { LoadingCircle } from '@/app/ui/skeletons'
import { LoadMoreButton } from './buttons'

export default function PostsWrapper({
  posts,
  total,
  offset,
  limit,
  isLoading = false,
  handleClick
}: {
  posts: postSchema[]
  total: number
  offset: number
  limit: number
  isLoading?: boolean
  handleClick: () => void
}) {
  if (isLoading) {
    return <LoadingCircle />
  }

  const showLoadMoreButton = !isLoading && posts.length > 0 && !((limit + offset) == total) 

  return (
    <>
      <div className='text-sm' data-test='posts-wrapper'>
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
      {showLoadMoreButton && (
        <LoadMoreButton handleClick={handleClick} />
      )}
    </>
  )
}
