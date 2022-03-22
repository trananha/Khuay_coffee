import './index.css';
import product from '../../Assets/sp1.jpg'
import { db } from "../../Firebase/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import ProductCard from './ProductCard';

function Products() {
  const [filter, setFilter] = useState("makeof");
  const [products, setProducts] = useState();
  const [dur, setDur] = useState("None");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    async function fetchData() {
      let array = [];
      const q = query(collection(db, "Product"), orderBy(filter, "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => array.push(doc));

      setProducts(array);
    }

    fetchData();
  }, [filter]);

  async function handleSubmit(e) {
    e.preventDefault();

    let array = [];
    const q = query(
      collection(db, "Product"),
      where("name", "array-contains", keyword.toLowerCase())
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => array.push(doc));

    setProducts(array);
  }

  const [ render, setRender ] = useState(true);

    useEffect(() =>{   
        const id = '85Mqzp4CIgsdz5P5pWU0'

        // Read data from Firebase
        var fetchData = async() => {
            // Read job's data
            const jobRef = doc(db, 'Product', id);
            const jobSnap = await getDoc(jobRef);
            var temp = jobSnap.data();
            console.log(temp.name);
            setProducts(temp);
        }
        fetchData();
    },[render]);
  
  return (
    <div className="App">
      {/* Products */}
      <div className='main'>
          <div className='filter'>
            <div className='title'>COFFEE POWDER</div>
            <div className='filt'>
              <div className='a'>0 filter</div>
              <div className='b'>Xóa tất cả</div>
            </div>
            <div>
              <div>COFFEE TYPE</div>
              <div>
                <input type="checkbox" id="type1" name="type1" value="Regular"></input>
                <label for="type1">Regular</label><br/>
                <input type="checkbox" id="type2" name="type2" value="Decaf"></input>
                <label for="type2">Decaf</label>
              </div>
            </div>
          </div>

          <div className='products'>
            <form className="example" onSubmit={handleSubmit}>
                <input className='search'
                  key="input-search"
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
            </form>
            <div className='pros'>
              <ProductCard />
            </div>
          </div>

      </div>
    </div>
  );
}

export default Products;
