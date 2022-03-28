
import './App.css';
import ProductDetail from '../src/Components/Product/ProductDetail';
import Cart from '../src/Components/Cart/Cart';

function App() {
    var id = "SP01";
    var idUser = "KH02";
  return (
    <div className="App">
        {/* <a> */}
          {/* <ProductDetail/> */}
          <ProductDetail id={id} idUser={idUser} ></ProductDetail>
          {/* <Cart idUser = {idUser} /> */}
        {/* </a> */}

    </div>
  );
}

export default App;
