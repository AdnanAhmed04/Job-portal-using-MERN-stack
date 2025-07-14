import React, { useState } from 'react';
import Toast from './Toast';

const ApplyModal = ({ onClose }) => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    provisionTime: '',
    expectedSalary: '',
    cvFile: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.provisionTime && formData.expectedSalary && formData.cvFile) {
      setShowToast(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCloseToast = () => {
    setShowToast(false);
    onClose(); // closes modal too
  };

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40">
        <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Apply for Job</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Provision Time (in weeks):</label>
              <input
                type="number"
                name="provisionTime"
                value={formData.provisionTime}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 4"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Expected Salary:</label>
              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 120K"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Upload CV:</label>
              <input
                type="file"
                name="cvFile"
                onChange={handleInputChange}
                className="w-full mt-1 cursor-pointer text-gray-700"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast should be rendered at the root level */}
      {showToast && (
        <div className="fixed z-[9999] inset-0 pointer-events-none">
          <Toast message="✅ Applied Successfully!" onClose={handleCloseToast} />
        </div>
      )}
    </>
  );
};

export default ApplyModal;
