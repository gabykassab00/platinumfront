// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const { basketItems, sidebarVisible, dispatch } = useBasket();

//   const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
//   const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });

//   const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className={`basket-sidebar ${sidebarVisible ? 'show' : ''}`}>
//       <div className="basket-header">
//         <h3>My Basket ({basketItems.length})</h3>
//         <button onClick={closeSidebar}>×</button>
//       </div>

//       <div className="basket-body">
//         {basketItems.map(item => (
//           <div key={item.id} className="basket-item">
//             <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//             <div>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p>{item.price ? Number(item.price).toFixed(2) : "0.00"}€</p>
//             </div>
//             <button onClick={() => removeItem(item.id)}>🗑</button>
//           </div>
//         ))}
//       </div>

//       <div className="basket-footer">
//         <p>Total: ${total.toFixed(2)}</p>
//         <button className="basket-checkout">Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;


// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const { basketItems, sidebarVisible, dispatch } = useBasket();

//   const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
//   const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
//   const increaseQty = (id) => dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   const decreaseQty = (id) => dispatch({ type: 'DECREASE_QUANTITY', payload: id });

//   const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>×</button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map(item => (
//           <div key={item.id} className={styles.item}>
//             <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} className={styles.itemImage} />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>€{Number(item.price).toFixed(2)}</p>
//               <div className={styles.qtyControl}>
//                 <button onClick={() => decreaseQty(item.id)} className={styles.qtyBtn}>−</button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button onClick={() => increaseQty(item.id)} className={styles.qtyBtn}>+</button>
//               </div>
//             </div>
//             <button className={styles.removeButton} onClick={() => removeItem(item.id)}>🗑</button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton}>Checkout</button>
//         <button className={styles.continueButton} onClick={closeSidebar}>Continue Shopping</button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;


// import React, { useEffect, useRef } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const { basketItems, sidebarVisible, dispatch,preventCloseOnce } = useBasket();
//   const sidebarRef = useRef();

//   const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' });
//   const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
//   const increaseQty = (id) => dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   const decreaseQty = (id) => dispatch({ type: 'DECREASE_QUANTITY', payload: id });

//   const total = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);



 
// useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       sidebarVisible &&
//       sidebarRef.current &&
//       !sidebarRef.current.contains(event.target)
//     ) {
//       if (preventCloseOnce) {
//         dispatch({ type: 'RESET_PREVENT_CLOSE' }); // Reset for next time
//         return; // ✅ Skip closing
//       }
//       dispatch({ type: 'CLOSE_SIDEBAR' });
//     }
//   };

//   document.addEventListener('mousedown', handleClickOutside);
//   return () => document.removeEventListener('mousedown', handleClickOutside);
// }, [sidebarVisible, dispatch, preventCloseOnce]);


//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`} ref={sidebarRef}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>×</button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map(item => (
//           <div key={item.id} className={styles.item}>
//             <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} className={styles.itemImage} />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>€{Number(item.price).toFixed(2)}</p>
//               <div className={styles.qtyControl}>
//                 <button onClick={() => decreaseQty(item.id)} className={styles.qtyBtn}>−</button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button onClick={() => increaseQty(item.id)} className={styles.qtyBtn}>+</button>
//               </div>
//             </div>
//             <button className={styles.removeButton} onClick={() => removeItem(item.id)}>🗑</button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton}>Checkout</button>
//         <button className={styles.continueButton} onClick={closeSidebar}>Continue Shopping</button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;
















// import React, { useEffect, useRef } from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     dispatch,
//     preventCloseOnce,
//   } = useBasket();

//   const sidebarRef = useRef();

//   const closeSidebar = () => {
//     dispatch({ type: 'CLOSE_SIDEBAR' });
//   };

//   const removeItem = (id) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const increaseQty = (id) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   };

//   const decreaseQty = (id) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: id });
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // Handle click outside the sidebar to close it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           dispatch({ type: 'RESET_PREVENT_CLOSE' }); // Skip closing once
//           return;
//         }
//         dispatch({ type: 'CLOSE_SIDEBAR' });
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, dispatch, preventCloseOnce]);

//   return (
//     <div
//       className={`${styles.sidebar} ${
//         sidebarVisible ? styles.open : ''
//       }`}
//       ref={sidebarRef}
//     >
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map((item) => (
//           <div key={item.id} className={styles.item}>
//             <img
//               src={`http://localhost:5000/${item.image_path}`}
//               alt={item.name}
//               className={styles.itemImage}
//             />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>
//                 €{Number(item.price).toFixed(2)}
//               </p>
//               <div className={styles.qtyControl}>
//                 <button
//                   className={styles.qtyBtn}
//                   onClick={() => decreaseQty(item.id)}
//                 >
//                   −
//                 </button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button
//                   className={styles.qtyBtn}
//                   onClick={() => increaseQty(item.id)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button
//               className={styles.removeButton}
//               onClick={() => removeItem(item.id)}
//             >
//               🗑
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton}>Checkout</button>
//         <button className={styles.continueButton} onClick={closeSidebar}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;





// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     dispatch,
//     preventCloseOnce,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();

//   const closeSidebar = () => {
//     dispatch({ type: 'CLOSE_SIDEBAR' });
//   };

//   const goToCart = () => {
//     closeSidebar(); // First close sidebar
//     navigate('/cart'); // Then navigate
//   };

//   const removeItem = (id) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const increaseQty = (id) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   };

//   const decreaseQty = (id) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: id });
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           dispatch({ type: 'RESET_PREVENT_CLOSE' });
//           return;
//         }
//         dispatch({ type: 'CLOSE_SIDEBAR' });
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, dispatch, preventCloseOnce]);

//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`} ref={sidebarRef}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map((item) => (
//           <div key={item.id} className={styles.item}>
//             <img
//               src={`http://localhost:5000/${item.image_path}`}
//               alt={item.name}
//               className={styles.itemImage}
//             />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>
//                 €{Number(item.price).toFixed(2)}
//               </p>
//               <div className={styles.qtyControl}>
//                 <button className={styles.qtyBtn} onClick={() => decreaseQty(item.id)}>
//                   −
//                 </button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button className={styles.qtyBtn} onClick={() => increaseQty(item.id)}>
//                   +
//                 </button>
//               </div>
//             </div>
//             <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
//               🗑
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton}>Checkout</button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;
















// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     preventCloseOnce,
//     closeSidebar,
//     resetPreventClose,
//     removeItem,
//     increaseQty,
//     decreaseQty,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();

//   const goToCart = () => {
//     closeSidebar();
//     navigate('/cart');
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           resetPreventClose(); // ✅ Use helper
//           return;
//         }
//         closeSidebar(); // ✅ Use helper
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`} ref={sidebarRef}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map((item) => (
//           <div key={item.id} className={styles.item}>
//             <img
//               src={`http://localhost:5000/${item.image_path}`}
//               alt={item.name}
//               className={styles.itemImage}
//             />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>
//                 €{Number(item.price).toFixed(2)}
//               </p>
//               <div className={styles.qtyControl}>
//                 <button className={styles.qtyBtn} onClick={() => decreaseQty(item.id)}>
//                   −
//                 </button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button className={styles.qtyBtn} onClick={() => increaseQty(item.id)}>
//                   +
//                 </button>
//               </div>
//             </div>
//             <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
//               🗑
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton}>Checkout</button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;











// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     preventCloseOnce,
//     closeSidebar,
//     resetPreventClose,
//     removeItem,
//     increaseQty,
//     decreaseQty,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();

//   const goToCart = () => {
//     closeSidebar();
//     navigate('/cart');
//   };

//   const goToCheckout = () => {
//     closeSidebar();
//     navigate('/checkout'); // ✅ NEW
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           resetPreventClose();
//           return;
//         }
//         closeSidebar();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`} ref={sidebarRef}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map((item) => (
//           <div key={item.id} className={styles.item}>
//             <img
//               src={`http://localhost:5000/${item.image_path}`}
//               alt={item.name}
//               className={styles.itemImage}
//             />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>
//                 €{Number(item.price).toFixed(2)}
//               </p>
//               <div className={styles.qtyControl}>
//                 <button className={styles.qtyBtn} onClick={() => decreaseQty(item.id)}>
//                   −
//                 </button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button className={styles.qtyBtn} onClick={() => increaseQty(item.id)}>
//                   +
//                 </button>
//               </div>
//             </div>
//             <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
//               🗑
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton} onClick={goToCheckout}>
//           Checkout
//         </button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;










// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     preventCloseOnce,
//     closeSidebar,
//     resetPreventClose,
//     removeItem,
//     increaseQty,
//     decreaseQty,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();

//   const goToCart = () => {
//     closeSidebar();
//     navigate('/cart');
//   };

//   const goToCheckout = () => {
//     closeSidebar();
//     navigate('/checkout');
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           resetPreventClose();
//           return;
//         }
//         closeSidebar();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

//   return (
//     <div className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`} ref={sidebarRef}>
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.map((item) => (
//           <div key={`${item.id}-${item.size}`} className={styles.item}>
//             <img
//               src={`http://localhost:5000/${item.image_path}`}
//               alt={item.name}
//               className={styles.itemImage}
//             />
//             <div className={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>Size: {item.size}</p>
//               <p className={styles.price}>
//                 €{Number(item.price).toFixed(2)}
//               </p>
//               <div className={styles.qtyControl}>
//                 <button
//                   className={styles.qtyBtn}
//                   onClick={() => decreaseQty(item.id, item.size)}
//                 >
//                   −
//                 </button>
//                 <span className={styles.qty}>{item.quantity}</span>
//                 <button
//                   className={styles.qtyBtn}
//                   onClick={() => increaseQty(item.id, item.size)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button
//               className={styles.removeButton}
//               onClick={() => removeItem(item.id, item.size)}
//             >
//               🗑
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <p>Total:</p>
//           <p className={styles.total}>€{total.toFixed(2)}</p>
//         </div>
//         <button className={styles.checkoutButton} onClick={goToCheckout}>
//           Checkout
//         </button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;




















// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     preventCloseOnce,
//     closeSidebar,
//     resetPreventClose,
//     removeItem,
//     increaseQty,
//     decreaseQty,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();

//   const goToCart = () => {
//     closeSidebar();
//     navigate('/cart');
//   };

//   const goToCheckout = () => {
//     closeSidebar();
//     navigate('/checkout');
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           resetPreventClose();
//           return;
//         }
//         closeSidebar();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

//   return (
//     <div
//       className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`}
//       ref={sidebarRef}
//     >
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.length === 0 ? (
//           <p className={styles.empty}>Your basket is empty.</p>
//         ) : (
//           basketItems.map((item) => (
//             <div key={`${item.id}-${item.size}`} className={styles.item}>
//               <img
//                 src={`http://localhost:5000/${item.image_path}`}
//                 alt={item.name}
//                 className={styles.itemImage}
//               />
//               <div className={styles.itemDetails}>
//                 <h4>{item.name}</h4>
//                 <p>Size: {item.size}</p>
//                 <p className={styles.price}>€{Number(item.price).toFixed(2)}</p>
//                 <div className={styles.qtyControl}>
//                   <button
//                     className={styles.qtyBtn}
//                     onClick={() => decreaseQty(item.id, item.size)}
//                   >
//                     −
//                   </button>
//                   <span className={styles.qty}>{item.quantity}</span>
//                   <button
//                     className={styles.qtyBtn}
//                     onClick={() => increaseQty(item.id, item.size)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className={styles.removeButton}
//                 onClick={() => removeItem(item.id, item.size)}
//               >
//                 🗑
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <span>Total:</span>
//           <span className={styles.total}>€{total.toFixed(2)}</span>
//         </div>
//         <button className={styles.checkoutButton} onClick={goToCheckout}>
//           Checkout
//         </button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;








// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-sidebar.module.css';

// const SidebarBasket = () => {
//   const {
//     basketItems,
//     sidebarVisible,
//     preventCloseOnce,
//     closeSidebar,
//     resetPreventClose,
//     removeItem,
//     increaseQty,
//     decreaseQty,
//   } = useBasket();

//   const navigate = useNavigate();
//   const sidebarRef = useRef();
//   const API_URL = process.env.REACT_APP_API_URL;

//   const goToCart = () => {
//     closeSidebar();
//     navigate('/cart');
//   };

//   const goToCheckout = () => {
//     closeSidebar();
//     navigate('/checkout');
//   };

//   const total = basketItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         sidebarVisible &&
//         sidebarRef.current &&
//         !sidebarRef.current.contains(event.target)
//       ) {
//         if (preventCloseOnce) {
//           resetPreventClose();
//           return;
//         }
//         closeSidebar();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

//   return (
//     <div
//       className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`}
//       ref={sidebarRef}
//     >
//       <div className={styles.header}>
//         <h3>Your Basket ({basketItems.length})</h3>
//         <button className={styles.closeButton} onClick={closeSidebar}>
//           ×
//         </button>
//       </div>

//       <div className={styles.body}>
//         {basketItems.length === 0 ? (
//           <p className={styles.empty}>Your basket is empty.</p>
//         ) : (
//           basketItems.map((item) => (
//             <div key={`${item.id}-${item.size}`} className={styles.item}>
//               <img
//                 src={`${API_URL}/${item.image_path}`}
//                 alt={item.name}
//                 className={styles.itemImage}
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/100';
//                 }}
//               />
//               <div className={styles.itemDetails}>
//                 <h4>{item.name}</h4>
//                 <p>Size: {item.size}</p>
//                 <p className={styles.price}>${Number(item.price).toFixed(2)}</p>
//                 <div className={styles.qtyControl}>
//                   <button
//                     className={styles.qtyBtn}
//                     onClick={() => decreaseQty(item.id, item.size)}
//                   >
//                     −
//                   </button>
//                   <span className={styles.qty}>{item.quantity}</span>
//                   <button
//                     className={styles.qtyBtn}
//                     onClick={() => increaseQty(item.id, item.size)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <button
//                 className={styles.removeButton}
//                 onClick={() => removeItem(item.id, item.size)}
//               >
//                 🗑
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className={styles.footer}>
//         <div className={styles.totalRow}>
//           <span>Total:</span>
//           <span className={styles.total}>${total.toFixed(2)}</span>
//         </div>
//         <button className={styles.checkoutButton} onClick={goToCheckout}>
//           Checkout
//         </button>
//         <button className={styles.continueButton} onClick={goToCart}>
//           Go to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SidebarBasket;
















// src/components/SidebarBasket.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasket } from '../context/BasketProvider';
import styles from '../style/cart-sidebar.module.css';

const SidebarBasket = () => {
  const {
    basketItems,
    sidebarVisible,
    preventCloseOnce,
    closeSidebar,
    resetPreventClose,
    removeItem,
    increaseQty,
    decreaseQty,
  } = useBasket();

  const navigate = useNavigate();
  const sidebarRef = useRef();
  const API_URL = process.env.REACT_APP_API_URL;

  const goToCart = () => {
    closeSidebar();
    navigate('/cart');
  };

  const goToCheckout = () => {
    closeSidebar();
    navigate('/checkout');
  };

  const total = basketItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        if (preventCloseOnce) {
          resetPreventClose();
          return;
        }
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarVisible, closeSidebar, preventCloseOnce, resetPreventClose]);

  return (
    <div
      className={`${styles.sidebar} ${sidebarVisible ? styles.open : ''}`}
      ref={sidebarRef}
    >
      <div className={styles.header}>
        <h3>Your Basket ({basketItems.length})</h3>
        <button className={styles.closeButton} onClick={closeSidebar}>
          ×
        </button>
      </div>

      <div className={styles.body}>
        {basketItems.length === 0 ? (
          <p className={styles.empty}>Your basket is empty.</p>
        ) : (
          basketItems.map((item) => (
            <div
              key={`${item.id}-${item.size || ''}-${item.perfume || ''}`}
              className={styles.item}
            >
              <img
                src={`${API_URL}/${item.image_path}`}
                alt={item.name}
                className={styles.itemImage}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100';
                }}
              />
              <div className={styles.itemDetails}>
                <h4>{item.name}</h4>
                {item.size && <p>Size: {item.size}</p>}
                {item.perfume && <p>Perfume: {item.perfume}</p>} {/* 🟢 Show perfume if chosen */}
                <p className={styles.price}>${Number(item.price).toFixed(2)}</p>
                <div className={styles.qtyControl}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      decreaseQty(item.id, item.size, item.perfume)
                    }
                  >
                    −
                  </button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() =>
                      increaseQty(item.id, item.size, item.perfume)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeItem(item.id, item.size, item.perfume)}
              >
                🗑
              </button>
            </div>
          ))
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.totalRow}>
          <span>Total:</span>
          <span className={styles.total}>${total.toFixed(2)}</span>
        </div>
        <button className={styles.checkoutButton} onClick={goToCheckout}>
          Checkout
        </button>
        <button className={styles.continueButton} onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default SidebarBasket;
