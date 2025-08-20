// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('25ml');
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const originalPrice = hasDiscount ? basePrice.toFixed(2) : null;
//   const discountedPrice = hasDiscount
//     ? (basePrice * (1 - discount)).toFixed(2)
//     : basePrice.toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageWrapper}>
//         <img
//           src={imageUrl}
//           alt={product.name}
//           className={styles.productImage}
//           onError={(e) => (e.target.src = 'https://via.placeholder.com/400')}
//         />
//       </div>

//       <div className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>

//         <p className={styles.fromText}>
//           from <span className={styles.fromPrice}>${discountedPrice}</span>
//         </p>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${
//                   selectedSize === size ? styles.selected : ''
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.priceRow}>
//           {hasDiscount && (
//             <span className={styles.originalPrice}>${originalPrice}</span>
//           )}
//           <span className={styles.finalPrice}>${discountedPrice}</span>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Men’s Perfumes, Sale</p>
//           <p><strong>Tags:</strong> Modern, Monochrome</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






// import React, { useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('25ml');
//   const [quantity, setQuantity] = useState(1);
//   const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
//   const [showLens, setShowLens] = useState(false);
//   const imgRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const originalPrice = hasDiscount ? basePrice.toFixed(2) : null;
//   const discountedPrice = hasDiscount
//     ? (basePrice * (1 - discount)).toFixed(2)
//     : basePrice.toFixed(2);

//   const handleMouseMove = (e) => {
//     const bounds = imgRef.current.getBoundingClientRect();
//     const x = e.clientX - bounds.left;
//     const y = e.clientY - bounds.top;
//     setLensPos({ x, y });
//   };

//   return (
//     <div className={styles.productPage}>
//       <div
//         className={styles.zoomContainer}
//         onMouseMove={handleMouseMove}
//         onMouseEnter={() => setShowLens(true)}
//         onMouseLeave={() => setShowLens(false)}
//       >
//         <img
//           ref={imgRef}
//           src={imageUrl}
//           alt={product.name}
//           className={styles.productImage}
//         />
//         {showLens && (
//           <div
//             className={styles.zoomLens}
//             style={{
//               left: `${lensPos.x - 50}px`,
//               top: `${lensPos.y - 50}px`,
//               backgroundImage: `url(${imageUrl})`,
//               backgroundPosition: `-${lensPos.x * 2 - 50}px -${lensPos.y * 2 - 50}px`,
//             }}
//           />
//         )}
//       </div>

//       <div className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>

//         <p className={styles.fromText}>
//           from <span className={styles.fromPrice}>${discountedPrice}</span>
//         </p>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${
//                   selectedSize === size ? styles.selected : ''
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalPrice}</span>}
//           <span className={styles.finalPrice}>${discountedPrice}</span>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, Men, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
















// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('25ml');
//   const [quantity, setQuantity] = useState(1);
//   const imgRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const originalPrice = basePrice.toFixed(2);
//   const discountedPrice = hasDiscount
//     ? (basePrice * (1 - discount)).toFixed(2)
//     : originalPrice;

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageWrapper}>
//         <img
//           ref={imgRef}
//           src={imageUrl}
//           alt={product.name}
//           className={styles.productImage}
//         />
//       </div>

//       <div className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>

//         <p className={styles.fromText}>
//           from <span className={styles.fromPrice}>${originalPrice}</span>
//         </p>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${
//                   selectedSize === size ? styles.selected : ''
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalPrice}</span>}
//           <span className={styles.finalPrice}>${discountedPrice}</span>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, Men, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('25ml');
//   const [quantity, setQuantity] = useState(1);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const originalPrice = basePrice.toFixed(2);
//   const discountedPrice = hasDiscount
//     ? (basePrice * (1 - discount)).toFixed(2)
//     : originalPrice;

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//           />
//         </div>
//       </div>

//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>

//         <p className={styles.fromText}>
//           from <span className={styles.fromPrice}>${originalPrice}</span>
//         </p>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${
//                   selectedSize === size ? styles.selected : ''
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.priceRow}>
//           {hasDiscount && (
//             <span className={styles.originalPrice}>${originalPrice}</span>
//           )}
//           <span className={styles.finalPrice}>${discountedPrice}</span>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
//               −
//             </button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, Men, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;










// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price); // 100ml = base
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   // Price per size
//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount
//     ? unitPrice * (1 - discount)
//     : unitPrice;

//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//           />
//         </div>
//       </div>

//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>
//                 <div className={styles.priceRow}>
//           {hasDiscount && (
//             <span className={styles.originalPrice}>${originalTotal}</span>
//           )}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${
//                   selectedSize === size ? styles.selected : ''
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, Men, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




// import React, { useEffect, useState, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   // Fetch product
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//       })
//       .catch((err) => console.error('❌ Error fetching product:', err));
//   }, [productId]);

//   // Match image box height to right section
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Fetch recommended products
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log('🧪 Related products loaded:', data);
//           setRelatedProducts(data.filter((p) => p.id !== product.id)); // avoid showing itself
//         })
//         .catch((err) => console.error('❌ Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       {/* Product Image */}
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//           />
//         </div>
//       </div>

//       {/* Product Info */}
//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>
//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, {product.genre}, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>

//       {/* ✅ You May Also Like Section */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <Link
//                 to={`/product-details/${item.id}`}
//                 key={item.id}
//                 className={styles.relatedCard}
//               >
//                 <img
//                   src={`http://localhost:5000/${item.image_path}`}
//                   alt={item.name}
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
//                 />
//                 <h3>{item.name}</h3>
//                 <p>${item.price}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;



// import React, { useEffect, useState, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';
// import { FaShoppingCart } from 'react-icons/fa';
// import { useBasket } from '../context/BasketProvider';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [sizeErrors, setSizeErrors] = useState({});

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const { addItem, openSidebar } = useBasket();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;
//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => setRelatedProducts(data.filter((p) => p.id !== product.id)))
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img src={imageUrl} alt={product.name} className={styles.productImage} />
//         </div>
//       </div>

//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>
//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, {product.genre}, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => {
//               const selectedSize = selectedSizes[item.id] || null;
//               const sizeError = sizeErrors[item.id] || false;
//               const basePrice = parseFloat(item.price);
//               const discount = parseFloat(item.discount || 0);
//               const getPrice = (size) => size === 35 ? 7 : size === 80 ? 15 : basePrice;
//               const currentPrice = selectedSize ? getPrice(selectedSize) : basePrice;
//               const originalPrice = discount ? (basePrice / (1 - discount)).toFixed(2) : basePrice.toFixed(2);

//               const handleSizeSelect = (id, size) => {
//                 setSelectedSizes((prev) => ({ ...prev, [id]: size }));
//                 setSizeErrors((prev) => ({ ...prev, [id]: false }));
//               };

//               const handleAddToBasket = () => {
//                 if (!selectedSize) {
//                   setSizeErrors((prev) => ({ ...prev, [item.id]: true }));
//                   return;
//                 }
//                 addItem({
//                   ...item,
//                   size: `${selectedSize}ml`,
//                   price: currentPrice.toFixed(2),
//                   sizeValue: selectedSize,
//                 });
//                 openSidebar();
//               };

//               return (
//                 <div className={styles.card} key={item.id}>
//                   <div className={styles.imageContainer} onClick={() => navigate(`/product-details/${item.id}`)}>
//                     <img src={`http://localhost:5000/${item.image_path}`} alt={item.name} />
//                     {discount > 0 && (
//                       <div className={styles.discountBadge}>
//                         -{Math.round(discount * 100)}%
//                       </div>
//                     )}
//                   </div>

//                   <div className={styles.priceButtons}>
//                     {[35, 80, 100].map((size) => (
//                       <div
//                         key={size}
//                         className={`${styles.flipButton} ${selectedSize === size ? styles.selectedSize : ''}`}
//                         onClick={() => handleSizeSelect(item.id, size)}
//                       >
//                         <div className={styles.flipInner}>
//                           <div className={styles.flipFront}>{size}ml</div>
//                           <div className={styles.flipBack}>{size === 35 ? 'Small' : size === 80 ? 'Medium' : 'Large'}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {sizeError && <div className={styles.errorMessage}>Please select a size before adding to cart</div>}

//                   <div className={styles.addToCartButton}>
//                     <div className={styles.flipButton} onClick={handleAddToBasket}>
//                       <div className={styles.flipInner}>
//                         <div className={styles.flipFront}>Add to Cart</div>
//                         <div className={styles.flipBack}><FaShoppingCart /></div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.details}>
//                     <h3 className={styles.name}>{item.name}</h3>
//                     <div className={styles.price}>
//                       {discount > 0 && <span className={styles.original}>${originalPrice}</span>}
//                       <span className={styles.current}>${currentPrice.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





// import React, { useEffect, useState, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       fetch(`http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`)
//         .then((res) => res.json())
//         .then((data) => setRelatedProducts(data.filter((p) => p.id !== product.id)))
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//           />
//         </div>
//       </div>

//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>

//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>

//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, {product.genre}, Sale</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <Link to={`/product-details/${item.id}`} key={item.id} className={`${styles.card} ${styles.relatedCard}`}>
//                 <div className={styles.imageContainer}>
//                   <img
//                     src={`http://localhost:5000/${item.image_path}`}
//                     alt={item.name}
//                     onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
//                   />
//                 </div>
//                 <div className={styles.details}>
//                   <h3 className={styles.name}>{item.name}</h3>
//                   <div className={styles.price}>
//                     <span className={styles.current}>${parseFloat(item.price).toFixed(2)}</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;



// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard'; // ✅ Import your full card component
// import styles from '../style/ProductDetail.module.css';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   // Fetch main product
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   // Match height between image and info column
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Fetch related products
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   return (
//     <div className={styles.productPage}>
//       {/* Product Image */}
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//           />
//         </div>
//       </div>

//       {/* Product Info */}
//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>
//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart}>ADD TO CART</button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, {product.genre}</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>

//       {/* You may also like */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard key={item.id} product={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;




// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider'; // ✅ import basket context

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket(); // ✅ use context
//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   // ✅ Add to basket functionality
//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       size: selectedSize
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.productPage}>
//       {/* Image */}
//       <div className={styles.imageContainer}>
//         <div ref={imageBoxRef} className={styles.imageWrapper}>
//           <img
//             src={imageUrl}
//             alt={product.name}
//             className={styles.productImage}
//             onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//           />
//         </div>
//       </div>

//       {/* Info */}
//       <div ref={infoRef} className={styles.infoWrapper}>
//         {hasDiscount && (
//           <div className={styles.discountBadge}>
//             -{Math.round(discount * 100)}%
//           </div>
//         )}

//         <h1 className={styles.title}>{product.name}</h1>
//         <div className={styles.priceRow}>
//           {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//           <span className={styles.finalPrice}>${totalPrice}</span>
//         </div>
//         <p className={styles.shipping}>Shipping calculated at checkout.</p>

//         <div className={styles.sizeSection}>
//           <span className={styles.sizeLabel}>Size</span>
//           <div className={styles.sizeButtons}>
//             {['25ml', '80ml', '100ml'].map((size) => (
//               <button
//                 key={size}
//                 className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.controls}>
//           <div className={styles.quantity}>
//             <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
//             <span>{quantity}</span>
//             <button onClick={() => setQuantity((q) => q + 1)}>+</button>
//           </div>

//           <button className={styles.addToCart} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>
//         </div>

//         <div className={styles.meta}>
//           <p><strong>SKU:</strong> N/A</p>
//           <p><strong>Availability:</strong> In Stock</p>
//           <p><strong>Categories:</strong> Perfumes, {product.genre}</p>
//           <p><strong>Tags:</strong> 2025 Collection, Minimal</p>
//         </div>
//       </div>

//       {/* You may also like */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard key={item.id} product={item} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       size: selectedSize
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         {/* Left Column - Image */}
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Column - Info */}
//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && (
//               <span className={styles.originalPrice}>${originalTotal}</span>
//             )}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {/* Size selection */}
//           <div className={styles.sizeSection}>
//             <h3 className={styles.sectionTitle}>Size</h3>
//             <div className={styles.sizeButtons}>
//               {['25ml', '80ml', '100ml'].map((size) => (
//                 <button
//                   key={size}
//                   className={`${styles.sizeBtn} ${
//                     selectedSize === size ? styles.selected : ''
//                   }`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Cart */}
//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           {/* Product details */}
//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>
//             <div className={styles.detailsGrid}>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>SKU:</span>
//                 <span className={styles.detailValue}>N/A</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Availability:</span>
//                 <span className={styles.detailValue}>In Stock</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Categories:</span>
//                 <span className={styles.detailValue}>Perfumes, {product.genre}</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Tags:</span>
//                 <span className={styles.detailValue}>2025 Collection, Minimal</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard 
//                 key={item.id} 
//                 product={item} 
//                 className={styles.relatedCard}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // ✅ Related products logic with full path support
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       baseImagePath = 'terkibwomen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `http://localhost:5000/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `http://localhost:5000/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       size: selectedSize
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         {/* Image Column */}
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Info Column */}
//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && (
//               <span className={styles.originalPrice}>${originalTotal}</span>
//             )}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>
//             {product.description || 'Premium quality product'}
//           </p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {/* Size Selection */}
//           <div className={styles.sizeSection}>
//             <h3 className={styles.sectionTitle}>Size</h3>
//             <div className={styles.sizeButtons}>
//               {['25ml', '80ml', '100ml'].map((size) => (
//                 <button
//                   key={size}
//                   className={`${styles.sizeBtn} ${
//                     selectedSize === size ? styles.selected : ''
//                   }`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           {/* Meta Info */}
//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>
//             <div className={styles.detailsGrid}>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>SKU:</span>
//                 <span className={styles.detailValue}>N/A</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Availability:</span>
//                 <span className={styles.detailValue}>In Stock</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Categories:</span>
//                 <span className={styles.detailValue}>Perfumes, {product.genre}</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Tags:</span>
//                 <span className={styles.detailValue}>2025 Collection, Minimal</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* You may also like */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 product={item}
//                 className={styles.relatedCard}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;













// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState('100ml');
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const API_URL = process.env.REACT_APP_API_URL;

//   // Fetch product details
//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data))
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   // Set image container height to match info box
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Fetch related products
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       baseImagePath = 'terkibwomen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `${API_URL}/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       size: selectedSize,
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         {/* Image Column */}
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Info Column */}
//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>
//             {product.description || 'Premium quality product'}
//           </p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {/* Size Selection */}
//           <div className={styles.sizeSection}>
//             <h3 className={styles.sectionTitle}>Size</h3>
//             <div className={styles.sizeButtons}>
//               {['25ml', '80ml', '100ml'].map((size) => (
//                 <button
//                   key={size}
//                   className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           {/* Meta Info */}
//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>
//             <div className={styles.detailsGrid}>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>SKU:</span>
//                 <span className={styles.detailValue}>N/A</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Availability:</span>
//                 <span className={styles.detailValue}>In Stock</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Categories:</span>
//                 <span className={styles.detailValue}>Perfumes, {product.genre}</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Tags:</span>
//                 <span className={styles.detailValue}>2025 Collection, Minimal</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* You may also like */}
//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard
//                 key={item.id}
//                 product={item}
//                 className={styles.relatedCard}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





















// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const API_URL = process.env.REACT_APP_API_URL;

//   // Fetch product details
//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type !== 'multiple') {
//           setSelectedSize('100ml'); // default for single-type
//         }
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   // Set image height to match info height
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Fetch related products
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       baseImagePath = 'terkibwomen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `${API_URL}/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;
//   const isMultiple = product.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (size === '25ml') return 7;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(isMultiple && { size: selectedSize }),
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {/* Size Section (only if multiple) */}
//           {isMultiple && (
//             <div className={styles.sizeSection}>
//               <h3 className={styles.sectionTitle}>Size</h3>
//               <div className={styles.sizeButtons}>
//                 {['25ml', '80ml', '100ml'].map((size) => (
//                   <button
//                     key={size}
//                     className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quantity */}
//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>
//             <div className={styles.detailsGrid}>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>SKU:</span>
//                 <span className={styles.detailValue}>N/A</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Availability:</span>
//                 <span className={styles.detailValue}>In Stock</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Categories:</span>
//                 <span className={styles.detailValue}>Perfumes, {product.genre}</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Tags:</span>
//                 <span className={styles.detailValue}>2025 Collection, Minimal</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedGrid}>
//             {relatedProducts.map((item) => (
//               <ProductCard key={item.id} product={item} className={styles.relatedCard} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;









// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const relatedProductsRef = useRef(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   // Fetch product details
//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type !== 'multiple') {
//           setSelectedSize('100ml');
//         }
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   // Set image height to match info height
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Fetch related products
//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       baseImagePath = 'terkibwomen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `${API_URL}/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);
      
//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts(prev => {
//         const newIndex = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(newIndex, relatedProducts.length - 2));
//       });
//     }
//   };

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;
//   const isMultiple = product.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(isMultiple && { size: selectedSize }),
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {isMultiple && (
//             <div className={styles.sizeSection}>
//               <h3 className={styles.sectionTitle}>Size</h3>
//               <div className={styles.sizeButtons}>
//                 {['50ml', '80ml', '100ml'].map((size) => (
//                   <button
//                     key={size}
//                     className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>
//             <div className={styles.detailsGrid}>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>SKU:</span>
//                 <span className={styles.detailValue}>N/A</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Availability:</span>
//                 <span className={styles.detailValue}>In Stock</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Categories:</span>
//                 <span className={styles.detailValue}>Perfumes, {product.genre}</span>
//               </div>
//               <div className={styles.detailItem}>
//                 <span className={styles.detailLabel}>Tags:</span>
//                 <span className={styles.detailValue}>2025 Collection, Minimal</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedContainer}>
//             {visibleProducts > 0 && (
//               <button 
//                 className={styles.scrollButton} 
//                 onClick={() => scrollRelated('left')}
//                 aria-label="Scroll left"
//               >
//                 <FiChevronLeft />
//               </button>
//             )}
            
//             <div className={styles.relatedGrid} ref={relatedProductsRef}>
//               {relatedProducts.map((item, index) => (
//                 <div 
//                   key={item.id} 
//                   className={styles.relatedCardWrapper}
//                 >
//                   <ProductCard 
//                     product={item} 
//                     className={styles.relatedCard}
//                     compactHeight={true}
//                   />
//                 </div>
//               ))}
//             </div>
            
//             {visibleProducts < relatedProducts.length - 2 && (
//               <button 
//                 className={styles.scrollButton} 
//                 onClick={() => scrollRelated('right')}
//                 aria-label="Scroll right"
//               >
//                 <FiChevronRight />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





















// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const relatedProductsRef = useRef(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type !== 'multiple') {
//           setSelectedSize('100ml');
//         }
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;

//     const imagePath = product.image_path || '';
//     const genre = product.genre || '';
//     let baseImagePath = '';

//     if (imagePath.includes('images/terkibmen/')) {
//       baseImagePath = 'terkibmen';
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       baseImagePath = 'terkibwomen';
//     } else if (imagePath.includes('images/jehiz/')) {
//       baseImagePath = 'jehiz';
//     }

//     if (baseImagePath) {
//       const genreQuery = baseImagePath === 'jehiz' ? `&genre=${genre}` : '';
//       const url = `${API_URL}/api/products/recommend?baseImagePath=${baseImagePath}${genreQuery}`;

//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           setRelatedProducts(data.filter((p) => p.id !== product.id));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts((prev) => {
//         const newIndex = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(newIndex, relatedProducts.length - 2));
//       });
//     }
//   };

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;
//   const isMultiple = product.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(isMultiple && { size: selectedSize }),
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>

//           {isMultiple && (
//             <div className={styles.sizeSection}>
//               <h3 className={styles.sectionTitle}>Size</h3>
//               <div className={styles.sizeButtons}>
//                 {['50ml', '80ml', '100ml'].map((size) => (
//                   <button
//                     key={size}
//                     className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>
//           <div className={styles.detailsSection}>
//   <h3 className={styles.sectionTitle}>Product Details</h3>
//   <ul className={styles.bulletList}>
//     <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
//     <li><strong>📜 ISO certification of quality scents</strong></li>
//     <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
//     <li><strong>💨 Stays long. Speaks loud.</strong></li>
//   </ul>
// </div>

//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedContainer}>
//             {visibleProducts > 0 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('left')}
//                 aria-label="Scroll left"
//               >
//                 <FiChevronLeft />
//               </button>
//             )}

//             <div className={styles.relatedGrid} ref={relatedProductsRef}>
//               {relatedProducts.map((item) => (
//                 <div key={item.id} className={styles.relatedCardWrapper}>
//                   <ProductCard
//                     product={item}
//                     className={styles.relatedCard}
//                     compactHeight={true}
//                   />
//                 </div>
//               ))}
//             </div>

//             {visibleProducts < relatedProducts.length - 2 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('right')}
//                 aria-label="Scroll right"
//               >
//                 <FiChevronRight />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
















// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const relatedProductsRef = useRef(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type !== 'multiple') {
//           setSelectedSize('100ml');
//         }
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);



// useEffect(() => {
//   if (!product) return;

//   const genre = product.genre || '';
//   const type = product.type?.toLowerCase() || '';
//   const imagePath = product.image_path?.toLowerCase() || '';
//   let url = '';

//   const typeBasedRecommendations = ['musk', 'air', 'furniture', 'watch', 'makeup'];

//   if (typeBasedRecommendations.includes(type)) {
//     url = `${API_URL}/api/products`;
//   } else if (imagePath.includes('images/terkibmen/')) {
//     url = `${API_URL}/api/products?baseImagePath=terkibmen`;
//   } else if (imagePath.includes('images/terkibwomen/')) {
//     url = `${API_URL}/api/products?baseImagePath=terkibwomen`;
//   } else if (imagePath.includes('images/jehiz/')) {
//     url = `${API_URL}/api/products?baseImagePath=jehiz&genre=${genre}`;
//   }

//   if (url) {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         let filtered;

//         if (typeBasedRecommendations.includes(type)) {
//           filtered = data.filter(p => p.type?.toLowerCase() === type && p.id !== product.id);
//         } else {
//           filtered = data.filter(p => p.id !== product.id);
//         }

//         setRelatedProducts(filtered.slice(0, 4)); // 👈 Only take 4 products
//       })
//       .catch((err) => console.error('Error fetching related products:', err));
//   }
// }, [product, API_URL]);




//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts((prev) => {
//         const newIndex = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(newIndex, relatedProducts.length - 2));
//       });
//     }
//   };

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;
//   const isMultiple = product.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(isMultiple && { size: selectedSize }),
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>
//         <div className={styles.imageContainer}>
//           <div ref={imageBoxRef} className={styles.imageWrapper}>
//             <img
//               src={imageUrl}
//               alt={product.name}
//               className={styles.productImage}
//               onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//             />
//             {hasDiscount && (
//               <div className={styles.discountBadge}>
//                 -{Math.round(discount * 100)}%
//               </div>
//             )}
//           </div>
//         </div>

//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

// <div className={styles.detailsSection}>
//   <h3 className={styles.sectionTitle}>Product Details</h3>

//   {(product?.type === 'multiple' || product?.type === 'single') && (
//     <ul className={styles.bulletList}>
//       <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
//       <li><strong>📜 ISO certification of quality scents</strong></li>
//       <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
//       <li><strong>💨 Stays long. Speaks loud.</strong></li>
//     </ul>
//   )}

//   {product?.type === 'watch' && (
//     <ul className={styles.bulletList}>
//       <li><strong>⌚ Curated selection of 100% original Curren watches</strong></li>
//       <li><strong>🕴️ Designed for men and women who value elegance and affordability</strong></li>
//       <li><strong>🛠️ Modern design, durable materials, and precise movement</strong></li>
//       <li><strong>🎉 Perfect for everyday wear or special occasions</strong></li>
//     </ul>
//   )}

//   {product?.type === 'makeup' && (
//     <ul className={styles.bulletList}>
//       <li><strong>💎 Discover authentic beauty with Platinum Perfumes</strong></li>
//       <li><strong>🧴 100% original, high-quality makeup brands</strong></li>
//       <li><strong>🌍 Featuring top international names</strong></li>
//       <li><strong>💄 Carefully selected beauty essentials you can trust</strong></li>
//     </ul>
//   )}

//   {product?.type === 'musk' && (
//     <ul className={styles.bulletList}>
//       <li><strong>🌿 Premium selection of rich, authentic musk perfumes</strong></li>
//       <li><strong>🧴 Long-lasting oil and spray formulas for every preference</strong></li>
//       <li><strong>🕊️ Soft, sensual, and clean scents that linger beautifully</strong></li>
//       <li><strong>🎁 Ideal for personal use or as a thoughtful gift</strong></li>
//     </ul>
//   )}

//   {(product?.type === 'air' || product?.type === 'furniture') && (
//     <ul className={styles.bulletList}>
//       <li><strong>🌬️ Instantly freshens your space with captivating scents</strong></li>
//       <li><strong>🛋️ Specially crafted for both air and fabric surfaces</strong></li>
//       <li><strong>🍃 Long-lasting formulas with elegant fragrance blends</strong></li>
//       <li><strong>🏠 Perfect for home, office, or car use</strong></li>
//     </ul>
//   )}
// </div>








//           {isMultiple && (
//             <div className={styles.sizeSection}>
//               <h3 className={styles.sectionTitle}>Size</h3>
//               <div className={styles.sizeButtons}>
//                 {['50ml', '80ml', '100ml'].map((size) => (
//                   <button
//                     key={size}
//                     className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           {/* ✅ Moved description & shipping below Add to Cart */}
//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedContainer}>
//             {visibleProducts > 0 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('left')}
//                 aria-label="Scroll left"
//               >
//                 <FiChevronLeft />
//               </button>
//             )}

//             <div className={styles.relatedGrid} ref={relatedProductsRef}>
//               {relatedProducts.map((item) => (
//                 <div key={item.id} className={styles.relatedCardWrapper}>
//                   <ProductCard
//                     product={item}
//                     className={styles.relatedCard}
//                     compactHeight={true}
//                   />
//                 </div>
//               ))}
//             </div>

//             {visibleProducts < relatedProducts.length - 2 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('right')}
//                 aria-label="Scroll right"
//               >
//                 <FiChevronRight />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;















// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef();
//   const imageBoxRef = useRef();
//   const relatedProductsRef = useRef(null);
//   const API_URL = process.env.REACT_APP_API_URL;

//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type === 'multiple') {
//           setSelectedSize('100ml');
//         } else if (data.type === 'musk') {
//           setSelectedSize('6ml');
//         }
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   useEffect(() => {
//     if (!product) return;

//     const genre = product.genre || '';
//     const type = product.type?.toLowerCase() || '';
//     const imagePath = product.image_path?.toLowerCase() || '';
//     let url = '';

//     const typeBasedRecommendations = ['musk', 'air', 'furniture', 'watch', 'makeup'];

//     if (typeBasedRecommendations.includes(type)) {
//       url = `${API_URL}/api/products`;
//     } else if (imagePath.includes('images/terkibmen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibmen`;
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibwomen`;
//     } else if (imagePath.includes('images/jehiz/')) {
//       url = `${API_URL}/api/products?baseImagePath=jehiz&genre=${genre}`;
//     }

//     if (url) {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           let filtered;
//           if (typeBasedRecommendations.includes(type)) {
//             filtered = data.filter(p => p.type?.toLowerCase() === type && p.id !== product.id);
//           } else {
//             filtered = data.filter(p => p.id !== product.id);
//           }

//           setRelatedProducts(filtered.slice(0, 4));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts((prev) => {
//         const newIndex = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(newIndex, relatedProducts.length - 2));
//       });
//     }
//   };

//   if (!product) return <div className={styles.loading}>Loading...</div>;

//   const imageUrl = `${API_URL}/${product.image_path}`;
//   const basePrice = parseFloat(product.price);
//   const discount = parseFloat(product.discount || 0);
//   const hasDiscount = discount > 0;
//   const isMultiple = product.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (product?.type === 'musk') {
//       if (size === '6ml') return 6;
//       if (size === '12ml') return 12;
//     }
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(selectedSize && { size: selectedSize }),
//     };

//     addItem(item);
//     openSidebar();
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.productContainer}>

// <div className={styles.imageContainer}>
//   <div className={styles.imageViewport}>
//     <img
//       src={imageUrl}
//       alt={product.name}
//       onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//       loading="lazy"
//     />
//     {hasDiscount && (
//       <div className={styles.discountBadge}>
//         -{Math.round(discount * 100)}%
//       </div>
//     )}
//   </div>
// </div>

//         <div ref={infoRef} className={styles.infoContainer}>
//           <h1 className={styles.title}>{product.name}</h1>

//           <div className={styles.priceRow}>
//             {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//             <span className={styles.finalPrice}>${totalPrice}</span>
//           </div>

//           <div className={styles.detailsSection}>
//             <h3 className={styles.sectionTitle}>Product Details</h3>

//             {(product?.type === 'multiple' || product?.type === 'single') && (
//               <ul className={styles.bulletList}>
//                 <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
//                 <li><strong>📜 ISO certification of quality scents</strong></li>
//                 <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
//                 <li><strong>💨 Stays long. Speaks loud.</strong></li>
//               </ul>
//             )}

//             {product?.type === 'watch' && (
//               <ul className={styles.bulletList}>
//                 <li><strong>⌚ Curated selection of 100% original Curren watches</strong></li>
//                 <li><strong>🕴️ Designed for men and women who value elegance and affordability</strong></li>
//                 <li><strong>🛠️ Modern design, durable materials, and precise movement</strong></li>
//                 <li><strong>🎉 Perfect for everyday wear or special occasions</strong></li>
//               </ul>
//             )}

//             {product?.type === 'makeup' && (
//               <ul className={styles.bulletList}>
//                 <li><strong>💎 Discover authentic beauty with Platinum Perfumes</strong></li>
//                 <li><strong>🧴 100% original, high-quality makeup brands</strong></li>
//                 <li><strong>🌍 Featuring top international names</strong></li>
//                 <li><strong>💄 Carefully selected beauty essentials you can trust</strong></li>
//               </ul>
//             )}

//             {product?.type === 'musk' && (
//               <ul className={styles.bulletList}>
//                 <li><strong>🌿 Premium selection of rich, authentic musk perfumes</strong></li>
//                 <li><strong>🧴 Long-lasting oil and spray formulas for every preference</strong></li>
//                 <li><strong>🕊️ Soft, sensual, and clean scents that linger beautifully</strong></li>
//                 <li><strong>🎁 Ideal for personal use or as a thoughtful gift</strong></li>
//               </ul>
//             )}

//             {(product?.type === 'air' || product?.type === 'furniture') && (
//               <ul className={styles.bulletList}>
//                 <li><strong>🌬️ Instantly freshens your space with captivating scents</strong></li>
//                 <li><strong>🛋️ Specially crafted for both air and fabric surfaces</strong></li>
//                 <li><strong>🍃 Long-lasting formulas with elegant fragrance blends</strong></li>
//                 <li><strong>🏠 Perfect for home, office, or car use</strong></li>
//               </ul>
//             )}
//           </div>

//           {(isMultiple || product?.type === 'musk') && (
//             <div className={styles.sizeSection}>
//               <h3 className={styles.sectionTitle}>Size</h3>
//               <div className={styles.sizeButtons}>
//                 {(product?.type === 'musk' ? ['6ml', '12ml'] : ['50ml', '80ml', '100ml']).map((size) => (
//                   <button
//                     key={size}
//                     className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.quantitySection}>
//             <h3 className={styles.sectionTitle}>Quantity</h3>
//             <div className={styles.quantityControls}>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className={styles.quantityValue}>{quantity}</span>
//               <button
//                 className={styles.quantityBtn}
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//             ADD TO CART
//           </button>

//           <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//           <p className={styles.shipping}>Shipping calculated at checkout.</p>
//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className={styles.relatedSection}>
//           <h2 className={styles.relatedTitle}>You may also like</h2>
//           <div className={styles.relatedContainer}>
//             {visibleProducts > 0 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('left')}
//                 aria-label="Scroll left"
//               >
//                 <FiChevronLeft />
//               </button>
//             )}

//             <div className={styles.relatedGrid} ref={relatedProductsRef}>
//               {relatedProducts.map((item) => (
//                 <div key={item.id} className={styles.relatedCardWrapper}>
//                   <ProductCard
//                     product={item}
//                     className={styles.relatedCard}
//                     compactHeight={true}
//                   />
//                 </div>
//               ))}
//             </div>

//             {visibleProducts < relatedProducts.length - 2 && (
//               <button
//                 className={styles.scrollButton}
//                 onClick={() => scrollRelated('right')}
//                 aria-label="Scroll right"
//               >
//                 <FiChevronRight />
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;


























































// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useRef, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const SITE_URL =
//   process.env.REACT_APP_SITE_URL ||
//   (typeof window !== 'undefined' ? window.location.origin : '');

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef(null);
//   const imageBoxRef = useRef(null);
//   const relatedProductsRef = useRef(null);

//   const API_URL = process.env.REACT_APP_API_URL;

//   // Fetch product
//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type === 'multiple') setSelectedSize('100ml');
//         else if (data.type === 'musk') setSelectedSize('6ml');
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   // Match image box to info height
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Related products (same logic as your first file)
//   useEffect(() => {
//     if (!product) return;

//     const genre = product.genre || '';
//     const type = product.type?.toLowerCase() || '';
//     const imagePath = product.image_path?.toLowerCase() || '';
//     let url = '';

//     const typeBasedRecommendations = ['musk', 'air', 'furniture', 'watch', 'makeup'];

//     if (typeBasedRecommendations.includes(type)) {
//       url = `${API_URL}/api/products`;
//     } else if (imagePath.includes('images/terkibmen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibmen`;
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibwomen`;
//     } else if (imagePath.includes('images/jehiz/')) {
//       url = `${API_URL}/api/products?baseImagePath=jehiz&genre=${genre}`;
//     }

//     if (url) {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           let filtered;
//           if (typeBasedRecommendations.includes(type)) {
//             filtered = data.filter(
//               (p) => p.type?.toLowerCase() === type && p.id !== product.id
//             );
//           } else {
//             filtered = data.filter((p) => p.id !== product.id);
//           }
//           setRelatedProducts(filtered.slice(0, 4));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const stylesComputed = window.getComputedStyle(card);
//       const cardWidth = card.offsetWidth + parseInt(stylesComputed.marginRight, 10);

//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts((prev) => {
//         const next = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(next, relatedProducts.length - 2));
//       });
//     }
//   };

//   // ----- Pricing helpers (same as your first file) -----
//   const imageUrl = product ? `${API_URL}/${product.image_path}` : '';
//   const basePrice = product ? parseFloat(product.price) : 0;
//   const discount = product ? parseFloat(product.discount || 0) : 0;
//   const hasDiscount = discount > 0;
//   const isMultiple = product?.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (product?.type === 'musk') {
//       if (size === '6ml') return 6;
//       if (size === '12ml') return 12;
//     }
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(selectedSize && { size: selectedSize }),
//     };
//     addItem(item);
//     openSidebar();
//   };

//   // ------------------ SEO (Helmet) ------------------
//   const canonicalUrl = useMemo(
//     () => `${SITE_URL}/product-details/${productId}`,
//     [productId]
//   );

//   const seoTitle = product
//     ? `${product.name} | Platinum Perfumes Lebanon`
//     : 'Product | Platinum Perfumes Lebanon';

//   const seoDescription = product
//     ? (product.description
//         ? String(product.description).slice(0, 155)
//         : `Shop ${product.name} by ${product.brand || 'Platinum'} at Platinum Perfumes Lebanon. Long-lasting, premium fragrances delivered in Lebanon.`)
//     : 'Shop premium perfumes, musks, and more at Platinum Perfumes Lebanon.';

//   const ogImage = product ? imageUrl : `${SITE_URL}/images/products/platinum.png`;

//   const productJsonLd = product
//     ? {
//         '@context': 'https://schema.org/',
//         '@type': 'Product',
//         name: product.name,
//         image: [ogImage],
//         description: product.description || 'Premium quality product',
//         brand: product.brand || 'Platinum',
//         sku: String(product.id),
//         category: product.genre || undefined,
//         offers: {
//           '@type': 'Offer',
//           url: canonicalUrl,
//           priceCurrency: 'USD',
//           price: discountedUnitPrice
//             ? discountedUnitPrice.toFixed(2)
//             : basePrice.toFixed(2),
//           availability: 'https://schema.org/InStock',
//           itemCondition: 'https://schema.org/NewCondition',
//         },
//       }
//     : null;

//   // ------------------ RENDER ------------------

//   if (!product) {
//     return (
//       <>
//         <Helmet prioritizeSeoTags>
//           <title>{seoTitle}</title>
//           <meta name="description" content={seoDescription} />
//           <link rel="canonical" href={canonicalUrl} />
//           <meta property="og:type" content="website" />
//           <meta property="og:title" content={seoTitle} />
//           <meta property="og:description" content={seoDescription} />
//           <meta property="og:url" content={canonicalUrl} />
//           <meta property="og:image" content={ogImage} />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content={seoTitle} />
//           <meta name="twitter:description" content={seoDescription} />
//           <meta name="twitter:image" content={ogImage} />
//         </Helmet>

//         <div className={styles.loading}>Loading...</div>
//       </>
//     );
//   }

//   return (
//     <>
//       {/* SEO Head */}
//       <Helmet prioritizeSeoTags>
//         <title>{seoTitle}</title>
//         <meta name="description" content={seoDescription} />
//         <link rel="canonical" href={canonicalUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="product" />
//         <meta property="og:title" content={seoTitle} />
//         <meta property="og:description" content={seoDescription} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:site_name" content="Platinum Perfumes Lebanon" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoTitle} />
//         <meta name="twitter:description" content={seoDescription} />
//         <meta name="twitter:image" content={ogImage} />

//         {/* JSON-LD Product */}
//         {productJsonLd && (
//           <script type="application/ld+json">
//             {JSON.stringify(productJsonLd)}
//           </script>
//         )}
//       </Helmet>

//       <div className={styles.container}>
//         <div className={styles.productContainer}>
// <div className={styles.imageContainer}>
//   <div className={styles.imageViewport}>
//     <img
//       src={imageUrl}
//       alt={product.name}
//       onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//       loading="lazy"
//     />
//     {hasDiscount && (
//       <div className={styles.discountBadge}>
//         -{Math.round(discount * 100)}%
//       </div>
//     )}
//   </div>
// </div>


//           <div ref={infoRef} className={styles.infoContainer}>
//             <h1 className={styles.title}>{product.name}</h1>

//             <div className={styles.priceRow}>
//               {hasDiscount && <span className={styles.originalPrice}>${originalTotal}</span>}
//               <span className={styles.finalPrice}>${totalPrice}</span>
//             </div>

//             <div className={styles.detailsSection}>
//               <h3 className={styles.sectionTitle}>Product Details</h3>

//               {(product?.type === 'multiple' || product?.type === 'single') && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
//                   <li><strong>📜 ISO certification of quality scents</strong></li>
//                   <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
//                   <li><strong>💨 Stays long. Speaks loud.</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'watch' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>⌚ Curated selection of 100% original Curren watches</strong></li>
//                   <li><strong>🕴️ Designed for men and women who value elegance and affordability</strong></li>
//                   <li><strong>🛠️ Modern design, durable materials, and precise movement</strong></li>
//                   <li><strong>🎉 Perfect for everyday wear or special occasions</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'makeup' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>💎 Discover authentic beauty with Platinum Perfumes</strong></li>
//                   <li><strong>🧴 100% original, high-quality makeup brands</strong></li>
//                   <li><strong>🌍 Featuring top international names</strong></li>
//                   <li><strong>💄 Carefully selected beauty essentials you can trust</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'musk' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🌿 Premium selection of rich, authentic musk perfumes</strong></li>
//                   <li><strong>🧴 Long-lasting oil and spray formulas for every preference</strong></li>
//                   <li><strong>🕊️ Soft, sensual, and clean scents that linger beautifully</strong></li>
//                   <li><strong>🎁 Ideal for personal use or as a thoughtful gift</strong></li>
//                 </ul>
//               )}

//               {(product?.type === 'air' || product?.type === 'furniture') && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🌬️ Instantly freshens your space with captivating scents</strong></li>
//                   <li><strong>🛋️ Specially crafted for both air and fabric surfaces</strong></li>
//                   <li><strong>🍃 Long-lasting formulas with elegant fragrance blends</strong></li>
//                   <li><strong>🏠 Perfect for home, office, or car use</strong></li>
//                 </ul>
//               )}
//             </div>

//             {(isMultiple || product?.type === 'musk') && (
//               <div className={styles.sizeSection}>
//                 <h3 className={styles.sectionTitle}>Size</h3>
//                 <div className={styles.sizeButtons}>
//                   {(product?.type === 'musk' ? ['6ml', '12ml'] : ['50ml', '80ml', '100ml']).map(
//                     (size) => (
//                       <button
//                         key={size}
//                         className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                         onClick={() => setSelectedSize(size)}
//                       >
//                         {size}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}

//             <div className={styles.quantitySection}>
//               <h3 className={styles.sectionTitle}>Quantity</h3>
//               <div className={styles.quantityControls}>
//                 <button
//                   className={styles.quantityBtn}
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                 >
//                   −
//                 </button>
//                 <span className={styles.quantityValue}>{quantity}</span>
//                 <button
//                   className={styles.quantityBtn}
//                   onClick={() => setQuantity((q) => q + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//               ADD TO CART
//             </button>

//             <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//             <p className={styles.shipping}>Shipping calculated at checkout.</p>
//           </div>
//         </div>

//         {relatedProducts.length > 0 && (
//           <div className={styles.relatedSection}>
//             <h2 className={styles.relatedTitle}>You may also like</h2>
//             <div className={styles.relatedContainer}>
//               {visibleProducts > 0 && (
//                 <button
//                   className={styles.scrollButton}
//                   onClick={() => scrollRelated('left')}
//                   aria-label="Scroll left"
//                 >
//                   <FiChevronLeft />
//                 </button>
//               )}

//               <div className={styles.relatedGrid} ref={relatedProductsRef}>
//                 {relatedProducts.map((item) => (
//                   <div key={item.id} className={styles.relatedCardWrapper}>
//                     <ProductCard product={item} className={styles.relatedCard} compactHeight />
//                   </div>
//                 ))}
//               </div>

//               {visibleProducts < relatedProducts.length - 2 && (
//                 <button
//                   className={styles.scrollButton}
//                   onClick={() => scrollRelated('right')}
//                   aria-label="Scroll right"
//                 >
//                   <FiChevronRight />
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductDetails;




















// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useRef, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import ProductCard from '../componen/ProductCard';
// import styles from '../style/ProductDetail.module.css';
// import { useBasket } from '../context/BasketProvider';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// const SITE_URL =
//   process.env.REACT_APP_SITE_URL ||
//   (typeof window !== 'undefined' ? window.location.origin : '');

// // 🟢 Perfume list (copied from ProductCard for now, later can be moved to a shared file)
// const perfumeList = [
//   "Oriental Oud",
//   "Acqua di Gio White",
//   "Acqua di Gio",
//   "Azzaro Chrome",
//   "Issey Miyake",
//   "Armani Code",
//   "Bleu de Chanel",
//   "Versace Eros",
//   "Sauvage",
//   "One Million",
//   "Good Girl",
//   "Black Opium",
//   "La Vie Est Belle",
//   "Chanel No. 5",
//   "Dior J'adore",
//   "Yves Saint Laurent Libre",
//   // ... rest of your list
// ];

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const { addItem, openSidebar } = useBasket();

//   const [product, setProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [visibleProducts, setVisibleProducts] = useState(0);

//   const infoRef = useRef(null);
//   const imageBoxRef = useRef(null);
//   const relatedProductsRef = useRef(null);

//   const API_URL = process.env.REACT_APP_API_URL;

//   // 🟢 Perfume popup states
//   const [showPerfumePopup, setShowPerfumePopup] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPerfume, setSelectedPerfume] = useState('Perfume');

//   // Fetch product
//   useEffect(() => {
//     fetch(`${API_URL}/api/products/${productId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         if (data.type === 'multiple') setSelectedSize('100ml');
//         else if (data.type === 'musk') setSelectedSize('6ml');
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [productId, API_URL]);

//   // Match image box to info height
//   useEffect(() => {
//     if (infoRef.current && imageBoxRef.current) {
//       const infoHeight = infoRef.current.offsetHeight;
//       imageBoxRef.current.style.height = `${infoHeight}px`;
//     }
//   }, [product]);

//   // Related products (same logic as your first file)
//   useEffect(() => {
//     if (!product) return;

//     const genre = product.genre || '';
//     const type = product.type?.toLowerCase() || '';
//     const imagePath = product.image_path?.toLowerCase() || '';
//     let url = '';

//     const typeBasedRecommendations = ['musk', 'air', 'furniture', 'watch', 'makeup'];

//     if (typeBasedRecommendations.includes(type)) {
//       url = `${API_URL}/api/products`;
//     } else if (imagePath.includes('images/terkibmen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibmen`;
//     } else if (imagePath.includes('images/terkibwomen/')) {
//       url = `${API_URL}/api/products?baseImagePath=terkibwomen`;
//     } else if (imagePath.includes('images/jehiz/')) {
//       url = `${API_URL}/api/products?baseImagePath=jehiz&genre=${genre}`;
//     }

//     if (url) {
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           let filtered;
//           if (typeBasedRecommendations.includes(type)) {
//             filtered = data.filter(
//               (p) => p.type?.toLowerCase() === type && p.id !== product.id
//             );
//           } else {
//             filtered = data.filter((p) => p.id !== product.id);
//           }
//           setRelatedProducts(filtered.slice(0, 4));
//         })
//         .catch((err) => console.error('Error fetching related products:', err));
//     }
//   }, [product, API_URL]);

//   const scrollRelated = (direction) => {
//     if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
//       const container = relatedProductsRef.current;
//       const card = container.children[0];
//       const stylesComputed = window.getComputedStyle(card);
//       const cardWidth = card.offsetWidth + parseInt(stylesComputed.marginRight, 10);

//       container.style.scrollBehavior = 'smooth';
//       container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

//       setVisibleProducts((prev) => {
//         const next = direction === 'left' ? prev - 2 : prev + 2;
//         return Math.max(0, Math.min(next, relatedProducts.length - 2));
//       });
//     }
//   };

//   // ----- Pricing helpers (same as your first file) -----
//   const imageUrl = product ? `${API_URL}/${product.image_path}` : '';
//   const basePrice = product ? parseFloat(product.price) : 0;
//   const discount = product ? parseFloat(product.discount || 0) : 0;
//   const hasDiscount = discount > 0;
//   const isMultiple = product?.type === 'multiple';

//   const getSizePrice = (size) => {
//     if (product?.type === 'musk') {
//       if (size === '6ml') return 6;
//       if (size === '12ml') return 12;
//     }
//     if (size === '50ml') return 10;
//     if (size === '80ml') return 15;
//     return basePrice;
//   };

//   const unitPrice = getSizePrice(selectedSize);
//   const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
//   const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
//   const originalTotal = (unitPrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     const item = {
//       ...product,
//       price: discountedUnitPrice.toFixed(2),
//       total: totalPrice,
//       quantity,
//       ...(selectedSize && { size: selectedSize }),
//       ...(product?.type === 'cream' && { perfume: selectedPerfume }), // 🟢 Include perfume for creams
//     };
//     addItem(item);
//     openSidebar();
//   };

//   // ------------------ SEO (Helmet) ------------------
//   const canonicalUrl = useMemo(
//     () => `${SITE_URL}/product-details/${productId}`,
//     [productId]
//   );

//   const seoTitle = product
//     ? `${product.name} | Platinum Perfumes Lebanon`
//     : 'Product | Platinum Perfumes Lebanon';

//   const seoDescription = product
//     ? (product.description
//         ? String(product.description).slice(0, 155)
//         : `Shop ${product.name} by ${product.brand || 'Platinum'} at Platinum Perfumes Lebanon. Long-lasting, premium fragrances delivered in Lebanon.`)
//     : 'Shop premium perfumes, musks, and more at Platinum Perfumes Lebanon.';

//   const ogImage = product ? imageUrl : `${SITE_URL}/images/products/platinum.png`;

//   const productJsonLd = product
//     ? {
//         '@context': 'https://schema.org/',
//         '@type': 'Product',
//         name: product.name,
//         image: [ogImage],
//         description: product.description || 'Premium quality product',
//         brand: product.brand || 'Platinum',
//         sku: String(product.id),
//         category: product.genre || undefined,
//         offers: {
//           '@type': 'Offer',
//           url: canonicalUrl,
//           priceCurrency: 'USD',
//           price: discountedUnitPrice
//             ? discountedUnitPrice.toFixed(2)
//             : basePrice.toFixed(2),
//           availability: 'https://schema.org/InStock',
//           itemCondition: 'https://schema.org/NewCondition',
//         },
//       }
//     : null;

//   // ------------------ RENDER ------------------

//   if (!product) {
//     return (
//       <>
//         <Helmet prioritizeSeoTags>
//           <title>{seoTitle}</title>
//           <meta name="description" content={seoDescription} />
//           <link rel="canonical" href={canonicalUrl} />
//           <meta property="og:type" content="website" />
//           <meta property="og:title" content={seoTitle} />
//           <meta property="og:description" content={seoDescription} />
//           <meta property="og:url" content={canonicalUrl} />
//           <meta property="og:image" content={ogImage} />
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:title" content={seoTitle} />
//           <meta name="twitter:description" content={seoDescription} />
//           <meta name="twitter:image" content={ogImage} />
//         </Helmet>

//         <div className={styles.loading}>Loading...</div>
//       </>
//     );
//   }

//   return (
//     <>
//       {/* SEO Head */}
//       <Helmet prioritizeSeoTags>
//         <title>{seoTitle}</title>
//         <meta name="description" content={seoDescription} />
//         <link rel="canonical" href={canonicalUrl} />

//         {/* Open Graph */}
//         <meta property="og:type" content="product" />
//         <meta property="og:title" content={seoTitle} />
//         <meta property="og:description" content={seoDescription} />
//         <meta property="og:url" content={canonicalUrl} />
//         <meta property="og:image" content={ogImage} />
//         <meta property="og:site_name" content="Platinum Perfumes Lebanon" />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={seoTitle} />
//         <meta name="twitter:description" content={seoDescription} />
//         <meta name="twitter:image" content={ogImage} />

//         {/* JSON-LD Product */}
//         {productJsonLd && (
//           <script type="application/ld+json">
//             {JSON.stringify(productJsonLd)}
//           </script>
//         )}
//       </Helmet>

//       <div className={styles.container}>
//         <div className={styles.productContainer}>
//           <div className={styles.imageContainer}>
//             <div className={styles.imageViewport}>
//               <img
//                 src={imageUrl}
//                 alt={product.name}
//                 onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//                 loading="lazy"
//               />
//               {hasDiscount && (
//                 <div className={styles.discountBadge}>
//                   -{Math.round(discount * 100)}%
//                 </div>
//               )}
//             </div>
//           </div>

//           <div ref={infoRef} className={styles.infoContainer}>
//             {/* 🟢 Perfume button for creams */}
// {/* 🟢 Perfume button only if product.type === 'cream' */}

//             <h1 className={styles.title}>{product.name}</h1>

//             <div className={styles.priceRow}>
//               {hasDiscount && (
//                 <span className={styles.originalPrice}>${originalTotal}</span>
//               )}
//               <span className={styles.finalPrice}>${totalPrice}</span>
//             </div>


//             <div className={styles.detailsSection}>
// {product?.type === "cream" && (
//   <div className={styles.sizeSection}>
//     <div className={styles.priceButtons}>
//       <button
//         type="button"
//         onClick={() => setShowPerfumePopup(true)}
//         className={styles.perfumeButton}
//       >
//         {selectedPerfume || "Select a Perfume"}
//       </button>
//     </div>
//   </div>
// )}


//               <h3 className={styles.sectionTitle}>Product Details</h3>

//               {(product?.type === 'multiple' || product?.type === 'single') && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
//                   <li><strong>📜 ISO certification of quality scents</strong></li>
//                   <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
//                   <li><strong>💨 Stays long. Speaks loud.</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'watch' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>⌚ Curated selection of 100% original Curren watches</strong></li>
//                   <li><strong>🕴️ Designed for men and women who value elegance and affordability</strong></li>
//                   <li><strong>🛠️ Modern design, durable materials, and precise movement</strong></li>
//                   <li><strong>🎉 Perfect for everyday wear or special occasions</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'makeup' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>💎 Discover authentic beauty with Platinum Perfumes</strong></li>
//                   <li><strong>🧴 100% original, high-quality makeup brands</strong></li>
//                   <li><strong>🌍 Featuring top international names</strong></li>
//                   <li><strong>💄 Carefully selected beauty essentials you can trust</strong></li>
//                 </ul>
//               )}

//               {product?.type === 'musk' && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🌿 Premium selection of rich, authentic musk perfumes</strong></li>
//                   <li><strong>🧴 Long-lasting oil and spray formulas for every preference</strong></li>
//                   <li><strong>🕊️ Soft, sensual, and clean scents that linger beautifully</strong></li>
//                   <li><strong>🎁 Ideal for personal use or as a thoughtful gift</strong></li>
//                 </ul>
//               )}

//               {(product?.type === 'air' || product?.type === 'furniture') && (
//                 <ul className={styles.bulletList}>
//                   <li><strong>🌬️ Instantly freshens your space with captivating scents</strong></li>
//                   <li><strong>🛋️ Specially crafted for both air and fabric surfaces</strong></li>
//                   <li><strong>🍃 Long-lasting formulas with elegant fragrance blends</strong></li>
//                   <li><strong>🏠 Perfect for home, office, or car use</strong></li>
//                 </ul>
//               )}
//             </div>

//             {(isMultiple || product?.type === 'musk') && (
//               <div className={styles.sizeSection}>
//                 <h3 className={styles.sectionTitle}>Size</h3>
//                 <div className={styles.sizeButtons}>
//                   {(product?.type === 'musk' ? ['6ml', '12ml'] : ['50ml', '80ml', '100ml']).map(
//                     (size) => (
//                       <button
//                         key={size}
//                         className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
//                         onClick={() => setSelectedSize(size)}
//                       >
//                         {size}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}

//             <div className={styles.quantitySection}>
//               <h3 className={styles.sectionTitle}>Quantity</h3>
//               <div className={styles.quantityControls}>
//                 <button
//                   className={styles.quantityBtn}
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                 >
//                   −
//                 </button>
//                 <span className={styles.quantityValue}>{quantity}</span>
//                 <button
//                   className={styles.quantityBtn}
//                   onClick={() => setQuantity((q) => q + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             <button className={styles.addToCartBtn} onClick={handleAddToCart}>
//               ADD TO CART
//             </button>

//             <p className={styles.description}>{product.description || 'Premium quality product'}</p>
//             <p className={styles.shipping}>Shipping calculated at checkout.</p>
//           </div>
//         </div>

//         {relatedProducts.length > 0 && (
//           <div className={styles.relatedSection}>
//             <h2 className={styles.relatedTitle}>You may also like</h2>
//             <div className={styles.relatedContainer}>
//               {visibleProducts > 0 && (
//                 <button
//                   className={styles.scrollButton}
//                   onClick={() => scrollRelated('left')}
//                   aria-label="Scroll left"
//                 >
//                   <FiChevronLeft />
//                 </button>
//               )}

//               <div className={styles.relatedGrid} ref={relatedProductsRef}>
//                 {relatedProducts.map((item) => (
//                   <div key={item.id} className={styles.relatedCardWrapper}>
//                     <ProductCard product={item} className={styles.relatedCard} compactHeight />
//                   </div>
//                 ))}
//               </div>

//               {visibleProducts < relatedProducts.length - 2 && (
//                 <button
//                   className={styles.scrollButton}
//                   onClick={() => scrollRelated('right')}
//                   aria-label="Scroll right"
//                 >
//                   <FiChevronRight />
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* 🟢 Perfume Popup */}
// {showPerfumePopup && (
//   <div className={styles.perfumePopupOverlay}>
//     <div className={styles.perfumePopupContent}>
//       <div className={styles.popupHeader}>
//         <h3 className={styles.popupTitle}>Select a Perfume</h3>
//         <button
//           className={styles.closePopup}
//           onClick={() => setShowPerfumePopup(false)}
//         >
//           ×
//         </button>
//       </div>
//       <input
//         type="text"
//         placeholder="Search perfumes..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className={styles.searchInput}
//       />
//       <div className={styles.scrollList}>
//         {perfumeList
//           .filter((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
//           .map((p, i) => (
//             <div
//               key={i}
//               onClick={() => {
//                 setSelectedPerfume(p);
//                 setShowPerfumePopup(false);
//               }}
//               className={styles.perfumeItem}
//             >
//               {p}
//             </div>
//           ))}
//       </div>
//     </div>
//   </div>
// )}
//     </>
//   );
// };

// export default ProductDetails;


















// src/pages/ProductDetails.jsx
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../componen/ProductCard';
import styles from '../style/ProductDetail.module.css';
import { useBasket } from '../context/BasketProvider';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SITE_URL =
  process.env.REACT_APP_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : '');

// 🟢 Perfume list (copied from ProductCard for now, later can be moved to a shared file)
const perfumeList = [
  "Oriental Oud",
  "Acqua di Gio White",
  "Acqua di Gio",
  "Azzaro Chrome",
  "Issey Miyake",
  "Armani Code",
  "Bleu de Chanel",
  "Versace Eros",
  "Sauvage",
  "One Million",
  "Good Girl",
  "Black Opium",
  "La Vie Est Belle",
  "Chanel No. 5",
  "Dior J'adore",
  "Yves Saint Laurent Libre",
  // ... rest of your list
];

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem, openSidebar } = useBasket();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(0);
  const [perfumeError, setPerfumeError] = useState(false); // Added for perfume validation

  const infoRef = useRef(null);
  const imageBoxRef = useRef(null);
  const relatedProductsRef = useRef(null);

  const API_URL = process.env.REACT_APP_API_URL;

  // 🟢 Perfume popup states
  const [showPerfumePopup, setShowPerfumePopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
const [selectedPerfume, setSelectedPerfume] = useState(null);

  // Fetch product
  useEffect(() => {
    fetch(`${API_URL}/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.type === 'multiple') setSelectedSize('100ml');
        else if (data.type === 'musk') setSelectedSize('6ml');
      })
      .catch((err) => console.error('Error fetching product:', err));
  }, [productId, API_URL]);

  // Match image box to info height
  useEffect(() => {
    if (infoRef.current && imageBoxRef.current) {
      const infoHeight = infoRef.current.offsetHeight;
      imageBoxRef.current.style.height = `${infoHeight}px`;
    }
  }, [product]);

  // Related products (same logic as your first file)
  useEffect(() => {
    if (!product) return;

    const genre = product.genre || '';
    const type = product.type?.toLowerCase() || '';
    const imagePath = product.image_path?.toLowerCase() || '';
    let url = '';

    const typeBasedRecommendations = ['musk', 'air', 'furniture', 'watch', 'makeup','cream','body'];

    if (typeBasedRecommendations.includes(type)) {
      url = `${API_URL}/api/products`;
    } else if (imagePath.includes('images/terkibmen/')) {
      url = `${API_URL}/api/products?baseImagePath=terkibmen`;
    } else if (imagePath.includes('images/terkibwomen/')) {
      url = `${API_URL}/api/products?baseImagePath=terkibwomen`;
    } else if (imagePath.includes('images/jehiz/')) {
      url = `${API_URL}/api/products?baseImagePath=jehiz&genre=${genre}`;
    }

    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let filtered;
          if (typeBasedRecommendations.includes(type)) {
            filtered = data.filter(
              (p) => p.type?.toLowerCase() === type && p.id !== product.id
            );
          } else {
            filtered = data.filter((p) => p.id !== product.id);
          }
          setRelatedProducts(filtered.slice(0, 4));
        })
        .catch((err) => console.error('Error fetching related products:', err));
    }
  }, [product, API_URL]);

  const scrollRelated = (direction) => {
    if (relatedProductsRef.current && relatedProductsRef.current.children[0]) {
      const container = relatedProductsRef.current;
      const card = container.children[0];
      const stylesComputed = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseInt(stylesComputed.marginRight, 10);

      container.style.scrollBehavior = 'smooth';
      container.scrollLeft += direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

      setVisibleProducts((prev) => {
        const next = direction === 'left' ? prev - 2 : prev + 2;
        return Math.max(0, Math.min(next, relatedProducts.length - 2));
      });
    }
  };

  // ----- Pricing helpers (same as your first file) -----
  const imageUrl = product ? `${API_URL}/${product.image_path}` : '';
  const basePrice = product ? parseFloat(product.price) : 0;
  const discount = product ? parseFloat(product.discount || 0) : 0;
  const hasDiscount = discount > 0;
  const isMultiple = product?.type === 'multiple';

  const getSizePrice = (size) => {
    if (product?.type === 'musk') {
      if (size === '6ml') return 6;
      if (size === '12ml') return 12;
    }
    if (size === '50ml') return 10;
    if (size === '80ml') return 15;
    return basePrice;
  };

  const unitPrice = getSizePrice(selectedSize);
  const discountedUnitPrice = hasDiscount ? unitPrice * (1 - discount) : unitPrice;
  const totalPrice = (discountedUnitPrice * quantity).toFixed(2);
  const originalTotal = (unitPrice * quantity).toFixed(2);

const handleAddToCart = () => {
  // Check if perfume is required but not selected
  if (product?.type === 'cream' && !selectedPerfume) {
    setPerfumeError(true);
    return;
  }

  setPerfumeError(false); // reset error if valid

  const item = {
    ...product,
    price: discountedUnitPrice.toFixed(2),
    total: totalPrice,
    quantity,
    ...(selectedSize && { size: selectedSize }),
    ...(product?.type === 'cream' && { perfume: selectedPerfume }),
  };
  addItem(item);
  openSidebar();
};


  const handlePerfumeSelect = (perfume) => {
    setSelectedPerfume(perfume);
    setShowPerfumePopup(false);
    setPerfumeError(false); // Reset error when a perfume is selected
  };

  // ------------------ SEO (Helmet) ------------------
  const canonicalUrl = useMemo(
    () => `${SITE_URL}/product-details/${productId}`,
    [productId]
  );

  const seoTitle = product
    ? `${product.name} | Platinum Perfumes Lebanon`
    : 'Product | Platinum Perfumes Lebanon';

  const seoDescription = product
    ? (product.description
        ? String(product.description).slice(0, 155)
        : `Shop ${product.name} by ${product.brand || 'Platinum'} at Platinum Perfumes Lebanon. Long-lasting, premium fragrances delivered in Lebanon.`)
    : 'Shop premium perfumes, musks, and more at Platinum Perfumes Lebanon.';

  const ogImage = product ? imageUrl : `${SITE_URL}/images/products/platinum.png`;

  const productJsonLd = product
    ? {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: product.name,
        image: [ogImage],
        description: product.description || 'Premium quality product',
        brand: product.brand || 'Platinum',
        sku: String(product.id),
        category: product.genre || undefined,
        offers: {
          '@type': 'Offer',
          url: canonicalUrl,
          priceCurrency: 'USD',
          price: discountedUnitPrice
            ? discountedUnitPrice.toFixed(2)
            : basePrice.toFixed(2),
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
        },
      }
    : null;

  // ------------------ RENDER ------------------

  if (!product) {
    return (
      <>
        <Helmet prioritizeSeoTags>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoTitle} />
          <meta name="twitter:description" content={seoDescription} />
          <meta name="twitter:image" content={ogImage} />
        </Helmet>

        <div className={styles.loading}>Loading...</div>
      </>
    );
  }

  return (
    <>
      {/* SEO Head */}
      <Helmet prioritizeSeoTags>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Platinum Perfumes Lebanon" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD Product */}
        {productJsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(productJsonLd)}
          </script>
        )}
      </Helmet>

      <div className={styles.container}>
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageViewport}>
              <img
                src={imageUrl}
                alt={product.name}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
                loading="lazy"
              />
              {hasDiscount && (
                <div className={styles.discountBadge}>
                  -{Math.round(discount * 100)}%
                </div>
              )}
            </div>
          </div>

          <div ref={infoRef} className={styles.infoContainer}>
            <h1 className={styles.title}>{product.name}</h1>

            <div className={styles.priceRow}>
              {hasDiscount && (
                <span className={styles.originalPrice}>${originalTotal}</span>
              )}
              <span className={styles.finalPrice}>${totalPrice}</span>
            </div>

            {/* 🟢 Perfume button for creams with error message */}
            <div className={styles.detailsSection}>
                          {product?.type === "cream" && (
              <div className={styles.sizeSection}>
                <div className={styles.priceButtons}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPerfumePopup(true);
                      setPerfumeError(false);
                    }}
                    className={styles.perfumeButton}
                  >
                    {selectedPerfume || "Select a Perfume"}
                  </button>
                </div>
                {perfumeError && (
                  <div className={styles.errorMessage}>
                    Please select a perfume before adding to cart
                  </div>
                )}
              </div>
            )}
              <h3 className={styles.sectionTitle}>Product Details</h3>

              {(product?.type === 'multiple' || product?.type === 'single') && (
                <ul className={styles.bulletList}>
                  <li><strong>🏢 3rd French fragrance oil company agency in all over Lebanon</strong></li>
                  <li><strong>📜 ISO certification of quality scents</strong></li>
                  <li><strong>🧴 Bold. Precise. Aromatic.</strong></li>
                  <li><strong>💨 Stays long. Speaks loud.</strong></li>
                </ul>
              )}

              {product?.type === 'watch' && (
                <ul className={styles.bulletList}>
                  <li><strong>⌚ Curated selection of 100% original Curren watches</strong></li>
                  <li><strong>🕴️ Designed for men and women who value elegance and affordability</strong></li>
                  <li><strong>🛠️ Modern design, durable materials, and precise movement</strong></li>
                  <li><strong>🎉 Perfect for everyday wear or special occasions</strong></li>
                </ul>
              )}

              {product?.type === 'makeup' && (
                <ul className={styles.bulletList}>
                  <li><strong>💎 Discover authentic beauty with Platinum Perfumes</strong></li>
                  <li><strong>🧴 100% original, high-quality makeup brands</strong></li>
                  <li><strong>🌍 Featuring top international names</strong></li>
                  <li><strong>💄 Carefully selected beauty essentials you can trust</strong></li>
                </ul>
              )}

              {product?.type === 'musk' && (
                <ul className={styles.bulletList}>
                  <li><strong>🌿 Premium selection of rich, authentic musk perfumes</strong></li>
                  <li><strong>🧴 Long-lasting oil and spray formulas for every preference</strong></li>
                  <li><strong>🕊️ Soft, sensual, and clean scents that linger beautifully</strong></li>
                  <li><strong>🎁 Ideal for personal use or as a thoughtful gift</strong></li>
                </ul>
              )}

              {(product?.type === 'air' || product?.type === 'furniture') && (
                <ul className={styles.bulletList}>
                  <li><strong>🌬️ Instantly freshens your space with captivating scents</strong></li>
                  <li><strong>🛋️ Specially crafted for both air and fabric surfaces</strong></li>
                  <li><strong>🍃 Long-lasting formulas with elegant fragrance blends</strong></li>
                  <li><strong>🏠 Perfect for home, office, or car use</strong></li>
                </ul>
              )}
            </div>

            {(isMultiple || product?.type === 'musk') && (
              <div className={styles.sizeSection}>
                <h3 className={styles.sectionTitle}>Size</h3>
                <div className={styles.sizeButtons}>
                  {(product?.type === 'musk' ? ['6ml', '12ml'] : ['50ml', '80ml', '100ml']).map(
                    (size) => (
                      <button
                        key={size}
                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            <div className={styles.quantitySection}>
              <h3 className={styles.sectionTitle}>Quantity</h3>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  className={styles.quantityBtn}
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              ADD TO CART
            </button>

            <p className={styles.description}>{product.description || 'Premium quality product'}</p>
            <p className={styles.shipping}>Shipping calculated at checkout.</p>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>You may also like</h2>
            <div className={styles.relatedContainer}>
              {visibleProducts > 0 && (
                <button
                  className={styles.scrollButton}
                  onClick={() => scrollRelated('left')}
                  aria-label="Scroll left"
                >
                  <FiChevronLeft />
                </button>
              )}

              <div className={styles.relatedGrid} ref={relatedProductsRef}>
                {relatedProducts.map((item) => (
                  <div key={item.id} className={styles.relatedCardWrapper}>
                    <ProductCard product={item} className={styles.relatedCard} compactHeight />
                  </div>
                ))}
              </div>

              {visibleProducts < relatedProducts.length - 2 && (
                <button
                  className={styles.scrollButton}
                  onClick={() => scrollRelated('right')}
                  aria-label="Scroll right"
                >
                  <FiChevronRight />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 🟢 Perfume Popup */}
      {showPerfumePopup && (
        <div className={styles.perfumePopupOverlay}>
          <div className={styles.perfumePopupContent}>
            <div className={styles.popupHeader}>
              <h3 className={styles.popupTitle}>Select a Perfume</h3>
              <button
                className={styles.closePopup}
                onClick={() => setShowPerfumePopup(false)}
              >
                ×
              </button>
            </div>
            <input
              type="text"
              placeholder="Search perfumes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.scrollList}>
              {perfumeList
                .filter((p) => p.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((p, i) => (
                  <div
                    key={i}
                    onClick={() => handlePerfumeSelect(p)}
                    className={styles.perfumeItem}
                  >
                    {p}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
