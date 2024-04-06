import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allKitchens: []
}


const kitchenSlice = createSlice({
    name:'kitchen',
    initialState,
    reducers:{
        storeKitchen(state,action){ 
            state.allKitchens= action.payload;
        }
    }
});

export const  {storeKitchen} = kitchenSlice.actions;

export default kitchenSlice.reducer;