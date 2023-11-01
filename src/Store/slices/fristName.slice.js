import { createSlice } from "@reduxjs/toolkit";

const firstNameSlice = createSlice({
  name:"firstNameSlice",
  initialState:"",
  reducers:{ 
    setTrainer
  }
})
/*siempre se exporta el reducer */
export default firstNameSlice.reducer;