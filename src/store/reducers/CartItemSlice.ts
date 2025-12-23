import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../models/ICartItem';

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const serviceId = action.payload;
      const existingItem = state.items.find(item => item.serviceId === serviceId);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ serviceId, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const serviceId = action.payload;
      const existingItem = state.items.find(item => item.serviceId === serviceId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.serviceId !== serviceId);
        }
      }
    },

    removeItemCompletely: (state, action: PayloadAction<number>) => {
      const serviceId = action.payload;
      state.items = state.items.filter(item => item.serviceId !== serviceId);
    },

    clearCart: (state) => {
      state.items = [];
    },

    updateQuantity: (state, action: PayloadAction<{serviceId: number, quantity: number}>) => {
      const { serviceId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.serviceId === serviceId);

      if (existingItem) {
        if (quantity > 0) {
          existingItem.quantity = quantity;
        } else {
          state.items = state.items.filter(item => item.serviceId !== serviceId);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeItemCompletely,
  clearCart,
  updateQuantity
} = cartSlice.actions;


export default cartSlice.reducer;