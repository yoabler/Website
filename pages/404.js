import React from 'react'
import Link from 'next/link'

const custom404 = () => {
  return (
    <div id='Error' className='container'>
      <p>

      Page is still under construction
      </p>
      <Link href={'/'}>
      <button className='border py-3 px-5 rounded-pill mx-auto'>Back to home</button>
      </Link>
      </div>
  )
}

export default custom404