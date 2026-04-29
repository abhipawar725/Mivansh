import api from "./api";

export const fetchProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data.products;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const fetchProduct = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
