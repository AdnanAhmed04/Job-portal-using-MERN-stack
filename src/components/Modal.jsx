import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

// List of skill suggestions
const skillSuggestions = ["Nextjs14", "Typescript", "Prisma", "GraphQL", "React", "Tailwind", "Node.js", "MongoDB"];

export default function Modal({ onClose, onSave, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [role, setRole] = useState(initialData?.role || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [image, setImage] = useState(initialData?.image || '');
  const [skills, setSkills] = useState(initialData?.skills || []);
  const [skillInput, setSkillInput] = useState('');

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

  const handleSkillInput = (e) => {
    setSkillInput(e.target.value);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput('');
    }
  };

  const handleSkillClick = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (removedSkill) => {
    setSkills(skills.filter(skill => skill !== removedSkill));
  };

  const handleSave = () => {
    onSave({ name, email, role, phone, image, skills });
    onClose();
  };

  const filteredSuggestions = skillSuggestions.filter(skill =>
    skill.toLowerCase().includes(skillInput.toLowerCase()) &&
    !skills.includes(skill)
  );

  return (
    <div className="fixed inset-0 mt-12  flex items-center justify-center z-50 backdrop-blur-sm bg-white/30">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative" data-aos="fade-up">
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
              placeholder='ABC'
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='abc@gmail.com'
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder='123456789'

            />
          </div>

          <div>
            <label className="block text-sm font-medium">Role:</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type="text"
                            placeholder='HR / Developer / Mangement'

            />
          </div>

          <div>
            <label className="block text-sm font-medium">Skills:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={skillInput}
              onChange={handleSkillInput}
              onKeyDown={handleSkillKeyDown}
            />
            {skillInput && filteredSuggestions.length > 0 && (
              <ul className="mt-1 border rounded-lg bg-white shadow-md max-h-40 overflow-auto">
                {filteredSuggestions.map((skill, index) => (
                  <li
                    key={index}
                    onClick={() => handleSkillClick(skill)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    
                  >
                    {skill}
                    
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-black text-white rounded-full text-sm flex items-center gap-1"
                >
                  {skill}
                  <button onClick={() => handleRemoveSkill(skill)} className="text-red-400 hover:text-red-600">
                    &times;
                  </button>
                </span>
              ))}
            </div>
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
