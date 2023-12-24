import Image from 'next/image'
import Link from 'next/link'
import LinkWrapper from './LinkWrapper'

export default function SideNav() {
  return (
    <nav className='bg-accent-1 md:bg-transparent h-12 md:h-screen md:p-6 fixed md:sticky bottom-0 md:bottom-auto md:top-0 right-0 w-full md:w-fit'>
      <div className='flex flex-row-reverse md:flex-col items-center justify-center md:justify-start h-full'>
        <div className='relative flex items-center justify-center'>
          <Image
            src='/image/circle-text-final.webp'
            alt='text logo'
            width={254}
            height={254}
            className='hidden md:block absolute animate-spin-slow w-[100px]'
          />
          <Image
            src='/image/circle-logo.webp'
            alt='main logo'
            width={292}
            height={292}
            className='w-10 md:w-[100px]'
          />
        </div>
        <Link href='/' className='hidden md:block group hover:bg-background transition p-1 my-4'>
          <h1 className='text-2xl font-black group-hover:text-accent-1 transition duration-1000'>
            Ambrosia.
          </h1>
        </Link>
        <LinkWrapper />
      </div>
    </nav>
  )
}
