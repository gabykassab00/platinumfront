import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../componen/ProductCard';
import '../style/SearchResults.module.css'; // ✅ Add your CSS styling here

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    if (query) {
      fetch(`http://localhost:5000/api/products/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error('Search error:', err));
    }
  }, [query]);

  return (
    <div className="container section">
      <h2>Search Results for "{query}"</h2>
      <div className="products-grid">
        {results.length > 0 ? (
          results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
