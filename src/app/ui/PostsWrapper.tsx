import { postSchema } from '../lib/definitions'
import PostWrapper from './PostWrapper'
import { LoadingCircle } from '@/app/ui/skeletons'

export default function PostsWrapper({
  posts,
  isLoading,
  handleClick
}: {
  posts: postSchema[]
  isLoading: boolean
  handleClick: () => void
}) {
  if (isLoading) {
    return <LoadingCircle />
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
          onClick={handleClick}
          data-test='load-more-button'
        >
          Load more...
        </button>
      )}
    </>
  )
}
