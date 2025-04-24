import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Helper function to load cart from localStorage
const loadCartFromStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [] };
  };
  
  // Helper function to save cart to localStorage
  const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
   
  // Fetch cart for a user or guest
export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async ({ userId, guestId }, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
          {
            productId,
            quantity,
            size,
            color,
            guestId,
            userId
          }
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue(error.response?.data || "Failed to fetch cart");
      }
    }
  );
  export const addToCart=createAsyncThunk("cart/addToCart",
   async({
    productId,
    quantity,
    size,
    color,
    guestId,
    userId
   },{rejectWithValue})=>{
    try {
        const response=await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
            {
                productId,
                quantity,
                size,
                color,
                guestId,
                userId
            }
        )
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data)
        
    }
   }

  )
    
export const updateCartItemquantity=createAsyncThunk(
    "cart/updateCartItemQuantity",async({productId,quantity,guestId,userId,size,color},
        {rejectWithValue})=>{
            try {
                const response=await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
                    {
                        productId,
                        quantity,
                        guestId,
                        userId,
                        size,
                        color
                    }
                )
                return response.data  
            } catch (error) {
                return rejectWithValue(error.response.data)
            }
        }
)

export const removeFromCart=createAsyncThunk(
    "cart/removeFromCart",
    async({productId,guestId,userId,size,color},{rejectWithValue})=>{
        try {
            const response=await axios({
                method:"DELETE",
                url:`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
                data:{productId,userId,guestId,size,color}
            })
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
            
        }
    }
)


export const mergeCart=createAsyncThunk(
    "cart/mergeCart",
    async({guestId,user},{rejectWithValue})=>{
        try {
            const response=await axios(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
        {guestId,user},
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("userToken")}`
            }
        }
            );
        return response.data
    }catch(error){
        return rejectWithValue(error.response.data)
    };
}
)


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:loadCartFromStorage(),
        loading:false,
        error:null,
    },
    reducers:{
        clearCart:(state)=> {
            state.cart={products:[]};
            localStorage.removeItem("cart")
           },
    },
    extraReducers:(builder)=>{
        builder
         .addCase(fetchCart.pending,(state)=>{
            state.loading=true;
            state.error=nulll;
         })
         .addCase(fetchCart.fulfilled,(state,action)=>{
            state.loading=false,
            state.cart=action.payload;
            saveCartToStorage(UserActivation.payload)
         })
         .addCase(fetchCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message || "failed to fetch Cart";
         })


         .addCase(addToCart.pending,(state)=>{
            state.loading=true;
            state.error=nulll;
         })
         .addCase(addToCart.fulfilled,(state,action)=>{
            state.loading=false,
            state.cart=action.payload;
            saveCartToStorage(UserActivation.payload)
         })
         .addCase(addToCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload.message || "failed to add to Cart";
         })


         .addCase(updateCartItemquantity.pending,(state)=>{
            state.loading=true;
            state.error=nulll;
         })
         .addCase(updateCartItemquantity.fulfilled,(state,action)=>{
            state.loading=false,
            state.cart=action.payload;
            saveCartToStorage(UserActivation.payload)
         })
         .addCase(updateCartItemquantity.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload?.message || "failed to update item Quantity ";
         })

         

         .addCase(removeFromCart.pending,(state)=>{
            state.loading=true;
            state.error=nulll;
         })
         .addCase(removeFromCart.fulfilled,(state,action)=>{
            state.loading=false,
            state.cart=action.payload;
            saveCartToStorage(UserActivation.payload)
         })
         .addCase(removeFromCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload.message || "failed to remove item ";
         })

         

         .addCase(mergeCart.pending,(state)=>{
            state.loading=true;
            state.error=nulll;
         })
         .addCase(mergeCart.fulfilled,(state,action)=>{
            state.loading=false,
            state.cart=action.payload;
            saveCartToStorage(UserActivation.payload)
         })
         .addCase(mergeCart.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload?.message || "failed to merge Cart";
         })

    }
       
    },
);

export const {clearCart } = cartSlice.actions;

export default cartSlice.reducer;