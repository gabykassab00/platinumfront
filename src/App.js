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























import { useLocation } from 'react-router-dom';
import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import { BasketProvider } from './context/BasketProvider';
import { FiltersProvider } from './contexts/filters/filtersContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import RouterRoutes from './routes/RouterRoutes';
import BackTop from './components/common/BackTop';
import SidebarBasket from './componen/SidebarBasket';
import WhatsAppButton from './componen/WhatsAppButton'; // Import the WhatsApp button

const AppLayout = () => {
  const location = useLocation();
  const isCheckout = location.pathname.startsWith('/checkout');

  return (
    <>
      {!isCheckout && <Header />}
      {!isCheckout && <SidebarBasket />}
      <RouterRoutes />
      {!isCheckout && <Footer />}
      {!isCheckout && (
        <>
          <WhatsAppButton />
          <BackTop />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <CommonProvider>
      <FiltersProvider>
        <CartProvider>
          <BasketProvider>
            <AppLayout />
          </BasketProvider>
        </CartProvider>
      </FiltersProvider>
    </CommonProvider>
  );
};

export default App;