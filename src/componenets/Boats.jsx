import React, { useState } from "react";
import { FaShip, FaListAlt, FaPlusCircle, FaCamera } from "react-icons/fa";

const Boats = () => {
  const [photoName, setPhotoName] = useState("");
  const [formData, setFormData] = useState({
    regNumber: "",
    district: "",
    type: "",
    pilotName: "",
    license: "",
    staffCount: "",
    engine: "",
    capacity: "",
    year: "",
    ghat: "",
    authority: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation (basic)
    if (!formData.regNumber || !formData.district || !formData.type || !formData.pilotName || !formData.ghat || !formData.authority) {
      alert("Please fill all required fields!");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Boat Registered Successfully!");

    // Reset
    setFormData({
      regNumber: "",
      district: "",
      type: "",
      pilotName: "",
      license: "",
      staffCount: "",
      engine: "",
      capacity: "",
      year: "",
      ghat: "",
      authority: "",
      additionalInfo: "",
    });
    setPhotoName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white px-4 sm:px-12 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 shadow">
          <FaShip className="text-green-600 text-2xl" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mt-4">Boat Management</h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Register and track rescue boats with comprehensive documentation and real-time monitoring
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <button className="flex items-center gap-2 bg-white hover:bg-green-50 text-green-700 font-semibold px-6 py-2 rounded-full shadow transition">
          <FaPlusCircle />
          Register New Boat
        </button>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded-full shadow transition">
          <FaListAlt />
          Boat Directory
        </button>
      </div>

      {/* Register Form */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-6xl mx-auto border">
        {/* Top Icon & Title */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 rounded-full p-4">
            <FaShip className="text-green-600 text-3xl" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-green-700 mb-4">Register Rescue Boat</h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
          Document and register a new rescue boat with complete specifications and visual proof
        </p>

        {/* Upload Area */}
        <div className="bg-green-50 border border-dashed border-green-300 rounded-lg p-6 text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow inline-flex">
              <FaCamera className="text-green-500 text-xl" />
            </div>
          </div>
          <p className="text-green-800 font-semibold mb-1">Upload Boat Geotagged Photo</p>
          <p className="text-gray-600 text-sm mb-4">
            Capture or upload photo of the boat with visible registration number and <strong>GPS coordinates</strong> (from phone camera).
          </p>

          <input
            type="file"
            id="boat-photo"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files[0]) {
                setPhotoName(e.target.files[0].name);
              }
            }}
          />
          <label htmlFor="boat-photo">
            <span className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition inline-block">
              Choose Photo
            </span>
          </label>

          {photoName && (
            <p className="text-sm text-green-700 mt-2">Uploaded: {photoName}</p>
          )}
        </div>

        {/* Form Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} placeholder="UP-XXX-000" required className={inputClass} />
          <select name="district" value={formData.district} onChange={handleChange} required className={inputClass}>
            <option value="">Select District</option>
            <option value="Varanasi">Varanasi</option>
            <option value="Prayagraj">Prayagraj</option>
          </select>

          <select name="type" value={formData.type} onChange={handleChange} required className={inputClass}>
            <option value="">Select Type</option>
            <option value="Inflatable">Inflatable</option>
            <option value="Motorboat">Motorboat</option>
          </select>
          <input type="text" name="pilotName" value={formData.pilotName} onChange={handleChange} placeholder="Enter pilot’s full name" required className={inputClass} />

          <input type="text" name="license" value={formData.license} onChange={handleChange} placeholder="License number" className={inputClass} />
          <select name="staffCount" value={formData.staffCount} onChange={handleChange} required className={inputClass}>
            <option value="">Number of staff</option>
            <option value="1">1</option>
            <option value="2-4">2-4</option>
            <option value="5+">5+</option>
          </select>

          <input type="text" name="engine" value={formData.engine} onChange={handleChange} placeholder="e.g., 40HP Yamaha" className={inputClass} />
          <input type="text" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="Maximum passengers" className={inputClass} />

          <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="YYYY" className={inputClass} />
          <input type="text" name="ghat" value={formData.ghat} onChange={handleChange} placeholder="Enter ghat name" required className={inputClass} />

          <select name="authority" value={formData.authority} onChange={handleChange} required className={inputClass}>
            <option value="">Select Authority</option>
            <option value="Police">Police</option>
            <option value="NDRF">NDRF</option>
            <option value="Local Body">Local Body</option>
          </select>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Any additional information about the boat"
            rows={3}
            className={`${inputClass} md:col-span-2`}
          ></textarea>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-10 py-2 rounded-full font-semibold transition">
              Register Boat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Tailwind helper input style
const inputClass =
  "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition";

export default Boats;
