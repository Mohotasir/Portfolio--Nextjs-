import PageHeading from '@/components/PageHeading';
import Image from 'next/image';
import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <div className='hidden md:flex'><PageHeading title="CONTACT ME" /></div>
      <h1 className='text-gradient text-sm max-w-80 mt-3 font-bold'>Feel free to contact with me.Help me to turn your idear into reality !</h1>
      <div className='lg:ml-48'>
        <div className="relative flex"> 
            <Image className='hidden lg:flex absolute -top-28 left-16 lg:-top-12 lg:left-72 ' src="/mail2.svg" alt='img' width={400} height={1}></Image>
            <form className="bg-black space-y-6 shadow my-8 p-8 rounded-lg   w-full max-w-md z-10 border-gray-700 border">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  placeholder="Enter name here.."
                  id="name"
                  name="name"
                  className="block bg-black border-none shadow w-full px-3 py-3 border rounded-md  focus:outline-none sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  placeholder="Enter email here.."
                  id="email"
                  name="email"
                  className="block bg-black border-none shadow w-full px-3 py-3 border rounded-md  focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-gray-500">Project</label>
              <div className="mt-1">
                <textarea
                  id="project"
                  placeholder="Write message.."
                  name="project"
                  rows="4"
                  className="block bg-black border-none shadow w-full px-3 py-2 border rounded-md  focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-purple-900"
              >
                Send me
                <span className="ml-2 text-xl">✈️</span>
              </button>
            </div>
          </form>
           
        </div>
      </div>
    </div>
  );
}
