
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
const addAcount=()=>{
  for (let i in account_data) {
    addData(account_data[i],CUSTOMER,db)
  }
}
var idSP = "SP01"
function App() {
  return (
    <>
    
    <div className="App">
        <a>
          {/* <AddProduct></AddProduct> */}
          {/* <OrderDetail id = 'ORD01'></OrderDetail> */}
          <ChangeProductInfo id ={idSP}></ChangeProductInfo>
        </a>
        {/* <button>
          <Link to='/admin/accounts' >Admin</Link>
        </button>
        <button onClick={async ()=>{console.log(await getData(CUSTOMER,db))}}>Get</button>
        <button onClick={()=>{console.log(updateData({"testvalue":"hyhyhyhy"},"testid",CUSTOMER,db))}}>Update</button>
        <button onClick={()=>{addAcount()}}>Add</button>
        <button onClick={()=>{deleteData("Ubblr6mf2umKViVTatni",CUSTOMER,db)}}>delete</button>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/admin/account" element={<Account />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/order" element={<Order/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Category />} />
        <Router path="/product/:id" element={<ProductDetail />} />

      </Routes> */}
    </div>

    </>
  );
}

export default App;
