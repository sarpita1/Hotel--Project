import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

const offers = [
  {
    id: "getsetgo",
    title: "GETSETGO",
    discount: "₹728",
    description: "Use GETSETGO to get instant discount on this hotel booking.",
    selected: true,
  },
  {
    id: "goaxis",
    title: "GOAXIS",
    discount: "₹716",
    description: "Pay using Axis Bank Credit Card to avail the offer",
    note: "Not available with ‘Book @ ₹0’",
  },
  {
    id: "gosbiemi",
    title: "GOSBIEMI",
    discount: "₹716",
    description: "Pay using the SBI Bank Credit Card EMI option to avail the offer with a 15% discount.",
    note: "Not available with ‘Book @ ₹0’",
  },
  {
    id: "gorbemi",
    title: "GORBLEMI",
    discount: "₹716",
    description: "Pay using RBL Bank Credit Cards EMI option to Enjoy 3 Months No Cost EMI",
    note: "Not available with ‘Book @ ₹0’",
  },
  {
    id: "gofederalemi",
    title: "GOFEDERALEMI",
    discount: "₹716",
    description: "Get a Flat 15% Off! Enjoy discounts of up to Rs.5,000, plus no-cost EMI options for 3 and 6 months on Federal Bank credit cards.",
    note: "Not available with ‘Book @ ₹0’",
  },
  {
    id: "stealdeal",
    title: "STEALDEAL",
    discount: "₹560",
    description: "Special Deal ending at Midnight",
  },
];

export default function OffersList() {
  const [selectedOffer, setSelectedOffer] = useState("getsetgo");

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Goibibo Offers</h2>
      <div className="space-y-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-3 rounded-lg border ${
              selectedOffer === offer.id ? "bg-green-100 border-green-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedOffer(offer.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {selectedOffer === offer.id ? (
                  <CheckCircle className="text-green-600" />
                ) : (
                  <Circle className="text-gray-500" />
                )}
                <span className={`font-semibold ${selectedOffer === offer.id ? "text-green-700" : "text-black"}`}>
                  {offer.title}
                </span>
              </div>
              <span className="text-green-700 font-semibold">-{offer.discount}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            {offer.note && <p className="text-xs text-red-500 mt-1">({offer.note})</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input type="text" placeholder="Got A Promocode?" className="border p-2 w-full rounded-lg text-sm" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">APPLY</button>
      </div>
    </div>
  );
}