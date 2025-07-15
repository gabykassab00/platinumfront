// import React, { useState } from 'react';
// import styles from '../style/SortDropdown.module.css'

// const SortDropdown = () => {
//   const [sortMethod, setSortMethod] = useState('Top Based');

//   return (
//     <div className={styles['sort-dropdown']}>
//       <label className={styles.label}>Sort By</label>
//       <select 
//         className={styles.select}
//         value={sortMethod}
//         onChange={(e) => setSortMethod(e.target.value)}
//       >
//         <option value="Top Based">Top Based</option>
//         <option value="Proxidowed (Fat)">Proxidowed (Fat)</option>
//         <option value="Pricoling/Inst. Fiat!">Pricoling/Inst. Fiat!</option>
//       </select>
//     </div>
//   );
// };

// export default SortDropdown;










// import React, { useState } from 'react';
// import styles from '../style/SortDropdown.module.css';

// const SortDropdown = ({ onSortChange }) => {
//   const [sortMethod, setSortMethod] = useState('featured');
//   const [isOpen, setIsOpen] = useState(false);

//   const sortOptions = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'a-z', label: 'Alphabetical (A-Z)' },
//     { value: 'z-a', label: 'Alphabetical (Z-A)' },
//     { value: 'price-low', label: 'Price (Low to High)' },
//     { value: 'price-high', label: 'Price (High to Low)' },
//     { value: 'newest', label: 'Date (Newest)' },
//     { value: 'oldest', label: 'Date (Oldest)' }
//   ];

//   const handleSortChange = (value) => {
//     setSortMethod(value);
//     setIsOpen(false);
//     onSortChange(value);
//   };

//   return (
//     <div className={styles.sortContainer}>
//       <div 
//         className={styles.sortTrigger}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className={styles.sortLabel}>Sort By:</span>
//         <span className={styles.currentSort}>
//           {sortOptions.find(opt => opt.value === sortMethod)?.label}
//         </span>
//         <svg
//           className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
      
//       {isOpen && (
//         <div className={styles.sortDropdown}>
//           {sortOptions.map((option) => (
//             <div
//               key={option.value}
//               className={`${styles.sortOption} ${sortMethod === option.value ? styles.active : ''}`}
//               onClick={() => handleSortChange(option.value)}
//             >
//               {option.label}
//               {sortMethod === option.value && (
//                 <svg
//                   className={styles.checkmark}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortDropdown;













// import React, { useState, useEffect, useRef } from 'react';
// import styles from '../style/SortDropdown.module.css';

// const SortDropdown = ({ onSortChange }) => {
//   const [sortMethod, setSortMethod] = useState('featured');
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const sortOptions = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'a-z', label: 'Alphabetical (A-Z)' },
//     { value: 'z-a', label: 'Alphabetical (Z-A)' },
//     { value: 'price-low', label: 'Price (Low to High)' },
//     { value: 'price-high', label: 'Price (High to Low)' },
//     { value: 'newest', label: 'Date (Newest)' },
//     { value: 'oldest', label: 'Date (Oldest)' }
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     // Add when mounted
//     document.addEventListener('mousedown', handleClickOutside);
    
//     // Clean up on unmount
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Close on Escape key press
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, []);

//   const handleSortChange = (value) => {
//     setSortMethod(value);
//     setIsOpen(false);
//     onSortChange(value);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.sortContainer} ref={dropdownRef}>
//       <div 
//         className={styles.sortTrigger}
//         onClick={toggleDropdown}
//         aria-expanded={isOpen}
//         aria-haspopup="listbox"
//         aria-label="Sort options"
//       >
//         <span className={styles.sortLabel}>Sort By:</span>
//         <span className={styles.currentSort}>
//           {sortOptions.find(opt => opt.value === sortMethod)?.label}
//         </span>
//         <svg
//           className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           aria-hidden="true"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
      
//       {isOpen && (
//         <div 
//           className={styles.sortDropdown}
//           role="listbox"
//           aria-activedescendant={`sort-option-${sortMethod}`}
//         >
//           {sortOptions.map((option) => (
//             <div
//               key={option.value}
//               id={`sort-option-${option.value}`}
//               role="option"
//               aria-selected={sortMethod === option.value}
//               className={`${styles.sortOption} ${sortMethod === option.value ? styles.active : ''}`}
//               onClick={() => handleSortChange(option.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter' || e.key === ' ') {
//                   handleSortChange(option.value);
//                 }
//               }}
//               tabIndex={0}
//             >
//               {option.label}
//               {sortMethod === option.value && (
//                 <svg
//                   className={styles.checkmark}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortDropdown;























import React, { useState, useEffect, useRef } from 'react';
import styles from '../style/SortDropdown.module.css';

const SortDropdown = ({ onSortChange }) => {
  const [sortMethod, setSortMethod] = useState('featured');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'a-z', label: 'Alphabetical (A-Z)' },
    { value: 'z-a', label: 'Alphabetical (Z-A)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'newest', label: 'Newest to Oldest' },
    { value: 'oldest', label: 'Oldest to Newest' },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleSortChange = (value) => {
    setSortMethod(value);
    setIsOpen(false);
    onSortChange(value);
  };

  return (
    <div className={styles.sortContainer} ref={dropdownRef}>
      <div className={styles.sortTrigger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.sortLabel}>Sort By:</span>
        <span className={styles.currentSort}>
          {sortOptions.find((opt) => opt.value === sortMethod)?.label}
        </span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {isOpen && (
        <div className={styles.sortDropdown}>
          {sortOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.sortOption} ${sortMethod === option.value ? styles.active : ''}`}
              onClick={() => handleSortChange(option.value)}
              tabIndex={0}
              role="option"
            >
              {option.label}
              {sortMethod === option.value && (
                <svg
                  className={styles.checkmark}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
