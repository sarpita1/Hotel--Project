import React from 'react';

export default function Footer2() {
  const links = [
    { name: 'Hotels near me', url: '#' },
    { name: 'Hotels in Manali', url: '#' },
    { name: 'Hotels in Nainital', url: '#' },
    { name: 'Hotels in Mount Abu', url: '#' },
    { name: 'Hotels in Agra', url: '#' },
    { name: 'Hotels in Haridwar', url: '#' },
    { name: 'Hotels in Gurgaon', url: '#' },
    { name: 'Hotels in Coimbatore', url: '#' },
    { name: 'Glitz Hotels Hotel UK', url: '#' },
    { name: 'Glitz Hotels Vacation Homes in Europe', url: '#' }
  ];

  return (
    <div className='bg-black text-gray-50 py-10'>
      <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 '>
        {[...Array(8)].map((_, index) => (
          <div key={index} className='space-y-2'>
            <ul className='text-sm font-semibold'>
              {links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className='hover:underline'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
