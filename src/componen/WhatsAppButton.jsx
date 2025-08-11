// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from '../style/WhatsAppButton.module.css'; // Import as styles object

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Replace with your number
  const message = 'Hello! I need help with my order...';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.whatsappFloat}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className={styles.whatsappIcon} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
