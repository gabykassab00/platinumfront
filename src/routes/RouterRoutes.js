// import React from 'react';
// import { Routes, Route } from 'react-router';
// import useScrollRestore from '../hooks/useScrollRestore';
// import AllProducts from '../pages/AllProducts';
// // import Cart from '../pages/Cart';
// import CartPage from '../componen/CartPage';
// import Home from '../pages/Home';
// import ProductDetails from '../pages/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';
// import ProductsPage from '../page/ProductsPage'; // Import the new component

// const RouterRoutes = () => {
//     useScrollRestore();

//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 {/* <Route path="/cart" element={<Cart />} /> */}
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/all-products" element={<AllProducts />} />
//                 {/* <Route path="/product-details/:productId" element={<ProductDetails />} /> */}
//                 {/* Add the new perfumes products route */}
//                 <Route path="/perfumes" element={<ProductsPage />} />
//                 <Route path="*" element={<ErrorPage />} />
//             </Routes>
//         </>
//     );
// };

// export default RouterRoutes;












// import React from 'react';
// import { Routes, Route } from 'react-router';
// import useScrollRestore from '../hooks/useScrollRestore';

// import AllProducts from '../pages/AllProducts';
// import CartPage from '../componen/CartPage'; // ✅ FIXED path
// import Home from '../pages/Home';
// import ProductDetails from '../pages/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';
// import ProductsPage from '../page/ProductsPage'; // ✅ FIXED: "pages", not "page"
// import CheckoutPage from '../componen/CheckoutPage'; // ✅ ADDED checkout route

// const RouterRoutes = () => {
//   useScrollRestore();

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ NEW */}
//         <Route path="/all-products" element={<AllProducts />} />
//         <Route path="/product-details/:productId" element={<ProductDetails />} />
//         <Route path="/perfumes" element={<ProductsPage />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </>
//   );
// };

// export default RouterRoutes;






// import React from 'react';
// import { Routes, Route } from 'react-router';
// import useScrollRestore from '../hooks/useScrollRestore';
// import AllProducts from '../pages/AllProducts';
// import CartPage from '../componen/CartPage';
// import Home from '../pages/Home';
// import ProductDetails from '../pages/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';
// import ProductsPage from '../page/ProductsPage';
// import CheckoutPage from '../componen/CheckoutPage';

// const RouterRoutes = () => {
//   useScrollRestore();

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<CheckoutPage />} />
//         <Route path="/all-products" element={<AllProducts />} />
//         <Route path="/product-details/:productId" element={<ProductDetails />} />
//         <Route path="/perfumes" element={<ProductsPage />} />
//         <Route path="/perfumes/men" element={<ProductsPage defaultGenre="men" />} />
//         <Route path="/perfumes/women" element={<ProductsPage defaultGenre="women" />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </>
//   );
// };

// export default RouterRoutes;






// import React from 'react';
// import { Routes, Route } from 'react-router';
// import useScrollRestore from '../hooks/useScrollRestore';

// // Pages
// import Home from '../pages/Home';
// import AllProducts from '../pages/AllProducts';
// import ProductsPage from '../page/ProductsPage';
// import ProductDetails from '../componen/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';

// // Components (could also be pages depending on structure)
// import CartPage from '../componen/CartPage';
// import CheckoutPage from '../componen/CheckoutPage';

// const RouterRoutes = () => {
//   useScrollRestore();

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/checkout" element={<CheckoutPage />} />
//       <Route path="/all-products" element={<AllProducts />} />

//       {/* Product detail page with dynamic ID */}
//       <Route path="/product-details/:productId" element={<ProductDetails />} />

//       {/* Product listing with filtering */}
//       <Route path="/perfumes" element={<ProductsPage />} />
//       <Route path="/perfumes/men" element={<ProductsPage defaultGenre="men" />} />
//       <Route path="/perfumes/women" element={<ProductsPage defaultGenre="women" />} />

//       {/* 404 fallback */}
//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   );
// };

// export default RouterRoutes;












// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import useScrollRestore from '../hooks/useScrollRestore';

// // Pages
// import Home from '../pages/Home';
// import AllProducts from '../pages/AllProducts';
// import ProductsPage from '../page/ProductsPage';
// import ProductDetails from '../componen/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';
// import SearchResults from '../page/SearchResults';

// // Components
// import CartPage from '../componen/CartPage';
// import CheckoutPage from '../componen/CheckoutPage';

// const RouterRoutes = () => {
//   useScrollRestore();

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/checkout" element={<CheckoutPage />} />
//       <Route path="/all-products" element={<AllProducts />} />

//       {/* Product detail page */}
//       <Route path="/product-details/:productId" element={<ProductDetails />} />

//       {/* Product listing */}
//       <Route path="/perfumes" element={<ProductsPage />} />
//       <Route path="/perfumes/men" element={<ProductsPage defaultGenre="men" />} />
//       <Route path="/perfumes/women" element={<ProductsPage defaultGenre="women" />} />

//       {/* 🔍 Search results page */}
//       <Route path="/search" element={<SearchResults />} />

//       {/* 404 Fallback */}
//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   );
// };

// export default RouterRoutes;








// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import useScrollRestore from '../hooks/useScrollRestore';

// // Pages
// import Home from '../pages/Home';
// import AllProducts from '../pages/AllProducts';
// import ProductsPage from '../page/ProductsPage';
// import ProductDetails from '../componen/ProductDetails';
// import ErrorPage from '../pages/ErrorPage';
// import SearchResults from '../page/SearchResults';

// // Components
// import CartPage from '../componen/CartPage';
// import CheckoutPage from '../componen/CheckoutPage';

// const RouterRoutes = () => {
//   useScrollRestore();

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/checkout" element={<CheckoutPage />} />
//       <Route path="/all-products" element={<AllProducts />} />

//       {/* Product detail page */}
//       <Route path="/product-details/:productId" element={<ProductDetails />} />

//       {/* Product listing */}
//       <Route path="/perfumes" element={<ProductsPage />} />
//       <Route path="/perfumes/men" element={<ProductsPage defaultGenre="men" />} />
//       <Route path="/perfumes/women" element={<ProductsPage defaultGenre="women" />} />
//       <Route path="/lattafa-rasasi" element={<ProductsPage />} />
//       <Route path="/original" element={<ProductsPage />} />
//       <Route path="/makeup" element={<ProductsPage />} />
//       <Route path="/watches" element={<ProductsPage />} />
//       <Route path="/musk" element={<ProductsPage />} />
//       <Route path="/refresheners" element={<ProductsPage />} />

//       {/* 🔍 Search results page */}
//       <Route path="/search" element={<SearchResults />} />

//       {/* 404 Fallback */}
//       <Route path="*" element={<ErrorPage />} />
//     </Routes>
//   );
// };

// export default RouterRoutes;

















import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useScrollRestore from '../hooks/useScrollRestore';

// Pages
import Home from '../pages/Home';
import AllProducts from '../pages/AllProducts';
import ProductsPage from '../page/ProductsPage';
import ProductDetails from '../componen/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import SearchResults from '../page/SearchResults';

// Components
import CartPage from '../componen/CartPage';
import CheckoutPage from '../componen/CheckoutPage';

const RouterRoutes = () => {
  useScrollRestore();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/all-products" element={<AllProducts />} />

      {/* Product detail page */}
      <Route path="/product-details/:productId" element={<ProductDetails />} />

      {/* Product listing */}
      <Route path="/perfumes" element={<ProductsPage />} />
      <Route path="/perfumes/men" element={<ProductsPage defaultGenre="men" />} />
      <Route path="/perfumes/women" element={<ProductsPage defaultGenre="women" />} />
      <Route path="/lattafa-rasasi" element={<ProductsPage />} />
      <Route path="/original" element={<ProductsPage />} />
      <Route path="/makeup" element={<ProductsPage />} />
      <Route path="/watches" element={<ProductsPage />} />
      <Route path="/musk" element={<ProductsPage />} />
      <Route path="/refresheners" element={<ProductsPage />} />
      <Route path="/body-mist" element={<ProductsPage />} />   {/* 🆕 Body Mist & Deodorant */}
      <Route path="/body-cream" element={<ProductsPage />} />  {/* 🆕 Body Cream */}

      {/* 🔍 Search results page */}
      <Route path="/search" element={<SearchResults />} />

      {/* 404 Fallback */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterRoutes;
