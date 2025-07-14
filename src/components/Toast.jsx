import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="absolute bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl animate-slide-in">
      <span className="text-lg">{message}</span>
    </div>
  );
};

export default Toast;
