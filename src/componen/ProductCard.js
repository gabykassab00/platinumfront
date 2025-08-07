// import React from 'react';
// import styles from '../style/ProductCard.module.css'; // CSS Module import

// const ProductCard = ({ product }) => {
//   return (
//     <div className={styles['product-card']}>
//       <div className={styles['product-image']}>
//         <img 
//           src={`http://localhost:5000/${product.image_path.replace(/\\/g, '/')}`} 
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />
//       </div>
      
//       <div className={styles['product-info']}>
//         <h3 className={styles['product-name']}>{product.name}</h3>
//         <p className={styles['product-description']}>Premium fragrance product</p>
        
//         <div className={styles['price-section']}>
//           <span className={styles['current-price']}>¥{product.price.toLocaleString()}</span>
//           <span className={styles['original-price']}>¥{(product.price * 1.5).toLocaleString()}</span>
//         </div>
        
//         <button className={styles['add-to-cart']}>Add to cart</button>
//       </div>
      
//       <div className={styles['product-footer']}>
//         <span className={styles.rating}>*****</span>
//         <span className={styles.brand}>{product.brand || 'Premium Brand'}</span>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';
// import styles from '../style/ProductCard.module.css';

// const ProductCard = ({ product }) => {
//   const imageUrl = `http://localhost:5000/${product.image_path}`;

//   return (
//     <div className={styles['product-card']}>
//       <div className={styles['product-image']}>
//         <img 
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />
//       </div>

//       <div className={styles['product-info']}>
//         <h3 className={styles['product-name']}>{product.name}</h3>
//         <p className={styles['product-description']}>Premium fragrance product</p>

//         <div className={styles['price-section']}>
//           <span className={styles['current-price']}>${product.price.toLocaleString()}</span>
//           {/* <span className={styles['original-price']}>${(product.price * 1.5).toLocaleString()}</span> */}
//         </div>

//         <button className={styles['add-to-cart']}>Add to cart</button>
//       </div>

//       <div className={styles['product-footer']}>
//         <span className={styles.rating}>★★★★★</span>
//         <span className={styles.brand}>{product.brand || 'Premium Brand'}</span>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// import React from 'react';
// import styles from '../style/ProductCard.module.css';

// const ProductCard = ({ product }) => {
//   const imageUrl = `http://localhost:5000/${product.image_path}`;

//   const price = parseFloat(product.price); // Ensure it's a number
//   const discount = product.discount || 0;

//   // Avoid division by zero or NaN
//   const originalPrice = discount > 0 ? (price / (1 - discount)).toFixed(2) : price.toFixed(2);

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {/* Discount Badge */}
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         {/* Hover Buttons */}
//         <div className={styles.overlay}>
//           <button className={styles.overlayButton}>Quick View</button>
//           <button className={styles.overlayButton}>Add To Cart</button>
//         </div>
//       </div>

//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// import React from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';

// const ProductCard = ({ product }) => {
//   const imageUrl = `http://localhost:5000/${product.image_path}`;

//   const price = parseFloat(product.price); // Ensure it's a number
//   const discount = product.discount || 0;

//   const originalPrice = discount > 0
//     ? (price / (1 - discount)).toFixed(2)
//     : price.toFixed(2);

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {/* Discount Badge */}
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         {/* Hover Overlay */}
//         <div className={styles.overlay}>
//           {/* Quick View Flip Button */}
//           <div className={styles.flipButton}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Quick View</div>
//               <div className={styles.flipBack}><FaEye /></div>
//             </div>
//           </div>

//           {/* Add to Cart Flip Button */}
//           <div className={styles.flipButton}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Add To Cart</div>
//               <div className={styles.flipBack}><FaShoppingCart /></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;








// import React from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider'; // <-- Use your context

// const ProductCard = ({ product }) => {
//   const { dispatch } = useBasket();

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const price = parseFloat(product.price);
//   const discount = product.discount || 0;

//   const originalPrice = discount > 0
//     ? (price / (1 - discount)).toFixed(2)
//     : price.toFixed(2);

//   const handleAddToBasket = () => {
//     dispatch({ type: 'ADD_ITEM', payload: product });
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {/* Discount Badge */}
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         {/* Hover Overlay */}
//         <div className={styles.overlay}>
//           {/* Quick View Flip Button */}
//           <div className={styles.flipButton}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Quick View</div>
//               <div className={styles.flipBack}><FaEye /></div>
//             </div>
//           </div>

//           {/* Add to Basket Flip Button */}
//           <div className={styles.flipButton} onClick={handleAddToBasket}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Add To Basket</div>
//               <div className={styles.flipBack}><FaShoppingCart /></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// import React from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider'; // <-- Use your updated context

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket(); // ✅ use helper functions, not dispatch

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const price = parseFloat(product.price);
//   const discount = product.discount || 0;

//   const originalPrice = discount > 0
//     ? (price / (1 - discount)).toFixed(2)
//     : price.toFixed(2);

//   const handleAddToBasket = () => {
//     addItem(product);     // ✅ Call the helper
//     openSidebar();        // ✅ Optionally open the sidebar
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {/* Discount Badge */}
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         {/* Hover Overlay */}
//         <div className={styles.overlay}>
//           {/* Quick View Flip Button */}
//           <div className={styles.flipButton}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Quick View</div>
//               <div className={styles.flipBack}><FaEye /></div>
//             </div>
//           </div>

//           {/* Add to Basket Flip Button */}
//           <div className={styles.flipButton} onClick={handleAddToBasket}>
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>Add To Basket</div>
//               <div className={styles.flipBack}><FaShoppingCart /></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;











// import React from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaEye, FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const price = parseFloat(product.price);
//   const discount = product.discount || 0;

//   const originalPrice = discount > 0
//     ? (price / (1 - discount)).toFixed(2)
//     : price.toFixed(2);

//   const handleAddToBasket = () => {
//     addItem(product);
//     openSidebar();
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {/* Action Buttons */}
//       <div className={styles.actionButtons}>
//         <div className={styles.flipButton}>
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Quick View</div>
//             <div className={styles.flipBack}><FaEye /></div>
//           </div>
//         </div>
//         <div 
//           className={styles.flipButton}
//           onClick={handleAddToBasket}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}><FaShoppingCart /></div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// import React, { useState } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const price = parseFloat(product.price);
//   const discount = product.discount || 0;

//   const originalPrice = discount > 0
//     ? (price / (1 - discount)).toFixed(2)
//     : price.toFixed(2);

//   const handleAddToBasket = () => {
//     if (!selectedSize) {
//       setSizeError(true);
//       return;
//     }
    
//     const productWithSize = {
//       ...product,
//       // size: selectedSize,
//       size: `${selectedSize}ml`, // Add 'ml' here
//       price: price.toFixed(2) // Use the product's price
//     };
//     addItem(productWithSize);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     console.log('Quick view for:', product.name);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {/* Size Selection Buttons */}
//       <div className={styles.priceButtons}>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 35 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(35)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>35ml</div>
//             <div className={styles.flipBack}>Small</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 80 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(80)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>80ml</div>
//             <div className={styles.flipBack}>Medium</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 100 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(100)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>100ml</div>
//             <div className={styles.flipBack}>Large</div>
//           </div>
//         </div>
//       </div>

//       {/* Size error message */}
//       {sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       {/* Add to Cart Button */}
//       <div className={styles.addToCartButton}>
//         <div 
//           className={styles.flipButton}
//           onClick={handleAddToBasket}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}><FaShoppingCart /></div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>${price.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


















// import React, { useState } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = product.discount || 0;

//   // Calculate price based on selected size
//   const getPriceForSize = (size) => {
//     switch(size) {
//       case 35: return 7;
//       case 80: return 15;
//       case 100: return basePrice;
//       default: return basePrice;
//     }
//   };

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;
  
//   const originalPrice = discount > 0
//     ? (basePrice / (1 - discount)).toFixed(2)
//     : basePrice.toFixed(2);

//   const handleAddToBasket = () => {
//     if (!selectedSize) {
//       setSizeError(true);
//       return;
//     }
    
//     const productWithSize = {
//       ...product,
//       size: `${selectedSize}ml`,
//       price: currentPrice.toFixed(2),
//       sizeValue: selectedSize // Add numerical size for comparison
//     };
    
//     addItem(productWithSize);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     console.log('Quick view for:', product.name);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {/* Size Selection Buttons */}
//       <div className={styles.priceButtons}>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 35 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(35)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>35ml</div>
//             <div className={styles.flipBack}>Small</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 80 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(80)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>80ml</div>
//             <div className={styles.flipBack}>Medium</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 100 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(100)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>100ml</div>
//             <div className={styles.flipBack}>Large</div>
//           </div>
//         </div>
//       </div>

//       {/* Size error message */}
//       {sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       {/* Add to Cart Button */}
//       <div className={styles.addToCartButton}>
//         <div 
//           className={styles.flipButton}
//           onClick={handleAddToBasket}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}><FaShoppingCart /></div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>
//             ${selectedSize ? currentPrice.toFixed(2) : basePrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// import React, { useState } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom'; // ✅ Added

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);
//   const navigate = useNavigate(); // ✅ Added

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = product.discount || 0;

//   // Calculate price based on selected size
//   const getPriceForSize = (size) => {
//     switch (size) {
//       case 35: return 7;
//       case 80: return 15;
//       case 100: return basePrice;
//       default: return basePrice;
//     }
//   };

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;

//   const originalPrice = discount > 0
//     ? (basePrice / (1 - discount)).toFixed(2)
//     : basePrice.toFixed(2);

//   const handleAddToBasket = () => {
//     if (!selectedSize) {
//       setSizeError(true);
//       return;
//     }

//     const productWithSize = {
//       ...product,
//       size: `${selectedSize}ml`,
//       price: currentPrice.toFixed(2),
//       sizeValue: selectedSize // Add numerical size for comparison
//     };

//     addItem(productWithSize);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     navigate(`/product-details/${product.id}`); // ✅ Changed
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {/* Size Selection Buttons */}
//       <div className={styles.priceButtons}>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 35 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(35)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>35ml</div>
//             <div className={styles.flipBack}>Small</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 80 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(80)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>80ml</div>
//             <div className={styles.flipBack}>Medium</div>
//           </div>
//         </div>
//         <div 
//           className={`${styles.flipButton} ${selectedSize === 100 ? styles.selectedSize : ''}`}
//           onClick={() => handleSizeSelect(100)}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>100ml</div>
//             <div className={styles.flipBack}>Large</div>
//           </div>
//         </div>
//       </div>

//       {/* Size error message */}
//       {sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       {/* Add to Cart Button */}
//       <div className={styles.addToCartButton}>
//         <div 
//           className={styles.flipButton}
//           onClick={handleAddToBasket}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}><FaShoppingCart /></div>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>
//             ${selectedSize ? currentPrice.toFixed(2) : basePrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;















// import React, { useState } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);
//   const navigate = useNavigate();

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = product.discount || 0;
//   const isMultipleType = product.type === 'multiple';

//   const getPriceForSize = (size) => {
//     switch (size) {
//       case 35: return 7;
//       case 80: return 15;
//       case 100: return basePrice;
//       default: return basePrice;
//     }
//   };

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;

//   const originalPrice = discount > 0
//     ? (basePrice / (1 - discount)).toFixed(2)
//     : basePrice.toFixed(2);

//   const handleAddToBasket = () => {
//     if (isMultipleType && !selectedSize) {
//       setSizeError(true);
//       return;
//     }

//     const productToAdd = isMultipleType 
//       ? {
//           ...product,
//           size: `${selectedSize}ml`,
//           price: currentPrice.toFixed(2),
//           sizeValue: selectedSize
//         }
//       : {
//           ...product,
//           price: basePrice.toFixed(2)
//         };

//     addItem(productToAdd);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     navigate(`/product-details/${product.id}`);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />

//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {/* Conditionally render size buttons */}
//       {isMultipleType && (
//         <div className={styles.priceButtons}>
//           <div 
//             className={`${styles.flipButton} ${selectedSize === 35 ? styles.selectedSize : ''}`}
//             onClick={() => handleSizeSelect(35)}
//           >
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>35ml</div>
//               <div className={styles.flipBack}>Small</div>
//             </div>
//           </div>
//           <div 
//             className={`${styles.flipButton} ${selectedSize === 80 ? styles.selectedSize : ''}`}
//             onClick={() => handleSizeSelect(80)}
//           >
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>80ml</div>
//               <div className={styles.flipBack}>Medium</div>
//             </div>
//           </div>
//           <div 
//             className={`${styles.flipButton} ${selectedSize === 100 ? styles.selectedSize : ''}`}
//             onClick={() => handleSizeSelect(100)}
//           >
//             <div className={styles.flipInner}>
//               <div className={styles.flipFront}>100ml</div>
//               <div className={styles.flipBack}>Large</div>
//             </div>
//           </div>
//         </div>
//       )}

//       {isMultipleType && sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       <div className={styles.addToCartButton}>
//         <div 
//           className={styles.flipButton}
//           onClick={handleAddToBasket}
//         >
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}><FaShoppingCart /></div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//           <span className={styles.current}>
//             ${isMultipleType && selectedSize ? currentPrice.toFixed(2) : basePrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;






// import React, { useState } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;
//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = product.discount || 0;
//   const isMultipleType = product.type === 'multiple';

//   const getPriceForSize = (size) => {
//     switch (size) {
//       case 35:
//         return 7;
//       case 80:
//         return 15;
//       case 100:
//         return basePrice;
//       default:
//         return basePrice;
//     }
//   };

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;

//   const originalPrice =
//     discount > 0
//       ? (basePrice / (1 - discount)).toFixed(2)
//       : basePrice.toFixed(2);

//   const handleAddToBasket = () => {
//     if (isMultipleType && !selectedSize) {
//       setSizeError(true);
//       return;
//     }

//     const productToAdd = isMultipleType
//       ? {
//           ...product,
//           size: `${selectedSize}ml`,
//           price: currentPrice.toFixed(2),
//           sizeValue: selectedSize,
//         }
//       : {
//           ...product,
//           price: basePrice.toFixed(2),
//         };

//     addItem(productToAdd);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     navigate(`/product-details/${product.id}`);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {isMultipleType && (
//         <div className={styles.priceButtons}>
//           {[35, 80, 100].map((size) => (
//             <div
//               key={size}
//               className={`${styles.flipButton} ${
//                 selectedSize === size ? styles.selectedSize : ''
//               }`}
//               onClick={() => handleSizeSelect(size)}
//             >
//               <div className={styles.flipInner}>
//                 <div className={styles.flipFront}>{size}ml</div>
//                 <div className={styles.flipBack}>
//                   {size === 35
//                     ? 'Small'
//                     : size === 80
//                     ? 'Medium'
//                     : 'Large'}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {isMultipleType && sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       <div className={styles.addToCartButton}>
//         <div className={styles.flipButton} onClick={handleAddToBasket}>
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}>
//               <FaShoppingCart />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && (
//             <span className={styles.original}>${originalPrice}</span>
//           )}
//           <span className={styles.current}>
//             $
//             {isMultipleType && selectedSize
//               ? currentPrice.toFixed(2)
//               : basePrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;








// import React, { useState, useMemo, useCallback } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = React.memo(({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;
//   const imageUrl = useMemo(() => `${API_URL}/${product.image_path}`, [product.image_path, API_URL]);

//   const basePrice = useMemo(() => parseFloat(product.price), [product.price]);
//   const discount = product.discount || 0;
//   const isMultipleType = product.type === 'multiple';

//   const getPriceForSize = useCallback((size) => {
//     switch (size) {
//       case 35: return 7;
//       case 80: return 15;
//       case 100: return basePrice;
//       default: return basePrice;
//     }
//   }, [basePrice]);

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;
//   const originalPrice = useMemo(() => (
//     discount > 0 ? (basePrice / (1 - discount)).toFixed(2) : basePrice.toFixed(2)
//   ), [basePrice, discount]);

//   const handleAddToBasket = () => {
//     if (isMultipleType && !selectedSize) {
//       setSizeError(true);
//       return;
//     }

//     const productToAdd = {
//       ...product,
//       price: isMultipleType ? currentPrice.toFixed(2) : basePrice.toFixed(2),
//       ...(isMultipleType && { size: `${selectedSize}ml`, sizeValue: selectedSize }),
//     };

//     addItem(productToAdd);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     navigate(`/product-details/${product.id}`);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           loading="lazy"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       {isMultipleType && (
//         <div className={styles.priceButtons}>
//           {[35, 80, 100].map((size) => (
//             <div
//               key={size}
//               className={`${styles.flipButton} ${selectedSize === size ? styles.selectedSize : ''}`}
//               onClick={() => handleSizeSelect(size)}
//             >
//               <div className={styles.flipInner}>
//                 <div className={styles.flipFront}>{size}ml</div>
//                 <div className={styles.flipBack}>
//                   {size === 35 ? 'Small' : size === 80 ? 'Medium' : 'Large'}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {isMultipleType && sizeError && (
//         <div className={styles.errorMessage}>
//           Please select a size before adding to cart
//         </div>
//       )}

//       <div className={styles.addToCartButton}>
//         <div className={styles.flipButton} onClick={handleAddToBasket}>
//           <div className={styles.flipInner}>
//             <div className={styles.flipFront}>Add to Cart</div>
//             <div className={styles.flipBack}>
//               <FaShoppingCart />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={styles.details}>
//         <h3 className={styles.name}>{product.name}</h3>
//         <div className={styles.price}>
//           {discount > 0 && (
//             <span className={styles.original}>${originalPrice}</span>
//           )}
//           <span className={styles.current}>
//             $
//             {isMultipleType && selectedSize
//               ? currentPrice.toFixed(2)
//               : basePrice.toFixed(2)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ProductCard;























// import React, { useState, useMemo, useCallback } from 'react';
// import styles from '../style/ProductCard.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = React.memo(({ product }) => {
//   const { addItem, openSidebar } = useBasket();
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [sizeError, setSizeError] = useState(false);
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;
//   const imageUrl = useMemo(() => `${API_URL}/${product.image_path}`, [product.image_path, API_URL]);

//   const basePrice = useMemo(() => parseFloat(product.price), [product.price]);
//   const discount = product.discount || 0;
//   const isMultipleType = product.type === 'multiple';

//   const getPriceForSize = useCallback((size) => {
//     switch (size) {
//       case 50: return 10;
//       case 80: return 15;
//       case 100: return basePrice;
//       default: return basePrice;
//     }
//   }, [basePrice]);

//   const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;
//   const originalPrice = useMemo(() => (
//     discount > 0 ? (basePrice / (1 - discount)).toFixed(2) : basePrice.toFixed(2)
//   ), [basePrice, discount]);

//   const handleAddToBasket = () => {
//     if (isMultipleType && !selectedSize) {
//       setSizeError(true);
//       return;
//     }

//     const productToAdd = {
//       ...product,
//       price: isMultipleType ? currentPrice.toFixed(2) : basePrice.toFixed(2),
//       ...(isMultipleType && { size: `${selectedSize}ml`, sizeValue: selectedSize }),
//     };

//     addItem(productToAdd);
//     openSidebar();
//     setSizeError(false);
//   };

//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//     setSizeError(false);
//   };

//   const handleImageClick = () => {
//     navigate(`/product-details/${product.id}`);
//   };

//   return (
//     <div className={styles.card}>
//       <div className={styles.imageContainer} onClick={handleImageClick}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           loading="lazy"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = 'https://via.placeholder.com/150';
//           }}
//         />
//         {discount > 0 && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}
//       </div>

//       <div className={styles.cardContent}>
//         {isMultipleType && (
//           <div className={styles.sizeSection}>
//             <div className={styles.priceButtons}>
//               {[50, 80, 100].map((size) => (
//                 <div
//                   key={size}
//                   className={`${styles.flipButton} ${selectedSize === size ? styles.selectedSize : ''}`}
//                   onClick={() => handleSizeSelect(size)}
//                 >
//                   <div className={styles.flipInner}>
//                     <div className={styles.flipFront}>{size}ml</div>
//                     <div className={styles.flipBack}>
//                       {size === 50 ? 'Small' : size === 80 ? 'Medium' : 'Large'}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {sizeError && (
//               <div className={styles.errorMessage}>
//                 Please select a size before adding to cart
//               </div>
//             )}
//           </div>
//         )}

//         <div className={styles.footer}>
//           <div className={styles.details}>
//             <h3 className={styles.name}>{product.name}</h3>
//             <div className={styles.price}>
//               {discount > 0 && (
//                 <span className={styles.original}>${originalPrice}</span>
//               )}
//               <span className={styles.current}>
//                 ${isMultipleType && selectedSize
//                   ? currentPrice.toFixed(2)
//                   : basePrice.toFixed(2)}
//               </span>
//             </div>
//           </div>

//           <div className={styles.addToCartButton}>
//             <div className={styles.flipButton} onClick={handleAddToBasket}>
//               <div className={styles.flipInner}>
//                 <div className={styles.flipFront}>Add to Cart</div>
//                 <div className={styles.flipBack}>
//                   <FaShoppingCart />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ProductCard;





















import React, { useState, useMemo, useCallback } from 'react';
import styles from '../style/ProductCard.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useBasket } from '../context/BasketProvider';
import { useNavigate } from 'react-router-dom';

const ProductCard = React.memo(({ product }) => {
  const { addItem, openSidebar } = useBasket();
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;
  const imageUrl = useMemo(() => `${API_URL}/${product.image_path}`, [product.image_path, API_URL]);

  const basePrice = useMemo(() => parseFloat(product.price), [product.price]);
  const discount = product.discount || 0;
  const isMultipleType = product.type === 'multiple';
  const isMuskType = product.type === 'musk'; // Check if product type is musk

  const getPriceForSize = useCallback((size) => {
    if (isMuskType) {
      // Pricing for musk products
      switch (size) {
        case 6: return basePrice * 0.5; // 6ml price (30% of base price)
        case 12: return basePrice * 1; // 12ml price (60% of base price)
        default: return basePrice;
      }
    } else {
      // Pricing for regular multiple-type products
      switch (size) {
        case 50: return 10;
        case 80: return 15;
        case 100: return basePrice;
        default: return basePrice;
      }
    }
  }, [basePrice, isMuskType]);

  const currentPrice = selectedSize ? getPriceForSize(selectedSize) : basePrice;
  const originalPrice = useMemo(() => (
    discount > 0 ? (basePrice / (1 - discount)).toFixed(2) : basePrice.toFixed(2)
  ), [basePrice, discount]);

  const handleAddToBasket = () => {
    if ((isMultipleType || isMuskType) && !selectedSize) {
      setSizeError(true);
      return;
    }

    const productToAdd = {
      ...product,
      price: (isMultipleType || isMuskType) ? currentPrice.toFixed(2) : basePrice.toFixed(2),
      ...((isMultipleType || isMuskType) && { size: `${selectedSize}ml`, sizeValue: selectedSize }),
    };

    addItem(productToAdd);
    openSidebar();
    setSizeError(false);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleImageClick = () => {
    navigate(`/product-details/${product.id}`);
  };

  // Determine which sizes to display based on product type
  const getSizeOptions = () => {
    if (isMuskType) {
      return [6, 12]; // Musk product sizes
    }
    return [50, 80, 100]; // Default sizes for multiple-type products
  };

  const sizeOptions = getSizeOptions();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer} onClick={handleImageClick}>
        <img
          src={imageUrl}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/150';
          }}
        />
        {discount > 0 && (
          <div className={styles.discountBadge}>
            -{Math.round(discount * 100)}%
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        {(isMultipleType || isMuskType) && (
          <div className={styles.sizeSection}>
            <div className={styles.priceButtons}>
              {sizeOptions.map((size) => (
                <div
                  key={size}
                  className={`${styles.flipButton} ${selectedSize === size ? styles.selectedSize : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  <div className={styles.flipInner}>
                    <div className={styles.flipFront}>{size}ml</div>
                    <div className={styles.flipBack}>
                      {isMuskType 
                        ? (size === 6 ? 'Small' : 'Large') // Musk size labels
                        : (size === 50 ? 'Small' : size === 80 ? 'Medium' : 'Large')} 
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {sizeError && (
              <div className={styles.errorMessage}>
                Please select a size before adding to cart
              </div>
            )}
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.details}>
            <h3 className={styles.name}>{product.name}</h3>
            <div className={styles.price}>
              {discount > 0 && (
                <span className={styles.original}>${originalPrice}</span>
              )}
              <span className={styles.current}>
                ${(isMultipleType || isMuskType) && selectedSize
                  ? currentPrice.toFixed(2)
                  : basePrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className={styles.addToCartButton}>
            <div className={styles.flipButton} onClick={handleAddToBasket}>
              <div className={styles.flipInner}>
                <div className={styles.flipFront}>Add to Cart</div>
                <div className={styles.flipBack}>
                  <FaShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;