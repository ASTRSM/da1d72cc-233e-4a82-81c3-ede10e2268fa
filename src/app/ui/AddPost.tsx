export default function AddPost() {
  return (
    <form action='' className='flex flex-col'>
      <input
        type='text'
        name='title'
        placeholder='Title'
        required
        className='bg-transparent font-bold text-xl placeholder:font-bold placeholder:text-xl p-2 focus:outline-0 focus:placeholder:text-white'
        data-test='title-input'
      />
      <textarea
        name='body'
        placeholder='Give it all out...'
        required
        className='bg-transparent p-2 placeholder:text-sm text-sm focus:outline-0 focus:placeholder:text-white '
        data-test='body-input'
      />
      <button
        type='submit'
        className='bg-accent-1 font-semibold p-2 hover:text-black transition hover:brightness-125'
      >
        Post
      </button>
    </form>
  )
}
