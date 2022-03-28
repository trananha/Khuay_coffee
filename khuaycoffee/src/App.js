import './App.css';

import { Route, Routes,Link } from 'react-router-dom';
import Account from './components/Admin/Account';
import Order from './components/Admin/Order';
import Product from './components/Admin/Product';
import Home from './pages/trangchu';
import SignInInterface from './pages/signin';
import SignUpInterface from './pages/signup';
import ProductCard from './components/Products/ProductCard';
import ProductDetail from './components/Product/ProductDetail'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Products from './components/Products';
var idSP = "SP03"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/order" element={<Order/>} />
        <Route path="/login" element={<SignInInterface />} />
        <Route path="/register" element={<SignUpInterface />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
