// import React from 'react';
// import styles from '../style/checkout.module.css'; // Make sure to create this CSS file
// import { useBasket } from '../context/BasketProvider';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();

//   const subtotal = basketItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
//   const discount = subtotal >= 12 ? subtotal * 0.05 : 0;
//   const shipping = 4.0;
//   const total = subtotal - discount + shipping;

//   return (
//     <div className={styles.checkoutContainer}>
//       {/* Left side: Contact + Delivery */}
//       <div className={styles.formSection}>
//         <h3>Contact</h3>
//         <input type="email" placeholder="Email or mobile phone number" />

//         <h3>Delivery</h3>
//         <select>
//           <option>Lebanon</option>
//         </select>
//         <input type="text" placeholder="First name" />
//         <input type="text" placeholder="Last name" />
//         <input type="text" placeholder="Address" />
//         <input type="text" placeholder="Apartment, suite, etc. (optional)" />
//         <input type="text" placeholder="City" />
//         <input type="text" placeholder="Postal code (optional)" />
//         <input type="text" placeholder="Phone" />

//         <h3>Shipping method</h3>
//         <div className={styles.shippingBox}>
//           <p>Delivery Fees<br /><small>15 to 20 days</small></p>
//           <p>$4.00</p>
//         </div>

//         <h3>Payment</h3>
//         <div className={styles.paymentBox}>Cash on Delivery (COD)</div>

//         <h3>Billing address</h3>
//         <div className={styles.billingBox}>
//           <label><input type="radio" defaultChecked /> Same as shipping address</label>
//           <label><input type="radio" /> Use a different billing address</label>
//         </div>

//         <button className={styles.completeBtn}>Complete order</button>
//       </div>

//       {/* Right side: Order Summary */}
//       <div className={styles.summarySection}>
//         <h4>Order Summary</h4>
//         {basketItems.map(item => (
//           <div key={item.id} className={styles.summaryItem}>
//             <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//             <div>
//               <p>{item.name}</p>
//               <p>{item.size}</p>
//               <p>${Number(item.price).toFixed(2)}</p>
//             </div>
//           </div>
//         ))}
//         <div className={styles.pricing}>
//           <p>Subtotal: ${subtotal.toFixed(2)}</p>
//           <p>Order discount: -${discount.toFixed(2)}</p>
//           <p>Shipping: ${shipping.toFixed(2)}</p>
//           <hr />
//           <h3>Total: ${total.toFixed(2)}</h3>
//           <p className={styles.savings}>TOTAL SAVINGS: ${discount.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 0;
//   const total = subtotal + shipping;

//   return (
//     <div className={styles.checkoutWrapper}>
//       <div className={styles.checkoutContainer}>
//         <div className={styles.left}>
//           <h2 className={styles.brand}>Beirut Free Zone</h2>

//           <form className={styles.checkoutForm}>
//             {/* Contact */}
//             <div className={styles.block}>
//               <h3>Contact</h3>
//               <input type="email" placeholder="Email or mobile phone number" />
//               <label className={styles.checkboxRow}>
//                 <input type="checkbox" />
//                 <span>Email me with news and offers</span>
//               </label>
//             </div>

//             {/* Delivery */}
//             <div className={styles.block}>
//               <h3>Delivery</h3>
//               <select>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.row}>
//                 <input type="text" placeholder="First name" />
//                 <input type="text" placeholder="Last name" />
//               </div>
//               <input type="text" placeholder="Address" />
//               <div className={styles.row}>
//                 <input type="text" placeholder="City" />
//                 <input type="text" placeholder="Postal code (optional)" />
//               </div>
//               <input type="text" placeholder="Phone" />
//               <label className={styles.checkboxRow}>
//                 <input type="checkbox" />
//                 <span>Save this information for next time</span>
//               </label>
//             </div>

//             {/* Shipping method */}
//             <div className={styles.block}>
//               <h3>Shipping method</h3>
//               <div className={styles.optionCard}>
//                 <span>Free</span>
//                 <strong>FREE</strong>
//               </div>
//             </div>

//             {/* Payment */}
//             <div className={styles.block}>
//               <h3>Payment</h3>
//               <p className={styles.subtext}>All transactions are secure and encrypted.</p>
//               <div className={styles.optionCardSelected}>
//                 <label className={styles.radioRow}>
//                   <input type="radio" defaultChecked />
//                   <span>Cash on Delivery (COD)</span>
//                 </label>
//                 <div className={styles.codNote}>
//                   Pay Cash On Delivery in USD or Lebanese Pounds Daily Rate. Please Try To Prepare The Exact Amount To Avoid Exchanging Problems Nowadays!
//                 </div>
//               </div>
//             </div>

//             {/* Billing address */}
//             <div className={styles.block}>
//               <h3>Billing address</h3>
//               <div className={styles.optionCardSelected}>
//                 <label className={styles.radioRow}>
//                   <input type="radio" defaultChecked />
//                   <span>Same as shipping address</span>
//                 </label>
//               </div>
//               <div className={styles.optionCard}>
//                 <label className={styles.radioRow}>
//                   <input type="radio" />
//                   <span>Use a different billing address</span>
//                 </label>
//               </div>
//             </div>

//             <button className={styles.completeBtn}>Complete order</button>

//             <div className={styles.footerLinks}>
//               <a href="#">Refund policy</a>
//               <a href="#">Privacy policy</a>
//               <a href="#">Terms of service</a>
//             </div>
//           </form>
//         </div>

//         {/* RIGHT SIDE - Order Summary */}
//         <div className={styles.right}>
//           {basketItems.map(item => (
//             <div key={item.id} className={styles.summaryItem}>
//               <div className={styles.productImage}>
//                 <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//                 <div className={styles.qtyBadge}>{item.quantity}</div>
//               </div>
//               <div>
//                 <p>{item.name}</p>
//                 <small>{item.size}</small>
//               </div>
//               <div className={styles.itemPrice}>
//                 ${(item.price * item.quantity).toFixed(2)}
//               </div>
//             </div>
//           ))}

//           <input className={styles.discountInput} type="text" placeholder="Discount code" />
//           <button className={styles.discountBtn} disabled>Apply</button>

//           <div className={styles.summaryTotals}>
//             <div>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div>
//               <span>Shipping</span>
//               <span>FREE</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <strong>USD ${total.toFixed(2)}</strong>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 0;
//   const total = subtotal + shipping;

//   return (
//     <div className={styles.checkoutWrapper}>
//       <div className={styles.gradientBg}></div>
//       <div className={styles.checkoutContainer}>
//         <div className={styles.left}>
//           <div className={styles.header}>
//             <h2 className={styles.brand}>BEIRUT FREE ZONE</h2>
//             <div className={styles.progressSteps}>
//               <span className={styles.activeStep}>1. Information</span>
//               <span>2. Shipping</span>
//               <span>3. Payment</span>
//             </div>
//           </div>

//           <form className={styles.checkoutForm}>
//             {/* Contact */}
//             <div className={styles.block}>
//               <h3>CONTACT INFORMATION</h3>
//               <div className={styles.inputField}>
//                 <input type="email" placeholder=" " />
//                 <label>Email or mobile phone number</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
//               <label className={styles.checkboxRow}>
//                 <div className={styles.customCheckbox}>
//                   <input type="checkbox" />
//                   <span className={styles.checkmark}></span>
//                 </div>
//                 <span>Email me with news and offers</span>
//               </label>
//             </div>

//             {/* Delivery */}
//             <div className={styles.block}>
//               <h3>DELIVERY ADDRESS</h3>
//               <div className={styles.inputField}>
//                 <select>
//                   <option>Lebanon</option>
//                 </select>
//                 <div className={styles.selectArrow}></div>
//               </div>
              
//               <div className={styles.row}>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " />
//                   <label>First name</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " />
//                   <label>Last name</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//               </div>
              
//               <div className={styles.inputField}>
//                 <input type="text" placeholder=" " />
//                 <label>Address</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
              
//               <div className={styles.row}>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " />
//                   <label>City</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " />
//                   <label>Postal code (optional)</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//               </div>
              
//               <div className={styles.inputField}>
//                 <input type="text" placeholder=" " />
//                 <label>Phone</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
              
//               <label className={styles.checkboxRow}>
//                 <div className={styles.customCheckbox}>
//                   <input type="checkbox" />
//                   <span className={styles.checkmark}></span>
//                 </div>
//                 <span>Save this information for next time</span>
//               </label>
//             </div>

//             {/* Shipping method */}
//             <div className={styles.block}>
//               <h3>SHIPPING METHOD</h3>
//               <div className={`${styles.optionCard} ${styles.selected}`}>
//                 <div className={styles.shippingIcon}>
//                   <svg viewBox="0 0 24 24">
//                     <path d="M5,16V7H3V16a3,3 0 0,0 3,3H19V16H5Z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span>Standard Shipping</span>
//                   <strong>FREE</strong>
//                 </div>
//                 <div className={styles.radioIndicator}></div>
//               </div>
//             </div>

//             {/* Payment */}
//             <div className={styles.block}>
//               <h3>PAYMENT METHOD</h3>
//               <p className={styles.subtext}>All transactions are secure and encrypted.</p>
//               <div className={`${styles.optionCard} ${styles.selected}`}>
//                 <div className={styles.paymentIcon}>
//                   <svg viewBox="0 0 24 24">
//                     <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span>Cash on Delivery (COD)</span>
//                   <div className={styles.codNote}>
//                     Pay Cash On Delivery in USD or Lebanese Pounds Daily Rate. Please Try To Prepare The Exact Amount To Avoid Exchanging Problems Nowadays!
//                   </div>
//                 </div>
//                 <div className={styles.radioIndicator}></div>
//               </div>
//             </div>

//             <button className={styles.completeBtn}>
//               COMPLETE ORDER
//               <span className={styles.btnArrow}>&rarr;</span>
//             </button>

//             <div className={styles.footerLinks}>
//               <a href="#">Refund policy</a>
//               <span>•</span>
//               <a href="#">Privacy policy</a>
//               <span>•</span>
//               <a href="#">Terms of service</a>
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className={styles.right}>
//           <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
          
//           <div className={styles.itemsList}>
//             {basketItems.map(item => (
//               <div key={item.id} className={styles.summaryItem}>
//                 <div className={styles.productImage}>
//                   <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//                   <div className={styles.qtyBadge}>{item.quantity}</div>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <p>{item.name}</p>
//                   <small>{item.size}</small>
//                 </div>
//                 <div className={styles.itemPrice}>
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.discountSection}>
//             <div className={styles.inputField}>
//               <input type="text" placeholder=" " />
//               <label>Discount code</label>
//               <div className={styles.inputBorder}></div>
//             </div>
//             <button className={styles.discountBtn}>APPLY</button>
//           </div>

//           <div className={styles.summaryTotals}>
//             <div>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div>
//               <span>Shipping</span>
//               <span>FREE</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <div>
//                 <span className={styles.currency}>USD</span>
//                 <strong>${total.toFixed(2)}</strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;















// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const navigate = useNavigate();
//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 0;
//   const total = subtotal + shipping;

//   const handlePolicyNavigation = (policyType) => {
//     // Replace with your actual navigation logic
//     console.log(`Navigating to ${policyType} policy`);
//     // Example with React Router:
//     // navigate(`/${policyType}-policy`);
//   };

//   return (
//     <div className={styles.checkoutWrapper}>
//       <div className={styles.gradientBg}></div>
//       <div className={styles.checkoutContainer}>
//         <div className={styles.left}>
//           <div className={styles.header}>
//             <h2 className={styles.brand}>BEIRUT FREE ZONE</h2>
//             <div className={styles.progressSteps}>
//               <span className={styles.activeStep}>1. Information</span>
//               <span>2. Shipping</span>
//               <span>3. Payment</span>
//             </div>
//           </div>

//           <form className={styles.checkoutForm}>
//             {/* Contact */}
//             <div className={styles.block}>
//               <h3>CONTACT INFORMATION</h3>
//               <div className={styles.inputField}>
//                 <input type="email" placeholder=" " required />
//                 <label>Email or mobile phone number</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
//               <label className={styles.checkboxRow}>
//                 <div className={styles.customCheckbox}>
//                   <input type="checkbox" />
//                   <span className={styles.checkmark}></span>
//                 </div>
//                 <span>Email me with news and offers</span>
//               </label>
//             </div>

//             {/* Delivery */}
//             <div className={styles.block}>
//               <h3>DELIVERY ADDRESS</h3>
//               <div className={styles.inputField}>
//                 <select defaultValue="Lebanon" required>
//                   <option value="Lebanon">Lebanon</option>
//                 </select>
//                 <div className={styles.selectArrow}></div>
//               </div>
              
//               <div className={styles.row}>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " required />
//                   <label>First name</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " required />
//                   <label>Last name</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//               </div>
              
//               <div className={styles.inputField}>
//                 <input type="text" placeholder=" " required />
//                 <label>Address</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
              
//               <div className={styles.row}>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " required />
//                   <label>City</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//                 <div className={styles.inputField}>
//                   <input type="text" placeholder=" " />
//                   <label>Postal code (optional)</label>
//                   <div className={styles.inputBorder}></div>
//                 </div>
//               </div>
              
//               <div className={styles.inputField}>
//                 <input type="tel" placeholder=" " required />
//                 <label>Phone</label>
//                 <div className={styles.inputBorder}></div>
//               </div>
              
//               <label className={styles.checkboxRow}>
//                 <div className={styles.customCheckbox}>
//                   <input type="checkbox" />
//                   <span className={styles.checkmark}></span>
//                 </div>
//                 <span>Save this information for next time</span>
//               </label>
//             </div>

//             {/* Shipping method */}
//             <div className={styles.block}>
//               <h3>SHIPPING METHOD</h3>
//               <div className={`${styles.optionCard} ${styles.selected}`}>
//                 <div className={styles.shippingIcon}>
//                   <svg viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M5,16V7H3V16a3,3 0 0,0 3,3H19V16H5Z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span>Standard Shipping</span>
//                   <strong>FREE</strong>
//                 </div>
//                 <div className={styles.radioIndicator}></div>
//               </div>
//             </div>

//             {/* Payment */}
//             <div className={styles.block}>
//               <h3>PAYMENT METHOD</h3>
//               <p className={styles.subtext}>All transactions are secure and encrypted.</p>
//               <div className={`${styles.optionCard} ${styles.selected}`}>
//                 <div className={styles.paymentIcon}>
//                   <svg viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <span>Cash on Delivery (COD)</span>
//                   <div className={styles.codNote}>
//                     Pay Cash On Delivery in USD or Lebanese Pounds Daily Rate. Please Try To Prepare The Exact Amount To Avoid Exchanging Problems Nowadays!
//                   </div>
//                 </div>
//                 <div className={styles.radioIndicator}></div>
//               </div>
//             </div>

//             <button type="submit" className={styles.completeBtn}>
//               COMPLETE ORDER
//               <span className={styles.btnArrow}>&rarr;</span>
//             </button>

//             <div className={styles.footerLinks}>
//               <button 
//                 type="button"
//                 className={styles.linkButton}
//                 onClick={() => handlePolicyNavigation('refund')}
//               >
//                 Refund policy
//               </button>
//               <span>•</span>
//               <button 
//                 type="button"
//                 className={styles.linkButton}
//                 onClick={() => handlePolicyNavigation('privacy')}
//               >
//                 Privacy policy
//               </button>
//               <span>•</span>
//               <button 
//                 type="button"
//                 className={styles.linkButton}
//                 onClick={() => handlePolicyNavigation('terms')}
//               >
//                 Terms of service
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className={styles.right}>
//           <h3 className={styles.summaryTitle}>ORDER SUMMARY</h3>
          
//           <div className={styles.itemsList}>
//             {basketItems.map(item => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.productImage}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     loading="lazy"
//                   />
//                   <div className={styles.qtyBadge}>{item.quantity}</div>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <p>{item.name}</p>
//                   <small>{item.size}</small>
//                 </div>
//                 <div className={styles.itemPrice}>
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.discountSection}>
//             <div className={styles.inputField}>
//               <input type="text" placeholder=" " id="discountCode" />
//               <label htmlFor="discountCode">Discount code</label>
//               <div className={styles.inputBorder}></div>
//             </div>
//             <button type="button" className={styles.discountBtn}>APPLY</button>
//           </div>

//           <div className={styles.summaryTotals}>
//             <div>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div>
//               <span>Shipping</span>
//               <span>FREE</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <div>
//                 <span className={styles.currency}>USD</span>
//                 <strong>${total.toFixed(2)}</strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;












// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.mainContent}>
//         {/* Delivery Section */}
//         <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Delivery</h2>
//           <div className={styles.formGroup}>
//             <label>Country/Region</label>
//             <select className={styles.input}>
//               <option>Lebanon</option>
//             </select>
//           </div>
          
//           <div className={styles.row}>
//             <div className={styles.formGroup}>
//               <label>First name</label>
//               <input type="text" className={styles.input} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Last name</label>
//               <input type="text" className={styles.input} />
//             </div>
//           </div>
          
//           <div className={styles.formGroup}>
//             <label>Address</label>
//             <input type="text" className={styles.input} />
//           </div>
          
//           <div className={styles.formGroup}>
//             <label>Apartment, suite, etc. (optional)</label>
//             <input type="text" className={styles.input} />
//           </div>
          
//           <div className={styles.row}>
//             <div className={styles.formGroup}>
//               <label>City</label>
//               <input type="text" className={styles.input} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Postal code (optional)</label>
//               <input type="text" className={styles.input} />
//             </div>
//           </div>
          
//           <div className={styles.formGroup}>
//             <label>Phone</label>
//             <input type="tel" className={styles.input} />
//           </div>
          
//           <label className={styles.checkboxContainer}>
//             <input type="checkbox" />
//             <span className={styles.checkmark}></span>
//             Save this information for next time
//           </label>
//         </div>

//         {/* Shipping Method Section */}
//         <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Shipping method</h2>
//           <div className={styles.shippingOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="shipping" defaultChecked />
//               <span className={styles.radioCheckmark}></span>
//               <div className={styles.shippingDetails}>
//                 <span>Standard Shipping</span>
//                 <small>Deliveries will take up to 5 working days</small>
//               </div>
//               <span className={styles.shippingPrice}>$3.00</span>
//             </label>
//           </div>
//         </div>

//         {/* Payment Section */}
//         <div className={styles.section}>
//           <h2 className={styles.sectionTitle}>Payment</h2>
//           <p className={styles.paymentNote}>All transactions are secure and encrypted.</p>
          
//           <div className={styles.paymentOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="payment" />
//               <span className={styles.radioCheckmark}></span>
//               Credit card
//             </label>
//           </div>
          
//           <div className={styles.paymentOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="payment" defaultChecked />
//               <span className={styles.radioCheckmark}></span>
//               <div>
//                 <span>Cash on Delivery (COD)</span>
//                 <p className={styles.codNote}>
//                   Cash on Delivery – USD Only<br />
//                   Please note that this payment method is only available for orders within Lebanon and does not support international shipments. Additionally, gift card purchases are not eligible for Cash on Delivery and must be paid online using a valid Visa or Mastercard.
//                 </p>
//               </div>
//             </label>
//           </div>
          
//           <div className={styles.paymentOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="payment" />
//               <span className={styles.radioCheckmark}></span>
//               Suyool Payment
//             </label>
//           </div>
//         </div>

//         {/* Billing Address */}
//         <div className={styles.section}>
//           <h3 className={styles.subsectionTitle}>Billing address</h3>
//           <div className={styles.paymentOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="billing" defaultChecked />
//               <span className={styles.radioCheckmark}></span>
//               Same as shipping address
//             </label>
//           </div>
//           <div className={styles.paymentOption}>
//             <label className={styles.radioContainer}>
//               <input type="radio" name="billing" />
//               <span className={styles.radioCheckmark}></span>
//               Use a different billing address
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.orderSummary}>
//         <h3 className={styles.summaryTitle}>Order Summary</h3>
        
//         <div className={styles.cartItem}>
//           <img src="/path-to-product-image.jpg" alt="Puma S Men Lit L" />
//           <div>
//             <p>Puma S Men Lit L</p>
//           </div>
//         </div>
        
//         <div className={styles.discountSection}>
//           <input 
//             type="text" 
//             placeholder="Discount code or gift card" 
//             className={styles.discountInput}
//           />
//           <button className={styles.applyButton}>Apply</button>
//         </div>
        
//         <div className={styles.priceBreakdown}>
//           <div className={styles.priceRow}>
//             <span>Subtotal</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className={styles.priceRow}>
//             <span>Shipping</span>
//             <span>${shipping.toFixed(2)}</span>
//           </div>
//           <div className={styles.totalRow}>
//             <span>Total</span>
//             <strong>${total.toFixed(2)}</strong>
//           </div>
//         </div>
        
//         <button className={styles.completeButton}>Complete order</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;









// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
          
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput}>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <label>First name</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Last name</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <label>Address</label>
//             <input type="text" className={styles.textInput} />
//           </div>

//           <div className={styles.formGroup}>
//             <label>Apartment, suite, etc. (optional)</label>
//             <input type="text" className={styles.textInput} />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <label>City</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Postal code (optional)</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <label>Phone</label>
//             <input type="tel" className={styles.textInput} />
//           </div>

//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Save this information for next time
//           </label>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" checked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Standard Shipping</span>
//               <span className={styles.optionDescription}>Now we are here only to run every step</span>
//             </div>
//             <span className={styles.shippingPrice}>$3.00</span>
//           </label>
//         </section>

//         {/* Payment Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are stored and encrypted.</p>
          
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" checked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <span className={styles.optionTitle}>Credit card</span>
//           </label>
          
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Cash delivery. As copyright returned to any available for orders within substore and does not have such payment material as currency, all of our customers are not eligible for Cash on Delivery and that is paid online using a call or an headcount.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
          
//           <div className={styles.itemsCount}>5 items</div>
          
//           <div className={styles.summaryItem}>
//             <div className={styles.itemName}>Please 5 item (a.t.)</div>
//             <div className={styles.itemPrice}>$1mn</div>
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>$0.00</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>$3.00</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>$3.00</span>
//             </div>
//           </div>
          
//           <button className={styles.completeButton}>Complete order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;






// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
          
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput}>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <label>First name</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Last name</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <label>Address</label>
//             <input type="text" className={styles.textInput} />
//           </div>

//           <div className={styles.formGroup}>
//             <label>Apartment, suite, etc. (optional)</label>
//             <input type="text" className={styles.textInput} />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <label>City</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <label>Postal code (optional)</label>
//               <input type="text" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <label>Phone</label>
//             <input type="tel" className={styles.textInput} />
//           </div>

//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Save this information for next time
//           </label>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Standard Shipping</span>
//               <span className={styles.optionDescription}>Now we are here only to run every step</span>
//             </div>
//             <span className={styles.shippingPrice}>$3.00</span>
//           </label>
//         </section>

//         {/* Payment Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are stored and encrypted.</p>
          

          
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Cash delivery. As copyright returned to any available for orders within substore and does not have such payment material as currency, all of our customers are not eligible for Cash on Delivery and that is paid online using a call or an headcount.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
          
//           <div className={styles.itemsCount}>{basketItems.reduce((sum, item) => sum + item.quantity, 0)} items</div>
          
//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     className={styles.itemImage}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
          
//           <button className={styles.completeButton}>Complete order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;










// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         {/* Contact Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//             />
//           </div>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Email me with news and offers
//           </label>
//         </section>

//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
          
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput}>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="First name" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="Last name" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Address" className={styles.textInput} />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="City" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="Postal code (optional)" className={styles.textInput} />
//             </div>
//           </div>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>

//             <div className={styles.optionContent}>
//   <div className={styles.optionRow}>
//     <span className={styles.optionTitle}>Standard Shipping</span>
//     <span className={styles.shippingPrice}>$3.00</span>
//   </div>
//   <span className={styles.optionDescription}>Deliveries will take up to 5 working days</span>
// </div>
//           </label>
//         </section>

//         {/* Payment Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are stored and encrypted.</p>
          
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Cash delivery. As copyright returned to any available for orders within substore and does not have such payment material as currency, all of our customers are not eligible for Cash on Delivery and that is paid online using a call or an headcount.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Order Summary */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
          
//           <div className={styles.itemsCount}>{itemCount} {itemCount === 1 ? 'item' : 'items'}</div>
          
//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     className={styles.itemImage}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
          
//           <button className={styles.completeButton}>Complete order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;







// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems } = useBasket();
//   const navigate = useNavigate();
//   const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   // Empty cart state
//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button 
//             onClick={() => navigate('/')} 
//             className={styles.continueShoppingButton}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       {/* Left Column (Contact, Delivery, Payment) */}
//       <div className={styles.leftColumn}>
//         {/* Contact Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//             />
//           </div>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Email me with news and offers
//           </label>
//         </section>

//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput}>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="First name" className={styles.textInput}  />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="Last name" className={styles.textInput} />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input type="text" placeholder="Address" className={styles.textInput} />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="City" className={styles.textInput} />
//             </div>
//             <div className={styles.formGroup}>
//               <input type="text" placeholder="Postal code (optional)" className={styles.textInput} />
//             </div>
//           </div>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <div className={styles.optionRow}>
//                 <span className={styles.optionTitle}>Standard Shipping</span>
//                 <span className={styles.shippingPrice}>$3.00</span>
//               </div>
//               <span className={styles.optionDescription}>Deliveries will take up to 5 working days</span>
//             </div>
//           </label>
//         </section>

//         {/* Payment Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are secure and encrypted.</p>
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Pay in cash when your order is delivered. Available for orders within Lebanon.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Right Column (Order Summary) */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>
//             {itemCount} {itemCount === 1 ? 'item' : 'items'}
//           </div>
          
//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     className={styles.itemImage}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
          
//           <button className={styles.completeButton}>Complete Order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;





















// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
//   const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handleCompleteOrder = () => {
//     // Process order logic here
//     clearCart();
//     navigate('/order-confirmation');
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button 
//             onClick={() => navigate('/')} 
//             className={styles.continueShoppingButton}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//               required
//             />
//           </div>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Email me with news and offers
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput} required>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="First name" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="Last name" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Address" 
//               className={styles.textInput}
//               required 
//             />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="City" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="Postal code (optional)" 
//                 className={styles.textInput} 
//               />
//             </div>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input 
//               type="radio" 
//               name="shipping" 
//               defaultChecked 
//               className={styles.radioInput} 
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <div className={styles.optionRow}>
//                 <span className={styles.optionTitle}>Standard Shipping</span>
//                 <span className={styles.shippingPrice}>$3.00</span>
//               </div>
//               <span className={styles.optionDescription}>
//                 Deliveries will take up to 5 working days
//               </span>
//             </div>
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are secure and encrypted.</p>
//           <label className={styles.radioOption}>
//             <input 
//               type="radio" 
//               name="payment" 
//               className={styles.radioInput} 
//               required
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Pay in cash when your order is delivered. Available for orders within Lebanon.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>
//             {itemCount} {itemCount === 1 ? 'item' : 'items'}
//           </div>
          
//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     className={styles.itemImage}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = '/placeholder-product.jpg';
//                     }}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
          
//           <button 
//             className={styles.completeButton}
//             onClick={handleCompleteOrder}
//           >
//             Complete Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




















// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
//   const subtotal = basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const shipping = 3.00;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handleCompleteOrder = () => {
//     // Process order logic here
//     clearCart();
//     navigate('/order-confirmation');
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button 
//             onClick={() => navigate('/')} 
//             className={styles.continueShoppingButton}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//               required
//             />
//           </div>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Email me with news and offers
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput} required>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="First name" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="Last name" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input 
//               type="text" 
//               placeholder="Address" 
//               className={styles.textInput}
//               required 
//             />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="City" 
//                 className={styles.textInput}
//                 required 
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input 
//                 type="text" 
//                 placeholder="Postal code (optional)" 
//                 className={styles.textInput} 
//               />
//             </div>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input 
//               type="radio" 
//               name="shipping" 
//               defaultChecked 
//               className={styles.radioInput} 
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <div className={styles.optionRow}>
//                 <span className={styles.optionTitle}>Standard Shipping</span>
//                 <span className={styles.shippingPrice}>$3.00</span>
//               </div>
//               <span className={styles.optionDescription}>
//                 Deliveries will take up to 5 working days
//               </span>
//             </div>
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>All transactions are secure and encrypted.</p>
//           <label className={styles.radioOption}>
//             <input 
//               type="radio" 
//               name="payment" 
//               className={styles.radioInput} 
//               required
//               defaultChecked  // ✅ Add this
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>
//                 Pay in cash when your order is delivered. Available for orders within Lebanon.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>
//             {itemCount} {itemCount === 1 ? 'item' : 'items'}
//           </div>
          
//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img 
//                     src={`http://localhost:5000/${item.image_path}`} 
//                     alt={item.name} 
//                     className={styles.itemImage}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = '/placeholder-product.jpg';
//                     }}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>
          
//           <div className={styles.discountSection}>
//             <input 
//               type="text" 
//               placeholder="Discount code or gift card" 
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>
          
//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>
          
//           <button 
//             className={styles.completeButton}
//             onClick={handleCompleteOrder}
//           >
//             Complete Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;












// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_API_URL;

//   const subtotal = basketItems.reduce(
//     (sum, item) => sum + (item.price * item.quantity),
//     0
//   );
//   const shipping = 3.0;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const handleCompleteOrder = () => {
//     clearCart();
//     navigate('/order-confirmation');
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button
//             onClick={() => navigate('/')}
//             className={styles.continueShoppingButton}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//               required
//             />
//           </div>
//           <label className={styles.checkboxLabel}>
//             <input type="checkbox" className={styles.checkboxInput} />
//             <span className={styles.customCheckbox}></span>
//             Email me with news and offers
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.formSection}>
//             <h2 className={styles.subsectionTitle}>Country/Region</h2>
//             <div className={styles.selectWrapper}>
//               <select className={styles.selectInput} required>
//                 <option>Lebanon</option>
//               </select>
//               <div className={styles.selectArrow}>▼</div>
//             </div>
//           </div>

//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className={styles.textInput}
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className={styles.textInput}
//                 required
//               />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="Address"
//               className={styles.textInput}
//               required
//             />
//           </div>

//           <div className={styles.locationRow}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="City"
//                 className={styles.textInput}
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Postal code (optional)"
//                 className={styles.textInput}
//               />
//             </div>
//           </div>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping method</h1>
//           <label className={styles.radioOption}>
//             <input
//               type="radio"
//               name="shipping"
//               defaultChecked
//               className={styles.radioInput}
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <div className={styles.optionRow}>
//                 <span className={styles.optionTitle}>Standard Shipping</span>
//                 <span className={styles.shippingPrice}>$3.00</span>
//               </div>
//               <span className={styles.optionDescription}>
//                 Deliveries will take up to 5 working days
//               </span>
//             </div>
//           </label>
//         </section>

//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <p className={styles.paymentNote}>
//             All transactions are secure and encrypted.
//           </p>
//           <label className={styles.radioOption}>
//             <input
//               type="radio"
//               name="payment"
//               className={styles.radioInput}
//               required
//               defaultChecked
//             />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>
//                 Cash on Delivery (COD)
//               </span>
//               <p className={styles.optionDescription}>
//                 Pay in cash when your order is delivered. Available for orders
//                 within Lebanon.
//               </p>
//             </div>
//           </label>
//         </section>
//       </div>

//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>
//             {itemCount} {itemCount === 1 ? 'item' : 'items'}
//           </div>

//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div
//                 key={`${item.id}-${item.size}`}
//                 className={styles.summaryItem}
//               >
//                 <div className={styles.itemImageContainer}>
//                   <img
//                     src={`${API_URL}/${item.image_path}`}
//                     alt={item.name}
//                     className={styles.itemImage}
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = '/placeholder-product.jpg';
//                     }}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.discountSection}>
//             <input
//               type="text"
//               placeholder="Discount code or gift card"
//               className={styles.discountInput}
//             />
//             <button className={styles.applyButton}>Apply</button>
//           </div>

//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>

//           <button
//             className={styles.completeButton}
//             onClick={handleCompleteOrder}
//           >
//             Complete Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


































import React from 'react';
import { useBasket } from '../context/BasketProvider';
import { useNavigate } from 'react-router-dom';
import styles from '../style/checkout.module.css';
import emailjs from '@emailjs/browser';

const CheckoutPage = () => {
  const { basketItems, clearCart } = useBasket();
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const subtotal = basketItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
  const shipping = 3.0;
  const total = subtotal + shipping;
  const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCompleteOrder = () => {
const templateParams = {
  customer_email: 'test@example.com',
  first_name: 'John',
  last_name: 'Doe',
  delivery_address: '123 Main St, Beirut',
  order_total: total.toFixed(2),
  product_name: basketItems[0]?.name || 'N/A',
  product_size: basketItems[0]?.size || 'N/A',
  product_quantity: basketItems[0]?.quantity || 1,
  product_price: (Number(basketItems[0]?.price || 0) * Number(basketItems[0]?.quantity || 1)).toFixed(2)
};


    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('✅ Email sent', result.text);
      clearCart();
      navigate('/order-confirmation');
    })
    .catch((error) => {
      console.error('❌ Email send failed:', error);
      alert('Order submitted but email failed to send.');
    });
  };

  if (basketItems.length === 0) {
    return (
      <div className={styles.emptyCartContainer}>
        <div className={styles.emptyCartContent}>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <button
            onClick={() => navigate('/')}
            className={styles.continueShoppingButton}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.leftColumn}>
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Contact</h1>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className={styles.textInput}
              required
            />
          </div>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkboxInput} />
            <span className={styles.customCheckbox}></span>
            Email me with news and offers
          </label>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Delivery</h1>
          <div className={styles.formSection}>
            <h2 className={styles.subsectionTitle}>Country/Region</h2>
            <div className={styles.selectWrapper}>
              <select className={styles.selectInput} required>
                <option>Lebanon</option>
              </select>
              <div className={styles.selectArrow}>▼</div>
            </div>
          </div>

          <div className={styles.nameRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="First name"
                className={styles.textInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Last name"
                className={styles.textInput}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Address"
              className={styles.textInput}
              required
            />
          </div>

          <div className={styles.locationRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="City"
                className={styles.textInput}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Postal code (optional)"
                className={styles.textInput}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Shipping method</h1>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="shipping"
              defaultChecked
              className={styles.radioInput}
            />
            <span className={styles.customRadio}></span>
            <div className={styles.optionContent}>
              <div className={styles.optionRow}>
                <span className={styles.optionTitle}>Standard Shipping</span>
                <span className={styles.shippingPrice}>$3.00</span>
              </div>
              <span className={styles.optionDescription}>
                Deliveries will take up to 5 working days
              </span>
            </div>
          </label>
        </section>

        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Payment</h1>
          <p className={styles.paymentNote}>
            All transactions are secure and encrypted.
          </p>
          <label className={styles.radioOption}>
            <input
              type="radio"
              name="payment"
              className={styles.radioInput}
              required
              defaultChecked
            />
            <span className={styles.customRadio}></span>
            <div className={styles.optionContent}>
              <span className={styles.optionTitle}>
                Cash on Delivery (COD)
              </span>
              <p className={styles.optionDescription}>
                Pay in cash when your order is delivered. Available for orders
                within Lebanon.
              </p>
            </div>
          </label>
        </section>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.summaryCard}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.itemsCount}>
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </div>

          <div className={styles.itemsList}>
            {basketItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className={styles.summaryItem}
              >
                <div className={styles.itemImageContainer}>
                  <img
                    src={`${API_URL}/${item.image_path}`}
                    alt={item.name}
                    className={styles.itemImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-product.jpg';
                    }}
                  />
                  <span className={styles.itemQuantity}>{item.quantity}</span>
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemSize}>{item.size}</div>
                </div>
                <div className={styles.itemPrice}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.discountSection}>
            <input
              type="text"
              placeholder="Discount code or gift card"
              className={styles.discountInput}
            />
            <button className={styles.applyButton}>Apply</button>
          </div>

          <div className={styles.priceBreakdown}>
            <div className={styles.priceRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className={styles.completeButton}
            onClick={handleCompleteOrder}
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;










// xxxx
// import React, { useState } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_API_URL;

//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [sending, setSending] = useState(false);

//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.0;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required.';
//     if (!formData.firstName) newErrors.firstName = 'First name is required.';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required.';
//     if (!formData.address) newErrors.address = 'Address is required.';
//     if (!formData.city) newErrors.city = 'City is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleCompleteOrder = async () => {
//     if (!validateForm()) return;

// const payload = {
//   to_name: `${formData.firstName} ${formData.lastName}`,
//   to_email: formData.email,
//   address: formData.address,
//   city: formData.city,
//   items: basketItems,
//   total: Number(total)
// };


//     try {
//       setSending(true);
//       // const response = await fetch(`${API_URL}/api/email/send`,
//       const response = await fetch(`${API_URL}/api/email/send-confirmation`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) throw new Error('Failed to send email');

//       clearCart();
//       navigate('/order-confirmation');
//     } catch (err) {
//       alert('There was an error sending your order email. Please try again.');
//       console.error(err);
//     } finally {
//       setSending(false);
//     }
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button onClick={() => navigate('/')} className={styles.continueShoppingButton}>
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         {/* Contact Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input
//               type="email"
//               placeholder="Email or mobile phone number"
//               className={styles.textInput}
//               value={formData.email}
//               onChange={(e) => handleInputChange('email', e.target.value)}
//             />
//             {errors.email && <p className={styles.errorText}>{errors.email}</p>}
//           </div>
//         </section>

//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className={styles.textInput}
//                 value={formData.firstName}
//                 onChange={(e) => handleInputChange('firstName', e.target.value)}
//               />
//               {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className={styles.textInput}
//                 value={formData.lastName}
//                 onChange={(e) => handleInputChange('lastName', e.target.value)}
//               />
//               {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="Address"
//               className={styles.textInput}
//               value={formData.address}
//               onChange={(e) => handleInputChange('address', e.target.value)}
//             />
//             {errors.address && <p className={styles.errorText}>{errors.address}</p>}
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="City"
//               className={styles.textInput}
//               value={formData.city}
//               onChange={(e) => handleInputChange('city', e.target.value)}
//             />
//             {errors.city && <p className={styles.errorText}>{errors.city}</p>}
//           </div>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping Method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Standard Shipping</span>
//               <span className={styles.shippingPrice}>$3.00</span>
//             </div>
//           </label>
//         </section>

//         {/* Payment Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>Pay in cash when your order is delivered.</p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Right Column: Summary */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>{itemCount} item(s)</div>

//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img
//                     src={`${API_URL}/${item.image_path}`}
//                     alt={item.name}
//                     className={styles.itemImage}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>

//           <button
//             className={styles.completeButton}
//             onClick={handleCompleteOrder}
//             disabled={sending}
//           >
//             {sending ? 'Sending...' : 'Complete Order'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
































// import React, { useState } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';
// import emailjs from '@emailjs/browser';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
//   const API_URL = process.env.REACT_APP_API_URL;

//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [sending, setSending] = useState(false);

//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.0;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required.';
//     if (!formData.firstName) newErrors.firstName = 'First name is required.';
//     if (!formData.lastName) newErrors.lastName = 'Last name is required.';
//     if (!formData.address) newErrors.address = 'Address is required.';
//     if (!formData.city) newErrors.city = 'City is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleCompleteOrder = async () => {
//     if (!validateForm()) return;

//     const itemList = basketItems.map(item =>
//       `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
//     ).join('\n');

//     const templateParams = {
//       to_name: `${formData.firstName} ${formData.lastName}`,
//       to_email: formData.email,
//       address: formData.address,
//       city: formData.city,
//       total: `$${total.toFixed(2)}`,
//       item_list: itemList
//     };

//     console.log('📦 Sending EmailJS request with:', {
//       service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
//       template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//       publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
//       templateParams
//     });

//     try {
//       setSending(true);
//       const result = await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );
//       console.log('✅ Email sent successfully:', result.text);
//       clearCart();
//       navigate('/order-confirmation');
//     } catch (error) {
//       console.error('❌ Failed to send email:', error);
//       alert('There was an error sending your order confirmation. Please check your email or try again.');
//     } finally {
//       setSending(false);
//     }
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <div className={styles.emptyCartContent}>
//           <h2>Your cart is empty</h2>
//           <p>Looks like you haven't added anything to your cart yet.</p>
//           <button onClick={() => navigate('/')} className={styles.continueShoppingButton}>
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         {/* Contact Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Contact</h1>
//           <div className={styles.formGroup}>
//             <input
//               type="email"
//               placeholder="Email"
//               className={styles.textInput}
//               value={formData.email}
//               onChange={(e) => handleInputChange('email', e.target.value)}
//             />
//             {errors.email && <p className={styles.errorText}>{errors.email}</p>}
//           </div>
//         </section>

//         {/* Delivery Section */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Delivery</h1>
//           <div className={styles.nameRow}>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className={styles.textInput}
//                 value={formData.firstName}
//                 onChange={(e) => handleInputChange('firstName', e.target.value)}
//               />
//               {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
//             </div>
//             <div className={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className={styles.textInput}
//                 value={formData.lastName}
//                 onChange={(e) => handleInputChange('lastName', e.target.value)}
//               />
//               {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="Address"
//               className={styles.textInput}
//               value={formData.address}
//               onChange={(e) => handleInputChange('address', e.target.value)}
//             />
//             {errors.address && <p className={styles.errorText}>{errors.address}</p>}
//           </div>

//           <div className={styles.formGroup}>
//             <input
//               type="text"
//               placeholder="City"
//               className={styles.textInput}
//               value={formData.city}
//               onChange={(e) => handleInputChange('city', e.target.value)}
//             />
//             {errors.city && <p className={styles.errorText}>{errors.city}</p>}
//           </div>
//         </section>

//         {/* Shipping Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Shipping Method</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="shipping" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Standard Shipping</span>
//               <span className={styles.shippingPrice}>$3.00</span>
//             </div>
//           </label>
//         </section>

//         {/* Payment Method */}
//         <section className={styles.section}>
//           <h1 className={styles.sectionTitle}>Payment</h1>
//           <label className={styles.radioOption}>
//             <input type="radio" name="payment" defaultChecked className={styles.radioInput} />
//             <span className={styles.customRadio}></span>
//             <div className={styles.optionContent}>
//               <span className={styles.optionTitle}>Cash on Delivery (COD)</span>
//               <p className={styles.optionDescription}>Pay in cash when your order is delivered.</p>
//             </div>
//           </label>
//         </section>
//       </div>

//       {/* Right Column: Summary */}
//       <div className={styles.rightColumn}>
//         <div className={styles.summaryCard}>
//           <h2 className={styles.summaryTitle}>Order Summary</h2>
//           <div className={styles.itemsCount}>{itemCount} item(s)</div>

//           <div className={styles.itemsList}>
//             {basketItems.map((item) => (
//               <div key={`${item.id}-${item.size}`} className={styles.summaryItem}>
//                 <div className={styles.itemImageContainer}>
//                   <img
//                     src={`${API_URL}/${item.image_path}`}
//                     alt={item.name}
//                     className={styles.itemImage}
//                   />
//                   <span className={styles.itemQuantity}>{item.quantity}</span>
//                 </div>
//                 <div className={styles.itemDetails}>
//                   <div className={styles.itemName}>{item.name}</div>
//                   <div className={styles.itemSize}>{item.size}</div>
//                 </div>
//                 <div className={styles.itemPrice}>
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className={styles.priceBreakdown}>
//             <div className={styles.priceRow}>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className={styles.priceRow}>
//               <span>Shipping</span>
//               <span>${shipping.toFixed(2)}</span>
//             </div>
//             <div className={styles.totalRow}>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//           </div>

//           <button
//             className={styles.completeButton}
//             onClick={handleCompleteOrder}
//             disabled={sending}
//           >
//             {sending ? 'Sending...' : 'Complete Order'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;













// import React, { useState } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';
// import emailjs from '@emailjs/browser';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [sending, setSending] = useState(false);

//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.0;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email is required.';
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid.';
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
//     if (!formData.address.trim()) newErrors.address = 'Address is required.';
//     if (!formData.city.trim()) newErrors.city = 'City is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
//   };

//   const prepareTemplateParams = () => {
//     return {
//       customer_email: formData.email, // Changed from 'email' to 'customer_email' for clarity
//       first_name: formData.firstName,  // Changed to snake_case for consistency
//       last_name: formData.lastName,
//       delivery_address: `${formData.address}, ${formData.city}`, // Combined address fields
//       order_total: total.toFixed(2),
//       order_items: basketItems.map(item => ({
//         product_name: item.name,
//         product_size: item.size,
//         product_quantity: item.quantity,
//         product_price: (item.price * item.quantity).toFixed(2),
//       }))
//     };
//   };

//   const handleCompleteOrder = async () => {
//     if (!validateForm()) return;

//     try {
//       setSending(true);
      
//       const templateParams = prepareTemplateParams();
//       console.log('Sending email with params:', templateParams); // Debugging

//       await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );
      
//       clearCart();
//       navigate('/order-confirmation');
//     } catch (error) {
//       console.error('Email sending failed:', error);
//       alert('Order submission failed. Please try again or contact support.');
//     } finally {
//       setSending(false);
//     }
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <h2>Your cart is empty</h2>
//         <button onClick={() => navigate('/')} className={styles.continueShoppingButton}>
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         <section className={styles.section}>
//           <h1>Contact</h1>
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//             className={`${styles.textInput} ${errors.email ? styles.errorInput : ''}`}
//           />
//           {errors.email && <p className={styles.errorText}>{errors.email}</p>}
//         </section>

//         <section className={styles.section}>
//           <h1>Delivery</h1>
//           <div className={styles.nameRow}>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={(e) => handleInputChange('firstName', e.target.value)}
//               className={`${styles.textInput} ${styles.halfWidth} ${errors.firstName ? styles.errorInput : ''}`}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={(e) => handleInputChange('lastName', e.target.value)}
//               className={`${styles.textInput} ${styles.halfWidth} ${errors.lastName ? styles.errorInput : ''}`}
//             />
//           </div>
//           {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
//           {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}

//           <input
//             type="text"
//             placeholder="Address"
//             value={formData.address}
//             onChange={(e) => handleInputChange('address', e.target.value)}
//             className={`${styles.textInput} ${errors.address ? styles.errorInput : ''}`}
//           />
//           {errors.address && <p className={styles.errorText}>{errors.address}</p>}

//           <input
//             type="text"
//             placeholder="City"
//             value={formData.city}
//             onChange={(e) => handleInputChange('city', e.target.value)}
//             className={`${styles.textInput} ${errors.city ? styles.errorInput : ''}`}
//           />
//           {errors.city && <p className={styles.errorText}>{errors.city}</p>}
//         </section>

//         <section className={styles.section}>
//           <h1>Shipping Method</h1>
//           <p>Standard Shipping — $3.00</p>
//         </section>

//         <section className={styles.section}>
//           <h1>Payment</h1>
//           <p>Cash on Delivery (COD)</p>
//         </section>
//       </div>

//       <div className={styles.rightColumn}>
//         <h2>Order Summary</h2>
//         <p>{itemCount} item(s)</p>
//         <ul className={styles.itemsList}>
//           {basketItems.map((item) => (
//             <li key={`${item.id}-${item.size}`}>
//               <strong>{item.name}</strong> - {item.size} x{item.quantity} = $
//               {(item.price * item.quantity).toFixed(2)}
//             </li>
//           ))}
//         </ul>
//         <div className={styles.summaryRow}>
//           <span>Subtotal:</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <div className={styles.summaryRow}>
//           <span>Shipping:</span>
//           <span>${shipping.toFixed(2)}</span>
//         </div>
//         <div className={styles.summaryRow}>
//           <strong>Total:</strong>
//           <strong>${total.toFixed(2)}</strong>
//         </div>
//         <button 
//           onClick={handleCompleteOrder} 
//           disabled={sending} 
//           className={styles.completeButton}
//         >
//           {sending ? 'Processing...' : 'Complete Order'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;











// import React, { useState } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';
// import styles from '../style/checkout.module.css';
// import emailjs from '@emailjs/browser';

// const CheckoutPage = () => {
//   const { basketItems, clearCart } = useBasket();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [sending, setSending] = useState(false);

//   const subtotal = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 3.0;
//   const total = subtotal + shipping;
//   const itemCount = basketItems.reduce((sum, item) => sum + item.quantity, 0);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = 'Email is required.';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email is invalid.';
//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
//     if (!formData.address.trim()) newErrors.address = 'Address is required.';
//     if (!formData.city.trim()) newErrors.city = 'City is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
//   };

//   const prepareTemplateParams = () => {
//     return {
//       customer_email: formData.email,
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       delivery_address: `${formData.address}, ${formData.city}`,
//       order_total: total.toFixed(2),
//       order_items: basketItems.map(item => ({
//         product_name: item.name,
//         product_size: item.size || 'N/A',
//         product_quantity: item.quantity,
//         product_price: (item.price * item.quantity).toFixed(2),
//       }))
//     };
//   };

//   const handleCompleteOrder = async () => {
//     console.log("🟡 handleCompleteOrder triggered");
//     if (!validateForm()) return;

//     try {
//       setSending(true);

//       const templateParams = prepareTemplateParams();
//       console.log("📬 ENV:", {
//         service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       });
//       console.log("📦 Template Params:", templateParams);

//       const response = await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );

//       console.log("✅ Email sent:", response);
//       clearCart();
//       navigate('/order-confirmation');
//     } catch (error) {
//       console.error('❌ EmailJS send failed:', error);
//       alert('Order submission failed. Please try again or contact support.');
//     } finally {
//       setSending(false);
//     }
//   };

//   if (basketItems.length === 0) {
//     return (
//       <div className={styles.emptyCartContainer}>
//         <h2>Your cart is empty</h2>
//         <button onClick={() => navigate('/')} className={styles.continueShoppingButton}>
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.checkoutContainer}>
//       <div className={styles.leftColumn}>
//         <section className={styles.section}>
//           <h1>Contact</h1>
//           <input
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//             className={`${styles.textInput} ${errors.email ? styles.errorInput : ''}`}
//           />
//           {errors.email && <p className={styles.errorText}>{errors.email}</p>}
//         </section>

//         <section className={styles.section}>
//           <h1>Delivery</h1>
//           <div className={styles.nameRow}>
//             <input
//               type="text"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={(e) => handleInputChange('firstName', e.target.value)}
//               className={`${styles.textInput} ${styles.halfWidth} ${errors.firstName ? styles.errorInput : ''}`}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={(e) => handleInputChange('lastName', e.target.value)}
//               className={`${styles.textInput} ${styles.halfWidth} ${errors.lastName ? styles.errorInput : ''}`}
//             />
//           </div>
//           {errors.firstName && <p className={styles.errorText}>{errors.firstName}</p>}
//           {errors.lastName && <p className={styles.errorText}>{errors.lastName}</p>}

//           <input
//             type="text"
//             placeholder="Address"
//             value={formData.address}
//             onChange={(e) => handleInputChange('address', e.target.value)}
//             className={`${styles.textInput} ${errors.address ? styles.errorInput : ''}`}
//           />
//           {errors.address && <p className={styles.errorText}>{errors.address}</p>}

//           <input
//             type="text"
//             placeholder="City"
//             value={formData.city}
//             onChange={(e) => handleInputChange('city', e.target.value)}
//             className={`${styles.textInput} ${errors.city ? styles.errorInput : ''}`}
//           />
//           {errors.city && <p className={styles.errorText}>{errors.city}</p>}
//         </section>

//         <section className={styles.section}>
//           <h1>Shipping Method</h1>
//           <p>Standard Shipping — $3.00</p>
//         </section>

//         <section className={styles.section}>
//           <h1>Payment</h1>
//           <p>Cash on Delivery (COD)</p>
//         </section>
//       </div>

//       <div className={styles.rightColumn}>
//         <h2>Order Summary</h2>
//         <p>{itemCount} item(s)</p>
//         <ul className={styles.itemsList}>
//           {basketItems.map((item) => (
//             <li key={`${item.id}-${item.size}`}>
//               <strong>{item.name}</strong> - {item.size} x{item.quantity} = $
//               {(item.price * item.quantity).toFixed(2)}
//             </li>
//           ))}
//         </ul>
//         <div className={styles.summaryRow}>
//           <span>Subtotal:</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <div className={styles.summaryRow}>
//           <span>Shipping:</span>
//           <span>${shipping.toFixed(2)}</span>
//         </div>
//         <div className={styles.summaryRow}>
//           <strong>Total:</strong>
//           <strong>${total.toFixed(2)}</strong>
//         </div>
//         <button
//           onClick={handleCompleteOrder}
//           disabled={sending}
//           className={styles.completeButton}
//         >
//           {sending ? 'Processing...' : 'Complete Order'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


















