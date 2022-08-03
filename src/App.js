import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Product from "./pages/Product";
import ProductId from "./pages/ProductId"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
