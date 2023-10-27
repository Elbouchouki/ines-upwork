import { env } from "@/env.mjs"

export const login = async (email: string, password: string) => {

  return await fetch(`${env.NEXT_PUBLIC_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
  })

}

export const sendCode = async () => {
  return await fetch(`${env.NEXT_PUBLIC_BACKEND}/code`, {
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
  })
}

export const code2fa = async (code: string) => {
  return await fetch(`${env.NEXT_PUBLIC_BACKEND}/2fa`, {
    method: "POST",
    cache: "no-cache",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  })
}