
import './App.css';
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
function App() {
  return (
    <>
    
    <div className="App">
        <a>
          Khuay Coffee
        </a>
        <button>
          <Link to='/admin/accounts' >Admin</Link>
        </button>
        <button onClick={async ()=>{console.log(await getData(CUSTOMER,db))}}>Get</button>
        <button onClick={()=>{console.log(updateData({"testvalue":"hyhyhyhy"},"testid",CUSTOMER,db))}}>Update</button>
        <button onClick={()=>{addAcount()}}>Add</button>
        <button onClick={()=>{deleteData("Ubblr6mf2umKViVTatni",CUSTOMER,db)}}>delete</button>

    </div>
    <Routes>
        <Route path="/admin/accounts" element={<Account/>} />
        <Route path="/admin/products" element={<Product/>} />
        <Route path="/admin/orders" element={<Order/>} />
    </Routes>
    </>
  );
}

export default App;
