import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";

export default function Loading() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <BounceLoader color='#f97316'/>
    </div>
  )
}
