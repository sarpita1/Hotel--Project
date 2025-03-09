import React from "react";
import Link from "next/link";

export default function Cities() {
  const citiesList = [
    "3 Str", "Adilabad", "Afzalgarh", "Agra", "Ahmedabad", "Ajmer", "Akola", "Alappuzha", "Alibag",
    "Allahabad", "Aligarh", "Alipurduar", "Almora", "Alwar", "Ambala", "Amboli", "Amravati",
    "Amritsar", "Amroha", "Anakapalli", "Anand", "Anantapur", "Anjuna", "Asansol", "Auli", "Auraiya",
    "Aurangabad", "Aurangabad - Bihar", "Ayodhya", "Baddi", "Bagepalli", "Bahadurgarh", "Baheri",
    "Bakkhali", "Balugaon", "Banaskantha", "Bangalore", "Bani", "Bankura", "Barabanki", "Baramati",
    "Bareilly", "Barmer", "Barpeta", "Bathinda", "Bawal", "Belgarh", "Berhampore", "Bettiah", "Bhadani",
    "Bhopal", "Bhubaneswar", "Bilaspur", "Chandigarh", "Chennai", "Coimbatore", "Cuttack", "Darjeeling",
    "Dehradun", "Delhi", "Dhanbad", "Dharwad", "Durgapur", "Ernakulam", "Erode", "Faridabad",
    "Fatehpur", "Gandhinagar", "Ghaziabad", "Goa", "Gorakhpur", "Gulbarga", "Guntur", "Guwahati",
    "Gwalior", "Haridwar", "Hubli", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jammu",
    "Jamshedpur", "Jodhpur", "Kanpur", "Kolkata", "Lucknow", "Ludhiana", "Madurai", "Mangalore",
    "Meerut", "Mumbai", "Mysore", "Nagpur", "Nainital", "Nashik", "Noida", "Ooty", "Patna", "Pune",
    "Raipur", "Ranchi", "Rishikesh", "Shimla", "Surat", "Thiruvananthapuram", "Tirupati", "Udaipur",
    "Vadodara", "Varanasi", "Vellore", "Visakhapatnam", "Vrindavan", "Warangal", "Wayanad", "Zirakpur"
  ];

  // Split cities into four equal parts for different sections
  const quarterSize = Math.ceil(citiesList.length / 4);
  const section1 = citiesList.slice(0, quarterSize);
  const section2 = citiesList.slice(quarterSize, quarterSize * 2);
  const section3 = citiesList.slice(quarterSize * 2, quarterSize * 3);
  const section4 = citiesList.slice(quarterSize * 3);

  return (
    <>
      <div className="text-3xl text-center font-bold py-4">All Cities</div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {[section1, section2, section3, section4].map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white p-4 rounded-lg shadow-md">
              <ul className="space-y-2">
                {section.map((city, index) => (
                  <li key={index} className="p-2 hover:bg-gray-200 rounded-md">
                    <Link href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}>
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
