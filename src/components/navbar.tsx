import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-12 bg-[#0f0f0f] flex flex-row justify-between'>
      <div className='fc-header-view'>
        <Link href="https://www.ea.com/fifa/ultimate-team/features" className='fc'>
          Back to FIFA
        </Link>
        <Link href="https://www.ea.com" className='eaSports'>
        </Link>
      </div>
    </div>
  )
}

export default Navbar