export default function ProductReducer(state, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
        console.log('added');
        return {
          ...state,
          products: [...state.products, action.payload],
        };
    
      case "EDIT_PRODUCT":
        const updatedProduct = action.payload;
        console.log('edited');
          const updatedProducts = state.products.map((product) => {
            if (product.id === updatedProduct.id) {
              return updatedProduct;
            }
            return product;
          });
        return {
          ...state,
          products: updatedProducts,
        };
  
      // case "REMOVE_PRODUCT":
      //   console.log(state.products);
      //   return {
      //     ...state,
      //     products: state.products.filter(
      //       (product) => product.id !== action.payload
      //     ),
      //   };
  
      default:
        return state;
    }
  };