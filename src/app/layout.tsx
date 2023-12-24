import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './ui/Sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'Ambrosia', template: '%s | Ambrosia' },
  description: 'Social Media for the champions'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex flex-col md:flex-row min-h-screen mx-auto max-w-7xl overflow-y-scroll bg-background`}
      >
        <aside className='w-1/4 flex justify-end'>
          <SideNav />
        </aside>
        <main className='flex-1 border-x border-grey'>{children}</main>
        <aside className='hidden md:block w-1/4'></aside>
      </body>
    </html>
  )
}
