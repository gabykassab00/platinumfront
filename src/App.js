// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';
// import Header from './components/common/Header';
// import RouterRoutes from './routes/RouterRoutes';
// import Footer from './components/common/Footer';
// import BackTop from './components/common/BackTop';
// import { FiltersProvider } from './contexts/filters/filtersContext';

// const App = () => {
//   return (
//     <>
//       <CommonProvider>
//         <FiltersProvider>
//           <CartProvider>
//             <Header />
//             <RouterRoutes />
//             <Footer />
//             <BackTop />
//           </CartProvider>
//         </FiltersProvider>
//       </CommonProvider>
//     </>
//   );
// };

// export default App;

// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';
// import { BasketProvider } from './context/BasketProvider'; // ✅ Add this
// import { FiltersProvider } from './contexts/filters/filtersContext';

// import Header from './components/common/Header';
// import RouterRoutes from './routes/RouterRoutes';
// import Footer from './components/common/Footer';
// import BackTop from './components/common/BackTop';

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             <Header />
//             <RouterRoutes />
//             <Footer />
//             <BackTop />
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App;

// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';
// import { BasketProvider } from './context/BasketProvider'; // ✅ Fixed path
// import { FiltersProvider } from './contexts/filters/filtersContext';

// import Header from './components/common/Header';
// import RouterRoutes from './routes/RouterRoutes';
// import Footer from './components/common/Footer';
// import BackTop from './components/common/BackTop';
// import SidebarBasket from './componen/SidebarBasket'; // ✅ Add SidebarBasket

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             <Header />
//             <SidebarBasket /> {/* ✅ Add SidebarBasket for the basket sidebar */}
//             <RouterRoutes />
//             <Footer />
//             <BackTop />
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App;

// import { useLocation } from 'react-router-dom';

// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';
// import { BasketProvider } from './context/BasketProvider';
// import { FiltersProvider } from './contexts/filters/filtersContext';

// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
// import RouterRoutes from './routes/RouterRoutes';
// import BackTop from './components/common/BackTop';
// import SidebarBasket from './componen/SidebarBasket'; // ✅ Make sure path is correct

// const AppLayout = () => {
//   const location = useLocation();
//   const isCheckout = location.pathname.startsWith('/checkout'); // ✅ Detect checkout route

//   return (
//     <>
//       {!isCheckout && <Header />}
//       {!isCheckout && <SidebarBasket />}
//       <RouterRoutes />
//       {!isCheckout && <Footer />}
//       {!isCheckout && <BackTop />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             <AppLayout />
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App;

// import { useLocation } from 'react-router-dom';
// import { CommonProvider } from './contexts/common/commonContext';
// import { CartProvider } from './contexts/cart/cartContext';
// import { BasketProvider } from './context/BasketProvider';
// import { FiltersProvider } from './contexts/filters/filtersContext';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';
// import RouterRoutes from './routes/RouterRoutes';
// import BackTop from './components/common/BackTop';
// import SidebarBasket from './componen/SidebarBasket';

// const AppLayout = () => {
//   const location = useLocation();
//   const isCheckout = location.pathname.startsWith('/checkout');

//   return (
//     <>
//       {!isCheckout && <Header />}
//       {!isCheckout && <SidebarBasket />}
//       <RouterRoutes />
//       {!isCheckout && <Footer />}
//       {!isCheckout && <BackTop />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             <AppLayout />
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App


























// import { useLocation } from "react-router-dom";
// import { CommonProvider } from "./contexts/common/commonContext";
// import { CartProvider } from "./contexts/cart/cartContext";
// import { BasketProvider } from "./context/BasketProvider";
// import { FiltersProvider } from "./contexts/filters/filtersContext";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import RouterRoutes from "./routes/RouterRoutes";
// import BackTop from "./components/common/BackTop";
// import SidebarBasket from "./componen/SidebarBasket";
// import WhatsAppButton from "./componen/WhatsAppButton"; // Import the WhatsApp button

// const AppLayout = () => {
//   const location = useLocation();
//   const isCheckout = location.pathname.startsWith("/checkout");

//   return (
//     <>
//       {!isCheckout && <Header />}
//       {!isCheckout && <SidebarBasket />}
//       <RouterRoutes />
//       {!isCheckout && <Footer />}
//       {!isCheckout && <WhatsAppButton />} {/* Moved outside BackTop fragment */}
//       {!isCheckout && <BackTop />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             <AppLayout />
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App;













// import { useLocation } from "react-router-dom";
// import { CommonProvider } from "./contexts/common/commonContext";
// import { CartProvider } from "./contexts/cart/cartContext";
// import { BasketProvider } from "./context/BasketProvider";
// import { FiltersProvider } from "./contexts/filters/filtersContext";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import RouterRoutes from "./routes/RouterRoutes";
// import BackTop from "./components/common/BackTop";
// import SidebarBasket from "./componen/SidebarBasket";
// import WhatsAppButton from "./componen/WhatsAppButton";

// import { HelmetProvider } from "react-helmet-async";

// const AppLayout = () => {
//   const location = useLocation();
//   const isCheckout = location.pathname.startsWith("/checkout");

//   return (
//     <>
//       {!isCheckout && <Header />}
//       {!isCheckout && <SidebarBasket />}
//       <RouterRoutes />
//       {!isCheckout && <Footer />}
//       {!isCheckout && <WhatsAppButton />}
//       {!isCheckout && <BackTop />}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <CommonProvider>
//       <FiltersProvider>
//         <CartProvider>
//           <BasketProvider>
//             {/* HelmetProvider should wrap the whole UI tree so all routes can set meta */}
//             <HelmetProvider>
//               <AppLayout />
//             </HelmetProvider>
//           </BasketProvider>
//         </CartProvider>
//       </FiltersProvider>
//     </CommonProvider>
//   );
// };

// export default App;























import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CommonProvider } from "./contexts/common/commonContext";
import { CartProvider } from "./contexts/cart/cartContext";
import { BasketProvider } from "./context/BasketProvider";
import { FiltersProvider } from "./contexts/filters/filtersContext";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RouterRoutes from "./routes/RouterRoutes";
import BackTop from "./components/common/BackTop";
import SidebarBasket from "./componen/SidebarBasket";
import WhatsAppButton from "./componen/WhatsAppButton";

import { HelmetProvider } from "react-helmet-async";

const AppLayout = () => {
  const location = useLocation();
  const isCheckout = location.pathname.startsWith("/checkout");

  return (
    <>
      {!isCheckout && <Header />}
      {!isCheckout && <SidebarBasket />}
      <RouterRoutes />
      {!isCheckout && <Footer />}
      {!isCheckout && <WhatsAppButton />}
      {!isCheckout && <BackTop />}
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Insert GTM script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-57SL2S6V');
    `;
    document.head.appendChild(script);

    // Insert GTM noscript
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57SL2S6V"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);
  }, []);

  return (
    <CommonProvider>
      <FiltersProvider>
        <CartProvider>
          <BasketProvider>
            <HelmetProvider>
              <AppLayout />
            </HelmetProvider>
          </BasketProvider>
        </CartProvider>
      </FiltersProvider>
    </CommonProvider>
  );
};

export default App;
