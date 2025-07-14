import React, { useState } from 'react';

import { IoMdCloseCircleOutline } from "react-icons/io";


export default function Modal({ onClose, onSave, initialData }) {
  const [name, setName] = useState(initialData?.name || 'John Doe');
  const [email, setEmail] = useState(initialData?.email || 'john@example.com');
  const [role, setRole] = useState(initialData?.role || 'Job Seeker');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [image, setImage] = useState(initialData?.image || '');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave({ name, email, role, phone, image });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30" >
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative" data-aos="fade-up" data-aos-delay="0">
        <button
          className="absolute top-2 right-2 text-blue-600 hover:text-red-500 text-3xl cursor-pointer font-bold"
          onClick={onClose}
        >
         <IoMdCloseCircleOutline />

        </button>

        <h2 className="text-2xl font-bold mb-4 text-blue-600">Edit Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Profile Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Profile" className="mt-2 w-20 h-20 rounded-full object-cover" />}
          </div>

          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Role:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
            />
          </div>

          <button
            onClick={handleSave}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
