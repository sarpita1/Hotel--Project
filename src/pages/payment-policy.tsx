import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const PaymentPolicy = () => {
  return (
    <>
    <Navbar/>
   
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6" 
      style={{ backgroundImage: "url('images/room10.jpg')" }}
    >
      <div className="container mx-auto p-6 max-w-3xl bg-white bg-opacity-90 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Payment Policy</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Accepted Payment Methods</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Credit & Debit Cards (Visa, MasterCard, American Express)</li>
            <li>PayPal</li>
            <li>Bank Transfers</li>
            <li>UPI & Digital Wallets</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Booking & Payment Terms</h2>
          <p className="text-gray-700">
            - A valid credit/debit card is required to confirm your booking.<br/>
            - Full payment or a deposit may be required at the time of booking.<br/>
            - Additional taxes and service charges may apply.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cancellation & Refund Policy</h2>
          <p className="text-gray-700">
            - Free cancellation is available up to 48 hours before check-in.<br/>
            - Cancellations made within 48 hours of check-in may incur a fee.<br/>
            - Refunds (if applicable) will be processed within 5-7 business days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Security & Data Protection</h2>
          <p className="text-gray-700">
            - All payments are securely processed using SSL encryption.<br/>
            - We do not store your card details; transactions are handled via a secure payment gateway.<br/>
            - Your privacy and data security are our top priorities.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PaymentPolicy;
