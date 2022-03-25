
import './App.css';
import { Route, Routes, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/order" element={<Order/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Category />} />
        <Router path="/product/:id" element={<ProductDetail />} />

      </Routes>

    </div>
  );
}

export default App;
