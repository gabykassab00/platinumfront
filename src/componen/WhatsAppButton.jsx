// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Using react-icons library
import '../style/WhatsAppButton.module.css'; // We'll create this next

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number (without +, spaces, or special characters)
  const phoneNumber = '1234567890'; 
  // Optional pre-filled message
  const message = 'Hello! I need help with my order...';
  
  // Generate the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;