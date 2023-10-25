"use client"

import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import Navbar from "@/components/navbar";
import StartLoader from "@/components/start-loader";
import Image from "next/image";
import StartContent from "@/components/start-content";
import { motion } from "framer-motion";
export default function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="h-screen w-screen bg-center bg-no-repeat bg-cover flex flex-col" style={{
      backgroundImage: "url('/background.png')",
    }}>
      <Navbar />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0, transitionEnd: {
            display: 'none',
          }
        }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex flex-col justify-center items-center w-full h-full px-[80px] ">
        <StartLoader />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, display: 'none' }}
        animate={{ opacity: 1, display: 'flex' }}
        transition={{ delay: 1, duration: 0.4 }}
        className="flex flex-col justify-center items-center w-full h-full px-[80px] ">
        <StartContent />
      </motion.div>
    </main>
  );
}