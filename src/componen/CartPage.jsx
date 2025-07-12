// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-page.module.css'; // CSS Module styling

// const CartPage = () => {
//   const { basketItems, removeItem, increaseQty, decreaseQty } = useBasket();

//   // Ensure numeric conversion
//   const subtotal = basketItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );

//   const discountRate = 0.05; // 5% discount
//   const discountAmount = subtotal >= 12 ? subtotal * discountRate : 0;
//   const total = subtotal - discountAmount;

//   return (
//     <div className={styles.cartContainer}>
//       <h2 className={styles.cartTitle}>SHOPPING CART</h2>

//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>PRODUCT</span>
//           <span>PRICE</span>
//           <span>QUANTITY</span>
//           <span>TOTAL</span>
//         </div>

//         {basketItems.map(item => (
//           <div key={item.id} className={styles.cartRow}>
//             <div className={styles.productDetails}>
//               <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>Size: {item.size}</p>
//               </div>
//             </div>

//             <div className={styles.price}>
//               ${Number(item.price).toFixed(2)}
//             </div>

//             <div className={styles.quantity}>
//               <button onClick={() => decreaseQty(item.id)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increaseQty(item.id)}>+</button>
//             </div>

//             <div className={styles.total}>
//               ${(Number(item.price) * item.quantity).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.noteAndSummary}>
//         <div className={styles.summary}>
//           <div className={styles.summaryRow}>
//             <p>Subtotal:</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRow}>
//           </div>
//           <div className={styles.summaryRowTotal}>
//             <p>Total:</p>
//             <p>${total.toFixed(2)}</p>
//           </div>
//           <button className={styles.checkoutBtn}>CHECK OUT</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;










// import React from 'react';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-page.module.css';
// import { AiFillDelete } from 'react-icons/ai'; // ✅ Import the icon

// const CartPage = () => {
//   const { basketItems, removeItem, increaseQty, decreaseQty } = useBasket();

//   const subtotal = basketItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
//   const discountRate = 0.05;
//   const discountAmount = subtotal >= 12 ? subtotal * discountRate : 0;
//   const total = subtotal - discountAmount;

//   return (
//     <div className={styles.cartContainer}>
//       <h2 className={styles.cartTitle}>SHOPPING CART</h2>

//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>PRODUCT</span>
//           <span>PRICE</span>
//           <span>QUANTITY</span>
//           <span>TOTAL</span>
//         </div>

//         {basketItems.map(item => (
//           <div key={item.id} className={styles.cartRow}>
//             <div className={styles.productDetails}>
//               <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>
//                   Size: {item.size}{' '}
//                   <AiFillDelete
//   className={styles.trashIcon}
//   onClick={() => removeItem(item.id)}
//   title="Remove item"
// />

//                 </p>
//               </div>
//             </div>

//             <div className={styles.price}>${Number(item.price).toFixed(2)}</div>

//             <div className={styles.quantity}>
//               <button onClick={() => decreaseQty(item.id)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increaseQty(item.id)}>+</button>
//             </div>

//             <div className={styles.total}>
//               ${(Number(item.price) * item.quantity).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.noteAndSummary}>
//         <div className={styles.summary}>
//           {discountAmount > 0 && (
//             <p className={styles.discount}>
//               <span>🧧 5% Off – Applied (-${discountAmount.toFixed(2)})</span>
//             </p>
//           )}
//           <div className={styles.summaryRow}>
//             <p>Subtotal:</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRow}>
//             <p>DISCOUNT:</p>
//             <p>-${discountAmount.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRowTotal}>
//             <p>Total:</p>
//             <p>${total.toFixed(2)}</p>
//           </div>
//           <button className={styles.checkoutBtn}>CHECK OUT</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;










// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-page.module.css';
// import { AiFillDelete } from 'react-icons/ai';

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { basketItems, removeItem, increaseQty, decreaseQty } = useBasket();

//   const subtotal = basketItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );
//   const discountRate = 0.05;
//   const discountAmount = subtotal >= 12 ? subtotal * discountRate : 0;
//   const total = subtotal - discountAmount;

//   return (
//     <div className={styles.cartContainer}>
//       <h2 className={styles.cartTitle}>SHOPPING CART</h2>

//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>PRODUCT</span>
//           <span>PRICE</span>
//           <span>QUANTITY</span>
//           <span>TOTAL</span>
//         </div>

//         {basketItems.map((item) => (
//           <div key={item.id} className={styles.cartRow}>
//             <div className={styles.productDetails}>
//               <img
//                 src={`http://localhost:5000/${item.image_path}`}
//                 alt={item.name}
//               />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>
//                   Size: {item.size}{' '}
//                   <AiFillDelete
//                     className={styles.trashIcon}
//                     onClick={() => removeItem(item.id)}
//                     title="Remove item"
//                   />
//                 </p>
//               </div>
//             </div>

//             <div className={styles.price}>
//               ${Number(item.price).toFixed(2)}
//             </div>

//             <div className={styles.quantity}>
//               <button onClick={() => decreaseQty(item.id)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increaseQty(item.id)}>+</button>
//             </div>

//             <div className={styles.total}>
//               ${(Number(item.price) * item.quantity).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.noteAndSummary}>
//         <div className={styles.summary}>
//           {discountAmount > 0 && (
//             <p className={styles.discount}>
//               <span>
//                 🧧 5% Off – Applied (-${discountAmount.toFixed(2)})
//               </span>
//             </p>
//           )}
//           <div className={styles.summaryRow}>
//             <p>Subtotal:</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRow}>
//             <p>DISCOUNT:</p>
//             <p>-${discountAmount.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRowTotal}>
//             <p>Total:</p>
//             <p>${total.toFixed(2)}</p>
//           </div>

//           <button
//             className={styles.checkoutBtn}
//             onClick={() => navigate('/checkout')} // ✅ Checkout navigation
//           >
//             CHECK OUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;














// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useBasket } from '../context/BasketProvider';
// import styles from '../style/cart-page.module.css';
// import { AiFillDelete } from 'react-icons/ai';

// const CartPage = () => {
//   const navigate = useNavigate();
//   const { basketItems, removeItem, increaseQty, decreaseQty } = useBasket();

//   const subtotal = basketItems.reduce(
//     (sum, item) => sum + Number(item.price) * item.quantity,
//     0
//   );
//   const discountRate = 0.05;
//   const discountAmount = subtotal >= 12 ? subtotal * discountRate : 0;
//   const total = subtotal - discountAmount;

//   return (
//     <div className={styles.cartContainer}>
//       <h2 className={styles.cartTitle}>SHOPPING CART</h2>

//       <div className={styles.cartTable}>
//         <div className={styles.cartHeader}>
//           <span>PRODUCT</span>
//           <span>PRICE</span>
//           <span>QUANTITY</span>
//           <span>TOTAL</span>
//         </div>

//         {basketItems.map((item) => (
//           <div key={`${item.id}-${item.size}`} className={styles.cartRow}>
//             <div className={styles.productDetails}>
//               <img
//                 src={`http://localhost:5000/${item.image_path}`}
//                 alt={item.name}
//               />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>
//                   Size: {item.size}{' '}
//                   <AiFillDelete
//                     className={styles.trashIcon}
//                     onClick={() => removeItem(item.id, item.size)}
//                     title="Remove item"
//                   />
//                 </p>
//               </div>
//             </div>

//             <div className={styles.price}>
//               ${Number(item.price).toFixed(2)}
//             </div>

//             <div className={styles.quantity}>
//               <button onClick={() => decreaseQty(item.id, item.size)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => increaseQty(item.id, item.size)}>+</button>
//             </div>

//             <div className={styles.total}>
//               ${(Number(item.price) * item.quantity).toFixed(2)}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.noteAndSummary}>
//         <div className={styles.summary}>
//           {discountAmount > 0 && (
//             <p className={styles.discount}>
//               <span>
//                 🧧 5% Off – Applied (-${discountAmount.toFixed(2)})
//               </span>
//             </p>
//           )}
//           <div className={styles.summaryRow}>
//             <p>Subtotal:</p>
//             <p>${subtotal.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRow}>
//             <p>DISCOUNT:</p>
//             <p>-${discountAmount.toFixed(2)}</p>
//           </div>
//           <div className={styles.summaryRowTotal}>
//             <p>Total:</p>
//             <p>${total.toFixed(2)}</p>
//           </div>

//           <button
//             className={styles.checkoutBtn}
//             onClick={() => navigate('/checkout')}
//           >
//             CHECK OUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;













import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasket } from '../context/BasketProvider';
import styles from '../style/cart-page.module.css';
import { AiFillDelete } from 'react-icons/ai';

const CartPage = () => {
  const navigate = useNavigate();
  const { basketItems, removeItem, increaseQty, decreaseQty } = useBasket();

  const API_URL = process.env.REACT_APP_API_URL;

  const subtotal = basketItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
  const discountRate = 0.05;
  const discountAmount = subtotal >= 12 ? subtotal * discountRate : 0;
  const total = subtotal - discountAmount;

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>SHOPPING CART</h2>

      <div className={styles.cartTable}>
        <div className={styles.cartHeader}>
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>TOTAL</span>
        </div>

        {basketItems.map((item) => (
          <div key={`${item.id}-${item.size}`} className={styles.cartRow}>
            <div className={styles.productDetails}>
              <img
                src={`${API_URL}/${item.image_path}`}
                alt={item.name}
              />
              <div>
                <h4>{item.name}</h4>
                <p>
                  Size: {item.size}{' '}
                  <AiFillDelete
                    className={styles.trashIcon}
                    onClick={() => removeItem(item.id, item.size)}
                    title="Remove item"
                  />
                </p>
              </div>
            </div>

            <div className={styles.price}>
              ${Number(item.price).toFixed(2)}
            </div>

            <div className={styles.quantity}>
              <button onClick={() => decreaseQty(item.id, item.size)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id, item.size)}>+</button>
            </div>

            <div className={styles.total}>
              ${(Number(item.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.noteAndSummary}>
        <div className={styles.summary}>
          {discountAmount > 0 && (
            <p className={styles.discount}>
              <span>
                🧧 5% Off – Applied (-${discountAmount.toFixed(2)})
              </span>
            </p>
          )}
          <div className={styles.summaryRow}>
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className={styles.summaryRow}>
            <p>DISCOUNT:</p>
            <p>-${discountAmount.toFixed(2)}</p>
          </div>
          <div className={styles.summaryRowTotal}>
            <p>Total:</p>
            <p>${total.toFixed(2)}</p>
          </div>

          <button
            className={styles.checkoutBtn}
            onClick={() => navigate('/checkout')}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
