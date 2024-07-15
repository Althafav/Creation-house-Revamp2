import React from 'react'

export default function dashboard() {
  return (
    <div className='text-white'>
      <h1>PORT Next: {process.env.NEXT_PUBLIC_PORT}</h1>
      <h1>PORT: {process.env.PORT}</h1>
      <h1>port: {process.env.port}</h1>

      <h1>NODE_ENV: {process.env.NODE_ENV}</h1>
      <h1>NODE_ENV Next: {process.env.NEXT_PUBLIC_NODE_ENV}</h1>


    </div>
  )
}
