import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='bg-background m-6 h-full'>
      <div className='p-4 bg-accent-1 rounded-md mb-6'>
        <h1 className='text-background font-bold text-2xl'>Profile</h1>
      </div>
      <div className='flex items-center justify-center flex-col gap-4'>
        <Image
          src='/image/face.png'
          alt='Dhafa Defrito'
          height={250}
          width={250}
          className='rounded-lg'
        />
        <h1 className='text-2xl font-thin '>Dhafa Defrito Rama Yudistira</h1>
        <div className='flex flex-wrap gap-6 text-accent-1'>
          <Link target='_blank' href='https://www.linkedin.com/in/dhafad/'>
            <Image
              src='/image/linkedin.png'
              alt='linkedin'
              height={30}
              width={30}
              className='hover:brightness-150'
            />
          </Link>
          <Link target='_blank' href='https://ddefrito.vercel.app/'>
            <Image
              src='/image/web.png'
              alt='website'
              height={30}
              width={30}
              className='hover:brightness-150'
            />
          </Link>
          <Link target='_blank' href='https://github.com/ASTRSM'>
            <Image
              src='/image/github.png'
              alt='github'
              height={30}
              width={30}
              className='hover:brightness-150'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
