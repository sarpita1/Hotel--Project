import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function ListProperty() {
  const [formData, setFormData] = useState<any>({
    name: "",
    city: "",
    address: "",
    description: "",
    pricePerNight: "",
    roomsAvailable:"",
    amenities: [],
    images: [], // Store multiple image files
  });

  const [previews, setPreviews] = useState(['']); // Store preview URLs for multiple images
  const [uploadedImages, setUploadedImages] = useState([]); // Store uploaded image URLs

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev:any) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e:any) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    if (files.length > 0) {
      const previewUrls = files.map((file:any) => URL.createObjectURL(file)); // Create preview URLs
      setPreviews(previewUrls);
      setFormData((prev:any) => ({ ...prev, images: files })); // Store files in state
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("pricePerNight", formData.pricePerNight);
    formDataToSend.append("roomsAvailable", formData.roomsAvailable);
    
    formDataToSend.append("amenities", JSON.stringify(formData.amenities));

    // Append each image file to FormData
    formData.images.forEach((image:any, index:any) => {
      formDataToSend.append(`images`, image); // Use `images` as the key
    });

    try {
      const response = await fetch("/api/hotels/add-hotel", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Property Listed Successfully!");
        setFormData({
          name: "",
          city: "",
          address: "",
          description: "",
          pricePerNight: "",
          roomsAvailable:"",
          amenities: [],
          images: [],
        });
        setPreviews([]);
      } else {
        alert("Failed to list property");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while listing the property");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">List Your Property</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Property Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="pricePerNight"
            placeholder="Price Per Night ($)"
            value={formData.pricePerNight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="amenities"
            placeholder="Amenities (comma separated)"
            value={formData.amenities}
            onChange={(e) =>
              setFormData((prev:any) => ({
                ...prev,
                amenities: e.target.value.split(","),
              }))
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="roomsAvailable"
            placeholder="Rooms available"
            value={formData.roomsAvailable}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Property Images
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
              multiple // Allow multiple file selection
              required
            />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {previews.map((preview, index) => (
                <Image
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  width={150}
                  height={100}
                  className="w-full h-24 object-cover rounded-md shadow"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Submit Property
          </button>
        </form>

        {/* Display Uploaded Images */}
        {uploadedImages.length > 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-semibold">Uploaded Property Images:</h3>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {uploadedImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Uploaded Property ${index}`}
                  width={150}
                  height={100}
                  className="w-full h-24 object-cover rounded-md shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}