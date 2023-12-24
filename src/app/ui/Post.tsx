import Link from 'next/link'

export default function Post({
  id,
  title,
  body,
  tags,
  userId
}: {
  id: number
  title: string
  body: string
  tags: string[]
  userId: number
}) {
  return (
    <>
      <p className='italic'>{`User ${userId}`}</p>
      <Link href={`/posts/${id}`}>
        <h2 className='text-xl font-bold text-accent-1 hover:brightness-200 text-ellipsis overflow-hidden max-h-8'>
          {title}
        </h2>
      </Link>
      <p className='text-justify my-2'>{body}</p>
      <div className='text-right'>
        {tags.map((tag, index) => (
          <span key={tag}>
            {`${index !== 0 ? ', ' : ''}`}
            <Link
              href={`https://www.google.com/search?q=${tag}`}
              target='_blank'
              className='text-blue-300 hover:text-blue-100'
            >
              {`#${tag}`}
            </Link>
          </span>
        ))}
      </div>
    </>
  )
}
