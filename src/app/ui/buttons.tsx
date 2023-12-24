'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export function SideButton(props: {
  filename: string
  text: string
  href: string
  isActive: boolean
}) {
  return (
    <Link
      href={props.href}
      className={clsx(
        'group transition p-4 md:p-1 md:my-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2 md:px-4 rounded-md md:w-full',
        { 'bg-accent-1': props.isActive, 'hover:bg-accent-1': !props.isActive }
      )}
      data-test={props.filename}
    >
      <Image
        src={`/image/${props.filename}.png`}
        alt='search icon'
        width={48}
        height={48}
        className={clsx('w-4 md:w-4 h-fit transition', {
          invert: props.isActive,
          'group-hover:invert': !props.isActive
        })}
      />
      <h1
        className={clsx(
          'md:block text-xs md:text-2xl font-light transition',
          {
            'text-background': props.isActive,  
            'group-hover:text-background': !props.isActive
          }
        )}
      >
        {props.text}
      </h1>
    </Link>
  )
}

