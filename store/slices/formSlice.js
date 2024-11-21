import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    items: [], // Store form data itemssubmitFormSuccesssubmitFormSuccess
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); // Add item to the state
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Delete item by ID
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Update item by ID
      }
    },
    markComplete: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items[index].completed = !state.items[index].completed; // Toggle completion status
      }
    },
  },
});

export const { addItem, deleteItem, updateItem, markComplete } = formSlice.actions;
export const formReducer = formSlice.reducer;
