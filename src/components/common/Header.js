// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
// import { dropdownMenu } from '../../data/headerData';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import AccountForm from '../form/AccountForm';
// import SearchBar from './SearchBar';


// const Header = () => {

//     const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//     const { cartItems } = useContext(cartContext);
//     const [isSticky, setIsSticky] = useState(false);


//     // handle the sticky-header
//     useEffect(() => {
//         const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

//         window.addEventListener('scroll', handleIsSticky);

//         return () => {
//             window.removeEventListener('scroll', handleIsSticky);
//         };
//     }, [isSticky]);


//     const cartQuantity = cartItems.length;


//     return (
//         <>
//             <header id="header" className={isSticky ? 'sticky' : ''}>
//                 <div className="container">
//                     <div className="navbar">
//                         <h2 className="nav_logo">
//                             <Link to="/">platinum perfumes</Link>
//                         </h2>
//                         <nav className="nav_actions">
//                             <div className="search_action">
//                                 <span onClick={() => toggleSearch(true)}>
//                                     <AiOutlineSearch />
//                                 </span>
//                                 <div className="tooltip">Search</div>
//                             </div>

//                             <div className="cart_action">
//                                 <Link to="/cart">
//                                     <AiOutlineShoppingCart />
//                                     {
//                                         cartQuantity > 0 && (
//                                             <span className="badge">{cartQuantity}</span>
//                                         )
//                                     }
//                                 </Link>
//                                 <div className="tooltip">Cart</div>
//                             </div>

//                             <div className="user_action">
//                                 <span>
//                                     <AiOutlineUser />
//                                 </span>
//                                 <div className="dropdown_menu">
//                                     <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
//                                     <p>Access account and manage orders</p>
//                                     {
//                                         !formUserInfo && (
//                                             <button
//                                                 type="button"
//                                                 onClick={() => toggleForm(true)}
//                                             >
//                                                 Login / Signup
//                                             </button>
//                                         )
//                                     }
//                                     <div className="separator"></div>
//                                     <ul>
//                                         {
//                                             dropdownMenu.map(item => {
//                                                 const { id, link, path } = item;
//                                                 return (
//                                                     <li key={id}>
//                                                         <Link to={path}>{link}</Link>
//                                                     </li>
//                                                 );
//                                             })
//                                         }
//                                     </ul>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </header>

//             <SearchBar />
//             <AccountForm />
//         </>
//     );
// };

// export default Header;

// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
// import { dropdownMenu } from '../../data/headerData';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import AccountForm from '../form/AccountForm';
// import SearchBar from './SearchBar';

// const Header = () => {
//     const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//     const { cartItems } = useContext(cartContext);
//     const [isSticky, setIsSticky] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);

//     // Sample menu data - replace with your actual categories
//     const menuCategories = [
//         {
//             id: 1,
//             name: 'All Perfumes',
//             // submenu: [
//             //     { name: 'All Brands', path: '/brands' },
//             //     { name: 'Featured Brands', path: '/brands/featured' }
//             // ]
//         },
//         {
//             id: 2,
//             name: 'Men Perfumes',
//             // submenu: [
//             //     { name: 'Patio Furniture', path: '/outdoor/patio' },
//             //     { name: 'Outdoor Dining', path: '/outdoor/dining' },
//             //     { name: 'Outdoor Lounge', path: '/outdoor/lounge' }
//             // ]
//         },
//         {
//             id: 3,
//             name: 'Women Perfumes',
//             // submenu: [
//             //     { name: 'Sofas', path: '/living-room/sofas' },
//             //     { name: 'Sectionals', path: '/living-room/sectionals' },
//             //     { name: 'Coffee Tables', path: '/living-room/tables' }
//             // ]
//         },
//         {
//             id: 4,
//             name: 'Sale',
//             // submenu: [
//             //     { name: 'Beds', path: '/bedroom/beds' },
//             //     { name: 'Dressers', path: '/bedroom/dressers' },
//             //     { name: 'Nightstands', path: '/bedroom/nightstands' }
//             // ]
//         },
//     ];

//     // handle the sticky-header
//     useEffect(() => {
//         const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
//         window.addEventListener('scroll', handleIsSticky);
//         return () => {
//             window.removeEventListener('scroll', handleIsSticky);
//         };
//     }, [isSticky]);

//     const cartQuantity = cartItems.length;

//     return (
//         <>
//             <header id="header" className={isSticky ? 'sticky' : ''}>
//                 <div className="container">
//                     <div className="navbar">
//                         <h2 className="nav_logo">
//                             <Link to="/">platinumPerfumes</Link>
//                         </h2>
//                         <nav className="nav_actions">
//                             <div className="search_action">
//                                 <span onClick={() => toggleSearch(true)}>
//                                     <AiOutlineSearch />
//                                 </span>
//                                 <div className="tooltip">Search</div>
//                             </div>

//                             <div className="cart_action">
//                                 <Link to="/cart">
//                                     <AiOutlineShoppingCart />
//                                     {cartQuantity > 0 && (
//                                         <span className="badge">{cartQuantity}</span>
//                                     )}
//                                 </Link>
//                                 <div className="tooltip">Cart</div>
//                             </div>

//                             <div className="user_action">
//                                 <span>
//                                     <AiOutlineUser />
//                                 </span>
//                                 <div className="dropdown_menu">
//                                     <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
//                                     <p>Access account and manage orders</p>
//                                     {!formUserInfo && (
//                                         <button
//                                             type="button"
//                                             onClick={() => toggleForm(true)}
//                                         >
//                                             Login / Signup
//                                         </button>
//                                     )}
//                                     <div className="separator"></div>
//                                     <ul>
//                                         {dropdownMenu.map(item => {
//                                             const { id, link, path } = item;
//                                             return (
//                                                 <li key={id}>
//                                                     <Link to={path}>{link}</Link>
//                                                 </li>
//                                             );
//                                         })}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* Menu Chart/Navigation Bar */}
//                 <div className="menu-container">
//                     <div className="container">
//                         <nav className="menu-nav">
//                             <ul className="menu-list">
//                                 {menuCategories.map((category) => (
//                                     <li 
//                                         key={category.id}
//                                         className="menu-item"
//                                         onMouseEnter={() => setActiveMenu(category.id)}
//                                         onMouseLeave={() => setActiveMenu(null)}
//                                     >
//                                         {category.path ? (
//                                             <Link to={category.path} className="menu-link">
//                                                 {category.name}
//                                             </Link>
//                                         ) : (
//                                             <div className="menu-link">
//                                                 {category.name}
//                                                 {/* <AiOutlineDown className="menu-icon" /> */}
//                                             </div>
//                                         )}
                                        
//                                         {category.submenu && activeMenu === category.id && (
//                                             <div className="submenu">
//                                                 {category.submenu.map((item, index) => (
//                                                     <Link 
//                                                         key={index} 
//                                                         to={item.path} 
//                                                         className="submenu-item"
//                                                     >
//                                                         {item.name}
//                                                     </Link>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>

//             <SearchBar />
//             <AccountForm />

//             <style jsx>{`
//                 .menu-container {
//                     background-color: #2c3e50;
//                     color: white;
//                 }
//                 .menu-nav {
//                     padding: 0.5rem 0;
//                 }
//                 .menu-list {
//                     display: flex;
//                     list-style: none;
//                     margin: 0;
//                     padding: 0;
//                 }
//                 .menu-item {
//                     position: relative;
//                     padding: 0.5rem 1rem;
//                 }
//                 .menu-link {
//                     color: white;
//                     text-decoration: none;
//                     display: flex;
//                     align-items: center;
//                     cursor: pointer;
//                 }
//                 .menu-icon {
//                     margin-left: 0.3rem;
//                     font-size: 0.8rem;
//                 }
//             `}</style>
//         </>
//     );
// };

// export default Header;

// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
// import { dropdownMenu } from '../../data/headerData';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import AccountForm from '../form/AccountForm';
// import SearchBar from './SearchBar';

// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//     const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//     const { cartItems } = useContext(cartContext);
//     const [isSticky, setIsSticky] = useState(false);
//     const [activeMenu, setActiveMenu] = useState(null);

//     const menuCategories = [
//         { id: 1, name: 'All Perfumes' },
//         { id: 2, name: 'Men Perfumes' },
//         { id: 3, name: 'Women Perfumes' },
//         { id: 4, name: 'Sale' },
//     ];

//     useEffect(() => {
//         const handleIsSticky = () => {
//             setIsSticky(window.scrollY >= 50);
//         };
//         window.addEventListener('scroll', handleIsSticky);
//         return () => window.removeEventListener('scroll', handleIsSticky);
//     }, [isSticky]);

//     const cartQuantity = cartItems.length;

//     return (
//         <>
//             <header id="header" className={isSticky ? 'sticky' : ''}>
//                 <div className="container">
//                     <div className="navbar">
//                         <h2 className="nav_logo">
//                             <Link to="/">platinumPerfumes</Link>
//                         </h2>
//                         <nav className="nav_actions">
//                             <div className="search_action">
//                                 <span onClick={() => toggleSearch(true)}>
//                                     <AiOutlineSearch />
//                                 </span>
//                                 <div className="tooltip">Search</div>
//                             </div>

//                             <div className="cart_action">
//                                 <Link to="/cart">
//                                     <AiOutlineShoppingCart />
//                                     {cartQuantity > 0 && (
//                                         <span className="badge">{cartQuantity}</span>
//                                     )}
//                                 </Link>
//                                 <div className="tooltip">Cart</div>
//                             </div>

//                             <div className="user_action">
//                                 <span>
//                                     <AiOutlineUser />
//                                 </span>
//                                 <div className="dropdown_menu">
//                                     <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
//                                     <p>Access account and manage orders</p>
//                                     {!formUserInfo && (
//                                         <button type="button" onClick={() => toggleForm(true)}>
//                                             Login / Signup
//                                         </button>
//                                     )}
//                                     <div className="separator"></div>
//                                     <ul>
//                                         {dropdownMenu.map(item => (
//                                             <li key={item.id}>
//                                                 <Link to={item.path}>{item.link}</Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 <div className="menu-container">
//                     <div className="container">
//                         <nav className="menu-nav">
//                             <ul className="menu-list">
//                                         {menuCategories.map((category) => (
//                                         <li
//                                             key={category.id}
//                                             className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                                         >
//                                             <span className="menu-link">{category.name}</span>
//                                         </li>
//                                     ))}

//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>

//             <SearchBar />
//             <AccountForm />
//         </>
//     );
// };

// export default Header;


// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import AccountForm from '../form/AccountForm';
// import SearchBar from './SearchBar';

// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//   const { cartItems } = useContext(cartContext);
//   const [isSticky, setIsSticky] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes' },
//     { id: 2, name: 'Men Perfumes' },
//     { id: 3, name: 'Women Perfumes' },
//     { id: 4, name: 'Sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   const cartQuantity = cartItems.length;

//   return (
//     <>
//       <header id="header" className={isSticky ? 'sticky' : ''}>
//         <div className="container">
//           <div className="navbar">
//             {/* Left: Logo */}
//             <h2 className="nav_logo">
//               <Link to="/">platinumPerfumes</Link>
//             </h2>

//             {/* Center: Search Bar */}
//             <div className="nav_search">
//               <input type="text" placeholder="Search perfumes..." onClick={() => toggleSearch(true)} />
//             </div>

//             {/* Right: Cart */}
//             <div className="nav_cart">
//               <Link to="/cart">
//                 <AiOutlineShoppingCart />
//                 {cartQuantity > 0 && <span className="badge">{cartQuantity}</span>}
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Menu below header */}
//         <div className="menu-container">
//           <div className="container">
//             <nav className="menu-nav">
//               <ul className="menu-list">
//                 {menuCategories.map((category) => (
//                   <li
//                     key={category.id}
//                     className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   >
//                     <span className="menu-link">{category.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Modals */}
//       <SearchBar />
//       <AccountForm />
//     </>
//   );
// };

// export default Header;












// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     AiOutlineSearch,
//     AiOutlineShoppingCart,
//     AiOutlineUser,
//     AiOutlineMenu,
//     AiOutlineClose,
// } from 'react-icons/ai';
// import { dropdownMenu } from '../../data/headerData';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import SearchBar from './SearchBar';

// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//     const { formUserInfo, toggleForm, toggleSearch } = useContext(commonContext);
//     const { cartItems } = useContext(cartContext);
//     const [isSticky, setIsSticky] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const menuCategories = [
//         { id: 1, name: 'All Perfumes' },
//         { id: 2, name: 'Men Perfumes' },
//         { id: 3, name: 'Women Perfumes' },
//         { id: 4, name: 'Sale' },
//     ];

//     useEffect(() => {
//         const handleIsSticky = () => {
//             setIsSticky(window.scrollY >= 50);
//         };
//         window.addEventListener('scroll', handleIsSticky);
//         return () => window.removeEventListener('scroll', handleIsSticky);
//     }, [isSticky]);

//     const cartQuantity = cartItems.length;

//     return (
//         <>
//             <header id="header" className={isSticky ? 'sticky' : ''}>
//                 <div className="container">
//                     <div className="navbar">
//                         {/* Hamburger menu for mobile */}
//                         <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//                         </div>

//                         {/* Logo */}
//                         <h2 className="nav_logo">
//                             <Link to="/">platinumPerfumes</Link>
//                         </h2>

//                         {/* Search */}
//                         <div className="nav_search">
//                             <input
//                                 type="text"
//                                 placeholder="Search perfumes..."
//                                 onClick={() => toggleSearch(true)}
//                             />
//                         </div>

//                         {/* Cart icon */}
//                         <div className="nav_cart">
//                             <Link to="/cart">
//                                 <AiOutlineShoppingCart />
//                                 {cartQuantity > 0 && (
//                                     <span className="badge">{cartQuantity}</span>
//                                 )}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Menu categories */}
//                 <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//                     <div className="container">
//                         <nav className="menu-nav">
//                             <ul className="menu-list">
//                                 {menuCategories.map((category) => (
//                                     <li
//                                         key={category.id}
//                                         className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                                     >
//                                         <span className="menu-link">{category.name}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>

//             <SearchBar />
//         </>
//     );
// };

// export default Header;



// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     AiOutlineShoppingCart,
//     AiOutlineMenu,
//     AiOutlineClose,
// } from 'react-icons/ai';
// import commonContext from '../../contexts/common/commonContext';
// import cartContext from '../../contexts/cart/cartContext';
// import SearchBar from './SearchBar';

// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//     const { toggleSearch } = useContext(commonContext);
//     const { cartItems } = useContext(cartContext);
//     const [isSticky, setIsSticky] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const menuCategories = [
//         { id: 1, name: 'All Perfumes', path: '/perfumes' },
//         { id: 2, name: 'Men Perfumes', path: '/men-perfumes' },
//         { id: 3, name: 'Women Perfumes', path: '/women-perfumes' },
//         { id: 4, name: 'Sale', path: '/sale' },
//     ];

//     useEffect(() => {
//         const handleIsSticky = () => {
//             setIsSticky(window.scrollY >= 50);
//         };
//         window.addEventListener('scroll', handleIsSticky);
//         return () => window.removeEventListener('scroll', handleIsSticky);
//     }, [isSticky]);

//     const cartQuantity = cartItems.length;

//     const handleMobileMenuClick = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };

//     const handleMenuItemClick = () => {
//         setMobileMenuOpen(false); // Close mobile menu when a menu item is clicked
//     };

//     return (
//         <>
//             <header id="header" className={isSticky ? 'sticky' : ''}>
//                 <div className="container">
//                     <div className="navbar">
//                         {/* Hamburger menu for mobile */}
//                         <div className="hamburger" onClick={handleMobileMenuClick}>
//                             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//                         </div>

//                         {/* Logo */}
//                         <h2 className="nav_logo">
//                             <Link to="/">platinumPerfumes</Link>
//                         </h2>

//                         {/* Search */}
//                         <div className="nav_search">
//                             <input
//                                 type="text"
//                                 placeholder="Search perfumes..."
//                                 onClick={() => toggleSearch(true)}
//                             />
//                         </div>

//                         {/* Cart icon */}
//                         <div className="nav_cart">
//                             <Link to="/cart">
//                                 <AiOutlineShoppingCart />
//                                 {cartQuantity > 0 && (
//                                     <span className="badge">{cartQuantity}</span>
//                                 )}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Menu categories */}
//                 <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//                     <div className="container">
//                         <nav className="menu-nav">
//                             <ul className="menu-list">
//                                 {menuCategories.map((category) => (
//                                     <li
//                                         key={category.id}
//                                         className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                                         onClick={handleMenuItemClick}
//                                     >
//                                         <Link 
//                                             to={category.path} 
//                                             className="menu-link"
//                                         >
//                                             {category.name}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </header>

//             <SearchBar />
//         </>
//     );
// };

// export default Header;










// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//     AiOutlineShoppingCart,
//     AiOutlineMenu,
//     AiOutlineClose,
// } from 'react-icons/ai';
// // Removed cartContext import
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//     const [isSticky, setIsSticky] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const menuCategories = [
//         { id: 1, name: 'All Perfumes', path: '/perfumes' },
//         { id: 2, name: 'Men Perfumes', path: '/men-perfumes' },
//         { id: 3, name: 'Women Perfumes', path: '/women-perfumes' },
//         { id: 4, name: 'Sale', path: '/sale' },
//     ];

//     useEffect(() => {
//         const handleIsSticky = () => {
//             setIsSticky(window.scrollY >= 50);
//         };
//         window.addEventListener('scroll', handleIsSticky);
//         return () => window.removeEventListener('scroll', handleIsSticky);
//     }, []);

//     const handleMobileMenuClick = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };

//     const handleMenuItemClick = () => {
//         setMobileMenuOpen(false);
//     };

//     return (
//         <header id="header" className={isSticky ? 'sticky' : ''}>
//             <div className="container">
//                 <div className="navbar">
//                     {/* Hamburger menu for mobile */}
//                     <div className="hamburger" onClick={handleMobileMenuClick}>
//                         {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//                     </div>

//                     {/* Logo */}
//                     <h2 className="nav_logo">
//                         <Link to="/">platinumPerfumes</Link>
//                     </h2>

//                     {/* Cart icon (without badge) */}
//                     <div className="nav_cart">
//                         <Link to="/cart">
//                             <AiOutlineShoppingCart />
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Menu categories */}
//             <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//                 <div className="container">
//                     <nav className="menu-nav">
//                         <ul className="menu-list">
//                             {menuCategories.map((category) => (
//                                 <li
//                                     key={category.id}
//                                     className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                                     onClick={handleMenuItemClick}
//                                 >
//                                     <Link to={category.path} className="menu-link">
//                                         {category.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from 'react-icons/ai';

// import { useBasket } from '../../context/BasketProvider'; // ✅ Import basket context
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { basketItems, dispatch } = useBasket(); // ✅ Use basket context

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/men-perfumes' },
//     { id: 3, name: 'Women Perfumes', path: '/women-perfumes' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   const handleMobileMenuClick = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//   };

//   const handleBasketClick = () => {
//     dispatch({ type: 'OPEN_SIDEBAR' });
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           {/* Hamburger menu for mobile */}
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           {/* Logo */}
//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           {/* Basket icon (triggers sidebar on click) */}
//           <div className="nav_cart" onClick={handleBasketClick} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Menu categories */}
//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





















// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from 'react-icons/ai';

// import { useBasket } from '../../context/BasketProvider'; // ✅ Use basket context properly
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // ✅ Only use exposed helpers from the context
//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/men-perfumes' },
//     { id: 3, name: 'Women Perfumes', path: '/women-perfumes' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   const handleMobileMenuClick = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//   };

//   const handleBasketClick = () => {
//     openSidebar(); // ✅ Call helper to show sidecart
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           {/* Hamburger menu for mobile */}
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           {/* Logo */}
//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           {/* Basket icon (triggers sidebar on click) */}
//           <div className="nav_cart" onClick={handleBasketClick} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Menu categories */}
//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;











// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   const handleMobileMenuClick = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//   };

//   const handleBasketClick = () => {
//     openSidebar();
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           <div className="nav_cart" onClick={handleBasketClick} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;







// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();
//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => setIsSticky(window.scrollY >= 50);
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
//       setSearchQuery('');
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           <form className="nav_search" onSubmit={handleSearchSubmit}>
//             <input
//               type="text"
//               placeholder="Search perfumes..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </form>

//           <div className="nav_cart" onClick={openSidebar} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




























// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { basketItems, openSidebar } = useBasket();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const inputRef = useRef();

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   // 🔍 Live search effect
//   useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(searchTerm)}`)
//         .then(res => res.json())
//         .then(data => {
//           setSearchResults(data);
//           setShowDropdown(true);
//         })
//         .catch(() => setShowDropdown(false));
//     } else {
//       setShowDropdown(false);
//     }
//   }, [searchTerm]);

//   const handleMobileMenuClick = () => setMobileMenuOpen(!mobileMenuOpen);
//   const handleMenuItemClick = () => setMobileMenuOpen(false);
//   const handleBasketClick = () => openSidebar();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           {/* 🔍 Search input */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search perfumes..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               ref={inputRef}
//               className="search-input"
//             />
//             {showDropdown && (
//               <div className="search-dropdown">
//                 {searchResults.length > 0 ? (
//                   searchResults.slice(0, 6).map((item) => (
//                     <Link
//                       key={item.id}
//                       to={`/product-details/${item.id}`}
//                       className="dropdown-item"
//                       onClick={() => {
//                         setSearchTerm('');
//                         setShowDropdown(false);
//                       }}
//                     >
//                       {item.name}
//                     </Link>
//                   ))
//                 ) : (
//                   <div className="dropdown-item no-result">No results found</div>
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="nav_cart" onClick={handleBasketClick} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && <span className="cart-badge">{basketItems.length}</span>}
//           </div>
//         </div>
//       </div>

//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;




































// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
// } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const inputRef = useRef();

//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(searchTerm)}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setSearchResults(data);
//           setShowDropdown(true);
//         })
//         .catch(() => setShowDropdown(false));
//     } else {
//       setShowDropdown(false);
//     }
//   }, [searchTerm]);

//   const handleMobileMenuClick = () => setMobileMenuOpen(!mobileMenuOpen);
//   const handleMenuItemClick = () => setMobileMenuOpen(false);
//   const handleBasketClick = () => openSidebar();

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           {/* Mobile toggle */}
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           {/* Logo */}
//           <h2 className="nav_logo">
//             <Link to="/">platinumPerfumes</Link>
//           </h2>

//           {/* Search */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search perfumes..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               ref={inputRef}
//               className="search-input"
//             />
//             {showDropdown && (
//               <div className="search-dropdown">
//                 {searchResults.length > 0 ? (
//                   searchResults.slice(0, 6).map((item) => (
//                     <Link
//                       key={item.id}
//                       to={`/product-details/${item.id}`}
//                       className="dropdown-item"
//                       onClick={() => {
//                         setSearchTerm('');
//                         setShowDropdown(false);
//                       }}
//                     >
//                       <img
//                         src={`http://localhost:5000/${item.image_path}`}
//                         alt={item.name}
//                         className="dropdown-img"
//                       />
//                       <div className="dropdown-text">
//                         <p>{item.name}</p>
//                         <span className="dropdown-price">${parseFloat(item.price).toFixed(2)}</span>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   <div className="dropdown-item no-result">No results found</div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <div className="nav_cart" onClick={handleBasketClick} style={{ cursor: 'pointer' }}>
//             <AiOutlineShoppingCart size={24} />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Menu links */}
//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


























// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
//   AiOutlineSearch
// } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [mobileSearchTerm, setMobileSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [mobileSearchResults, setMobileSearchResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const inputRef = useRef();
//   const mobileInputRef = useRef();

//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleIsSticky = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleIsSticky);
//     return () => window.removeEventListener('scroll', handleIsSticky);
//   }, []);

//   useEffect(() => {
//     if (searchTerm.trim().length > 0) {
//       fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(searchTerm)}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setSearchResults(data);
//           setShowDropdown(true);
//         })
//         .catch(() => setShowDropdown(false));
//     } else {
//       setShowDropdown(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     if (mobileSearchTerm.trim().length > 0) {
//       fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(mobileSearchTerm)}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setMobileSearchResults(data);
//         })
//         .catch(() => setMobileSearchResults([]));
//     } else {
//       setMobileSearchResults([]);
//     }
//   }, [mobileSearchTerm]);

//   const handleMobileMenuClick = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//     setMobileSearchOpen(false);
//   };

//   const handleMobileSearchClick = () => {
//     setMobileSearchOpen(true);
//     setMobileMenuOpen(false);
//     setTimeout(() => {
//       mobileInputRef.current?.focus();
//     }, 100);
//   };

//   const closeMobileSearch = () => {
//     setMobileSearchOpen(false);
//     setMobileSearchTerm('');
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//     setMobileSearchOpen(false);
//   };

//   const handleBasketClick = () => {
//     openSidebar();
//     setMobileSearchOpen(false);
//   };

//   const handleSearchItemClick = (item) => {
//     setSearchTerm('');
//     setMobileSearchTerm('');
//     setShowDropdown(false);
//     setMobileSearchOpen(false);
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           {/* Mobile toggle */}
//           <div className="hamburger" onClick={handleMobileMenuClick}>
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           {/* Logo */}
//           <h2 className="nav_logo">
//             <Link to="/" onClick={handleMenuItemClick}>platinumPerfumes</Link>
//           </h2>

//           {/* Desktop Search */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search perfumes..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               ref={inputRef}
//               className="search-input"
//             />
//             {showDropdown && (
//               <div className="search-dropdown">
//                 {searchResults.length > 0 ? (
//                   searchResults.slice(0, 6).map((item) => (
//                     <Link
//                       key={item.id}
//                       to={`/product-details/${item.id}`}
//                       className="dropdown-item"
//                       onClick={() => handleSearchItemClick(item)}
//                     >
//                       <img
//                         src={`http://localhost:5000/${item.image_path}`}
//                         alt={item.name}
//                         className="dropdown-img"
//                         onError={(e) => {
//                           e.target.src = 'https://via.placeholder.com/60';
//                         }}
//                       />
//                       <div className="dropdown-text">
//                         <p>{item.name}</p>
//                         <span className="dropdown-price">
//                           ${parseFloat(item.price).toFixed(2)}
//                         </span>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   <div className="dropdown-item no-result">
//                     <div className="no-result-icon">🔍</div>
//                     No results found for "{searchTerm}"
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Mobile Search Icon */}
//           <div className="nav-search-mobile" onClick={handleMobileSearchClick}>
//             <AiOutlineSearch />
//           </div>

//           {/* Cart */}
//           <div className="nav_cart" onClick={handleBasketClick}>
//             <AiOutlineShoppingCart />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Search Sidebar */}
//       <div className={`mobile-search-sidebar ${mobileSearchOpen ? 'open' : ''}`}>
//         <div className="search-header">
//           <h3>Search Products</h3>
//           <button className="close-search" onClick={closeMobileSearch}>
//             <AiOutlineClose />
//           </button>
//         </div>
//         <input
//           type="text"
//           placeholder="Search perfumes..."
//           value={mobileSearchTerm}
//           onChange={(e) => setMobileSearchTerm(e.target.value)}
//           ref={mobileInputRef}
//           className="mobile-search-input"
//         />
//         <div className="mobile-search-results">
//           {mobileSearchResults.length > 0 ? (
//             mobileSearchResults.slice(0, 6).map((item) => (
//               <Link
//                 key={item.id}
//                 to={`/product-details/${item.id}`}
//                 className="mobile-dropdown-item"
//                 onClick={() => handleSearchItemClick(item)}
//               >
//                 <img
//                   src={`http://localhost:5000/${item.image_path}`}
//                   alt={item.name}
//                   className="mobile-dropdown-img"
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/60';
//                   }}
//                 />
//                 <div className="mobile-dropdown-text">
//                   <p>{item.name}</p>
//                   <span className="mobile-dropdown-price">
//                     ${parseFloat(item.price).toFixed(2)}
//                   </span>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             mobileSearchTerm && (
//               <div className="mobile-no-results">
//                 <div className="no-results-icon">🔍</div>
//                 No results found for "{mobileSearchTerm}"
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       {/* Menu links */}
//       <div className={`menu-container ${mobileMenuOpen ? 'open' : ''}`}>
//         <div className="container">
//           <nav className="menu-nav">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${category.name === 'Sale' ? 'sale-item' : ''}`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





























// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   AiOutlineShoppingCart,
//   AiOutlineMenu,
//   AiOutlineClose,
//   AiOutlineSearch
// } from 'react-icons/ai';
// import { useBasket } from '../../context/BasketProvider';
// import '../../../src/styles/partials/components/_header.scss';

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [mobileSearchTerm, setMobileSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [mobileSearchResults, setMobileSearchResults] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
  
//   const inputRef = useRef(null);
//   const mobileInputRef = useRef(null);
//   const cartRef = useRef(null);

//   const { basketItems, openSidebar } = useBasket();

//   const menuCategories = [
//     { id: 1, name: 'All Perfumes', path: '/perfumes' },
//     { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
//     { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
//     { id: 4, name: 'Sale', path: '/sale' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY >= 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       if (searchTerm.trim().length > 0) {
//         try {
//           const response = await fetch(
//             `http://localhost:5000/api/products/search?q=${encodeURIComponent(searchTerm)}`
//           );
//           const data = await response.json();
//           setSearchResults(data);
//           setShowDropdown(true);
//         } catch (error) {
//           setShowDropdown(false);
//         }
//       } else {
//         setShowDropdown(false);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchSearchResults();
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [searchTerm]);

//   useEffect(() => {
//     const fetchMobileSearchResults = async () => {
//       if (mobileSearchTerm.trim().length > 0) {
//         try {
//           const response = await fetch(
//             `http://localhost:5000/api/products/search?q=${encodeURIComponent(mobileSearchTerm)}`
//           );
//           const data = await response.json();
//           setMobileSearchResults(data);
//         } catch (error) {
//           setMobileSearchResults([]);
//         }
//       } else {
//         setMobileSearchResults([]);
//       }
//     };

//     const timer = setTimeout(() => {
//       fetchMobileSearchResults();
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [mobileSearchTerm]);

//   const handleMobileMenuClick = (e) => {
//     e.stopPropagation();
//     setMobileMenuOpen(!mobileMenuOpen);
//     setMobileSearchOpen(false);
//   };

//   const handleMobileSearchClick = (e) => {
//     e.stopPropagation();
//     setMobileSearchOpen(true);
//     setMobileMenuOpen(false);
//     setTimeout(() => {
//       mobileInputRef.current?.focus();
//     }, 100);
//   };

//   const closeMobileSearch = (e) => {
//     e?.stopPropagation();
//     setMobileSearchOpen(false);
//     setMobileSearchTerm('');
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//     setMobileSearchOpen(false);
//   };

//   const handleBasketClick = (e) => {
//     e.stopPropagation();
//     openSidebar();
//     setMobileSearchOpen(false);
//     setMobileMenuOpen(false);
//   };

//   const handleSearchItemClick = (item) => {
//     setSearchTerm('');
//     setMobileSearchTerm('');
//     setShowDropdown(false);
//     setMobileSearchOpen(false);
//   };

//   return (
//     <header id="header" className={isSticky ? 'sticky' : ''}>
//       <div className="container">
//         <div className="navbar">
//           {/* Mobile toggle - First element for left alignment */}
//           <div 
//             className="hamburger" 
//             onClick={handleMobileMenuClick}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </div>

//           {/* Logo */}
//           <h1 className="nav_logo">
//             <Link to="/" onClick={handleMenuItemClick}>
//               platinumPerfumes
//             </Link>
//           </h1>

//           {/* Desktop Search */}
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search perfumes..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               ref={inputRef}
//               className="search-input"
//               aria-label="Search products"
//             />
//             {showDropdown && (
//               <div className="search-dropdown">
//                 {searchResults.length > 0 ? (
//                   searchResults.slice(0, 6).map((item) => (
//                     <Link
//                       key={item.id}
//                       to={`/product-details/${item.id}`}
//                       className="dropdown-item"
//                       onClick={() => handleSearchItemClick(item)}
//                     >
//                       <img
//                         src={`http://localhost:5000/${item.image_path}`}
//                         alt={item.name}
//                         className="dropdown-img"
//                         onError={(e) => {
//                           e.target.src = 'https://via.placeholder.com/60';
//                         }}
//                       />
//                       <div className="dropdown-text">
//                         <p>{item.name}</p>
//                         <span className="dropdown-price">
//                           ${parseFloat(item.price).toFixed(2)}
//                         </span>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   <div className="dropdown-item no-result">
//                     <span className="no-result-icon">🔍</span>
//                     <span>No results found for "{searchTerm}"</span>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Mobile Search Icon */}
//           <div
//             className="nav-search-mobile"
//             onClick={handleMobileSearchClick}
//             aria-label="Open search"
//           >
//             <AiOutlineSearch />
//           </div>

//           {/* Shopping Cart */}
//           <div
//             className="nav_cart"
//             onClick={handleBasketClick}
//             ref={cartRef}
//             aria-label="Shopping cart"
//           >
//             <AiOutlineShoppingCart />
//             {basketItems.length > 0 && (
//               <span className="cart-badge">{basketItems.length}</span>
//             )}
//           </div>
//         </div>

//         {/* Desktop Menu Categories */}
//         <div className="desktop-menu-container">
//           <nav className="menu-nav" aria-label="Main navigation">
//             <ul className="menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`menu-item ${
//                     category.name === 'Sale' ? 'sale-item' : ''
//                   }`}
//                 >
//                   <Link 
//                     to={category.path} 
//                     className="menu-link"
//                     onClick={handleMenuItemClick}
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Search Sidebar */}
//       {mobileSearchOpen && (
//         <div className="mobile-search-sidebar">
//           <div className="search-header">
//             <h2>Search Products</h2>
//             <button
//               className="close-search"
//               onClick={closeMobileSearch}
//               aria-label="Close search"
//             >
//               <AiOutlineClose />
//             </button>
//           </div>
//           <input
//             type="text"
//             placeholder="Search perfumes..."
//             value={mobileSearchTerm}
//             onChange={(e) => setMobileSearchTerm(e.target.value)}
//             ref={mobileInputRef}
//             className="mobile-search-input"
//             aria-label="Mobile search input"
//           />
//           <div className="mobile-search-results">
//             {mobileSearchResults.length > 0 ? (
//               mobileSearchResults.slice(0, 6).map((item) => (
//                 <Link
//                   key={item.id}
//                   to={`/product-details/${item.id}`}
//                   className="mobile-dropdown-item"
//                   onClick={() => handleSearchItemClick(item)}
//                 >
//                   <img
//                     src={`http://localhost:5000/${item.image_path}`}
//                     alt={item.name}
//                     className="mobile-dropdown-img"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/60';
//                     }}
//                   />
//                   <div className="mobile-dropdown-text">
//                     <p>{item.name}</p>
//                     <span className="mobile-dropdown-price">
//                       ${parseFloat(item.price).toFixed(2)}
//                     </span>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               mobileSearchTerm && (
//                 <div className="mobile-no-results">
//                   <span className="no-results-icon">🔍</span>
//                   <span>No results found for "{mobileSearchTerm}"</span>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="mobile-menu-container">
//           <nav className="mobile-menu-nav" aria-label="Mobile navigation">
//             <ul className="mobile-menu-list">
//               {menuCategories.map((category) => (
//                 <li
//                   key={category.id}
//                   className={`mobile-menu-item ${
//                     category.name === 'Sale' ? 'sale-item' : ''
//                   }`}
//                   onClick={handleMenuItemClick}
//                 >
//                   <Link to={category.path} className="mobile-menu-link">
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




























import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch
} from 'react-icons/ai';
import { useBasket } from '../../context/BasketProvider';
import '../../../src/styles/partials/components/_header.scss';
import {logo} from  '../../../public/images/products/platinum.png';
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileSearchTerm, setMobileSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mobileSearchResults, setMobileSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const inputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const cartRef = useRef(null);

  const { basketItems, openSidebar } = useBasket();

  const API_URL = process.env.REACT_APP_API_URL;

  const menuCategories = [
    { id: 1, name: 'All Perfumes', path: '/perfumes' },
    { id: 2, name: 'Men Perfumes', path: '/perfumes/men' },
    { id: 3, name: 'Women Perfumes', path: '/perfumes/women' },
    { id: 4, name: 'Sale', path: '/sale' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim()) {
        try {
          const response = await fetch(
            `${API_URL}/api/products/search?q=${encodeURIComponent(searchTerm)}`
          );
          const data = await response.json();
          setSearchResults(data);
          setShowDropdown(true);
        } catch {
          setShowDropdown(false);
        }
      } else {
        setShowDropdown(false);
      }
    };

    const timer = setTimeout(fetchSearchResults, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, API_URL]);

  useEffect(() => {
    const fetchMobileSearchResults = async () => {
      if (mobileSearchTerm.trim()) {
        try {
          const response = await fetch(
            `${API_URL}/api/products/search?q=${encodeURIComponent(mobileSearchTerm)}`
          );
          const data = await response.json();
          setMobileSearchResults(data);
        } catch {
          setMobileSearchResults([]);
        }
      } else {
        setMobileSearchResults([]);
      }
    };

    const timer = setTimeout(fetchMobileSearchResults, 300);
    return () => clearTimeout(timer);
  }, [mobileSearchTerm, API_URL]);

  const handleMobileMenuClick = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSearchOpen(false);
  };

  const handleMobileSearchClick = (e) => {
    e.stopPropagation();
    setMobileSearchOpen(true);
    setMobileMenuOpen(false);
    setTimeout(() => mobileInputRef.current?.focus(), 100);
  };

  const closeMobileSearch = (e) => {
    e?.stopPropagation();
    setMobileSearchOpen(false);
    setMobileSearchTerm('');
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  };

  const handleBasketClick = (e) => {
    e.stopPropagation();
    openSidebar();
    setMobileSearchOpen(false);
    setMobileMenuOpen(false);
  };

  const handleSearchItemClick = () => {
    setSearchTerm('');
    setMobileSearchTerm('');
    setShowDropdown(false);
    setMobileSearchOpen(false);
  };

  return (
    <header id="header" className={isSticky ? 'sticky' : ''}>
      <div className="container">
        <div className="navbar">
          {/* Hamburger */}
          <div className="hamburger" onClick={handleMobileMenuClick}>
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Logo */}
          {/* <h1 className="nav_logo">
            <Link to="/" onClick={handleMenuItemClick}>platinumPerfumes</Link>
          </h1> */}

<div className="nav_logo">
  <Link to="/" onClick={handleMenuItemClick}>
    <img
      src="/images/products/platinum.png"
      alt="Platinum Perfumes Logo"
      className="logo-img"
    />
  </Link>
</div>


          {/* Desktop Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search perfumes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={inputRef}
              className="search-input"
            />
            {showDropdown && (
              <div className="search-dropdown">
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 6).map((item) => (
                    <Link
                      key={item.id}
                      to={`/product-details/${item.id}`}
                      className="dropdown-item"
                      onClick={handleSearchItemClick}
                    >
                      <img
                        src={`${API_URL}/${item.image_path}`}
                        alt={item.name}
                        className="dropdown-img"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/60';
                        }}
                      />
                      <div className="dropdown-text">
                        <p>{item.name}</p>
                        <span className="dropdown-price">${parseFloat(item.price).toFixed(2)}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="dropdown-item no-result">
                    <span className="no-result-icon">🔍</span>
                    <span>No results found for "{searchTerm}"</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Search Icon */}
          <div className="nav-search-mobile" onClick={handleMobileSearchClick}>
            <AiOutlineSearch />
          </div>

          {/* Cart Icon */}
          <div className="nav_cart" onClick={handleBasketClick} ref={cartRef}>
            <AiOutlineShoppingCart />
            {basketItems.length > 0 && (
              <span className="cart-badge">{basketItems.length}</span>
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-menu-container">
          <nav className="menu-nav">
            <ul className="menu-list">
              {menuCategories.map((cat) => (
                <li key={cat.id} className={`menu-item ${cat.name === 'Sale' ? 'sale-item' : ''}`}>
                  <Link to={cat.path} onClick={handleMenuItemClick} className="menu-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Search Sidebar */}
      {mobileSearchOpen && (
        <div className="mobile-search-sidebar">
          <div className="search-header">
            <h2>Search Products</h2>
            <button className="close-search" onClick={closeMobileSearch}>
              <AiOutlineClose />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search perfumes..."
            value={mobileSearchTerm}
            onChange={(e) => setMobileSearchTerm(e.target.value)}
            ref={mobileInputRef}
            className="mobile-search-input"
          />
          <div className="mobile-search-results">
            {mobileSearchResults.length > 0 ? (
              mobileSearchResults.slice(0, 6).map((item) => (
                <Link
                  key={item.id}
                  to={`/product-details/${item.id}`}
                  className="mobile-dropdown-item"
                  onClick={handleSearchItemClick}
                >
                  <img
                    src={`${API_URL}/${item.image_path}`}
                    alt={item.name}
                    className="mobile-dropdown-img"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/60';
                    }}
                  />
                  <div className="mobile-dropdown-text">
                    <p>{item.name}</p>
                    <span className="mobile-dropdown-price">${parseFloat(item.price).toFixed(2)}</span>
                  </div>
                </Link>
              ))
            ) : (
              mobileSearchTerm && (
                <div className="mobile-no-results">
                  <span className="no-results-icon">🔍</span>
                  <span>No results found for "{mobileSearchTerm}"</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container">
          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              {menuCategories.map((cat) => (
                <li
                  key={cat.id}
                  className={`mobile-menu-item ${cat.name === 'Sale' ? 'sale-item' : ''}`}
                  onClick={handleMenuItemClick}
                >
                  <Link to={cat.path} className="mobile-menu-link">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
