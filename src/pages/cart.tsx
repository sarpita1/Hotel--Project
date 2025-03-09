// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";

// export default function CartPage() {
//   const [cart, setCart] = useState([
//     { id: 1, name: "Deluxe Suite", price: 200, guests: 2 },
//     { id: 2, name: "Ocean View Room", price: 250, guests: 3 },
//   ]);

//   const removeFromCart = (id) => {
//     setCart(cart.filter((room) => room.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
//         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//         {cart.length > 0 ? (
//           <div>
//             {cart.map((room) => (
//               <Card key={room.id} className="mb-4 p-4 flex justify-between items-center">
//                 <CardContent>
//                   <h2 className="text-lg font-semibold">{room.name}</h2>
//                   <p className="text-gray-600">Guests: {room.guests}</p>
//                   <p className="text-blue-600 font-bold">${room.price} / night</p>
//                 </CardContent>
//                 <Button
//                   variant="destructive"
//                   onClick={() => removeFromCart(room.id)}
//                   className="flex items-center gap-2"
//                 >
//                   <Trash2 size={16} /> Remove
//                 </Button>
//               </Card>
//             ))}
//             <div className="mt-6 flex justify-between items-center">
//               <h2 className="text-xl font-bold">Total: ${cart.reduce((acc, room) => acc + room.price, 0)}</h2>
//               <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
//                 Proceed to Checkout
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500">Your cart is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// }