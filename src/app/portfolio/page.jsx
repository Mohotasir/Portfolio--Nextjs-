import PageHeading from '@/components/PageHeading'
import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'

export default function PortfolioPage() {
  return (
    <div>
        <PageHeading
        title ="MY PROJECTS"
        ></PageHeading>
        <div>
            <h1 className='text-gradient text-lg my-3'>See my All  latest projects here !</h1>
        </div>
        <div>
            <SwiperComponent></SwiperComponent>
        </div>
    </div>
  )
}
