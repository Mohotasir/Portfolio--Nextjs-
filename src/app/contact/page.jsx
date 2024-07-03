"use client"
import PageHeading from '@/components/PageHeading';
import Image from 'next/image';
import React from 'react';
import Form from '@/components/Form';
export default function ContactPage() {

  return (
    <div>
      <div className='hidden md:flex'><PageHeading title="CONTACT ME" /></div>
      <h1 className='text-gradient text-sm max-w-80 mt-3 font-bold'>Feel free to contact with me.Help me to turn your ideas into reality !</h1>
      <div className='lg:ml-48'>
        <div className="relative flex"> 
            <Image className='hidden lg:flex absolute -top-28 left-16 lg:-top-12 lg:left-72 ' src="/mail2.svg" alt='img' width={400} height={1}></Image>
            <Form></Form>       
        </div>
      </div>
    </div>
  );
}
