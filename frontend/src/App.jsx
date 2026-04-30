import Product from "./features/product/Product";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductDetail from "./features/product/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
