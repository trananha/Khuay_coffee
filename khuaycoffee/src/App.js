
import './App.css';
import AddProduct from './Components/Admin/AddProduct';
import ChangeProductInfo from './Components/Admin/ChangeProductInfo';
import OrderDetail from './Components/Admin/OrderDetail';

function App() {
  return (
    <div className="App">
        <a>
          <AddProduct></AddProduct>
          {/* <OrderDetail></OrderDetail> */}
          {/* <ChangeProductInfo></ChangeProductInfo> */}
        </a>

    </div>
  );
}

export default App;
