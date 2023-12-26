'use client'

import { postState } from '../lib/definitions'
import { Submit } from './buttons'

export default function AddPost({
  dispatch,
  state
}: {
  dispatch: (payload: FormData) => void
  state: postState
}) {
  return (
    <form action={dispatch} className='flex flex-col'>
      <input
        type='text'
        name='title'
        placeholder='Title'
        // required
        className='bg-transparent font-bold text-xl placeholder:font-bold placeholder:text-xl p-2 focus:outline-0 focus:placeholder:text-white'
        data-test='title-input'
        aria-describedby='title-error'
      />
      <div
        id='customer-error'
        aria-live='polite'
        aria-atomic='true'
        data-test='title-error'
      >
        {state?.errors?.title &&
          state?.errors.title.map((error: string) => (
            <p className='mt-2 text-sm text-red-500 px-2' key={error}>
              {error}
            </p>
          ))}
      </div>
      <textarea
        name='body'
        placeholder='Give it all out...'
        // required
        className='bg-transparent p-2 placeholder:text-sm text-sm focus:outline-0 focus:placeholder:text-white '
        data-test='body-input'
        aria-describedby='body-error'
      />
      <div
        id='body-error'
        aria-live='polite'
        aria-atomic='true'
        data-test='body-error'
      >
        {state?.errors?.body &&
          state?.errors.body.map((error: string) => (
            <p className='mt-2 text-sm text-red-500 px-2' key={error}>
              {error}
            </p>
          ))}
      </div>
      <Submit name='Post' />
    </form>
  )
}
