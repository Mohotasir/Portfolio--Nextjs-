"use client"

import { useTypewriter } from "react-simple-typewriter"

export default function Typewriter() {
    const [text] = useTypewriter({
        words: ['Front-end Web Developer',"ReactJS Developer","Next.JS Developer"],
        loop: 0
      })
  return (
    <div className="mb-4 ">
        <h1 className='text-2xl md:text-4xl  h-[40px] text-gradient '>{text}</h1>
    </div>
  )
}
