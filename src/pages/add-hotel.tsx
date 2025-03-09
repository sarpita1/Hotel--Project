import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function ListProperty() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    description: "",
    pricePerNight: "",
    amenities: [],
    images: null, // Store image file
  });

  const [preview, setPreview] = useState(""); // Image preview URL
  const [uploadedImage, setUploadedImage] = useState(""); // Store uploaded image URL

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFormData((prev) => ({ ...prev, images: file }));
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!formData.images) {
      alert("Please upload an image");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("pricePerNight", formData.pricePerNight);
    formDataToSend.append("amenities", JSON.stringify(formData.amenities));
    formDataToSend.append("images", formData.images);

    try {
      console.log("Form Data:", formDataToSend);
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
          amenities: [],
          images: null,
        });
        setPreview("");
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

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Upload Property Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
              required
            />
            {preview && (
              <Image
                src={preview}
                alt="Preview"
                width={500}
                height={300}
                className="mt-3 w-full h-48 object-cover rounded-md shadow"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Submit Property
          </button>
        </form>

        {/* Display Uploaded Image */}
        {uploadedImage && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md shadow">
            <h3 className="text-lg font-semibold">Uploaded Property Image:</h3>

            <Image
              src={uploadedImage}
              alt="Uploaded Property"
              width={500}
              height={300}
              className="mt-3 w-full h-48 object-cover rounded-md shadow"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}