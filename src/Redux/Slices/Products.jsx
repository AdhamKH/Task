import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { productApi } from "../../Api/Api";

export const GetProuducts = createAsyncThunk(
  "Products/get",
  async (_, thunkAPI) => {
    try {
      return await axios({
        method: "GET",
        baseURL: `${productApi}`,
      }).then((res) => {
        return res.data;
      });
    } catch (error) {
      const message = error.response.data.message;
      console.log("message", message);
      toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const Prouducts = createSlice({
  name: "Products",
  initialState: {
    allProducts: "",
    status: "",
  },
  reducers: {},
  extraReducers: {
    [GetProuducts.pending]: (state, { payload }) => {
      state.status = "loading";
    },
    [GetProuducts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.allProducts = payload;
    },
    [GetProuducts.rejected]: (state, { payload }) => {
      state.status = "failed";
      state.error = payload;
    },
  },
});
export default Prouducts.reducer;
