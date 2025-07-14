// utils/sendEmail.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const sendEmail = async ({ to_name, to_email, address, city, total, items }) => {
  const itemList = items.map(item =>
    `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');

  const templateParams = {
    to_name,
    to_email,
    address,
    city,
    total: `$${Number(total).toFixed(2)}`,
    item_list: itemList
  };

  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('✅ Email sent:', result.text);
    return { success: true };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error };
  }
};
