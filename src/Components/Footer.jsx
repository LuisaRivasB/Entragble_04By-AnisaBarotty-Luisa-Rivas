import React from 'react';

const Footer = () => {
  return (
    <div className="w-full text-white text-xl text-center font-bold fixed bottom-0 bg-blue-700">
      <span>~Hecho con </span>
      <a href="https://www.academlo.com/" target="_blank" rel="noopener noreferrer">
        <i class="bx bx-heart-circle shadow-sm bx-burst text-3xl"></i>
      </a>
      <span> en Academlo~</span>
    </div>
  );
};

export default Footer;
