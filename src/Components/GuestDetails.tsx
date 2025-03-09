'use client';

import { useState } from 'react';

export default function GuestDetailsForm({hotel}:any) {
  const [gstDetails, setGstDetails] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 w-full">
      <div className=" w-full p-6 shadow-lg rounded-lg bg-white">
        <h2 className="text-xl font-bold mb-4 text-center">GUEST DETAILS</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <select className="w-full p-2 border rounded">
                <option>Mr</option>
                <option>Ms</option>
                <option>Mrs</option>
                <option>Dr</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter First Name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter Last Name" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address <span className="text-sm text-gray-500">(Your booking voucher will be sent to this email address)</span></label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Enter Email Address" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Mobile Number</label>
              <div className="flex flex-col md:flex-row">
                <select className="w-full md:w-24 p-2 border rounded">
                  <option>+91 India</option>
                  {/* <option>+1 USA</option>
                  <option>+44 UK</option> */}
                </select>
                <input type="tel" className="mt-2 md:mt-0 md:ml-2 flex-1 p-2 border rounded" placeholder="Enter Phone Number" />
              </div>
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <input type="checkbox" id="gst" className="w-4 h-4" onChange={() => setGstDetails(!gstDetails)} />
            <label htmlFor="gst" className="text-sm">Enter GST Details <span className="text-gray-500">(Optional)</span></label>
          </div> */}
        </div>
      </div>
      
      {/* {gstDetails && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full  mt-6">
          <h2 className="text-lg font-bold">YOUR PINCODE AND STATE</h2>
          <p className="text-sm text-gray-600">
            (Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.)
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Enter Billing Address"
              className="col-span-1 p-2 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Enter Pincode"
              className="col-span-1 p-2 border rounded-md w-full"
            />
            <select className="col-span-1 p-2 border rounded-md w-full">
              <option>mumbai</option>
            
            </select>
          </div>
          <div className="mt-4 flex items-center">
            <input type="checkbox" id="confirm" className="mr-2" />
            <label htmlFor="confirm" className="text-sm">
              Confirm and save billing details to your profile
            </label>
          </div>
        </div>
      )} */}

      {/* Trip Secure Section */}
      {/* <div className="bg-blue-50 p-6 rounded-lg shadow-md w-full mt-6">
        <div className="flex items-center gap-2 bg-yellow-100 p-3 rounded-md">
          <span className="text-blue-600 text-lg">⭐</span>
          <p className="text-sm font-medium">Over 1 million travellers secured in the last month</p>
        </div>
        <h2 className="text-lg font-bold mt-4">Trip Secure</h2>
        <p className="text-green-600 font-medium">Worry Free Hotel stay</p>
        <div className="bg-blue-100 p-4 rounded-md mt-3">
          <p className="flex justify-between"><span>🩺 Medical Assistance</span> <span>24*7 SUPPORT</span></p>
          <p className="flex justify-between"><span>🏨 Hotel Cancellation Refund</span> <span>Rs 10,000</span></p>
          <p className="flex justify-between"><span>💻 Loss of Laptop/Tablet</span> <span>Rs 20,000</span></p>
          <p className="text-blue-600 text-sm mt-2 cursor-pointer">12 more benefits</p>
        </div>
        <p className="text-sm mt-3"><s className="text-gray-500">₹62</s> <span className="text-lg font-bold">₹49</span> per guest</p>
        <p className="text-xs text-gray-600">Non Refundable | 18% GST Included</p>
        <div className="mt-3 space-y-2">
          <label className="flex items-center gap-2 border p-2 rounded cursor-pointer">
            <input type="radio" name="tripSecure" /> Yes, secure my trip.
          </label>
          <label className="flex items-center gap-2 border p-2 rounded cursor-pointer">
            <input type="radio" name="tripSecure" /> No, I will book without trip secure.
          </label>
        </div>
      </div> */}

      {/* Payment Option Section */}
      <div className="bg-white rounded-lg shadow-md w-full  mt-6">
        <h2 className="text-lg font-bold">SELECT PAYMENT OPTION</h2>
        <div className="mt-3">
          
          <label className="flex items-center gap-2 border p-3 rounded cursor-pointer bg-blue-100">
            <input type="radio" name="paymentOption" checked />
            <span className="font-bold">Pay entire ₹{hotel?.pricePerNight} now</span>
          </label>
        </div>
        <button className="w-full mt-4 bg-orange-500 text-white p-3 rounded-md">Proceed To Payment Options</button>
      </div>
    </div>
  );
}