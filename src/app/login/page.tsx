"use client";
import React from 'react'
import Image from 'next/image';
import "@/styles/login.css";
import Icon from '@/components/login/Icon';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';


const formSchema = z.object({
  email: z.string().min(10,{
    message: "Username must be at least 2 characters.",
  }).max(50),
  password:z.string().min(10).max(50)
})

const LoginPage = () => {
  
  const form = useForm<z.infer<typeof formSchema>>()
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div
    className='custum-bg-dark h-screen'
    >
      <div className='myBox mx-auto w-3/12'>
        <div className="share-section pt-10 flex flex-col gap-y-6 items-center">
          <Image
          alt="" src="/EALogo-New.svg" width={65} height={65}/>
          <p className="font-bold text-2xl text-white fontElectronics tracking-wide">
            Sign in to your EA Account
          </p>
          <div className="my-4 social-login-logos">
              <Icon color="bg-white" src="/icons/google.svg"/>
              <Icon color="bg-blue-600" src="/icons/facebook.svg"/>
              <Icon color="bg-white" src="/icons/apple.svg"/>
              <Icon color="bg-black" src="/icons/steam.svg"/>
              <Icon color="bg-[#107c10]" src="/icons/xbox.svg"/>
              <Icon color="bg-[#0049a0]" src="/icons/psn.svg"/>
          </div>
          <div className="relative flex items-center justify-center bg-[#3a3c4c] h-0.5 w-full">
              <p className="absolute custum-bg-dark
                text-[#908e97] 
                text-sm p-2 font-bold font-sans">or</p>
          </div>
        </div>
        <div className="share-section ">
        <Form {...form}>
            <form 
            onSubmit={()=>
              form.handleSubmit(onSubmit)
            } 
            className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PHONE OR EMAIL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone or email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                <RadioGroup>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">Remember me</FormLabel>
                  </FormItem>
                </RadioGroup>
              <Button type="submit" className="w-full text-lg p-5 bg-blue-600">
                SIGN IN
              </Button>
            </form>
          </Form>
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage