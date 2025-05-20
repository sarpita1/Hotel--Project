import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <div className='bg-black text-gray-100 p-6'>
      <div className='flex flex-wrap justify-center items-center md:justify-between border-b-2 border-gray-100 pb-6'>
        <div className='flex flex-col md:flex-row items-center text-center md:text-left md:w-8/12 space-y-4 md:space-y-0'>
          <a href='/' className='text-5xl font-extrabold px-4'>Glitz Hotels</a>
          <p className='text-xl font-extrabold'>World's leading chain of hotels and homes</p>
        </div>
        <div className='flex flex-col items-center md:items-start space-y-4 md:space-x-4 py-6'>
          <h1 className='font-extrabold text-2xl text-center md:text-left'>Join our network and grow your business!</h1>
          <Link href="/add-hotel">
            <button className="bg-white flex items-center py-3 px-6 rounded-lg text-black shadow-md">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Z" clipRule="evenodd" />
                </svg>
              </span>
              List your property
            </button>
          </Link>
        </div>
      </div>
      
      <div className='grid md:grid-cols-3 sm:grid-cols-1 pt-10 border-b-2 border-white pb-10'>
        <div className='col-span-1 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white p-6'>
          <h1 className='text-xl'>Download app for exciting offers.</h1>
          <div className='flex space-x-4 pt-4'>
            <button className='bg-black text-white flex items-center px-4 py-2 rounded-lg'>
              Google Play
            </button>
            <button className='bg-black text-white flex items-center px-4 py-2 rounded-lg'>
              App Store
            </button>
          </div>
        </div>
        
        <div className='col-span-1 text-center border-b md:border-b-0 md:border-r border-white p-6 hidden sm:block'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Link href="/about"><p className="cursor-pointer">About Us</p></Link>
              <Link href="/payment-policy"><p className="cursor-pointer">Support</p></Link>
              <p>Teams / Careers</p>
              
            </div>
            <div>
              <p>Official hotel Blog</p>
              <p>Investor Relations</p>
              <p>hotel Circles</p>
              <p>hotel Frames</p>
            </div>
          </div>
        </div>
        
        <div className='col-span-1 text-center p-6 hidden sm:block'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Link href="/term-condition"><p className="cursor-pointer">Terms & Conditions</p></Link>
              <p>Guest Policies</p>
              <Link href="/policy-page"><p className="cursor-pointer">Privacy Policy</p></Link>
              <p>Trust & Safety</p>
            </div>
            <div>
              <p>Cyber Security</p>
              <p>Cyber Security Awareness</p>
              <p>Responsible Disclosure</p>
              <p>Advertise Your Homes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}