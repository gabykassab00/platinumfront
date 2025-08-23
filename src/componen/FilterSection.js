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




// import { useLocation } from 'react-router-dom'; // add this at the top
// import React, { useEffect } from 'react';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {

// // Inside the component
// const location = useLocation();

// const perfumeBrands = [
//   'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//   'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//   'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//   'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//   'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//   'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//   'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//   'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//   'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//   'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//   'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//   'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//   'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//   'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly'
// ];

// const makeupBrands = [
//   'Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'
// ];

// const uniqueBrands = (location.pathname.includes('/makeup') ? makeupBrands : perfumeBrands)
//   .filter((value, index, self) => self.indexOf(value) === index) // remove duplicates
//   .sort((a, b) => a.localeCompare(b));




//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

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

//       {/* Genre Filter */}
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



















// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   const perfumeBrands = [
//     'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//     'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//     'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//     'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//     'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//     'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//     'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//     'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//     'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//     'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//     'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//     'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//     'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//     'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly'
//   ];

//   const makeupBrands = [
//     'Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'
//   ];

//   // ✅ Determine brand list based on route
//   let uniqueBrands = [];

//   if (location.pathname.includes('/makeup')) {
//     uniqueBrands = makeupBrands;
//   } else if (location.pathname.includes('/watches')) {
//     uniqueBrands = ['Curren', 'Richard Mille'];
//   } else {
//     uniqueBrands = perfumeBrands;
//   }

//   // Remove duplicates and sort alphabetically
//   uniqueBrands = uniqueBrands
//     .filter((value, index, self) => self.indexOf(value) === index)
//     .sort((a, b) => a.localeCompare(b));

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

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

//       {/* Genre Filter */}
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
//           <div className={styles['price-display']}>${filters.price.toFixed(2)}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;




















// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   const perfumeBrands = [
//     'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//     'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//     'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//     'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//     'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//     'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//     'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//     'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//     'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//     'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//     'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//     'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//     'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//     'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly'
//   ];

//   const makeupBrands = [
//     'Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'
//   ];

//   let showBrandFilter = true;
//   let uniqueBrands = [];

//   if (location.pathname.includes('/makeup')) {
//     uniqueBrands = makeupBrands;
//   } else if (location.pathname.includes('/watches')) {
//     uniqueBrands = ['Curren', 'Richard Mille'];
//   } else if (location.pathname.includes('/musk')) {
//     showBrandFilter = false; // ❌ hide brands on musk page
// } else if (location.pathname.includes('/lattafa-rasasi')) {
//   uniqueBrands = ['Lattafa', 'Rasasi'];
// } else {
//   uniqueBrands = perfumeBrands;
// }


//   if (showBrandFilter) {
//     uniqueBrands = uniqueBrands
//       .filter((value, index, self) => self.indexOf(value) === index)
//       .sort((a, b) => a.localeCompare(b));
//   }

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

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
//       {showBrandFilter && (
//         <div className={styles['filter-group']}>
//           <h4 className={styles['filter-subtitle']}>Brands:</h4>
//           <div className={styles['filter-options-container']}>
//             {uniqueBrands.map(brand => (
//               <div key={brand} className={styles['filter-option']}>
//                 <input
//                   type="checkbox"
//                   id={`brand-${brand}`}
//                   name="brand"
//                   checked={filters.brands.includes(brand)}
//                   onChange={() => onFilterChange('brands', brand)}
//                   className={styles['filter-checkbox']}
//                 />
//                 <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
//                   {brand}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Genre Filter */}
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
//           <div className={styles['price-display']}>${filters.price.toFixed(2)}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;


















// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   const perfumeBrands = [
//     'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//     'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//     'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//     'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//     'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//     'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//     'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//     'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//     'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//     'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//     'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//     'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//     'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//     'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly'
//   ];

//   const makeupBrands = [
//     'Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'
//   ];

//   let showBrandFilter = true;
//   let uniqueBrands = [];

//   if (location.pathname.includes('/makeup')) {
//     uniqueBrands = makeupBrands;
//   } else if (location.pathname.includes('/watches')) {
//     uniqueBrands = ['Curren', 'Richard Mille'];
//   } else if (location.pathname.includes('/musk')) {
//     showBrandFilter = false; // ❌ hide brands on musk page
//   } else if (location.pathname.includes('/lattafa-rasasi')) {
//     uniqueBrands = ['Lattafa', 'Rasasi'];
//   } else {
//     uniqueBrands = perfumeBrands;
//   }

//   if (showBrandFilter) {
//     uniqueBrands = uniqueBrands
//       .filter((value, index, self) => self.indexOf(value) === index)
//       .sort((a, b) => a.localeCompare(b));
//   }

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' }
//   ];

//   // ✅ Clear selected checkboxes from DOM when filters reset
//   useEffect(() => {
//     if (filters.brands.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="brand"]').forEach(cb => {
//         cb.checked = false;
//       });
//     }
//     if (filters.genres.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="genre"]').forEach(cb => {
//         cb.checked = false;
//       });
//     }
//   }, [filters]);

//   // ✅ Reset filters when path changes
//   useEffect(() => {
//     onFilterChange('resetAll');
//   }, [location.pathname]);

//   return (
//     <div className={styles['filter-section']}>
//       <h3 className={styles['filter-title']}>Filter By</h3>

//       {/* Brand Filter */}
//       {showBrandFilter && (
//         <div className={styles['filter-group']}>
//           <h4 className={styles['filter-subtitle']}>Brands:</h4>
//           <div className={styles['filter-options-container']}>
//             {uniqueBrands.map(brand => (
//               <div key={brand} className={styles['filter-option']}>
//                 <input
//                   type="checkbox"
//                   id={`brand-${brand}`}
//                   name="brand"
//                   checked={filters.brands.includes(brand)}
//                   onChange={() => onFilterChange('brands', brand)}
//                   className={styles['filter-checkbox']}
//                 />
//                 <label htmlFor={`brand-${brand}`} className={styles['filter-label']}>
//                   {brand}
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Genre Filter */}
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
//           <div className={styles['price-display']}>${filters.price.toFixed(2)}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;






















// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   // 🔻 Start all sections collapsed
//   const [openSections, setOpenSections] = useState({
//     brands: false,
//     genres: false,
//     price: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const perfumeBrands = [
//     'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//     'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//     'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//     'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//     'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//     'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//     'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//     'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//     'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//     'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//     'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//     'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//     'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//     'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly',
//   ];

//   const makeupBrands = ['Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'];

//   let showFilter = true;
//   let filterLabel = 'Brands';
//   let filterOptions = [];

//   if (location.pathname.includes('/makeup')) {
//     filterOptions = makeupBrands;
//   } else if (location.pathname.includes('/watches')) {
//     filterOptions = ['Curren', 'Richard Mille'];
//   } else if (location.pathname.includes('/musk')) {
//     showFilter = false;
//   } else if (location.pathname.includes('/lattafa-rasasi')) {
//     filterOptions = ['Lattafa', 'Rasasi'];
//   } else if (location.pathname.includes('/refresheners')) {
//     filterLabel = 'Type';
//     filterOptions = ['air', 'furniture'];
//   } else {
//     filterOptions = perfumeBrands;
//   }

//   if (showFilter) {
//     filterOptions = [...new Set(filterOptions)].sort((a, b) => a.localeCompare(b));
//   }

//   const genres = [
//     { value: 'Men', label: 'Men' },
//     { value: 'Women', label: 'Women' },
//     { value: 'Unisex', label: 'Unisex' },
//   ];

//   useEffect(() => {
//     if (filters.brands.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="brand"]').forEach((cb) => (cb.checked = false));
//     }
//     if (filters.genres.length === 0) {
//       document.querySelectorAll('input[type="checkbox"][name="genre"]').forEach((cb) => (cb.checked = false));
//     }
//   }, [filters]);

//   useEffect(() => {
//     onFilterChange('resetAll');
//   }, [location.pathname]);

//   return (
//     <div className={styles['filter-section']}>
//       <h3 className={styles['filter-title']}>Filter By</h3>

//       {/* Brand/Type */}
//       {showFilter && (
//         <div className={styles['filter-group']}>
//           <div className={styles['filter-header']} onClick={() => toggleSection('brands')}>
//             <h4 className={styles['filter-subtitle']}>{filterLabel}</h4>
//             <span className={styles['toggle-icon']}>{openSections.brands ? '−' : '+'}</span>
//           </div>
//           {openSections.brands && (
//             <div className={styles['filter-options-container']}>
//               {filterOptions.map((option) => (
//                 <div key={option} className={styles['filter-option']}>
//                   <input
//                     type="checkbox"
//                     id={`brand-${option}`}
//                     name="brand"
//                     checked={filters.brands.includes(option)}
//                     onChange={() => onFilterChange('brands', option)}
//                     className={styles['filter-checkbox']}
//                   />
//                   <label htmlFor={`brand-${option}`} className={styles['filter-label']}>
//                     {option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Genre */}
//       {!hideGenreFilter && (
//         <div className={styles['filter-group']}>
//           <div className={styles['filter-header']} onClick={() => toggleSection('genres')}>
//             <h4 className={styles['filter-subtitle']}>Genre</h4>
//             <span className={styles['toggle-icon']}>{openSections.genres ? '−' : '+'}</span>
//           </div>
//           {openSections.genres && (
//             <div className={styles['filter-options-container']}>
//               {genres.map((genre) => (
//                 <div key={genre.value} className={styles['filter-option']}>
//                   <input
//                     type="checkbox"
//                     id={`genre-${genre.value}`}
//                     name="genre"
//                     checked={filters.genres.includes(genre.value)}
//                     onChange={() => onFilterChange('genres', genre.value)}
//                     className={styles['filter-checkbox']}
//                   />
//                   <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
//                     {genre.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Price */}
//       <div className={styles['filter-group']}>
//         <div className={styles['filter-header']} onClick={() => toggleSection('price')}>
//           <h4 className={styles['filter-subtitle']}>Price</h4>
//           <span className={styles['toggle-icon']}>{openSections.price ? '−' : '+'}</span>
//         </div>
//         {openSections.price && (
//           <div className={styles['price-filter-container']}>
//             <input
//               type="range"
//               min="0"
//               max="500"
//               step="10"
//               value={filters.price}
//               onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//               className={styles['price-slider']}
//             />
//             <div className={styles['price-display']}>${filters.price.toFixed(2)}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterSection;






















// // src/components/FilterSection.jsx

// import React, { useState, useEffect, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   // Start all sections collapsed
//   const [openSections, setOpenSections] = useState({
//     brands: false,
//     genres: false,
//     price: false,
//   });

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   // Brand pools
// const perfumeBrands = useMemo(
//   () => [
//     // ✅ already in
//     'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//     'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//     'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//     'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//     'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//     'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//     'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//     'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//     'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//     'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//     'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Victoria secret', 'Mugler', 'Elie Saab',
//     'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//     'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//     'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly',

//     // ✅ Missing ones I added:
//     'happy touch',        // appeared separately
//     'Masque Milano',      // in your list (already included once, kept for clarity)
//     'Ajmal or Rasasi',    // was in your list but not in array
//     'Jardin de Parfums',  // already included, but confirming from list
//     'Platinum',           // many "Platinum" in your list
//     'Generic',            // appeared in list
//     'Fragrance World',    // appeared in list
//     'Perris Monte Carlo', // appeared in list
//     'Tiziana Terenzi',    // appeared in list
//     'Byredo',             // appeared in list
//     'Xerjoff',            // appeared in list
//     'Mexican Tobacco',    // appeared in list
//     'Gissah',             // appeared multiple times
//     'Lanvin',             // appeared in list
//     'Laura Mars',         // appeared in list
//     'Alghawaly',          // appeared in list
//     'Armaf',              // separate from Ajmal or Armaf
//     'Ard Al Zaafaran',    // already in array but keep once
//   ],
//   []
// );


//   const makeupBrands = useMemo(() => ['Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'], []);

//   // Compute filter options based on route
//   const { showFilter, filterLabel, filterOptions } = useMemo(() => {
//     let show = true;
//     let label = 'Brands';
//     let options = [];

//     if (location.pathname.includes('/makeup')) {
//       options = makeupBrands;
//     } else if (location.pathname.includes('/watches')) {
//       options = ['Curren', 'Richard Mille'];
//     } else if (location.pathname.includes('/musk')) {
//       show = false; // hide brand filter on musk page
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       options = ['Lattafa', 'Rasasi'];
//     } else if (location.pathname.includes('/refresheners')) {
//       label = 'Type';
//       options = ['air', 'furniture'];
//     } else {
//       options = perfumeBrands;
//     }

//     if (show) {
//       options = [...new Set(options)].sort((a, b) => a.localeCompare(b));
//     }

//     return { showFilter: show, filterLabel: label, filterOptions: options };
//   }, [location.pathname, perfumeBrands, makeupBrands]);

//   const genres = useMemo(
//     () => [
//       { value: 'Men', label: 'Men' },
//       { value: 'Women', label: 'Women' },
//       { value: 'Unisex', label: 'Unisex' },
//     ],
//     []
//   );

//   // Reset all filters when route changes (matches your previous behavior)
//   useEffect(() => {
//     onFilterChange('resetAll');
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location.pathname]);

//   // IDs for aria-controls
//   const brandsPanelId = 'filter-brands-panel';
//   const genresPanelId = 'filter-genres-panel';
//   const pricePanelId  = 'filter-price-panel';

//   return (
//     <section className={styles['filter-section']} aria-labelledby="filter-title">
//       <h3 id="filter-title" className={styles['filter-title']}>Filter By</h3>

//       {/* Brand/Type */}
//       {showFilter && (
//         <div className={styles['filter-group']}>
//           <button
//             type="button"
//             className={styles['filter-header']}
//             aria-expanded={openSections.brands}
//             aria-controls={brandsPanelId}
//             onClick={() => toggleSection('brands')}
//           >
//             <h4 className={styles['filter-subtitle']}>{filterLabel}</h4>
//             <span className={styles['toggle-icon']} aria-hidden="true">
//               {openSections.brands ? '−' : '+'}
//             </span>
//           </button>

//           {openSections.brands && (
//             <div
//               id={brandsPanelId}
//               role="region"
//               aria-label={`${filterLabel} options`}
//               className={styles['filter-options-container']}
//             >
//               {filterOptions.map((option) => (
//                 <div key={option} className={styles['filter-option']}>
//                   <input
//                     type="checkbox"
//                     id={`brand-${option}`}
//                     name={filterLabel === 'Type' ? 'type' : 'brand'}
//                     checked={filters.brands.includes(option)}
//                     onChange={() => onFilterChange('brands', option)}
//                     className={styles['filter-checkbox']}
//                   />
//                   <label htmlFor={`brand-${option}`} className={styles['filter-label']}>
//                     {option}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Genre */}
//       {!hideGenreFilter && (
//         <div className={styles['filter-group']}>
//           <button
//             type="button"
//             className={styles['filter-header']}
//             aria-expanded={openSections.genres}
//             aria-controls={genresPanelId}
//             onClick={() => toggleSection('genres')}
//           >
//             <h4 className={styles['filter-subtitle']}>Genre</h4>
//             <span className={styles['toggle-icon']} aria-hidden="true">
//               {openSections.genres ? '−' : '+'}
//             </span>
//           </button>

//           {openSections.genres && (
//             <div
//               id={genresPanelId}
//               role="region"
//               aria-label="Genre options"
//               className={styles['filter-options-container']}
//             >
//               {genres.map((genre) => (
//                 <div key={genre.value} className={styles['filter-option']}>
//                   <input
//                     type="checkbox"
//                     id={`genre-${genre.value}`}
//                     name="genre"
//                     checked={filters.genres.includes(genre.value)}
//                     onChange={() => onFilterChange('genres', genre.value)}
//                     className={styles['filter-checkbox']}
//                   />
//                   <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
//                     {genre.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Price */}
//       <div className={styles['filter-group']}>
//         <button
//           type="button"
//           className={styles['filter-header']}
//           aria-expanded={openSections.price}
//           aria-controls={pricePanelId}
//           onClick={() => toggleSection('price')}
//         >
//           <h4 className={styles['filter-subtitle']}>Price</h4>
//           <span className={styles['toggle-icon']} aria-hidden="true">
//             {openSections.price ? '−' : '+'}
//           </span>
//         </button>

//         {openSections.price && (
//           <div
//             id={pricePanelId}
//             role="region"
//             aria-label="Price filter"
//             className={styles['price-filter-container']}
//           >
//             <input
//               type="range"
//               min="0"
//               max="500"
//               step="10"
//               value={filters.price}
//               onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//               className={styles['price-slider']}
//               aria-label="Maximum price"
//             />
//             <div className={styles['price-display']} aria-live="polite">
//               ${filters.price.toFixed(2)}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FilterSection;























// // src/components/FilterSection.jsx

// import React, { useState, useEffect, useMemo } from 'react';
// import { useLocation } from 'react-router-dom';
// import styles from '../style/FilterSection.module.css';

// const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
//   const location = useLocation();

//   const [openSections, setOpenSections] = useState({
//     brands: false,
//     genres: false,
//     price: false,
//   });

//   const [brandSearch, setBrandSearch] = useState(''); // 🔍 new state

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   // Brand pools
//   const perfumeBrands = useMemo(
//     () => [
//       'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
//       'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
//       'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
//       'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
//       'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
//       'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
//       'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
//       'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
//       'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
//       'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
//       'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Mugler', 'Elie Saab',
//       'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
//       'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
//       'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly',
//       'Platinum', 'Generic', 'Fragrance World', 'Perris Monte Carlo', 'Tiziana Terenzi',
//       'Byredo', 'Xerjoff', 'Mexican Tobacco', 'Gissah', 'Lanvin', 'Laura Mars', 'Alghawaly', 'Armaf',
//     ],
//     []
//   );

//   const makeupBrands = useMemo(
//     () => ['Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'],
//     []
//   );

//   const { showFilter, filterLabel, filterOptions } = useMemo(() => {
//     let show = true;
//     let label = 'Brands';
//     let options = [];

//     if (location.pathname.includes('/makeup')) {
//       options = makeupBrands;
//     } else if (location.pathname.includes('/watches')) {
//       options = ['Curren', 'Richard Mille'];
//     } else if (location.pathname.includes('/musk')) {
//       show = false;
//     } else if (location.pathname.includes('/lattafa-rasasi')) {
//       options = ['Lattafa', 'Rasasi'];
//     } else if (location.pathname.includes('/refresheners')) {
//       label = 'Type';
//       options = ['air', 'furniture','incense'];
//     } else {
//       options = perfumeBrands;
//     }

//     if (show) {
//       options = [...new Set(options)].sort((a, b) => a.localeCompare(b));
//     }

//     return { showFilter: show, filterLabel: label, filterOptions: options };
//   }, [location.pathname, perfumeBrands, makeupBrands]);

//   // Filter brands by search term
//   const filteredOptions = useMemo(() => {
//     if (!brandSearch.trim()) return filterOptions;
//     return filterOptions.filter((opt) =>
//       opt.toLowerCase().includes(brandSearch.toLowerCase())
//     );
//   }, [brandSearch, filterOptions]);

//   const genres = useMemo(
//     () => [
//       { value: 'Men', label: 'Men' },
//       { value: 'Women', label: 'Women' },
//       { value: 'Unisex', label: 'Unisex' },
//     ],
//     []
//   );

//   useEffect(() => {
//     onFilterChange('resetAll');
//   }, [location.pathname]);

//   const brandsPanelId = 'filter-brands-panel';
//   const genresPanelId = 'filter-genres-panel';
//   const pricePanelId = 'filter-price-panel';

//   return (
//     <section className={styles['filter-section']} aria-labelledby="filter-title">
//       <h3 id="filter-title" className={styles['filter-title']}>Filter By</h3>

//       {/* Brands/Types */}
//       {showFilter && (
//         <div className={styles['filter-group']}>
//           <button
//             type="button"
//             className={styles['filter-header']}
//             aria-expanded={openSections.brands}
//             aria-controls={brandsPanelId}
//             onClick={() => toggleSection('brands')}
//           >
//             <h4 className={styles['filter-subtitle']}>{filterLabel}</h4>
//             <span className={styles['toggle-icon']} aria-hidden="true">
//               {openSections.brands ? '−' : '+'}
//             </span>
//           </button>

//           {openSections.brands && (
//             <div
//               id={brandsPanelId}
//               role="region"
//               aria-label={`${filterLabel} options`}
//               className={styles['filter-options-container']}
//             >
//               {/* 🔍 Search bar for brands */}
//               <input
//                 type="text"
//                 placeholder={`Search ${filterLabel.toLowerCase()}...`}
//                 value={brandSearch}
//                 onChange={(e) => setBrandSearch(e.target.value)}
//                 className={styles['brand-search']}
//               />

//               {filteredOptions.length > 0 ? (
//                 filteredOptions.map((option) => (
//                   <div key={option} className={styles['filter-option']}>
//                     <input
//                       type="checkbox"
//                       id={`brand-${option}`}
//                       name={filterLabel === 'Type' ? 'type' : 'brand'}
//                       checked={filters.brands.includes(option)}
//                       onChange={() => onFilterChange('brands', option)}
//                       className={styles['filter-checkbox']}
//                     />
//                     <label htmlFor={`brand-${option}`} className={styles['filter-label']}>
//                       {option}
//                     </label>
//                   </div>
//                 ))
//               ) : (
//                 <div className={styles['no-results']}>
//                   No {filterLabel.toLowerCase()} found
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Genre */}
//       {!hideGenreFilter && (
//         <div className={styles['filter-group']}>
//           <button
//             type="button"
//             className={styles['filter-header']}
//             aria-expanded={openSections.genres}
//             aria-controls={genresPanelId}
//             onClick={() => toggleSection('genres')}
//           >
//             <h4 className={styles['filter-subtitle']}>Genre</h4>
//             <span className={styles['toggle-icon']} aria-hidden="true">
//               {openSections.genres ? '−' : '+'}
//             </span>
//           </button>

//           {openSections.genres && (
//             <div
//               id={genresPanelId}
//               role="region"
//               aria-label="Genre options"
//               className={styles['filter-options-container']}
//             >
//               {genres.map((genre) => (
//                 <div key={genre.value} className={styles['filter-option']}>
//                   <input
//                     type="checkbox"
//                     id={`genre-${genre.value}`}
//                     name="genre"
//                     checked={filters.genres.includes(genre.value)}
//                     onChange={() => onFilterChange('genres', genre.value)}
//                     className={styles['filter-checkbox']}
//                   />
//                   <label htmlFor={`genre-${genre.value}`} className={styles['filter-label']}>
//                     {genre.label}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}

//       {/* Price */}
//       <div className={styles['filter-group']}>
//         <button
//           type="button"
//           className={styles['filter-header']}
//           aria-expanded={openSections.price}
//           aria-controls={pricePanelId}
//           onClick={() => toggleSection('price')}
//         >
//           <h4 className={styles['filter-subtitle']}>Price</h4>
//           <span className={styles['toggle-icon']} aria-hidden="true">
//             {openSections.price ? '−' : '+'}
//           </span>
//         </button>

//         {openSections.price && (
//           <div
//             id={pricePanelId}
//             role="region"
//             aria-label="Price filter"
//             className={styles['price-filter-container']}
//           >
//             <input
//               type="range"
//               min="0"
//               max="500"
//               step="10"
//               value={filters.price}
//               onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
//               className={styles['price-slider']}
//               aria-label="Maximum price"
//             />
//             <div className={styles['price-display']} aria-live="polite">
//               ${filters.price.toFixed(2)}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FilterSection;
























// src/components/FilterSection.jsx

import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../style/FilterSection.module.css';

const FilterSection = ({ filters, onFilterChange, activeGenre, hideGenreFilter }) => {
  const location = useLocation();

  const [openSections, setOpenSections] = useState({
    brands: false,
    genres: false,
    price: false,
  });

  const [brandSearch, setBrandSearch] = useState(''); // 🔍 search input

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Brand pools
  const perfumeBrands = useMemo(
    () => [
      'Davidoff', 'Giorgio Armani', 'arabian oud', 'Azzaro', 'Rasasi', 'Chanel',
      'Paco Rabanne', 'Versace', 'Jean Paul Gaultier', 'Fabergé', 'Maison Francis Kurkdjian',
      'Burberry', 'Nasomatto', 'Carolina Herrera', 'Bulgari', 'Lattafa', 'Tom Ford',
      'Ralph Lauren', 'Hugo Boss', 'Joop!', 'Givenchy', 'Dolce & Gabbana', 'Dior', 'Dunhill',
      'Cartier', 'Laura Biagiotti', 'Jacques Bogart', 'Nikos', 'Emporio Armani', 'Viktor & Rolf',
      'Calvin Klein', 'oud guerlain', 'taif', 'sunamusk', 'Gucci', 'Nautica or Hermès',
      'Ferrari', 'Fendi', 'Yves Saint Laurent', 'Issey Miyake', 'Creed', 'Kenzo', 'Louis Vuitton',
      'Lacoste', 'happy touch', 'Ted Lapidus', 'misk', 'maa althahab', 'Mercedes-Benz',
      'Montblanc', 'Police', 'Ajmal or Armaf', 'Roberto Cavalli', 'rave', 'Ajmal', 'Asdaaf',
      'Afnan', 'Mousouf', 'شمس الامارات', 'Victoria’s Secret', 'Britney Spears', 'Jardin de Parfums',
      'elissa', 'Lancôme', 'Yara or Inspired', 'Escada', 'Mugler', 'Elie Saab',
      'Bath & Body Works', 'sparkling', 'Guerlain', 'Narciso Rodriguez', 'Prada', 'Chloé',
      'Jeanne Arthes', 'Kayali (Huda Beauty)', 'Masque Milano', 'Folie Cosmetic', 'sir', 'nasmat',
      'Mancera Roses', 'Avon', 'Ex Nihilo', 'Ard Al Zaafaran', 'Parfums de Marly',
      'Platinum', 'Generic', 'Fragrance World', 'Perris Monte Carlo', 'Tiziana Terenzi',
      'Byredo', 'Xerjoff', 'Mexican Tobacco', 'Gissah', 'Lanvin', 'Laura Mars', 'Alghawaly', 'Armaf',
    ],
    []
  );

  const makeupBrands = useMemo(
    () => ['Maybelline', 'Ruby Beauty', 'Samoa', 'dali', 'Ruby Rose'],
    []
  );

  const deodorantBrands = useMemo(
    () => [
      'Lattafa',
      'Washwasha',
      'Ana Abiyedh Rouge',
      'Ameerat Al Arab',
      'Ejazai',
      'Mohra Silky Rose',
      'Musk Salama',
      'I Am White Poudree',
      'Hayati',
      "Bade'e Al Oud Amethyst",
    ],
    []
  );

  const { showFilter, filterLabel, filterOptions } = useMemo(() => {
    let show = true;
    let label = 'Brands';
    let options = [];

    if (location.pathname.includes('/makeup')) {
      options = makeupBrands;
    } else if (location.pathname.includes('/watches')) {
      options = ['Curren', 'Richard Mille'];
    } else if (location.pathname.includes('/musk')) {
      show = false;
    } else if (location.pathname.includes('/lattafa-rasasi')) {
      options = ['Lattafa', 'Rasasi'];
    } else if (location.pathname.includes('/refresheners')) {
      label = 'Type';
      options = ['air', 'furniture', 'incense'];
    } else if (location.pathname.includes('/body-mist')) {
      // 🟢 Deodorant page
      options = deodorantBrands;
    }
    else if (location.pathname.includes('/body-cream')) {
      // 🟢 Cream page → hide brand filter
      show = false;
    }else {
      options = perfumeBrands;
    }

    if (show) {
      options = [...new Set(options)].sort((a, b) => a.localeCompare(b));
    }

    return { showFilter: show, filterLabel: label, filterOptions: options };
  }, [location.pathname, perfumeBrands, makeupBrands, deodorantBrands]);

  // Filter brands by search
  const filteredOptions = useMemo(() => {
    if (!brandSearch.trim()) return filterOptions;
    return filterOptions.filter((opt) =>
      opt.toLowerCase().includes(brandSearch.toLowerCase())
    );
  }, [brandSearch, filterOptions]);

  const genres = useMemo(
    () => [
      { value: 'Men', label: 'Men' },
      { value: 'Women', label: 'Women' },
      { value: 'Unisex', label: 'Unisex' },
    ],
    []
  );

  useEffect(() => {
    onFilterChange('resetAll');
  }, [location.pathname]);

  const brandsPanelId = 'filter-brands-panel';
  const genresPanelId = 'filter-genres-panel';
  const pricePanelId = 'filter-price-panel';

  return (
    <section className={styles['filter-section']} aria-labelledby="filter-title">
      <h3 id="filter-title" className={styles['filter-title']}>Filter By</h3>

      {/* Brands/Types */}
      {showFilter && (
        <div className={styles['filter-group']}>
          <button
            type="button"
            className={styles['filter-header']}
            aria-expanded={openSections.brands}
            aria-controls={brandsPanelId}
            onClick={() => toggleSection('brands')}
          >
            <h4 className={styles['filter-subtitle']}>{filterLabel}</h4>
            <span className={styles['toggle-icon']} aria-hidden="true">
              {openSections.brands ? '−' : '+'}
            </span>
          </button>

          {openSections.brands && (
            <div
              id={brandsPanelId}
              role="region"
              aria-label={`${filterLabel} options`}
              className={styles['filter-options-container']}
            >
              <input
                type="text"
                placeholder={`Search ${filterLabel.toLowerCase()}...`}
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                className={styles['brand-search']}
              />

              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div key={option} className={styles['filter-option']}>
                    <input
                      type="checkbox"
                      id={`brand-${option}`}
                      name={filterLabel === 'Type' ? 'type' : 'brand'}
                      checked={filters.brands.includes(option)}
                      onChange={() => onFilterChange('brands', option)}
                      className={styles['filter-checkbox']}
                    />
                    <label htmlFor={`brand-${option}`} className={styles['filter-label']}>
                      {option}
                    </label>
                  </div>
                ))
              ) : (
                <div className={styles['no-results']}>
                  No {filterLabel.toLowerCase()} found
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Genre */}
      {!hideGenreFilter && (
        <div className={styles['filter-group']}>
          <button
            type="button"
            className={styles['filter-header']}
            aria-expanded={openSections.genres}
            aria-controls={genresPanelId}
            onClick={() => toggleSection('genres')}
          >
            <h4 className={styles['filter-subtitle']}>Genre</h4>
            <span className={styles['toggle-icon']} aria-hidden="true">
              {openSections.genres ? '−' : '+'}
            </span>
          </button>

          {openSections.genres && (
            <div
              id={genresPanelId}
              role="region"
              aria-label="Genre options"
              className={styles['filter-options-container']}
            >
              {genres.map((genre) => (
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
          )}
        </div>
      )}

      {/* Price */}
      <div className={styles['filter-group']}>
        <button
          type="button"
          className={styles['filter-header']}
          aria-expanded={openSections.price}
          aria-controls={pricePanelId}
          onClick={() => toggleSection('price')}
        >
          <h4 className={styles['filter-subtitle']}>Price</h4>
          <span className={styles['toggle-icon']} aria-hidden="true">
            {openSections.price ? '−' : '+'}
          </span>
        </button>

        {openSections.price && (
          <div
            id={pricePanelId}
            role="region"
            aria-label="Price filter"
            className={styles['price-filter-container']}
          >
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={filters.price}
              onChange={(e) => onFilterChange('price', parseFloat(e.target.value))}
              className={styles['price-slider']}
              aria-label="Maximum price"
            />
            <div className={styles['price-display']} aria-live="polite">
              ${filters.price.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterSection;
