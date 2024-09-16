import React from 'react'
import { Kanit } from '@next/font/google';

const kanit = Kanit({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
export default function PageHeading({title}) {
  return (
    <div className={kanit.className}   data-aos="flip-up" data-aos-duration="1000">
         <div className='my-3 lg:my-0'>
        <h1 className="text-gradient font-extrabold text-3xl">{title}</h1>
         <div className='border my-1 border-purple-950 w-12 h-2 bg-purple-950 rounded-full '></div>
      </div>
    </div>
  )
}
