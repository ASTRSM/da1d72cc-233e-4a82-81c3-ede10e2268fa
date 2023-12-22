'use client'
import { usePathname } from 'next/navigation'
import { SideButton } from './buttons'

export default function LinkWrapper() {
  const pathname = usePathname()
  return (
    <div className='flex gap-2 md:block mx-4 md:m-0'>
      <SideButton
        filename='home'
        text='Home'
        href='/'
        isActive={pathname === '/'}
      />
      <SideButton
        filename='explore'
        text='Explore'
        href='/explore'
        isActive={pathname === '/explore'}
      />
      <SideButton
        filename='profile'
        text='Profile'
        href='/profile'
        isActive={pathname === '/profile'}
      />
    </div>
  )
}
