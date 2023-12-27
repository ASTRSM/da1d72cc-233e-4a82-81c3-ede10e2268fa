'use client'
import Image from 'next/image'
import PostsWrapper from '../ui/PostsWrapper'
import { useSearchParams } from 'next/navigation'
import useSearchPost from '../lib/hooks/useSearchPost'

export default function Page() {
  const { posts, isLoading, handleClick, handleSearch } = useSearchPost()
  const searchParams = useSearchParams()

  console.log(isLoading)

  return (
    <div className='bg-background m-6 h-full'>
      <div className='p-4 bg-accent-1 rounded-md mb-6'>
        <h1 className='text-background font-bold text-2xl'>Explore</h1>
      </div>
      <div className='bg-transparent border border-gray-600 focus-within:border-gray-200 py-2 px-4 rounded-md flex items-center gap-2 group'>
        {isLoading ? (
          <Image
            src={`/image/loading.gif`}
            alt='search icon'
            width={48}
            height={48}
            className='w-4 md:w-4 h-fit transition brightness-50 group-focus-within:brightness-100'
          />
        ) : (
          <Image
            src={`/image/explore.png`}
            alt='search icon'
            width={48}
            height={48}
            className='w-4 md:w-4 h-fit transition brightness-50 group-focus-within:brightness-100'
          />
        )}
        <input
          type='text'
          name='query'
          data-test='query-input'
          placeholder='Search Post...'
          className='bg-transparent focus:outline-none border-none outline-none'
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
      <PostsWrapper
        posts={posts?.posts}
        total={posts?.total}
        offset={posts?.skip}
        limit={posts?.limit}
        handleClick={handleClick}
      />
      {posts?.total == 0 &&(
        <p className=' flex justify-center m-6 text-gray-300'>
          404 | No Data Found
        </p>
      )}
    </div>
  )
}
