import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function ContactUs() {
    return (
        <>
            <Navbar/>
          
            <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6" style={{ backgroundImage: "url('images/room10.jpg')" }}>
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600 font-medium">Name</label>
                            <input 
                                type="text" 
                                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Email</label>
                            <input 
                                type="email" 
                                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Message</label>
                            <textarea 
                                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                rows={4}  // explicitly defining rows as a number
                                placeholder="Your Message" 
                                required 
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
}
