export default function ProductReducer(state, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      case "EDIT_PRODUCT":
        const updatedProduct = action.payload;
  
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
  
      case "REMOVE_PRODUCT":
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };