
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk("usersLogin", async (values) => {
    try {
      const response = await fetch(`https://alb.adp.sapientfinserv.com/sapient-services/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  });  

 const loginSlice = createSlice({
    name: "userdetails",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default loginSlice.reducer; 