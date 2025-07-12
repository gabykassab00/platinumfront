// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import ProductCard from '../componen/ProductCard';
// import '../style/SearchResults.module.css'; // ✅ Add your CSS styling here

// const SearchResults = () => {
//   const [results, setResults] = useState([]);
//   const location = useLocation();

//   const query = new URLSearchParams(location.search).get('q') || '';

//   useEffect(() => {
//     if (query) {
//       fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(query)}`)
//         .then(res => res.json())
//         .then(data => setResults(data))
//         .catch(err => console.error('Search error:', err));
//     }
//   }, [query]);

//   return (
//     <div className="container section">
//       <h2>Search Results for "{query}"</h2>
//       <div className="products-grid">
//         {results.length > 0 ? (
//           results.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;


















import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../componen/ProductCard';
import styles from '../style/SearchResults.module.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q') || '';
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (query) {
      fetch(`${API_URL}/api/products/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error('Search error:', err));
    }
  }, [query, API_URL]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Results for "{query}"</h2>
      <div className={styles.productsGrid}>
        {results.length > 0 ? (
          results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noResults}>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
