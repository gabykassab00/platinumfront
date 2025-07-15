// import React, { useState, useEffect } from 'react';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css'; 
// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     brands: [],
//     categories: [],
//     price: 19950
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     // Filter logic would go here
//     console.log(`Filter ${filterType} changed to ${value}`);
//   };
//   return (
//     <div className={styles['products-page']}>
//       <div className={styles.header}>
//         <h1>Perfume Products</h1>
//       </div>
      
//       <div className={styles['content-container']}>
//         <div className={styles['filters-section']}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//           />
//         </div>
        
//         <div className={styles['products-section']}>
//           <div className={styles['sort-row']}>
//             <SortDropdown />
//           </div>
          
//           <div className={styles['products-grid']}>
//             {filteredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;




// import React, { useState, useEffect } from 'react';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     brands: [],
//     categories: [],
//     price: 19950,
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prevFilters => {
//       if (filterType === 'price') {
//         const updated = { ...prevFilters, price: Number(value) };
//         applyFilters(updated);
//         return updated;
//       }

//       const currentValues = prevFilters[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];

//       const updated = { ...prevFilters, [filterType]: updatedValues };
//       applyFilters(updated);
//       return updated;
//     });
//   };

//   const applyFilters = (activeFilters) => {
//     const { brands, categories, price } = activeFilters;
//     const filtered = products.filter(product => {
//       const matchBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchCategory = categories.length === 0 || categories.includes(product.category);
//       const matchPrice = product.price <= price;
//       return matchBrand && matchCategory && matchPrice;
//     });
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className={styles['products-page']}>
//       <div className={styles.header}>
//         <h1>Perfume Products</h1>
//       </div>

//       <div className={styles['content-container']}>
//         <div className={styles['filters-section']}>
//           <FilterSection filters={filters} onFilterChange={handleFilterChange} />
//         </div>

//         <div className={styles['products-section']}>
//           <div className={styles['sort-row']}>
//             <SortDropdown />
//           </div>

//           <div className={styles['products-grid']}>
//             {filteredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;




// import React, { useState, useEffect } from 'react';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500,  // Set a reasonable max price based on your data
//   });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const applyFilters = (activeFilters) => {
//     const { brands, genres, price } = activeFilters;

//     const filtered = products.filter(product => {
//       const matchBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchGenre = genres.length === 0 || genres.includes(product.genre);
//       const matchPrice = product.price <= price;
//       return matchBrand && matchGenre && matchPrice;
//     });

//     setFilteredProducts(filtered);
//   };

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prevFilters => {
//       if (filterType === 'price') {
//         const updated = { ...prevFilters, price: Number(value) };
//         applyFilters(updated);
//         return updated;
//       }

//       const currentValues = prevFilters[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];

//       const updated = { ...prevFilters, [filterType]: updatedValues };
//       applyFilters(updated);
//       return updated;
//     });
//   };

//   return (
//     <div className={styles['products-page']}>
//       <div className={styles.header}>
//         <h1>Perfume Products</h1>
//       </div>

//       <div className={styles['content-container']}>
//         <div className={styles['filters-section']}>
//           <FilterSection filters={filters} onFilterChange={handleFilterChange} />
//         </div>

//         <div className={styles['products-section']}>
//           <div className={styles['sort-row']}>
//             <SortDropdown />
//           </div>

//           <div className={styles['products-grid']}>
//             {filteredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;














// import React, { useState, useEffect, useMemo } from 'react';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (err) {
//         setError(err.message);
//         console.error('Error fetching products:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Handle filter changes
//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//   };


//   const handleSortChange = (sortMethod) => {
//   setProducts(prev => {
//     const sorted = [...prev];
//     switch(sortMethod) {
//       case 'a-z':
//         return sorted.sort((a, b) => a.name.localeCompare(b.name));
//       case 'z-a':
//         return sorted.sort((a, b) => b.name.localeCompare(a.name));
//       case 'price-low':
//         return sorted.sort((a, b) => a.price - b.price);
//       case 'price-high':
//         return sorted.sort((a, b) => b.price - a.price);
//       case 'newest':
//         // Sort by ID descending (assuming higher IDs are newer)
//         return sorted.sort((a, b) => b.id - a.id);
//       case 'oldest':
//         // Sort by ID ascending
//         return sorted.sort((a, b) => a.id - b.id);
//       default: // featured
//         return sorted;
//     }
//   });
// };

//   // Apply filters and memoize results
//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || genres.includes(product.genre);
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>Premium Perfumes Collection</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {filteredProducts.length} of {products.length} products
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <div className={styles.productsGrid}>
//               {filteredProducts.map(product => (
//                 <ProductCard 
//                   key={product.id} 
//                   product={product} 
//                   className={styles.productCard}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: [],
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;













// import React, { useState, useEffect, useMemo } from 'react';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 30;

//   // Fetch products on component mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (err) {
//         setError(err.message);
//         console.error('Error fetching products:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Handle filter changes
//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   const handleSortChange = (sortMethod) => {
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z':
//           return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a':
//           return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low':
//           return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high':
//           return sorted.sort((a, b) => b.price - a.price);
//         case 'newest':
//           return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest':
//           return sorted.sort((a, b) => a.id - b.id);
//         default: // featured
//           return sorted;
//       }
//     });
//     setCurrentPage(1); // Reset to first page when sorting changes
//   };

//   // Apply filters and memoize results
//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || genres.includes(product.genre);
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>Premium Perfumes Collection</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {/* Futuristic 2025 Pagination */}
//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                     aria-label="Previous page"
//                   >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                       <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>

//                   <div className={styles.paginationDots}>
//                     {Array.from({ length: totalPages }).map((_, index) => {
//                       const page = index + 1;
//                       const isCurrent = page === currentPage;
//                       const isNearCurrent = Math.abs(page - currentPage) <= 2;
//                       const showEllipsis = totalPages > 7 && !isNearCurrent && 
//                         ((page < currentPage && page > 1) || 
//                          (page > currentPage && page < totalPages));

//                       if (showEllipsis) {
//                         return (
//                           <span key={index} className={styles.paginationEllipsis}>
//                             {index === 1 || index === totalPages - 2 ? '...' : null}
//                           </span>
//                         );
//                       }

//                       return (
//                         <button
//                           key={index}
//                           onClick={() => handlePageChange(page)}
//                           className={`${styles.paginationDot} ${isCurrent ? styles.active : ''}`}
//                           aria-current={isCurrent ? 'page' : undefined}
//                           aria-label={`Page ${page}`}
//                         >
//                           <span className={styles.dotBackground}></span>
//                           {isCurrent && <span className={styles.dotPulse}></span>}
//                         </button>
//                       );
//                     })}
//                   </div>

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                     aria-label="Next page"
//                   >
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                       <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: [],
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;















// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 30;

//   // Set initial genre filter from props or URL
//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     if (activeGenre) {
//       setFilters(prev => ({
//         ...prev,
//         genres: [activeGenre]
//       }));
//     }
//   }, [genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || genres.includes(product.genre);
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>
//           {genre === 'men' ? "Men's Perfumes" : 
//            genre === 'women' ? "Women's Perfumes" : 
//            "Premium Perfumes Collection"}
//         </h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//             activeGenre={genre || defaultGenre}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   {Array.from({ length: totalPages }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`${styles.paginationNumber} ${
//                         currentPage === index + 1 ? styles.active : ''
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: [],
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;











// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 30;

//   // Set initial genre filter from props or URL (with case conversion)
//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     if (activeGenre) {
//       // Convert URL parameter to proper case to match database
//       let genreValue;
//       switch(activeGenre.toLowerCase()) {
//         case 'men': genreValue = 'Men'; break;
//         case 'women': genreValue = 'Women'; break;
//         default: genreValue = activeGenre;
//       }
      
//       setFilters(prev => ({
//         ...prev,
//         genres: [genreValue]
//       }));
//     }
//   }, [genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || 
//         genres.some(g => g.toLowerCase() === product.genre.toLowerCase());
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Get display title based on active genre
//   const getPageTitle = () => {
//     if (genre || defaultGenre) {
//       const activeGenre = (genre || defaultGenre).toLowerCase();
//       if (activeGenre === 'men') return "Men's Perfumes";
//       if (activeGenre === 'women') return "Women's Perfumes";
//     }
//     return "Premium Perfumes Collection";
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{getPageTitle()}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//             activeGenre={filters.genres[0]} // Pass the capitalized value
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   {Array.from({ length: totalPages }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`${styles.paginationNumber} ${
//                         currentPage === index + 1 ? styles.active : ''
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: [],
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;









// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 30;

//   // Check if we're on a specific gender page
//   const isGenderPage = Boolean(genre || defaultGenre);

//   // Set initial genre filter from props or URL
//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     if (activeGenre) {
//       // Convert URL parameter to proper case to match database
//       let genreValue;
//       switch(activeGenre.toLowerCase()) {
//         case 'men': genreValue = 'Men'; break;
//         case 'women': genreValue = 'Women'; break;
//         default: genreValue = activeGenre;
//       }
      
//       setFilters(prev => ({
//         ...prev,
//         genres: [genreValue]
//       }));
//     }
//   }, [genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || 
//         genres.some(g => g.toLowerCase() === product.genre.toLowerCase());
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Get display title based on active genre
//   const getPageTitle = () => {
//     if (genre || defaultGenre) {
//       const activeGenre = (genre || defaultGenre).toLowerCase();
//       if (activeGenre === 'men') return "Men's Perfumes";
//       if (activeGenre === 'women') return "Women's Perfumes";
//     }
//     return "Premium Perfumes Collection";
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{getPageTitle()}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={isGenderPage} // Pass prop to hide genre filter
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   {Array.from({ length: totalPages }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`${styles.paginationNumber} ${
//                         currentPage === index + 1 ? styles.active : ''
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: isGenderPage ? [filters.genres[0]] : [], // Preserve gender filter if on gender page
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;










// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 30;

//   // Check if we're on a specific gender page
//   const isGenderPage = Boolean(genre || defaultGenre);

//   // Set initial filters and clear on navigation
//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     let genreValue;
    
//     if (activeGenre) {
//       switch(activeGenre.toLowerCase()) {
//         case 'men': genreValue = 'Men'; break;
//         case 'women': genreValue = 'Women'; break;
//         default: genreValue = activeGenre;
//       }
//     }

//     // Reset all filters (preserve only gender filter if on gender page)
//     setFilters({
//       brands: [],
//       genres: genreValue ? [genreValue] : [],
//       price: 500
//     });
//     setCurrentPage(1);
//   }, [location.pathname, genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || 
//         genres.some(g => g.toLowerCase() === product.genre.toLowerCase());
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const getPageTitle = () => {
//     if (genre || defaultGenre) {
//       const activeGenre = (genre || defaultGenre).toLowerCase();
//       if (activeGenre === 'men') return "Men's Perfumes";
//       if (activeGenre === 'women') return "Women's Perfumes";
//     }
//     return "Premium Perfumes Collection";
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{getPageTitle()}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={isGenderPage}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.toolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   {Array.from({ length: totalPages }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => handlePageChange(index + 1)}
//                       className={`${styles.paginationNumber} ${
//                         currentPage === index + 1 ? styles.active : ''
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => setFilters({
//                   brands: [],
//                   genres: isGenderPage ? [filters.genres[0]] : [],
//                   price: 500
//                 })}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;














// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   // Check if we're on a specific gender page
//   const isGenderPage = Boolean(genre || defaultGenre);

//   // Set initial filters and clear on navigation
//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     let genreValue;
    
//     if (activeGenre) {
//       switch(activeGenre.toLowerCase()) {
//         case 'men': genreValue = 'Men'; break;
//         case 'women': genreValue = 'Women'; break;
//         default: genreValue = activeGenre;
//       }
//     }

//     setFilters({
//       brands: [],
//       genres: genreValue ? [genreValue] : [],
//       price: 500
//     });
//     setCurrentPage(1);
//   }, [location.pathname, genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }
      
//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];
      
//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch(sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || 
//         genres.some(g => g.toLowerCase() === product.genre.toLowerCase());
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const getPageTitle = () => {
//     if (genre || defaultGenre) {
//       const activeGenre = (genre || defaultGenre).toLowerCase();
//       if (activeGenre === 'men') return "Men's Perfumes";
//       if (activeGenre === 'women') return "Women's Perfumes";
//     }
//     return "Premium Perfumes Collection";
//   };

//   const getSortLabel = () => {
//     switch(selectedSort) {
//       case 'newest': return 'Newest to Oldest';
//       case 'oldest': return 'Oldest to Newest';
//       case 'price-low': return 'Price: Low to High';
//       case 'price-high': return 'Price: High to Low';
//       case 'a-z': return 'A-Z';
//       case 'z-a': return 'Z-A';
//       default: return 'Newest to Oldest';
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button 
//           className={styles.retryButton}
//           onClick={() => window.location.reload()}
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{getPageTitle()}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         {/* Desktop Filter Panel */}
//         <aside className={styles.filterPanel}>
//           <FilterSection 
//             filters={filters} 
//             onFilterChange={handleFilterChange} 
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={isGenderPage}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           {/* Mobile Filter/Sort Bar - Side by Side */}
//           <div className={styles.mobileFilterSortBar}>
//             <button 
//               className={styles.mobileFilterButton}
//               onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
//             >
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
            
//             <button 
//               className={styles.mobileSortButton}
//               onClick={() => setMobileSortOpen(!mobileSortOpen)}
//             >
//               <span>{getSortLabel()}</span>
//             </button>
//           </div>

//           {/* Mobile Filter Panel */}
//           {mobileFilterOpen && (
//             <div className={styles.mobileFilterPanel}>
//               <div className={styles.mobileFilterHeader}>
//                 <h3>FILTER BY</h3>
//                 <button 
//                   className={styles.closeMobileFilter}
//                   onClick={() => setMobileFilterOpen(false)}
//                 >
//                   ×
//                 </button>
//               </div>
//               <FilterSection 
//                 filters={filters} 
//                 onFilterChange={handleFilterChange} 
//                 activeGenre={filters.genres[0]}
//                 hideGenreFilter={isGenderPage}
//                 mobileView={true}
//               />
//               <button 
//                 className={styles.applyMobileFilters}
//                 onClick={() => setMobileFilterOpen(false)}
//               >
//                 APPLY FILTERS
//               </button>
//             </div>
//           )}

//           {/* Mobile Sort Panel */}
//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               <div className={styles.mobileSortHeader}>
//                 <h3>SORT BY</h3>
//                 <button 
//                   className={styles.closeMobileSort}
//                   onClick={() => setMobileSortOpen(false)}
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className={styles.mobileSortOptions}>
//                 <button 
//                   onClick={() => handleSortChange('newest')}
//                   className={selectedSort === 'newest' ? styles.activeSort : ''}
//                 >
//                   Newest to Oldest
//                 </button>
//                 <button 
//                   onClick={() => handleSortChange('oldest')}
//                   className={selectedSort === 'oldest' ? styles.activeSort : ''}
//                 >
//                   Oldest to Newest
//                 </button>
//                 <button 
//                   onClick={() => handleSortChange('price-low')}
//                   className={selectedSort === 'price-low' ? styles.activeSort : ''}
//                 >
//                   Price: Low to High
//                 </button>
//                 <button 
//                   onClick={() => handleSortChange('price-high')}
//                   className={selectedSort === 'price-high' ? styles.activeSort : ''}
//                 >
//                   Price: High to Low
//                 </button>
//                 <button 
//                   onClick={() => handleSortChange('a-z')}
//                   className={selectedSort === 'a-z' ? styles.activeSort : ''}
//                 >
//                   A-Z
//                 </button>
//                 <button 
//                   onClick={() => handleSortChange('z-a')}
//                   className={selectedSort === 'z-a' ? styles.activeSort : ''}
//                 >
//                   Z-A
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Desktop Toolbar */}
//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
//             </div>
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     className={styles.productCard}
//                   />
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   <div className={styles.paginationNumbers}>
//                     {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
//                       let pageNum;
//                       if (totalPages <= 5) {
//                         pageNum = index + 1;
//                       } else if (currentPage <= 3) {
//                         pageNum = index + 1;
//                       } else if (currentPage >= totalPages - 2) {
//                         pageNum = totalPages - 4 + index;
//                       } else {
//                         pageNum = currentPage - 2 + index;
//                       }

//                       return (
//                         <button
//                           key={index}
//                           onClick={() => handlePageChange(pageNum)}
//                           className={`${styles.paginationNumber} ${
//                             currentPage === pageNum ? styles.active : ''
//                           }`}
//                         >
//                           {pageNum}
//                         </button>
//                       );
//                     })}

//                     {totalPages > 5 && currentPage < totalPages - 2 && (
//                       <span className={styles.paginationEllipsis}>...</span>
//                     )}

//                     {totalPages > 5 && currentPage < totalPages - 2 && (
//                       <button
//                         onClick={() => handlePageChange(totalPages)}
//                         className={`${styles.paginationNumber} ${
//                           currentPage === totalPages ? styles.active : ''
//                         }`}
//                       >
//                         {totalPages}
//                       </button>
//                     )}
//                   </div>

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button 
//                 className={styles.resetFilters}
//                 onClick={() => {
//                   setFilters({
//                     brands: [],
//                     genres: isGenderPage ? [filters.genres[0]] : [],
//                     price: 500
//                   });
//                   setMobileFilterOpen(false);
//                 }}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

















// import React, { useState, useEffect, useMemo } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const ProductsPage = ({ defaultGenre }) => {
//   const { genre } = useParams();
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     brands: [],
//     genres: [],
//     price: 500
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   const isGenderPage = Boolean(genre || defaultGenre);

//   useEffect(() => {
//     const activeGenre = genre || defaultGenre;
//     let genreValue;

//     if (activeGenre) {
//       switch (activeGenre.toLowerCase()) {
//         case 'men': genreValue = 'Men'; break;
//         case 'women': genreValue = 'Women'; break;
//         default: genreValue = activeGenre;
//       }
//     }

//     setFilters({
//       brands: [],
//       genres: genreValue ? [genreValue] : [],
//       price: 500
//     });
//     setCurrentPage(1);
//   }, [location.pathname, genre, defaultGenre]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`${API_URL}/api/products`);
//       setProducts(response.data);
//     } catch (err) {
//       setError(err.message);
//       console.error('Error fetching products:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') {
//         return { ...prev, price: Number(value) };
//       }

//       const currentValues = prev[filterType];
//       const updatedValues = currentValues.includes(value)
//         ? currentValues.filter(item => item !== value)
//         : [...currentValues, value];

//       return { ...prev, [filterType]: updatedValues };
//     });
//     setCurrentPage(1);
//   };

//   const handleSortChange = (sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => {
//       const sorted = [...prev];
//       switch (sortMethod) {
//         case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
//         case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
//         case 'price-low': return sorted.sort((a, b) => a.price - b.price);
//         case 'price-high': return sorted.sort((a, b) => b.price - a.price);
//         case 'newest': return sorted.sort((a, b) => b.id - a.id);
//         case 'oldest': return sorted.sort((a, b) => a.id - b.id);
//         default: return sorted;
//       }
//     });
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(product => {
//       const { brands, genres, price } = filters;
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 ||
//         genres.some(g => g.toLowerCase() === product.genre?.toLowerCase());
//       const matchesPrice = product.price <= price;
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const getPageTitle = () => {
//     const activeGenre = (genre || defaultGenre)?.toLowerCase();
//     if (activeGenre === 'men') return "Men's Perfumes";
//     if (activeGenre === 'women') return "Women's Perfumes";
//     return "Premium Perfumes Collection";
//   };

// const getSortLabel = (sort = selectedSort) => {
//   switch (sort) {
//     case 'newest': return 'Newest to Oldest';
//     case 'oldest': return 'Oldest to Newest';
//     case 'price-low': return 'Price: Low to High';
//     case 'price-high': return 'Price: High to Low';
//     case 'a-z': return 'A-Z';
//     case 'z-a': return 'Z-A';
//     default: return 'Newest to Oldest';
//   }
// };


//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button className={styles.retryButton} onClick={() => window.location.reload()}>
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{getPageTitle()}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         {/* Filter Panel */}
//         <aside className={styles.filterPanel}>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={isGenderPage}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           {/* Mobile filter/sort toggle */}
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
//               <span>{getSortLabel()}</span>
//             </button>
//           </div>

//           {/* Mobile filter panel */}
//           {mobileFilterOpen && (
//             <div className={styles.mobileFilterPanel}>
//               <div className={styles.mobileFilterHeader}>
//                 <h3>FILTER BY</h3>
//                 <button className={styles.closeMobileFilter} onClick={() => setMobileFilterOpen(false)}>×</button>
//               </div>
//               <FilterSection
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 activeGenre={filters.genres[0]}
//                 hideGenreFilter={isGenderPage}
//                 mobileView
//               />
//               <button className={styles.applyMobileFilters} onClick={() => setMobileFilterOpen(false)}>
//                 APPLY FILTERS
//               </button>
//             </div>
//           )}

//           {/* Mobile sort panel */}
//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               <div className={styles.mobileSortHeader}>
//                 <h3>SORT BY</h3>
//                 <button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button>
//               </div>
//               <div className={styles.mobileSortOptions}>
//                 {['newest', 'oldest', 'price-low', 'price-high', 'a-z', 'z-a'].map(sort => (
//                   <button
//                     key={sort}
//                     onClick={() => handleSortChange(sort)}
//                     className={selectedSort === sort ? styles.activeSort : ''}
//                   >
//                     {getSortLabel(sort)}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Top sorting info */}
//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
//             </div>
//           </div>

//           {/* Product grid */}
//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>

//               {/* Pagination */}
//               {totalPages > 1 && (
//                 <div className={styles.paginationContainer}>
//                   <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className={styles.paginationArrow}
//                   >
//                     &lt;
//                   </button>

//                   {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
//                     let pageNum = i + 1;
//                     if (totalPages > 5) {
//                       if (currentPage <= 3) pageNum = i + 1;
//                       else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
//                       else pageNum = currentPage - 2 + i;
//                     }

//                     return (
//                       <button
//                         key={i}
//                         onClick={() => handlePageChange(pageNum)}
//                         className={`${styles.paginationNumber} ${currentPage === pageNum ? styles.active : ''}`}
//                       >
//                         {pageNum}
//                       </button>
//                     );
//                   })}

//                   {totalPages > 5 && currentPage < totalPages - 2 && (
//                     <>
//                       <span className={styles.paginationEllipsis}>...</span>
//                       <button
//                         onClick={() => handlePageChange(totalPages)}
//                         className={`${styles.paginationNumber} ${currentPage === totalPages ? styles.active : ''}`}
//                       >
//                         {totalPages}
//                       </button>
//                     </>
//                   )}

//                   <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className={styles.paginationArrow}
//                   >
//                     &gt;
//                   </button>
//                 </div>
//               )}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button
//                 className={styles.resetFilters}
//                 onClick={() => {
//                   setFilters({
//                     brands: [],
//                     genres: isGenderPage ? [filters.genres[0]] : [],
//                     price: 500
//                   });
//                   setMobileFilterOpen(false);
//                 }}
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;













import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FilterSection from '../componen/FilterSection';
import ProductCard from '../componen/ProductCard';
import SortDropdown from '../componen/SortDropdown';
import axios from 'axios';
import styles from '../../src/style/ProductsPage.module.css';

const ProductsPage = ({ defaultGenre }) => {
  const { genre } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    brands: [],
    genres: [],
    price: 500
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('newest');
  const itemsPerPage = 12;

  const API_URL = process.env.REACT_APP_API_URL;
  const isGenderPage = Boolean(genre || defaultGenre);

  useEffect(() => {
    const activeGenre = genre || defaultGenre;
    let genreValue;

    if (activeGenre) {
      switch (activeGenre.toLowerCase()) {
        case 'men': genreValue = 'Men'; break;
        case 'women': genreValue = 'Women'; break;
        default: genreValue = activeGenre;
      }
    }

    setFilters({
      brands: [],
      genres: genreValue ? [genreValue] : [],
      price: 500
    });
    setCurrentPage(1);
  }, [location.pathname, genre, defaultGenre]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/api/products`);
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [API_URL]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      if (filterType === 'price') {
        return { ...prev, price: Number(value) };
      }

      const currentValues = prev[filterType];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];

      return { ...prev, [filterType]: updatedValues };
    });
    setCurrentPage(1);
  };

  const handleSortChange = (sortMethod) => {
    setSelectedSort(sortMethod);
    setProducts(prev => {
      const sorted = [...prev];
      switch (sortMethod) {
        case 'a-z': return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'z-a': return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-low': return sorted.sort((a, b) => a.price - b.price);
        case 'price-high': return sorted.sort((a, b) => b.price - a.price);
        case 'newest': return sorted.sort((a, b) => b.id - a.id);
        case 'oldest': return sorted.sort((a, b) => a.id - b.id);
        default: return sorted;
      }
    });
    setCurrentPage(1);
    setMobileSortOpen(false);
  };

  const getSortLabel = (sort) => {
    switch (sort) {
      case 'newest': return 'Newest to Oldest';
      case 'oldest': return 'Oldest to Newest';
      case 'price-low': return 'Price: Low to High';
      case 'price-high': return 'Price: High to Low';
      case 'a-z': return 'A-Z';
      case 'z-a': return 'Z-A';
      default: return 'Newest to Oldest';
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const { brands, genres, price } = filters;
      const matchesBrand = brands.length === 0 || brands.includes(product.brand);
      const matchesGenre = genres.length === 0 ||
        genres.some(g => g.toLowerCase() === product.genre?.toLowerCase());
      const matchesPrice = product.price <= price;
      return matchesBrand && matchesGenre && matchesPrice;
    });
  }, [products, filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageTitle = () => {
    const activeGenre = (genre || defaultGenre)?.toLowerCase();
    if (activeGenre === 'men') return "Men's Perfumes";
    if (activeGenre === 'women') return "Women's Perfumes";
    return "Premium Perfumes Collection";
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading perfumes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Error loading products</h2>
        <p>{error}</p>
        <button className={styles.retryButton} onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>{getPageTitle()}</h1>
        <p className={styles.subtitle}>Discover your signature scent</p>
      </header>

      <div className={styles.mainContent}>
        {/* Filter Panel */}
        <aside className={styles.filterPanel}>
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            activeGenre={filters.genres[0]}
            hideGenreFilter={isGenderPage}
          />
        </aside>

        <main className={styles.productArea}>
          {/* Mobile filter/sort toggle */}
          <div className={styles.mobileFilterSortBar}>
            <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
              <span>Filter By</span>
              <span>{filteredProducts.length} products</span>
            </button>
            <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
              <span>{getSortLabel(selectedSort)}</span>
            </button>
          </div>

          {/* Mobile sort panel */}
          {mobileSortOpen && (
            <div className={styles.mobileSortPanel}>
              <div className={styles.mobileSortHeader}>
                <h3>SORT BY</h3>
                <button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button>
              </div>
              <div className={styles.mobileSortOptions}>
                {['newest', 'oldest', 'price-low', 'price-high', 'a-z', 'z-a'].map(sort => (
                  <button
                    key={sort}
                    onClick={() => handleSortChange(sort)}
                    className={selectedSort === sort ? styles.activeSort : ''}
                  >
                    {getSortLabel(sort)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Desktop sort bar */}
          <div className={styles.desktopToolbar}>
            <div className={styles.resultsCount}>
              Showing {paginatedProducts.length} of {filteredProducts.length} products
              {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
            </div>
            <div className={styles.sortContainer}>
              <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <div className={styles.productsGrid}>
                {paginatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className={styles.paginationContainer}>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={styles.paginationArrow}
                  >
                    &lt;
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                    let pageNum = i + 1;
                    if (totalPages > 5) {
                      if (currentPage <= 3) pageNum = i + 1;
                      else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                      else pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        className={`${styles.paginationNumber} ${currentPage === pageNum ? styles.active : ''}`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className={styles.paginationEllipsis}>...</span>
                      <button
                        onClick={() => handlePageChange(totalPages)}
                        className={`${styles.paginationNumber} ${currentPage === totalPages ? styles.active : ''}`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={styles.paginationArrow}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              <h3>No products match your filters</h3>
              <button
                className={styles.resetFilters}
                onClick={() => {
                  setFilters({
                    brands: [],
                    genres: isGenderPage ? [filters.genres[0]] : [],
                    price: 500
                  });
                  setMobileFilterOpen(false);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
