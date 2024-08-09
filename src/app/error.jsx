'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <h2 className='text-lg text-black mb-3'>Something went wrong!</h2>
      <button
        className='bg-secondary px-3 py-2 text-white rounded'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
