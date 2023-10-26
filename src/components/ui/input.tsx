import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-4 w-full rounded-lg font-semibold border-2 hover:border-[#908e97] focus:border-white  focus:shadow-white border-[#626265] bg-transparent px-3 py-6 bg-[#141724] text-white  hover:shadow-lg shadow-black font-sans focus:shadow-[0_0_10px__rgba(255,255,255,0.3)]  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#4b4647] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
