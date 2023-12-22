'use client';
import Image from 'next/image';
import Link from 'next/link';

export function SideButton(props: { filename: string, text: string, href: string, isActive: boolean}) {
  return (
    <Link
      href={props.href}
      className={`group transition p-1 my-2 flex items-center justify-start space-x-2 md:px-4 rounded-md md:w-full`}
      data-test={props.filename}
    >
      <Image
        src={`/image/${props.filename}.png`}
        alt='search icon'
        width={48}
        height={48}
        className={`w-6 md:w-4 h-fit ${props.isActive ? '' : 'group-hover:'}invert transition`}
      />
      <h1 className={`hidden md:block text-2xl font-light ${props.isActive ? '' : 'group-hover:'}text-black transition`}>
        {props.text}
      </h1>
    </Link>
  )
}