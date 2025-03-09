import React from 'react';
import Link from 'next/link';

const cities = [
    "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Delhi", "Noida", "Pune", "Gurgaon", "Mumbai"
];

export default function Header() {
    return (
        <div className="bg-gray-100 grid grid-cols-10 flex-row justify-between items-center w-full p-4 text-sm px-10">
            {cities.map((city, index) => (
                <div key={index} className="lg:flex hidden space-x-4">
                    <div className="group inline-block capitalize">
                        <button className="px-3 py-1 rounded-sm flex items-center hover:bg-green-500">
                            <span className="pr-1 font-medium flex-1">{city}</span>
                            <span>
                                <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </span>
                        </button>
                        <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 z-10">
                            <li className="rounded-sm px-3 py-2 hover:bg-gray-100"><a href="#">{city}</a></li>
                            {/* <li className="rounded-sm px-3 py-2 hover:bg-gray-100"><a href="#">{city}</a></li> */}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="lg:flex hidden space-x-4">
                <div className="group inline-block capitalize">
                    <button className="px-3 py-1 rounded-sm flex items-center hover:bg-green-500">
                        <span className="pr-1 font-medium flex-1"><Link href="/cities">All cities</Link></span>
                        <span>
                            <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
