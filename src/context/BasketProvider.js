// import React, { createContext, useContext, useReducer } from 'react';

// // Create context
// const BasketContext = createContext();

// const initialState = {
//   basketItems: [],
//   sidebarVisible: false,
// };

// const basketReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       const existing = state.basketItems.find(item => item.id === action.payload.id);
//       return {
//         ...state,
//         basketItems: existing
//           ? state.basketItems.map(item =>
//               item.id === action.payload.id
//                 ? { ...item, quantity: item.quantity + 1 }
//                 : item
//             )
//           : [...state.basketItems, { ...action.payload, quantity: 1 }],
//         sidebarVisible: true,
//       };
//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };
//     case 'CLOSE_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: false,
//       };
//     default:
//       return state;
//   }
// };

// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   return (
//     <BasketContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// // Hook to use it
// export const useBasket = () => useContext(BasketContext);
















// import React, { createContext, useContext, useReducer } from 'react';

// // Create context
// const BasketContext = createContext();

// // Initial state
// const initialState = {
//   basketItems: [],
//   sidebarVisible: false,
// };

// // Reducer function
// const basketReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const existingItem = state.basketItems.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           basketItems: state.basketItems.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//           sidebarVisible: true,
//         };
//       } else {
//         return {
//           ...state,
//           basketItems: [...state.basketItems, { ...action.payload, quantity: 1 }],
//           sidebarVisible: true,
//         };
//       }
//     }

//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };

//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     case 'CLOSE_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: false,
//       };

//     default:
//       return state;
//   }
// };

// // Provider
// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   return (
//     <BasketContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// // Hook
// export const useBasket = () => useContext(BasketContext);






// import React, { createContext, useContext, useReducer } from 'react';

// // Create context
// const BasketContext = createContext();

// const initialState = {
//   basketItems: [],
//   sidebarVisible: false,
//     preventCloseOnce: false, // ✅ Add this line
// };

// const basketReducer = (state, action) => {
//   switch (action.type) {
// case 'ADD_ITEM': {
//   console.log("Sidebar state before ADD_ITEM:", state.sidebarVisible);

//   const existing = state.basketItems.find(item => item.id === action.payload.id);
//   const updatedItems = existing
//     ? state.basketItems.map(item =>
//         item.id === action.payload.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     : [...state.basketItems, { ...action.payload, quantity: 1 }];

//   // ✅ This will NEVER override a visible sidebar
//   return {
//     ...state,
//     basketItems: updatedItems,
//     sidebarVisible: state.sidebarVisible || !existing,
//   };
// }



//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };

//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };

//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     case 'OPEN_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: true,
//       };

//     case 'CLOSE_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: false,
//       };
//       case 'PREVENT_CLOSE_ONCE':
//   return { ...state, preventCloseOnce: true };

// case 'RESET_PREVENT_CLOSE':
//   return { ...state, preventCloseOnce: false };


//     default:
//       return state;
//   }
// };

// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   return (
//     <BasketContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// export const useBasket = () => useContext(BasketContext);

















// import React, { createContext, useContext, useReducer } from 'react';

// // Create context
// const BasketContext = createContext();

// // Initial state
// const initialState = {
//   basketItems: [],
//   sidebarVisible: false,
//   preventCloseOnce: false,
// };

// // Reducer function
// const basketReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const existing = state.basketItems.find(item => item.id === action.payload.id);
//       const updatedItems = existing
//         ? state.basketItems.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...state.basketItems, { ...action.payload, quantity: 1 }];

//       return {
//         ...state,
//         basketItems: updatedItems,
//         // Only open sidebar if it's not already open or if item is newly added
//         sidebarVisible: state.sidebarVisible || !existing,
//       };
//     }

//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };

//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     case 'OPEN_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: true,
//       };

//     case 'CLOSE_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: false,
//       };

//     case 'PREVENT_CLOSE_ONCE':
//       return {
//         ...state,
//         preventCloseOnce: true,
//       };

//     case 'RESET_PREVENT_CLOSE':
//       return {
//         ...state,
//         preventCloseOnce: false,
//       };

//     default:
//       return state;
//   }
// };

// // Provider component
// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   return (
//     <BasketContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </BasketContext.Provider>
//   );
// };

// // Hook for accessing basket context
// export const useBasket = () => useContext(BasketContext);






// import React, { createContext, useContext, useReducer } from 'react';

// // Create context
// const BasketContext = createContext();

// // Initial state
// const initialState = {
//   basketItems: [],
//   sidebarVisible: false,
//   preventCloseOnce: false,
// };

// // Reducer function
// const basketReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const existing = state.basketItems.find(item => item.id === action.payload.id);
//       const updatedItems = existing
//         ? state.basketItems.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...state.basketItems, { ...action.payload, quantity: 1 }];

//       return {
//         ...state,
//         basketItems: updatedItems,
//         sidebarVisible: state.sidebarVisible || !existing,
//       };
//     }

//     case 'REMOVE_ITEM':
//       return {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };

//     case 'INCREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };

//     case 'DECREASE_QUANTITY':
//       return {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     case 'OPEN_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: true,
//       };

//     case 'CLOSE_SIDEBAR':
//       return {
//         ...state,
//         sidebarVisible: false,
//       };

//     case 'PREVENT_CLOSE_ONCE':
//       return {
//         ...state,
//         preventCloseOnce: true,
//       };

//     case 'RESET_PREVENT_CLOSE':
//       return {
//         ...state,
//         preventCloseOnce: false,
//       };

//     default:
//       return state;
//   }
// };

// // Provider component
// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   // Helper functions
//   const addItem = (item) => {
//     dispatch({ type: 'ADD_ITEM', payload: item });
//   };

//   const removeItem = (id) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const increaseQty = (id) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   };

//   const decreaseQty = (id) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: id });
//   };

//   const openSidebar = () => {
//     dispatch({ type: 'OPEN_SIDEBAR' });
//   };

//   const closeSidebar = () => {
//     dispatch({ type: 'CLOSE_SIDEBAR' });
//   };

//   const preventCloseOnceAction = () => {
//     dispatch({ type: 'PREVENT_CLOSE_ONCE' });
//   };

//   const resetPreventClose = () => {
//     dispatch({ type: 'RESET_PREVENT_CLOSE' });
//   };

//   return (
//     <BasketContext.Provider
//       value={{
//         basketItems: state.basketItems,
//         sidebarVisible: state.sidebarVisible,
//         preventCloseOnce: state.preventCloseOnce,
//         addItem,
//         removeItem,
//         increaseQty,
//         decreaseQty,
//         openSidebar,
//         closeSidebar,
//         preventCloseOnceAction,
//         resetPreventClose,
//       }}
//     >
//       {children}
//     </BasketContext.Provider>
//   );
// };

// // Hook for accessing basket context
// export const useBasket = () => useContext(BasketContext);







// import React, { createContext, useContext, useReducer } from 'react';

// const BasketContext = createContext();

// const initialState = {
//   basketItems: JSON.parse(localStorage.getItem('basketItems')) || [],
//   sidebarVisible: false,
//   preventCloseOnce: false,
// };

// const basketReducer = (state, action) => {
//   let newState;
  
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const existing = state.basketItems.find(item => item.id === action.payload.id);
//       const updatedItems = existing
//         ? state.basketItems.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           )
//         : [...state.basketItems, { ...action.payload, quantity: 1 }];

//       newState = {
//         ...state,
//         basketItems: updatedItems,
//         sidebarVisible: state.sidebarVisible || !existing,
//       };
//       break;
//     }

//     case 'REMOVE_ITEM':
//       newState = {
//         ...state,
//         basketItems: state.basketItems.filter(item => item.id !== action.payload),
//       };
//       break;

//     case 'INCREASE_QUANTITY':
//       newState = {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };
//       break;

//     case 'DECREASE_QUANTITY':
//       newState = {
//         ...state,
//         basketItems: state.basketItems.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };
//       break;

//     case 'OPEN_SIDEBAR':
//       newState = {
//         ...state,
//         sidebarVisible: true,
//       };
//       break;

//     case 'CLOSE_SIDEBAR':
//       newState = {
//         ...state,
//         sidebarVisible: false,
//       };
//       break;

//     case 'PREVENT_CLOSE_ONCE':
//       newState = {
//         ...state,
//         preventCloseOnce: true,
//       };
//       break;

//     case 'RESET_PREVENT_CLOSE':
//       newState = {
//         ...state,
//         preventCloseOnce: false,
//       };
//       break;

//     case 'CLEAR_CART':
//       newState = {
//         ...state,
//         basketItems: [],
//       };
//       break;

//     default:
//       return state;
//   }

//   // Save to localStorage after each state change
//   localStorage.setItem('basketItems', JSON.stringify(newState.basketItems));
//   return newState;
// };

// export const BasketProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(basketReducer, initialState);

//   const addItem = (item) => {
//     dispatch({ type: 'ADD_ITEM', payload: item });
//   };

//   const removeItem = (id) => {
//     dispatch({ type: 'REMOVE_ITEM', payload: id });
//   };

//   const increaseQty = (id) => {
//     dispatch({ type: 'INCREASE_QUANTITY', payload: id });
//   };

//   const decreaseQty = (id) => {
//     dispatch({ type: 'DECREASE_QUANTITY', payload: id });
//   };

//   const openSidebar = () => {
//     dispatch({ type: 'OPEN_SIDEBAR' });
//   };

//   const closeSidebar = () => {
//     dispatch({ type: 'CLOSE_SIDEBAR' });
//   };

//   const preventCloseOnceAction = () => {
//     dispatch({ type: 'PREVENT_CLOSE_ONCE' });
//   };

//   const resetPreventClose = () => {
//     dispatch({ type: 'RESET_PREVENT_CLOSE' });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   return (
//     <BasketContext.Provider
//       value={{
//         basketItems: state.basketItems,
//         sidebarVisible: state.sidebarVisible,
//         preventCloseOnce: state.preventCloseOnce,
//         addItem,
//         removeItem,
//         increaseQty,
//         decreaseQty,
//         openSidebar,
//         closeSidebar,
//         preventCloseOnceAction,
//         resetPreventClose,
//         clearCart,
//       }}
//     >
//       {children}
//     </BasketContext.Provider>
//   );
// };

// export const useBasket = () => useContext(BasketContext);



import React, { createContext, useContext, useReducer } from 'react';

const BasketContext = createContext();

const initialState = {
  basketItems: JSON.parse(localStorage.getItem('basketItems')) || [],
  sidebarVisible: false,
  preventCloseOnce: false,
};

const basketReducer = (state, action) => {
  let newState;
  
  switch (action.type) {
    case 'ADD_ITEM': {
      const { id, size } = action.payload;
      // Check if an item with the same id AND size exists
      const existing = state.basketItems.find(
        item => item.id === id && item.size === size
      );
      const updatedItems = existing
        ? state.basketItems.map(item =>
            item.id === id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.basketItems, { ...action.payload, quantity: 1 }];

      newState = {
        ...state,
        basketItems: updatedItems,
        sidebarVisible: state.sidebarVisible || !existing,
      };
      break;
    }

    case 'REMOVE_ITEM': {
      const { id, size } = action.payload;
      newState = {
        ...state,
        basketItems: state.basketItems.filter(
          item => !(item.id === id && item.size === size)
        ),
      };
      break;
    }

    case 'INCREASE_QUANTITY': {
      const { id, size } = action.payload;
      newState = {
        ...state,
        basketItems: state.basketItems.map(item =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      break;
    }

    case 'DECREASE_QUANTITY': {
      const { id, size } = action.payload;
      newState = {
        ...state,
        basketItems: state.basketItems.map(item =>
          item.id === id && item.size === size && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      break;
    }

    case 'OPEN_SIDEBAR':
      newState = {
        ...state,
        sidebarVisible: true,
      };
      break;

    case 'CLOSE_SIDEBAR':
      newState = {
        ...state,
        sidebarVisible: false,
      };
      break;

    case 'PREVENT_CLOSE_ONCE':
      newState = {
        ...state,
        preventCloseOnce: true,
      };
      break;

    case 'RESET_PREVENT_CLOSE':
      newState = {
        ...state,
        preventCloseOnce: false,
      };
      break;

    case 'CLEAR_CART':
      newState = {
        ...state,
        basketItems: [],
      };
      break;

    default:
      return state;
  }

  // Save to localStorage after each state change
  localStorage.setItem('basketItems', JSON.stringify(newState.basketItems));
  return newState;
};

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(basketReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id, size) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  };

  const increaseQty = (id, size) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id, size } });
  };

  const decreaseQty = (id, size) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id, size } });
  };

  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' });
  };

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' });
  };

  const preventCloseOnceAction = () => {
    dispatch({ type: 'PREVENT_CLOSE_ONCE' });
  };

  const resetPreventClose = () => {
    dispatch({ type: 'RESET_PREVENT_CLOSE' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems: state.basketItems,
        sidebarVisible: state.sidebarVisible,
        preventCloseOnce: state.preventCloseOnce,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        openSidebar,
        closeSidebar,
        preventCloseOnceAction,
        resetPreventClose,
        clearCart,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);