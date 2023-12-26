import Link from 'next/link'
import { postSchema } from '../lib/definitions'
import Post from './Post'
import Image from 'next/image'
import { memo } from 'react'

const PostWrapper = memo(function PostWrapper (post: postSchema) {
  return (
    <div key={post?.id} className='border-t border-grey p-6' data-test='post'>
      <Post
        id={post?.id}
        title={post?.title}
        body={post?.body}
        tags={post?.tags || []}
        userId={post?.userId}
      />
      <div className='space-x-4 flex items-center'>
        <Link
          href={`/posts/${post?.id}`}
          className='hover:brightness-75 transition font-bold'
        >
          Show More
        </Link>
        <Link
          href={`/posts/${post?.id}`}
          className='hover:brightness-75 flex gap-1 items-center transition'
        >
          <Image
            src='/image/comments.png'
            alt='comment button'
            width={48}
            height={48}
            className='w-fit h-3'
          />
          <span className='font-sm text-sm'>{post?.reactions}</span>
        </Link>
      </div>
    </div>
  )
})

export default PostWrapper
