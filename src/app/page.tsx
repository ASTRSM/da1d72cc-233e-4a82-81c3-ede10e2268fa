import AddPost from './ui/AddPost'
import PostsWrapper from './ui/PostsWrapper'

export default function Home() {
  return (
    <div className='flex flex-col justify-center mb-12'>
      <AddPost />
      <PostsWrapper />
    </div>
  )
}
