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

//   const getSortLabel = (sort) => {
//     switch (sort) {
//       case 'newest': return 'Newest to Oldest';
//       case 'oldest': return 'Oldest to Newest';
//       case 'price-low': return 'Price: Low to High';
//       case 'price-high': return 'Price: High to Low';
//       case 'a-z': return 'A-Z';
//       case 'z-a': return 'Z-A';
//       default: return 'Newest to Oldest';
//     }
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
//               <span>{getSortLabel(selectedSort)}</span>
//             </button>
//           </div>

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

//           {/* Desktop sort bar */}
//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
//             </div>
//           </div>

//           {/* Product Grid */}
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





















// import React, { useState, useEffect } from 'react';
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
//   const [totalProducts, setTotalProducts] = useState(0);
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

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const params = {
//           limit: itemsPerPage,
//           offset: (currentPage - 1) * itemsPerPage
//         };
//         if (filters.price) params.maxPrice = filters.price;
//         if (filters.genres.length > 0) params.genre = filters.genres[0];
//         if (filters.brands.length > 0) params.brand = filters.brands[0];

//         const response = await axios.get(`${API_URL}/api/products`, { params });
//         setProducts(response.data.products);
//         setTotalProducts(response.data.total);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [filters, currentPage, API_URL]);

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
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   };

//   const getSortLabel = (sort) => {
//     switch (sort) {
//       case 'newest': return 'Newest to Oldest';
//       case 'oldest': return 'Oldest to Newest';
//       case 'price-low': return 'Price: Low to High';
//       case 'price-high': return 'Price: High to Low';
//       case 'a-z': return 'A-Z';
//       case 'z-a': return 'Z-A';
//       default: return 'Newest to Oldest';
//     }
//   };

//   const totalPages = Math.ceil(totalProducts / itemsPerPage);

//   const getPageTitle = () => {
//     const activeGenre = (genre || defaultGenre)?.toLowerCase();
//     if (activeGenre === 'men') return "Men's Perfumes";
//     if (activeGenre === 'women') return "Women's Perfumes";
//     return "Premium Perfumes Collection";
//   };

//   if (isLoading) {
//     return <div className={styles.loadingContainer}><div className={styles.loadingSpinner}></div><p>Loading perfumes...</p></div>;
//   }

//   if (error) {
//     return <div className={styles.errorContainer}><h2>Error loading products</h2><p>{error}</p><button className={styles.retryButton} onClick={() => window.location.reload()}>Try Again</button></div>;
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
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
//               <span>Filter By</span><span>{totalProducts} products</span>
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
//               <span>{getSortLabel(selectedSort)}</span>
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               <div className={styles.mobileSortHeader}><h3>SORT BY</h3><button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button></div>
//               <div className={styles.mobileSortOptions}>
//                 {['newest', 'oldest', 'price-low', 'price-high', 'a-z', 'z-a'].map(sort => (
//                   <button key={sort} onClick={() => handleSortChange(sort)} className={selectedSort === sort ? styles.activeSort : ''}>{getSortLabel(sort)}</button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing page {currentPage} of {totalPages} • Total {totalProducts} products
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
//             </div>
//           </div>

//           {<div className={styles.productsGrid}>
//             {products.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div> }






//           <div className={styles.paginationContainer}>
//             <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={styles.paginationArrow}>&lt;</button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
//               <button key={pageNum} onClick={() => setCurrentPage(pageNum)} className={`${styles.paginationNumber} ${currentPage === pageNum ? styles.active : ''}`}>{pageNum}</button>
//             ))}
//             <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className={styles.paginationArrow}>&gt;</button>
//           </div>
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

//   const getSortLabel = (sort) => {
//     switch (sort) {
//       case 'newest': return 'Newest to Oldest';
//       case 'oldest': return 'Oldest to Newest';
//       case 'price-low': return 'Price: Low to High';
//       case 'price-high': return 'Price: High to Low';
//       case 'a-z': return 'A-Z';
//       case 'z-a': return 'Z-A';
//       default: return 'Newest to Oldest';
//     }
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
//               <span>{getSortLabel(selectedSort)}</span>
//             </button>
//           </div>

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

//           {/* Desktop sort bar */}
//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown onSortChange={handleSortChange} selectedSort={selectedSort} />
//             </div>
//           </div>

//           {/* Product Grid */}
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
























// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// // Memoize the ProductCard to prevent unnecessary re-renders
// const MemoizedProductCard = React.memo(ProductCard);

// // Predefined sort functions outside component to avoid recreation
// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A'
// };

// const ProductsPage = ({ defaultGenre }) => {
//   // State management
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

//   // Memoized values
//   const activeGenre = useMemo(() => {
//     const genreValue = genre || defaultGenre;
//     if (!genreValue) return null;
    
//     switch (genreValue.toLowerCase()) {
//       case 'men': return 'Men';
//       case 'women': return 'Women';
//       default: return genreValue;
//     }
//   }, [genre, defaultGenre]);

//   // Optimized data fetching with pagination and caching
//   const fetchProducts = useCallback(async () => {
//     const cacheKey = `products_${API_URL}`;
//     const cachedData = sessionStorage.getItem(cacheKey);
    
//     if (cachedData) {
//       setProducts(JSON.parse(cachedData));
//       setIsLoading(false);
//       return;
//     }

//     const source = axios.CancelToken.source();
    
//     try {
//       setIsLoading(true);
//       setError(null);
      
//       // Only request essential fields and implement server-side pagination if possible
//       const response = await axios.get(`${API_URL}/api/products`, {
//         cancelToken: source.token,
//         params: {
//           _limit: 100, // Adjust based on your API capabilities
//           _fields: 'id,name,price,brand,genre,image,createdAt'
//         }
//       });
      
//       setProducts(response.data);
//       // Cache the response for 5 minutes
//       sessionStorage.setItem(cacheKey, JSON.stringify(response.data));
//       sessionStorage.setItem(`${cacheKey}_timestamp`, Date.now());
//     } catch (err) {
//       if (!axios.isCancel(err)) {
//         setError(err.message);
//         console.error('Error fetching products:', err);
//       }
//     } finally {
//       if (!source.token.reason) {
//         setIsLoading(false);
//       }
//     }

//     return () => source.cancel('Component unmounted');
//   }, [API_URL]);

//   // Clean up old cache entries
//   useEffect(() => {
//     const now = Date.now();
//     Object.keys(sessionStorage).forEach(key => {
//       if (key.startsWith('products_') && key.endsWith('_timestamp')) {
//         const timestamp = sessionStorage.getItem(key);
//         if (now - timestamp > 300000) { // 5 minutes
//           const cacheKey = key.replace('_timestamp', '');
//           sessionStorage.removeItem(cacheKey);
//           sessionStorage.removeItem(key);
//         }
//       }
//     });
//   }, []);

//   // Fetch products on mount
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   // Update filters when genre changes
//   useEffect(() => {
//     setFilters(prev => ({
//       ...prev,
//       genres: activeGenre ? [activeGenre] : [],
//     }));
//     setCurrentPage(1);
//   }, [location.pathname, activeGenre]);

//   // Optimized filter change handler
//   const handleFilterChange = useCallback((filterType, value) => {
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
//   }, []);

//   // Optimized sort handler
//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => [...prev].sort(sortFunctions[sortMethod] || sortFunctions['newest']));
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   // Optimized product filtering
//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
    
//     return products.filter(product => {
//       const matchesBrand = brands.length === 0 || brands.includes(product.brand);
//       const matchesGenre = genres.length === 0 || 
//         genres.some(g => g.toLowerCase() === product.genre?.toLowerCase());
//       const matchesPrice = product.price <= price;
      
//       return matchesBrand && matchesGenre && matchesPrice;
//     });
//   }, [products, filters]);

//   // Optimized pagination
//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const paginated = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    
//     return { totalPages: total, paginatedProducts: paginated };
//   }, [filteredProducts, currentPage, itemsPerPage]);

//   const handlePageChange = useCallback((page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   // Memoized page title
//   const pageTitle = useMemo(() => {
//     const active = (genre || defaultGenre)?.toLowerCase();
//     return active === 'men' ? "Men's Perfumes" : 
//            active === 'women' ? "Women's Perfumes" : 
//            "Premium Perfumes Collection";
//   }, [genre, defaultGenre]);

//   const resetFilters = useCallback(() => {
//     setFilters({
//       brands: [],
//       genres: isGenderPage ? [activeGenre] : [],
//       price: 500
//     });
//     setMobileFilterOpen(false);
//   }, [isGenderPage, activeGenre]);

//   // Render pagination buttons
//   const renderPaginationButtons = useCallback(() => {
//     if (totalPages <= 1) return null;

//     const buttons = [];
//     const maxVisible = 5;
//     let startPage = 1;
    
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     // Previous button
//     buttons.push(
//       <button
//         key="prev"
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className={styles.paginationArrow}
//       >
//         &lt;
//       </button>
//     );

//     // Page buttons
//     for (let i = 0; i < Math.min(maxVisible, totalPages); i++) {
//       const page = startPage + i;
//       buttons.push(
//         <button
//           key={page}
//           onClick={() => handlePageChange(page)}
//           className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
//         >
//           {page}
//         </button>
//       );
//     }

//     // Next button
//     buttons.push(
//       <button
//         key="next"
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className={styles.paginationArrow}
//       >
//         &gt;
//       </button>
//     );

//     return <div className={styles.paginationContainer}>{buttons}</div>;
//   }, [totalPages, currentPage, handlePageChange]);

//   // Loading state
//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.loadingSpinner}></div>
//         <p>Loading perfumes...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className={styles.errorContainer}>
//         <h2>Error loading products</h2>
//         <p>{error}</p>
//         <button className={styles.retryButton} onClick={fetchProducts}>
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   // Main render
//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{pageTitle}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         {/* Filter Panel */}
// <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//   <div className={styles.mobileFilterHeader}>
//     <h3>FILTER BY</h3>
//     <button 
//       className={styles.closeMobileFilter}
//       onClick={() => setMobileFilterOpen(false)}
//     >
//       ×
//     </button>
//   </div>

//   <FilterSection
//     filters={filters}
//     onFilterChange={handleFilterChange}
//     activeGenre={filters.genres[0]}
//     hideGenreFilter={isGenderPage}
//   />
// </aside>


//         {/* Main Product Area */}
//         <main className={styles.productArea}>
//           {/* Mobile controls */}
//           <div className={styles.mobileFilterSortBar}>
//             <button 
//               onClick={() => setMobileFilterOpen(!mobileFilterOpen)} 
//               className={styles.mobileFilterButton}
//             >
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
//             <button 
//               onClick={() => setMobileSortOpen(!mobileSortOpen)} 
//               className={styles.mobileSortButton}
//             >
//               <span>{sortLabels[selectedSort] || 'Newest to Oldest'}</span>
//             </button>
//           </div>

//           {/* Mobile sort panel */}
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
//                 {Object.keys(sortLabels).map(sort => (
//                   <button
//                     key={sort}
//                     onClick={() => handleSortChange(sort)}
//                     className={selectedSort === sort ? styles.activeSort : ''}
//                   >
//                     {sortLabels[sort]}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Desktop controls */}
//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//               {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
//             </div>
//             <div className={styles.sortContainer}>
//               <SortDropdown 
//                 onSortChange={handleSortChange} 
//                 selectedSort={selectedSort} 
//                 sortLabels={sortLabels}
//               />
//             </div>
//           </div>

//           {/* Product Grid */}
//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard 
//                     key={`${product.id}-${product.name}`} 
//                     product={product} 
//                   />
//                 ))}
//               </div>
//               {renderPaginationButtons()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <h3>No products match your filters</h3>
//               <button className={styles.resetFilters} onClick={resetFilters}>
//                 Reset Filters
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default React.memo(ProductsPage);

























// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   // Route-based filter logic
//   const routeFilters = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return { genres: ['men'], type: 'multiple' };
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return { genres: ['women'], type: 'multiple' };
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return { brands: ['lattafa', 'rasasi'] };
//     } else if (location.pathname.includes('/original')) {
//       return { type: 'single' };
//     } else if (location.pathname.includes('/makeup')) {
//       return { type: 'makeup' };
//     }
//     return {};
//   }, [location.pathname]);

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => [...prev].sort(sortFunctions[sortMethod]));
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
//     return products.filter(product => {
//       const matchesPrice = product.price <= price;

//       const matchesGenre =
//         routeFilters.genres
//           ? routeFilters.genres.includes(product.genre?.toLowerCase())
//           : genres.length === 0 || genres.includes(product.genre?.toLowerCase());

//       const matchesBrand =
//         routeFilters.brands
//           ? routeFilters.brands.includes(product.brand?.toLowerCase())
//           : brands.length === 0 || brands.includes(product.brand?.toLowerCase());

//       const matchesType =
//         routeFilters.type
//           ? product.type?.toLowerCase() === routeFilters.type
//           : true;

//       return matchesPrice && matchesGenre && matchesBrand && matchesType;
//     });
//   }, [products, filters, routeFilters]);

//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//   if (totalPages <= 1) return null;

//   const maxVisible = 5;
//   let startPage = 1;
  
//   if (totalPages > maxVisible) {
//     startPage = Math.min(
//       Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//       totalPages - maxVisible + 1
//     );
//   }

//   return (
//     <div className={styles.paginationContainer}>
//       <button 
//         onClick={() => handlePageChange(currentPage - 1)} 
//         disabled={currentPage === 1}
//         className={styles.paginationArrow}
//       >
//         &lt;
//       </button>
      
//       {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//         const page = startPage + i;
//         return (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`${styles.paginationNumber} ${
//               currentPage === page ? styles.active : ''
//             }`}
//           >
//             {page}
//           </button>
//         );
//       })}
      
//       <button 
//         onClick={() => handlePageChange(currentPage + 1)} 
//         disabled={currentPage === totalPages}
//         className={styles.paginationArrow}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>Explore Perfumes</h1>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>Filters</h3>
//             <button onClick={() => setMobileFilterOpen(false)}>×</button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
//               Filter • {filteredProducts.length} products
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)}>
//               {sortLabels[selectedSort]}
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               {Object.keys(sortLabels).map(sort => (
//                 <button key={sort} onClick={() => handleSortChange(sort)}>
//                   {sortLabels[sort]}
//                 </button>
//               ))}
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <p>No products match your filters.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;



























// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   // Route-based filter logic
//   const routeFilters = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return { genres: ['men'], type: 'multiple' };
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return { genres: ['women'], type: 'multiple' };
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return { brands: ['lattafa', 'rasasi'] };
//     } else if (location.pathname.includes('/original')) {
//       return { type: 'single' };
//     } else if (location.pathname.includes('/makeup')) {
//       return { type: 'makeup' };
//     }
//     return {};
//   }, [location.pathname]);

//   // Reset page to 1 when URL changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [location.pathname]);

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => [...prev].sort(sortFunctions[sortMethod]));
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
//     return products.filter(product => {
//       const matchesPrice = product.price <= price;

//       const matchesGenre =
//         routeFilters.genres
//           ? routeFilters.genres.includes(product.genre?.toLowerCase())
//           : genres.length === 0 || genres.includes(product.genre?.toLowerCase());

//       const matchesBrand =
//         routeFilters.brands
//           ? routeFilters.brands.includes(product.brand?.toLowerCase())
//           : brands.length === 0 || brands.includes(product.brand?.toLowerCase());

//       const matchesType =
//         routeFilters.type
//           ? product.type?.toLowerCase() === routeFilters.type
//           : true;

//       return matchesPrice && matchesGenre && matchesBrand && matchesType;
//     });
//   }, [products, filters, routeFilters]);

//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     const maxVisible = 5;
//     let startPage = 1;
    
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     return (
//       <div className={styles.paginationContainer}>
//         <button 
//           onClick={() => handlePageChange(currentPage - 1)} 
//           disabled={currentPage === 1}
//           className={styles.paginationArrow}
//         >
//           &lt;
//         </button>
        
//         {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//           const page = startPage + i;
//           return (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`${styles.paginationNumber} ${
//                 currentPage === page ? styles.active : ''
//               }`}
//             >
//               {page}
//             </button>
//           );
//         })}
        
//         <button 
//           onClick={() => handlePageChange(currentPage + 1)} 
//           disabled={currentPage === totalPages}
//           className={styles.paginationArrow}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>Discover your signature scent</h1>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>Filters</h3>
//             <button onClick={() => setMobileFilterOpen(false)}>×</button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
//               Filter • {filteredProducts.length} products
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)}>
//               {sortLabels[selectedSort]}
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               {Object.keys(sortLabels).map(sort => (
//                 <button key={sort} onClick={() => handleSortChange(sort)}>
//                   {sortLabels[sort]}
//                 </button>
//               ))}
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <p>No products match your filters.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


































// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   // Get page title based on current route
//   const pageTitle = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return "Men's Perfumes";
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return "Women's Perfumes";
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return "Lattafa & Rasasi Perfumes";
//     } else if (location.pathname.includes('/original')) {
//       return "Original Perfumes";
//     } else if (location.pathname.includes('/makeup')) {
//       return "Makeup Products";
//     }
//     return "All Perfumes";
//   }, [location.pathname]);

//   // Route-based filter logic
//   const routeFilters = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return { genres: ['men'], type: 'multiple' };
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return { genres: ['women'], type: 'multiple' };
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return { brands: ['lattafa', 'rasasi'] };
//     } else if (location.pathname.includes('/original')) {
//       return { type: 'single' };
//     } else if (location.pathname.includes('/makeup')) {
//       return { type: 'makeup' };
//     }
//     return {};
//   }, [location.pathname]);

//   // Reset page to 1 when URL changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [location.pathname]);

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setProducts(prev => [...prev].sort(sortFunctions[sortMethod]));
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);


// const filteredProducts = useMemo(() => {
//   const { brands, genres, price } = filters;
//   return products.filter(product => {
//     const matchesPrice = product.price <= price;

//     // Handle genre filtering - check both route filters and user-selected filters
//     const matchesGenre = 
//       routeFilters.genres?.length > 0 
//         ? routeFilters.genres.some(rg => 
//             product.genre?.toLowerCase() === rg.toLowerCase()
//           )
//         : genres.length === 0 || 
//           genres.some(fg => 
//             product.genre?.toLowerCase() === fg.toLowerCase()
//           );

//     const matchesBrand =
//       routeFilters.brands?.length > 0
//         ? routeFilters.brands.some(rb => 
//             product.brand?.toLowerCase() === rb.toLowerCase()
//           )
//         : brands.length === 0 || 
//           brands.some(fb => 
//             product.brand?.toLowerCase() === fb.toLowerCase()
//           );

//     const matchesType =
//       routeFilters.type
//         ? product.type?.toLowerCase() === routeFilters.type.toLowerCase()
//         : true;

//     return matchesPrice && matchesGenre && matchesBrand && matchesType;
//   });
// }, [products, filters, routeFilters]);



//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     const maxVisible = 5;
//     let startPage = 1;
    
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     return (
//       <div className={styles.paginationContainer}>
//         <button 
//           onClick={() => handlePageChange(currentPage - 1)} 
//           disabled={currentPage === 1}
//           className={styles.paginationArrow}
//         >
//           &lt;
//         </button>
        
//         {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//           const page = startPage + i;
//           return (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`${styles.paginationNumber} ${
//                 currentPage === page ? styles.active : ''
//               }`}
//             >
//               {page}
//             </button>
//           );
//         })}
        
//         <button 
//           onClick={() => handlePageChange(currentPage + 1)} 
//           disabled={currentPage === totalPages}
//           className={styles.paginationArrow}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{pageTitle}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>Filters</h3>
//             <button onClick={() => setMobileFilterOpen(false)}>×</button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)}>
//               Filter • {filteredProducts.length} products
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)}>
//               {sortLabels[selectedSort]}
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               {Object.keys(sortLabels).map(sort => (
//                 <button key={sort} onClick={() => handleSortChange(sort)}>
//                   {sortLabels[sort]}
//                 </button>
//               ))}
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <p>No products match your filters.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;












// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   // Get page title based on current route
//   const pageTitle = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return "Men's Perfumes";
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return "Women's Perfumes";
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return "Lattafa & Rasasi Perfumes";
//     } else if (location.pathname.includes('/original')) {
//       return "Original Perfumes";
//     } else if (location.pathname.includes('/makeup')) {
//       return "Makeup Products";
//     }
//     return "All Perfumes";
//   }, [location.pathname]);

//   // Route-based filter logic
//   const routeFilters = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return { genres: ['men'], type: 'multiple' };
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return { genres: ['women'], type: 'multiple' };
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return { brands: ['lattafa', 'rasasi'] };
//     } else if (location.pathname.includes('/original')) {
//       return { type: 'single' };
//     } else if (location.pathname.includes('/makeup')) {
//       return { type: 'makeup' };
//     }
//     return {};
//   }, [location.pathname]);

//   // Reset page to 1 when URL changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [location.pathname]);

//   // Fetch products
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
//     let result = [...products];
    
//     // Apply price filter
//     result = result.filter(product => product.price <= price);

//     // Apply route-based filters
//     if (routeFilters.genres?.length > 0) {
//       result = result.filter(product => 
//         routeFilters.genres.some(rg => 
//           product.genre?.toLowerCase() === rg.toLowerCase()
//         )
//       );
//     }
    
//     if (routeFilters.brands?.length > 0) {
//       result = result.filter(product => 
//         routeFilters.brands.some(rb => 
//           product.brand?.toLowerCase() === rb.toLowerCase()
//         )
//       );
//     }
    
//     if (routeFilters.type) {
//       result = result.filter(product => 
//         product.type?.toLowerCase() === routeFilters.type.toLowerCase()
//       );
//     }

//     // Apply user-selected filters
//     if (genres.length > 0) {
//       result = result.filter(product => 
//         genres.some(fg => product.genre?.toLowerCase() === fg.toLowerCase())
//       );
//     }
    
//     if (brands.length > 0) {
//       result = result.filter(product => 
//         brands.some(fb => product.brand?.toLowerCase() === fb.toLowerCase())
//       );
//     }

//     // Apply sorting
//     const sortFunction = sortFunctions[selectedSort] || sortFunctions.newest;
//     return result.sort(sortFunction);
//   }, [products, filters, routeFilters, selectedSort]);

//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     const maxVisible = 5;
//     let startPage = 1;
    
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     return (
//       <div className={styles.paginationContainer}>
//         <button 
//           onClick={() => handlePageChange(currentPage - 1)} 
//           disabled={currentPage === 1}
//           className={styles.paginationArrow}
//         >
//           &lt;
//         </button>
        
//         {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//           const page = startPage + i;
//           return (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`${styles.paginationNumber} ${
//                 currentPage === page ? styles.active : ''
//               }`}
//             >
//               {page}
//             </button>
//           );
//         })}
        
//         <button 
//           onClick={() => handlePageChange(currentPage + 1)} 
//           disabled={currentPage === totalPages}
//           className={styles.paginationArrow}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{pageTitle}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         {/* Filter Panel (matches first version) */}
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>FILTER BY</h3>
//             <button 
//               className={styles.closeMobileFilter}
//               onClick={() => setMobileFilterOpen(false)}
//             >
//               ×
//             </button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           {/* Mobile Filter/Sort Bar (matches first version) */}
//           <div className={styles.mobileFilterSortBar}>
//             <button 
//               onClick={() => setMobileFilterOpen(!mobileFilterOpen)} 
//               className={styles.mobileFilterButton}
//             >
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
//             <button 
//               onClick={() => setMobileSortOpen(!mobileSortOpen)} 
//               className={styles.mobileSortButton}
//             >
//               <span>{sortLabels[selectedSort] || 'Newest to Oldest'}</span>
//             </button>
//           </div>

//           {/* Mobile Sort Panel (matches first version) */}
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
//                 {Object.keys(sortLabels).map(sort => (
//                   <button
//                     key={sort}
//                     onClick={() => handleSortChange(sort)}
//                     className={selectedSort === sort ? styles.activeSort : ''}
//                   >
//                     {sortLabels[sort]}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <p>No products match your filters.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

























// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   const pageTitle = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) return "Men's Perfumes";
//     if (location.pathname.includes('/perfumes/women')) return "Women's Perfumes";
//     if (location.pathname.includes('/lattafa-rasasi')) return "Lattafa & Rasasi Perfumes";
//     if (location.pathname.includes('/original')) return "Original Perfumes";
//     if (location.pathname.includes('/makeup')) return "Makeup Products";
//     if (location.pathname.includes('/watches')) return "Watches";
//     return "All Perfumes";
//   }, [location.pathname]);


//   const routeFilters = useMemo(() => {
//   if (location.pathname.includes('/perfumes/men')) {
//     return { genres: ['men'], type: 'multiple' };
//   } else if (location.pathname.includes('/perfumes/women')) {
//     return { genres: ['women'], type: 'multiple' };
//   }  else if (location.pathname.includes('/lattafa-rasasi')) {
//   return { brands: ['lattafa', 'rasasi'], type: 'single' };
// }
//  else if (location.pathname.includes('/original')) {
//     return { type: 'single' };
//   } else if (location.pathname.includes('/makeup')) {
//     return { type: 'makeup' };
//   } else if (location.pathname.includes('/watches')) {
//     return { type: 'watch' };
//   } else if (location.pathname.includes('/musk')) {
//     return { type: 'musk' };
//   }
//   return {};
// }, [location.pathname]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [location.pathname]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
//     let result = [...products];

//     result = result.filter(product => product.price <= price);

//     if (routeFilters.genres?.length > 0) {
//       result = result.filter(product =>
//         routeFilters.genres.some(rg =>
//           product.genre?.toLowerCase() === rg.toLowerCase()
//         )
//       );
//     }

//     if (routeFilters.brands?.length > 0) {
//       result = result.filter(product =>
//         routeFilters.brands.some(rb =>
//           product.brand?.toLowerCase() === rb.toLowerCase()
//         )
//       );
//     }

//     if (routeFilters.type) {
//       result = result.filter(product =>
//         product.type?.toLowerCase() === routeFilters.type.toLowerCase()
//       );
//     }

//     if (genres.length > 0) {
//       result = result.filter(product =>
//         genres.some(fg => product.genre?.toLowerCase() === fg.toLowerCase())
//       );
//     }

//     if (brands.length > 0) {
//       result = result.filter(product =>
//         brands.some(fb => product.brand?.toLowerCase() === fb.toLowerCase())
//       );
//     }

//     const sortFunction = sortFunctions[selectedSort] || sortFunctions.newest;
//     return result.sort(sortFunction);
//   }, [products, filters, routeFilters, selectedSort]);

//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;
//     const maxVisible = 5;
//     let startPage = 1;
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     return (
//       <div className={styles.paginationContainer}>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={styles.paginationArrow}
//         >
//           &lt;
//         </button>
//         {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//           const page = startPage + i;
//           return (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
//             >
//               {page}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={styles.paginationArrow}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   // if (isLoading) return <p>Loading...</p>;
//   if (isLoading) {
//   return (
//     <div className={styles.loadingContainer}>
//       <div className={styles.spinner}></div>
//       <p className={styles.loadingText}>Loading products, please wait...</p>
//     </div>
//   );
// }

//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{pageTitle}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>FILTER BY</h3>
//             <button className={styles.closeMobileFilter} onClick={() => setMobileFilterOpen(false)}>×</button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
//               <span>{sortLabels[selectedSort] || 'Newest to Oldest'}</span>
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               <div className={styles.mobileSortHeader}>
//                 <h3>SORT BY</h3>
//                 <button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button>
//               </div>
//               <div className={styles.mobileSortOptions}>
//                 {Object.keys(sortLabels).map(sort => (
//                   <button
//                     key={sort}
//                     onClick={() => handleSortChange(sort)}
//                     className={selectedSort === sort ? styles.activeSort : ''}
//                   >
//                     {sortLabels[sort]}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
// <div className={styles.noResults}>
//   <p className={styles.noResultsText}>No products match your filters.</p>
// </div>

//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;














// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { useLocation } from 'react-router-dom';
// import FilterSection from '../componen/FilterSection';
// import ProductCard from '../componen/ProductCard';
// import SortDropdown from '../componen/SortDropdown';
// import axios from 'axios';
// import styles from '../../src/style/ProductsPage.module.css';

// const MemoizedProductCard = React.memo(ProductCard);

// const sortFunctions = {
//   'a-z': (a, b) => a.name.localeCompare(b.name),
//   'z-a': (a, b) => b.name.localeCompare(a.name),
//   'price-low': (a, b) => a.price - b.price,
//   'price-high': (a, b) => b.price - a.price,
//   'newest': (a, b) => b.id - a.id,
//   'oldest': (a, b) => a.id - b.id,
// };

// const sortLabels = {
//   'newest': 'Newest to Oldest',
//   'oldest': 'Oldest to Newest',
//   'price-low': 'Price: Low to High',
//   'price-high': 'Price: High to Low',
//   'a-z': 'A-Z',
//   'z-a': 'Z-A',
// };

// const ProductsPage = () => {
//   const location = useLocation();
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const [mobileSortOpen, setMobileSortOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('newest');
//   const itemsPerPage = 12;

//   const API_URL = process.env.REACT_APP_API_URL;

//   const pageTitle = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) return "Men's Perfumes";
//     if (location.pathname.includes('/perfumes/women')) return "Women's Perfumes";
//     if (location.pathname.includes('/lattafa-rasasi')) return "Lattafa & Rasasi Perfumes";
//     if (location.pathname.includes('/original')) return "Original Perfumes";
//     if (location.pathname.includes('/makeup')) return "Makeup Products";
//     if (location.pathname.includes('/watches')) return "Watches";
//     if (location.pathname.includes('/musk')) return "Musk Products";
//     return "All Perfumes";
//   }, [location.pathname]);

//   const routeFilters = useMemo(() => {
//     if (location.pathname.includes('/perfumes/men')) {
//       return { genres: ['men'], type: 'multiple' };
//     } else if (location.pathname.includes('/perfumes/women')) {
//       return { genres: ['women'], type: 'multiple' };
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       return { brands: ['lattafa', 'rasasi'], type: 'single' };
//     } else if (location.pathname.includes('/original')) {
//       return { 
//         type: 'single',
//         excludeBrands: ['lattafa', 'rasasi'] 
//       };
//     } else if (location.pathname.includes('/makeup')) {
//       return { type: 'makeup' };
//     } else if (location.pathname.includes('/watches')) {
//       return { type: 'watch' };
//     } else if (location.pathname.includes('/musk')) {
//       return { type: 'musk' };
//     }
//     else if (location.pathname.includes('/refresheners')) {
//   return { types: ['air', 'furniture'] };
//     }

//     return {};
//   }, [location.pathname]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [location.pathname]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(`${API_URL}/api/products`);
//         setProducts(res.data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch products.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [API_URL]);

//   const handleFilterChange = useCallback((filterType, value) => {
//     setFilters(prev => {
//       if (filterType === 'price') return { ...prev, price: Number(value) };
//       const current = prev[filterType];
//       const updated = current.includes(value)
//         ? current.filter(item => item !== value)
//         : [...current, value];
//       return { ...prev, [filterType]: updated };
//     });
//     setCurrentPage(1);
//   }, []);

//   const handleSortChange = useCallback((sortMethod) => {
//     setSelectedSort(sortMethod);
//     setCurrentPage(1);
//     setMobileSortOpen(false);
//   }, []);

//   const filteredProducts = useMemo(() => {
//     const { brands, genres, price } = filters;
//     let result = [...products];

//     // Apply price filter
//     result = result.filter(product => product.price <= price);

//     // Apply route genre filters
//     if (routeFilters.genres?.length > 0) {
//       result = result.filter(product =>
//         routeFilters.genres.some(rg =>
//           product.genre?.toLowerCase() === rg.toLowerCase()
//         )
//       );
//     }

//     // Apply route brand filters (inclusion)
//     if (routeFilters.brands?.length > 0) {
//       result = result.filter(product =>
//         routeFilters.brands.some(rb =>
//           product.brand?.toLowerCase() === rb.toLowerCase()
//         )
//       );
//     }

//     // Apply route brand filters (exclusion)
//     if (routeFilters.excludeBrands?.length > 0) {
//       result = result.filter(product =>
//         !routeFilters.excludeBrands.some(eb =>
//           product.brand?.toLowerCase() === eb.toLowerCase()
//         )
//       );
//     }

//     // Apply route type filter (single or multiple)
// if (routeFilters.type) {
//   result = result.filter(product =>
//     product.type?.toLowerCase() === routeFilters.type.toLowerCase()
//   );
// } else if (routeFilters.types?.length > 0) {
//   result = result.filter(product =>
//     routeFilters.types.some(rt =>
//       product.type?.toLowerCase() === rt.toLowerCase()
//     )
//   );
// }

//     // Apply user-selected genre filters
//     if (genres.length > 0) {
//       result = result.filter(product =>
//         genres.some(fg => product.genre?.toLowerCase() === fg.toLowerCase())
//       );
//     }

//     // Apply user-selected brand filters
//     if (brands.length > 0) {
//       result = result.filter(product =>
//         brands.some(fb => product.brand?.toLowerCase() === fb.toLowerCase())
//       );
//     }

//     // Apply sorting
//     const sortFunction = sortFunctions[selectedSort] || sortFunctions.newest;
//     return result.sort(sortFunction);
//   }, [products, filters, routeFilters, selectedSort]);

//   const { totalPages, paginatedProducts } = useMemo(() => {
//     const total = Math.ceil(filteredProducts.length / itemsPerPage);
//     const start = (currentPage - 1) * itemsPerPage;
//     return {
//       totalPages: total,
//       paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
//     };
//   }, [filteredProducts, currentPage]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;
//     const maxVisible = 5;
//     let startPage = 1;
//     if (totalPages > maxVisible) {
//       startPage = Math.min(
//         Math.max(1, currentPage - Math.floor(maxVisible / 2)),
//         totalPages - maxVisible + 1
//       );
//     }

//     return (
//       <div className={styles.paginationContainer}>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={styles.paginationArrow}
//         >
//           &lt;
//         </button>
//         {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
//           const page = startPage + i;
//           return (
//             <button
//               key={page}
//               onClick={() => handlePageChange(page)}
//               className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
//             >
//               {page}
//             </button>
//           );
//         })}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={styles.paginationArrow}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className={styles.loadingContainer}>
//         <div className={styles.spinner}></div>
//         <p className={styles.loadingText}>Loading products, please wait...</p>
//       </div>
//     );
//   }

//   if (error) return <p>{error}</p>;

//   return (
//     <div className={styles.container}>
//       <header className={styles.pageHeader}>
//         <h1 className={styles.title}>{pageTitle}</h1>
//         <p className={styles.subtitle}>Discover your signature scent</p>
//       </header>

//       <div className={styles.mainContent}>
//         <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
//           <div className={styles.mobileFilterHeader}>
//             <h3>FILTER BY</h3>
//             <button className={styles.closeMobileFilter} onClick={() => setMobileFilterOpen(false)}>×</button>
//           </div>
//           <FilterSection
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             activeGenre={filters.genres[0]}
//             hideGenreFilter={!!routeFilters.genres}
//           />
//         </aside>

//         <main className={styles.productArea}>
//           <div className={styles.mobileFilterSortBar}>
//             <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
//               <span>Filter By</span>
//               <span>{filteredProducts.length} products</span>
//             </button>
//             <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
//               <span>{sortLabels[selectedSort] || 'Newest to Oldest'}</span>
//             </button>
//           </div>

//           {mobileSortOpen && (
//             <div className={styles.mobileSortPanel}>
//               <div className={styles.mobileSortHeader}>
//                 <h3>SORT BY</h3>
//                 <button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button>
//               </div>
//               <div className={styles.mobileSortOptions}>
//                 {Object.keys(sortLabels).map(sort => (
//                   <button
//                     key={sort}
//                     onClick={() => handleSortChange(sort)}
//                     className={selectedSort === sort ? styles.activeSort : ''}
//                   >
//                     {sortLabels[sort]}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className={styles.desktopToolbar}>
//             <div className={styles.resultsCount}>
//               Showing {paginatedProducts.length} of {filteredProducts.length} products
//             </div>
//             <SortDropdown
//               onSortChange={handleSortChange}
//               selectedSort={selectedSort}
//               sortLabels={sortLabels}
//             />
//           </div>

//           {filteredProducts.length > 0 ? (
//             <>
//               <div className={styles.productsGrid}>
//                 {paginatedProducts.map(product => (
//                   <MemoizedProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//               {renderPagination()}
//             </>
//           ) : (
//             <div className={styles.noResults}>
//               <p className={styles.noResultsText}>No products match your filters.</p>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;



























import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import FilterSection from '../componen/FilterSection';
import ProductCard from '../componen/ProductCard';
import SortDropdown from '../componen/SortDropdown';
import axios from 'axios';
import styles from '../../src/style/ProductsPage.module.css';

const MemoizedProductCard = React.memo(ProductCard);

const sortFunctions = {
  'a-z': (a, b) => a.name.localeCompare(b.name),
  'z-a': (a, b) => b.name.localeCompare(a.name),
  'price-low': (a, b) => a.price - b.price,
  'price-high': (a, b) => b.price - a.price,
  'newest': (a, b) => b.id - a.id,
  'oldest': (a, b) => a.id - b.id,
};

const sortLabels = {
  'newest': 'Newest to Oldest',
  'oldest': 'Oldest to Newest',
  'price-low': 'Price: Low to High',
  'price-high': 'Price: High to Low',
  'a-z': 'A-Z',
  'z-a': 'Z-A',
};

const ProductsPage = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({ brands: [], genres: [], price: 500 });

  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('newest');

  const itemsPerPage = 12;
  const API_URL = process.env.REACT_APP_API_URL;

  const pageTitle = useMemo(() => {
    if (location.pathname.includes('/perfumes/men')) return "Men's Perfumes";
    if (location.pathname.includes('/perfumes/women')) return "Women's Perfumes";
    if (location.pathname.includes('/lattafa-rasasi')) return "Lattafa & Rasasi Perfumes";
    if (location.pathname.includes('/original')) return "Original Perfumes";
    if (location.pathname.includes('/makeup')) return "Makeup Products";
    if (location.pathname.includes('/watches')) return "Watches";
    if (location.pathname.includes('/musk')) return "Musk Products";
    if (location.pathname.includes('/refresheners')) return "Air and Furniture Refresheners";
    return "All Perfumes";
  }, [location.pathname]);

  const routeFilters = useMemo(() => {
    if (location.pathname.includes('/perfumes/men')) {
      return { genres: ['men'], type: 'multiple' };
    } else if (location.pathname.includes('/perfumes/women')) {
      return { genres: ['women'], type: 'multiple' };
    } else if (location.pathname.includes('/lattafa-rasasi')) {
      return { brands: ['lattafa', 'rasasi'], type: 'single' };
    } else if (location.pathname.includes('/original')) {
      return { type: 'single', excludeBrands: ['lattafa', 'rasasi'] };
    } else if (location.pathname.includes('/makeup')) {
      return { type: 'makeup' };
    } else if (location.pathname.includes('/watches')) {
      return { type: 'watch' };
    } else if (location.pathname.includes('/musk')) {
      return { type: 'musk' };
    } else if (location.pathname.includes('/refresheners')) {
      return { types: ['air', 'furniture'] };
    }

    return {};
  }, [location.pathname]);

  // ✅ Reset filters when location changes
  useEffect(() => {
    setCurrentPage(1);
    setFilters({ brands: [], genres: [], price: 500 });
  }, [location.pathname]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await axios.get(`${API_URL}/api/products`);
  //       setProducts(res.data);
  //       setError(null);
  //     } catch (err) {
  //       setError('Failed to fetch products.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, [API_URL]);


useEffect(() => {
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      console.log('Fetching from:', `${API_URL}/api/products`); // Debug log
      
      const res = await axios.get(`${API_URL}/api/products`, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Received data:', res.data); // Debug log
      setProducts(res.data);
      setError(null);
    } catch (err) {
      console.error('API Error Details:', {
        message: err.message,
        url: err.config?.url,
        status: err.response?.status,
        data: err.response?.data
      });
      setError(`Failed to load products. ${err.response?.data?.message || ''}`);
    } finally {
      setIsLoading(false);
    }
  };

  fetchProducts();
}, [API_URL]);


  // ✅ Update filter change handler to support 'resetAll'
  const handleFilterChange = useCallback((filterType, value) => {
    if (filterType === 'resetAll') {
      setFilters({ brands: [], genres: [], price: 500 });
      return;
    }

    setFilters(prev => {
      if (filterType === 'price') return { ...prev, price: Number(value) };

      const current = prev[filterType];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];

      return { ...prev, [filterType]: updated };
    });
    setCurrentPage(1);
  }, []);

  const handleSortChange = useCallback((sortMethod) => {
    setSelectedSort(sortMethod);
    setCurrentPage(1);
    setMobileSortOpen(false);
  }, []);

  const filteredProducts = useMemo(() => {
    const { brands, genres, price } = filters;
    let result = [...products];

    result = result.filter(product => product.price <= price);

    if (routeFilters.genres?.length > 0) {
      result = result.filter(product =>
        routeFilters.genres.some(rg =>
          product.genre?.toLowerCase() === rg.toLowerCase()
        )
      );
    }

    if (routeFilters.brands?.length > 0) {
      result = result.filter(product =>
        routeFilters.brands.some(rb =>
          product.brand?.toLowerCase() === rb.toLowerCase()
        )
      );
    }

    if (routeFilters.excludeBrands?.length > 0) {
      result = result.filter(product =>
        !routeFilters.excludeBrands.some(eb =>
          product.brand?.toLowerCase() === eb.toLowerCase()
        )
      );
    }

    if (routeFilters.type) {
      result = result.filter(product =>
        product.type?.toLowerCase() === routeFilters.type.toLowerCase()
      );
    } else if (routeFilters.types?.length > 0) {
      result = result.filter(product =>
        routeFilters.types.some(rt =>
          product.type?.toLowerCase() === rt.toLowerCase()
        )
      );
    }

    if (genres.length > 0) {
      result = result.filter(product =>
        genres.some(fg => product.genre?.toLowerCase() === fg.toLowerCase())
      );
    }

    // if (brands.length > 0) {
    //   result = result.filter(product =>
    //     brands.some(fb => product.brand?.toLowerCase() === fb.toLowerCase())
    //   );
    // }

if (brands.length > 0) {
  if (location.pathname.includes('/refresheners')) {
    // brands used to store types for refresheners
    result = result.filter(product =>
      brands.some(fb => product.type?.toLowerCase() === fb.toLowerCase())
    );
  } else {
    result = result.filter(product =>
      brands.some(fb => product.brand?.toLowerCase() === fb.toLowerCase())
    );
  }
}



    const sortFunction = sortFunctions[selectedSort] || sortFunctions.newest;
    return result.sort(sortFunction);
  }, [products, filters, routeFilters, selectedSort]);

  const { totalPages, paginatedProducts } = useMemo(() => {
    const total = Math.ceil(filteredProducts.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    return {
      totalPages: total,
      paginatedProducts: filteredProducts.slice(start, start + itemsPerPage),
    };
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;
    const maxVisible = 5;
    let startPage = 1;
    if (totalPages > maxVisible) {
      startPage = Math.min(
        Math.max(1, currentPage - Math.floor(maxVisible / 2)),
        totalPages - maxVisible + 1
      );
    }

    return (
      <div className={styles.paginationContainer}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationArrow}
        >
          &lt;
        </button>
        {Array.from({ length: Math.min(maxVisible, totalPages) }).map((_, i) => {
          const page = startPage + i;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
            >
              {page}
            </button>
          );
        })}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationArrow}
        >
          &gt;
        </button>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading products, please wait...</p>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <p className={styles.subtitle}>Discover your signature scent</p>
      </header>

      <div className={styles.mainContent}>
        <aside className={`${styles.filterPanel} ${mobileFilterOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.mobileFilterHeader}>
            <h3>FILTER BY</h3>
            <button className={styles.closeMobileFilter} onClick={() => setMobileFilterOpen(false)}>×</button>
          </div>
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
            activeGenre={filters.genres[0]}
            hideGenreFilter={!!routeFilters.genres}
          />
        </aside>

        <main className={styles.productArea}>
          <div className={styles.mobileFilterSortBar}>
            <button onClick={() => setMobileFilterOpen(!mobileFilterOpen)} className={styles.mobileFilterButton}>
              <span>Filter By</span>
              <span>{filteredProducts.length} products</span>
            </button>
            <button onClick={() => setMobileSortOpen(!mobileSortOpen)} className={styles.mobileSortButton}>
              <span>{sortLabels[selectedSort] || 'Newest to Oldest'}</span>
            </button>
          </div>

          {mobileSortOpen && (
            <div className={styles.mobileSortPanel}>
              <div className={styles.mobileSortHeader}>
                <h3>SORT BY</h3>
                <button className={styles.closeMobileSort} onClick={() => setMobileSortOpen(false)}>×</button>
              </div>
              <div className={styles.mobileSortOptions}>
                {Object.keys(sortLabels).map(sort => (
                  <button
                    key={sort}
                    onClick={() => handleSortChange(sort)}
                    className={selectedSort === sort ? styles.activeSort : ''}
                  >
                    {sortLabels[sort]}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={styles.desktopToolbar}>
            <div className={styles.resultsCount}>
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </div>
            <SortDropdown
              onSortChange={handleSortChange}
              selectedSort={selectedSort}
              sortLabels={sortLabels}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className={styles.productsGrid}>
                {paginatedProducts.map(product => (
                  <MemoizedProductCard key={product.id} product={product} />
                ))}
              </div>
              {renderPagination()}
            </>
          ) : (
            <div className={styles.noResults}>
              <p className={styles.noResultsText}>No products match your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;




