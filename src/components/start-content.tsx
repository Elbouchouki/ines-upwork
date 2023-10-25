import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartContent = () => {
  return (
    <>
      <div className="ut-content">
        <div className="ut-login-content">
          <header className="ut-fut-logo ">
            <Image className="fut-logo " alt="" src="/logo-companion-en.png" width={300} height={300} />
          </header>
          <Link href="/login">
            <button className="btn-standard">Login</button>
          </Link>
          <button className="flat alt">Getting Started</button>
        </div>
      </div>
    </>
  )
}

export default StartContent