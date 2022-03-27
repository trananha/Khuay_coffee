import './App.css';
// import AddProduct from './components/Admin/AddProduct';
// import ChangeProductInfo from './components/Admin/ChangeProductInfo';
// import OrderDetail from './components/Admin/OrderDetail';

import { Route, Routes,Link } from 'react-router-dom';
import Account from './components/Admin/Account';
import Order from './components/Admin/Order';
import Product from './components/Admin/Product';
// import {db,CUSTOMER,getData,updateData,addData,deleteData} from './Firebase/firebase';
// import { account_data } from './components/Admin/FakeData';
import Home from './pages/trangchu';
import SignInInterface from './pages/signin';
import SignUpInterface from './pages/signup';
import ProductCard from './components/Products/ProductCard';
import ProductDetail from './components/Product/ProductDetail'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Products from './components/Products';
var idSP = "SP01"
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
