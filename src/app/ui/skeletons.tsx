import Image from 'next/image'

export function Loading() {
  return (
    <div
      className={`bg-background mx-auto my-10`}
    >
      <div className='flex flex-col items-center justify-center gap-1'>
        <Image
          src='/image/circle-text-final.webp'
          alt='text logo'
          width={50}
          height={50}
          className='animate-spin-slow'
        />
        <h2 className='text-xl font-bold hover:brightness-200 text-ellipsis overflow-hidden max-h-8 '>
          Loading
        </h2>
      </div>
    </div>
  )
}
