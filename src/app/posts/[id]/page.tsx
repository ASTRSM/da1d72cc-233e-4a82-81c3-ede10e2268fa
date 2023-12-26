import { getPost } from '@/app/lib/data'
import { postSchema } from '@/app/lib/definitions'
import CommentSection from '@/app/ui/CommentSection'
import Post from '@/app/ui/Post'
import { notFound } from 'next/navigation'

export default async function Page({
  params: { id }
}: {
  params: { id: number }
}) {

  // For the new added post
  if (id == 151) {
    notFound()
  }

  const {
    id: postId,
    title,
    body,
    tags,
    userId
  }: postSchema = await getPost(id)
  return (
    <>
    <div className='border-t border-grey p-6 text-sm' data-test='post'>
      <Post id={postId} title={title} body={body} tags={tags || []} userId={userId} />
    </div>
    <CommentSection postId={id} />
    </>
  )
}
