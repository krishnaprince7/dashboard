import React, { useState } from "react";
import { FaMapMarkerAlt, FaListAlt, FaPlusCircle, FaCamera } from "react-icons/fa";

const Ghaat = () => {
  const [photoName, setPhotoName] = useState("");
  const [formData, setFormData] = useState({
    ghatName: "",
    district: "",
    river: "",
    description: "",
    importance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.ghatName || !formData.district || !formData.river) {
      alert("Please fill all required fields!");
      return;
    }

    console.log("Ghaat Registered:", formData);
    alert("Ghaat Registered Successfully!");
    setFormData({
      ghatName: "",
      district: "",
      river: "",
      description: "",
      importance: "",
    });
    setPhotoName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white px-4 sm:px-12 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-indigo-100 rounded-full p-3 shadow">
          <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 mt-4">Ghaat Management</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Register and manage important riverbank Ghaats used for ferry, worship, or rescue operations
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <button className="flex items-center gap-2 bg-white hover:bg-indigo-50 text-indigo-700 font-semibold px-6 py-2 rounded-full shadow transition">
          <FaPlusCircle />
          Register New Ghaat
        </button>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-full shadow transition">
          <FaListAlt />
          Ghaat Directory
        </button>
      </div>

      {/* Register Form */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto border">
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-100 rounded-full p-4">
            <FaMapMarkerAlt className="text-indigo-600 text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-indigo-700 mb-4">Register New River Port</h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
         Document and register a new ghaat with precise location data and visual proof
        </p>

        {/* Upload Area */}
        <div className="bg-indigo-50 border border-dashed border-indigo-300 rounded-lg p-6 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow inline-flex">
              <FaCamera className="text-indigo-500 text-xl" />
            </div>
          </div>
          <p className="text-indigo-800 font-semibold mb-1">Upload Ghaat Geotagged Photo</p>
          <p className="text-gray-600 text-sm mb-4">
            Capture or upload a photo with <strong>GPS coordinates</strong>  Location info will be extracted automatically.
          </p>

          <input
            type="file"
            id="ghaat-photo"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files[0]) setPhotoName(e.target.files[0].name);
            }}
          />
          <label htmlFor="ghaat-photo">
            <span className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition inline-block">
              Choose Photo
            </span>
          </label>
          {photoName && (
            <p className="text-sm text-indigo-700 mt-2">Uploaded: {photoName}</p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="ghatName"
            value={formData.ghatName}
            onChange={handleChange}
            placeholder="Enter Ghaat Name"
            required
            className={inputClass}
          />
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">Select District</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Prayagraj">Prayagraj</option>
          </select>
          <input
            type="text"
            name="river"
            value={formData.river}
            onChange={handleChange}
            placeholder="River Name (e.g., Ganga)"
            required
            className={inputClass}
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the Ghaat (history, location, purpose)"
            rows={3}
            className={inputClass}
          ></textarea>
          <textarea
            name="importance"
            value={formData.importance}
            onChange={handleChange}
            placeholder="Cultural or strategic importance (optional)"
            rows={3}
            className={inputClass}
          ></textarea>

          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-2 rounded-full font-semibold transition">
              Register Ghaat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition";

export default Ghaat;
