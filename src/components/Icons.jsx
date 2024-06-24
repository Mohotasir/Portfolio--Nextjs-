import React from 'react'

export default function Icons({icon}) {
  return (
    <div className="shadow flex justify-center items-center rounded-md rotate-45 ">
        <div className="text-5xl md:p-3 -rotate-45">{icon} </div>
    </div>
  )
}
