"use client";
import React from 'react'
import Image from 'next/image';
import "@/styles/login.css";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginPage = () => {

  const router = useRouter()
  const params = useSearchParams()

  const email = params.get("email")?.toLocaleLowerCase()

  if (!email) router.push("/login")

  const em = email?.split("@")[0]?.slice(0, 2) + "*****" + "@" + email?.split("@")[1]


  return (
    <div
      className='bg-[#1d2033] w-screen h-screen p-5'
    >
      <div className='relative myBox mx-auto max-w-sm flex flex-col gap-6'>
        <div className='absolute'>
          <Button onClick={() => router.back()} size="sm" className='flex flex-row justify-center items-center pr-4 rounded-lg pl-2 bg-[#343647] hover:bg-[#343647] hover:scale-95 transition-all duration-200'>
            <svg className='w-4 h-4 font-bold' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-src="/static/media/ARROW_LEFT.e40e5952.svg" ><g id="Icons/SM/Navigation/Arrow-Left" fill="none" fill-rule="evenodd"><path id="Bounding-Box" d="M0 0h16v16H0z"></path><path id="Primary" fill="#FFF" d="M5.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.415l-4 4a1 1 0 1 1-1.414-1.415L8.586 8 5.293 4.707z" transform="matrix(-1 0 0 1 16 0)"></path></g></svg>
            <span className='fontElectronics text-xs'>BACK</span>
          </Button>
        </div>
        <div className=" pt-10 flex flex-col gap-y-6 items-center">
          <Image
            alt="" src="/EALogo-New.svg" width={65} height={65} />
          <p className="font-medium text-2xl text-white fontElectronics tracking-wide text-center">
            Verify your identity
          </p>
        </div>
        <p className='text-white w-full text-center'>
          We'll send a verification code to {em}.
        </p>
        <Link href={`/login/2fa/code?email=${email}`} className='w-full flex flex-col'>
          <Button type='button' className="otkbtn otkbtn-primary fontElectronics mt-4 font-semibold">
            SEND CODE
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage