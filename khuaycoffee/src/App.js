
import './App.css';
import ProductDetail from '../src/Components/Product/ProductDetail';

function App() {
    var id = "SP01";
  return (
    <div className="App">
        {/* <a> */}
          {/* <ProductDetail/> */}
          <ProductDetail id={id} ></ProductDetail>
        {/* </a> */}

    </div>
  );
}

export default App;
