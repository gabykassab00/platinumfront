// import React from 'react';

// const FilterSection = ({ filters, onFilterChange }) => {
//   return (
//     <div className="filter-section">
//       <h3>Filter By</h3>
      
//       <div className="filter-group">
//         <h4>Brands:</h4>
//         {['35L', '60-L', '5ray'].map(brand => (
//           <div key={brand} className="filter-option">
//             <input 
//               type="checkbox" 
//               id={brand}
//               checked={filters.brands.includes(brand)}
//               onChange={() => onFilterChange('brands', brand)}
//             />
//             <label htmlFor={brand}>{brand}</label>
//           </div>
//         ))}
//       </div>



// import React from 'react';
// import styles from '../style/FilterSection.module.css'; // CSS Module import

// const FilterSection = ({ filters, onFilterChange }) => {
//   return (
//     <div className={styles['filter-section']}>
//       <h3>Filter By</h3>
      
//       <div className={styles['filter-group']}>
//         <h4>Brands:</h4>
//         {['35L', '60-L', '5ray'].map(brand => (
//           <div key={brand} className={styles['filter-option']}>
//             <input 
//               type="checkbox" 
//               id={brand}
//               checked={filters.brands.includes(brand)}
//               onChange={() => onFilterChange('brands', brand)}
//             />
//             <label htmlFor={brand}>{brand}</label>
//           </div>
//         ))}
//       </div>
      
//       <div className="filter-group">
//         <h4>Category:</h4>
//         {['Health/Product', 'Earthstar', 'Earthframe', 'Microbrands'].map(category => (
//           <div key={category} className="filter-option">
//             <input 
//               type="checkbox" 
//               id={category}
//               checked={filters.categories.includes(category)}
//               onChange={() => onFilterChange('categories', category)}
//             />
//             <label htmlFor={category}>{category}</label>
//           </div>
//         ))}
//       </div>
      
//       <div className="filter-group">
//         <h4>Price:</h4>
//         <input 
//           type="range" 
//           min="0" 
//           max="50000" 
//           value={filters.price}
//           onChange={(e) => onFilterChange('price', e.target.value)}
//         />
//         <div className="price-display">${filters.price.toLocaleString()}</div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;




// import React from 'react';
// import styles from '../style/FilterSection.module.css'; // CSS Module import

// const FilterSection = ({ filters, onFilterChange }) => {
//   return (
//     <div className={styles['filter-section']}>
//       <h3>Filter By</h3>

//       {/* Brand Filter */}
//       <div className={styles['filter-group']}>
//         <h4>Brands:</h4>
//         {['Chanel', 'Dior', 'Tom Ford', 'Jo Malone', 'Yves Saint Laurent'].map(brand => (
//           <div key={brand} className={styles['filter-option']}>
//             <input 
//               type="checkbox" 
//               id={brand}
//               checked={filters.brands.includes(brand)}
//               onChange={() => onFilterChange('brands', brand)}
//             />
//             <label htmlFor={brand}>{brand}</label>
//           </div>
//         ))}
//       </div>

//       {/* Gender/Genre Filter */}
//       <div className={styles['filter-group']}>
//         <h4>Genre:</h4>
//         {['Men', 'Women', 'Unisex'].map(genre => (
//           <div key={genre} className={styles['filter-option']}>
//             <input 
//               type="checkbox" 
//               id={genre}
//               checked={filters.genres.includes(genre)}
//               onChange={() => onFilterChange('genres', genre)}
//             />
//             <label htmlFor={genre}>{genre}</label>
//           </div>
//         ))}
//       </div>

//       {/* Price Filter */}
//       <div className={styles['filter-group']}>
//         <h4>Price:</h4>
//         <input 
//           type="range" 
//           min="0" 
//           max="500" 
//           value={filters.price}
//           onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//         />
//         <div className={styles['price-display']}>${filters.price.toLocaleString()}</div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;












// import React from 'react';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange }) => {
//   // Get unique brands from your list
//   const uniqueBrands = [
//     'Rave',
//     'Ajmal',
//     'Rasasi',
//     'Asdaaf',
//     'Lattafa',
//     'Afnan',
//     'Mousouf',
//     'شمس الامارات' // UAE Sun brand
//   ].sort((a, b) => a.localeCompare(b));

//   return (
//     <div className={styles['filter-section']}>
//       <h3 className={styles['filter-title']}>Filter By</h3>

//       {/* Brand Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Brands:</h4>
//         <div className={styles['filter-options-container']}>
//           {uniqueBrands.map(brand => (
//             <div key={brand} className={styles['filter-option']}>
//               <input
//                 type="checkbox"
//                 id={`brand-${brand}`}
//                 checked={filters.brands.includes(brand)}
//                 onChange={() => onFilterChange('brands', brand)}
//                 className={styles['filter-checkbox']}
//               />
//               <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
//                 {brand}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gender/Genre Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Genre:</h4>
//         <div className={styles['filter-options-container']}>
//           {['Men', 'Women', 'Unisex'].map(genre => (
//             <div key={genre} className={styles['filter-option']}>
//               <input
//                 type="checkbox"
//                 id={`genre-${genre}`}
//                 checked={filters.genres.includes(genre)}
//                 onChange={() => onFilterChange('genres', genre)}
//                 className={styles['filter-checkbox']}
//               />
//               <label htmlFor={`genre-${genre}`} className={styles['filter-label']}>
//                 {genre}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Price Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Price:</h4>
//         <div className={styles['price-filter-container']}>
//           <input
//             type="range"
//             min="0"
//             max="500"
//             step="10"
//             value={filters.price}
//             onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//             className={styles['price-slider']}
//           />
//           <div className={styles['price-display']}>
//             ${filters.price.toFixed(2)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;











// import React from 'react';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const uniqueBrands = [
//     'Rave',
//     'Ajmal',
//     'Rasasi',
//     'Asdaaf',
//     'Lattafa',
//     'Afnan',
//     'Mousouf',
//     'شمس الامارات'
//   ].sort((a, b) => a.localeCompare(b));

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

//   return (
//     <div className={styles['filter-section']}>
//       <h3 className={styles['filter-title']}>Filter By</h3>

//       {/* Brand Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Brands:</h4>
//         <div className={styles['filter-options-container']}>
//           {uniqueBrands.map(brand => (
//             <div key={brand} className={styles['filter-option']}>
//               <input
//                 type="checkbox"
//                 id={`brand-${brand}`}
//                 checked={filters.brands.includes(brand)}
//                 onChange={() => onFilterChange('brands', brand)}
//                 className={styles['filter-checkbox']}
//               />
//               <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
//                 {brand}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gender/Genre Filter - Only show if not on a specific gender page */}
//       {!hideGenreFilter && (
//         <div className={styles['filter-group']}>
//           <h4 className={styles['filter-subtitle']}>Genre:</h4>
//           <div className={styles['filter-options-container']}>
//             {genres.map(genre => (
//               <div key={genre.value} className={styles['filter-option']}>
//                 <input
//                   type="checkbox"
//                   id={`genre-${genre.value}`}
//                   checked={filters.genres.includes(genre.value)}
//                   onChange={() => onFilterChange('genres', genre.value)}
//                   className={styles['filter-checkbox']}
//                 />
//                 <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
//                   {genre.label}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Price Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Price:</h4>
//         <div className={styles['price-filter-container']}>
//           <input
//             type="range"
//             min="0"
//             max="500"
//             step="10"
//             value={filters.price}
//             onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//             className={styles['price-slider']}
//           />
//           <div className={styles['price-display']}>
//             ${filters.price.toFixed(2)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;














// import React, { useEffect } from 'react';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const uniqueBrands = [
//     'Rave',
//     'Ajmal',
//     'Rasasi',
//     'Asdaaf',
//     'Lattafa',
//     'Afnan',
//     'Mousouf',
//     'شمس الامارات'
//   ].sort((a, b) => a.localeCompare(b));

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

//   // Clear checkbox states when filters are cleared
//   useEffect(() => {
//     if (filters.brands.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="brand"]').forEach(checkbox => {
//         checkbox.checked = false;
//       });
//     }
//     if (filters.genres.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="genre"]').forEach(checkbox => {
//         checkbox.checked = false;
//       });
//     }
//   }, [filters]);

//   return (
//     <div className={styles['filter-section']}>
//       <h3 className={styles['filter-title']}>Filter By</h3>

//       {/* Brand Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Brands:</h4>
//         <div className={styles['filter-options-container']}>
//           {uniqueBrands.map(brand => (
//             <div key={brand} className={styles['filter-option']}>
//               <input
//                 type="checkbox"
//                 id={`brand-${brand}`}
//                 name="brand"
//                 checked={filters.brands.includes(brand)}
//                 onChange={() => onFilterChange('brands', brand)}
//                 className={styles['filter-checkbox']}
//               />
//               <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
//                 {brand}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gender/Genre Filter - Only show if not on a specific gender page */}
//       {!hideGenreFilter && (
//         <div className={styles['filter-group']}>
//           <h4 className={styles['filter-subtitle']}>Genre:</h4>
//           <div className={styles['filter-options-container']}>
//             {genres.map(genre => (
//               <div key={genre.value} className={styles['filter-option']}>
//                 <input
//                   type="checkbox"
//                   id={`genre-${genre.value}`}
//                   name="genre"
//                   checked={filters.genres.includes(genre.value)}
//                   onChange={() => onFilterChange('genres', genre.value)}
//                   className={styles['filter-checkbox']}
//                 />
//                 <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
//                   {genre.label}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Price Filter */}
//       <div className={styles['filter-group']}>
//         <h4 className={styles['filter-subtitle']}>Price:</h4>
//         <div className={styles['price-filter-container']}>
//           <input
//             type="range"
//             min="0"
//             max="500"
//             step="10"
//             value={filters.price}
//             onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//             className={styles['price-slider']}
//           />
//           <div className={styles['price-display']}>
//             ${filters.price.toFixed(2)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;




import React, { useEffect } from 'react';
import styles from '../style/FilterSection.module.css';

const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
  const uniqueBrands = [
    'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel', 'Paco Rabanne',
    'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian', 'Burberry', 'Nasomatto',
    'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford', 'Ralph Lauren', 'Hugo Boss', 'Joop!',
    'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill', 'Cartier', 'Laura Biagiotti', 'Jacques Bogart',
    'Nikos', 'Emporio Armani', 'Viktor & Rolf', 'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk',
    'Gucci', 'Nautica or Hermès', 'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed',
    'Kenzo', 'Louis Vuitton', 'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab',
    'Mercedes-Benz', 'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal',
    'Asdaaf', 'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears',
    'Jardin de Parfums', 'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret',
    'Mugler', 'Elie Saab', 'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez',
    'Prada', 'Chloé', 'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic',
    'sir', 'nasmat', 'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly'
  ].sort((a, b) => a.localeCompare(b));

  const genres = [
    { value: 'Men', label: 'Men' },
    { value: 'Women', label: 'Women' },
    { value: 'Unisex', label: 'Unisex' }
  ];

  useEffect(() => {
    if (filters.brands.length === 0) {
      document.querySelectorAll('input[type="checkbox"][name="brand"]').forEach(checkbox => {
        checkbox.checked = false;
      });
    }
    if (filters.genres.length === 0) {
      document.querySelectorAll('input[type="checkbox"][name="genre"]').forEach(checkbox => {
        checkbox.checked = false;
      });
    }
  }, [filters]);

  return (
    <div className={styles['filter-section']}>
      <h3 className={styles['filter-title']}>Filter By</h3>

      {/* Brand Filter */}
      <div className={styles['filter-group']}>
        <h4 className={styles['filter-subtitle']}>Brands:</h4>
        <div className={styles['filter-options-container']}>
          {uniqueBrands.map(brand => (
            <div key={brand} className={styles['filter-option']}>
              <input
                type="checkbox"
                id={`brand-${brand}`}
                name="brand"
                checked={filters.brands.includes(brand)}
                onChange={() => onFilterChange('brands', brand)}
                className={styles['filter-checkbox']}
              />
              <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Genre Filter */}
      {!hideGenreFilter && (
        <div className={styles['filter-group']}>
          <h4 className={styles['filter-subtitle']}>Genre:</h4>
          <div className={styles['filter-options-container']}>
            {genres.map(genre => (
              <div key={genre.value} className={styles['filter-option']}>
                <input
                  type="checkbox"
                  id={`genre-${genre.value}`}
                  name="genre"
                  checked={filters.genres.includes(genre.value)}
                  onChange={() => onFilterChange('genres', genre.value)}
                  className={styles['filter-checkbox']}
                />
                <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
                  {genre.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price Filter */}
      <div className={styles['filter-group']}>
        <h4 className={styles['filter-subtitle']}>Price:</h4>
        <div className={styles['price-filter-container']}>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={filters.price}
            onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
            className={styles['price-slider']}
          />
          <div className={styles['price-display']}>
            ${filters.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
