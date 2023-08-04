import { createAsyncThunk } from "@reduxjs/toolkit";

class Productrapo
{
    static getProducts = createAsyncThunk(
        "products/getProducts",
        async ({ title, description }) => {
        console.log('called')
        }
      );
}
export default Productrapo;