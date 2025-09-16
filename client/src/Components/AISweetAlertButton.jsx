import React from 'react';
import Swal from 'sweetalert2';

const AISweetAlertButton = () => {

  const handleClick = () => {
    Swal.fire({
      title: 'Our AI is on the way!',
      text: 'Get ready for some amazing features.',
      icon: 'success', // or 'info'
      confirmButtonText: 'Cool!'
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-1  right-5 mt-7 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50 transition-colors duration-200 ease-in-out"
    >
      Ai Panel
    </button>
  );
};

export default AISweetAlertButton;