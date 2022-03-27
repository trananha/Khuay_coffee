
import './App.css';
import AddProduct from './Components/Admin/AddProduct';
import ChangeProductInfo from './Components/Admin/ChangeProductInfo';
import OrderDetail from './Components/Admin/OrderDetail';

import { Route, Routes,Link } from 'react-router-dom';
import Account from './Components/Admin/Account';
import Order from './Components/Admin/Order';
import Product from './Components/Admin/Product';
import {db,CUSTOMER,getData,updateData,addData,deleteData} from './Firebase/firebase';
import { account_data } from './Components/Admin/FakeData';
import Home from './pages/trangchu';
import SignInInterface from './pages/signin';
import SignUpInterface from './pages/signup';
import ProductCard from './Components/Products/ProductCard';
import ProductDetail from './Components/Product/ProductDetail'
import Header from './Components/header.js'
import Footer from './Components/footer.js'
var idSP = "SP01"
function App() {
  return (
    <>
    
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/order" element={<Order/>} />
        <Route path="/login" element={<SignInInterface />} />
        <Route path="/register" element={<SignUpInterface />} />
        <Route path="/product-card" element={<ProductCard />} />
        <Router path="/product/:id" element={<ProductDetail />} />

      </Routes>
      <Footer/>
    </div>

    </>
  );
}

export default App;
