import './index.css';
import { db, getData,PRODUCT } from "../../Firebase/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import ProductCard from './ProductCard';

const refreshData= async (setProductData,setProductFilter)=>{
  const data= await getData(PRODUCT,db);
  setProductData(data);
  setProductFilter(data);
}

function nonAccentVietnamese(str) {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

function Products() {
  const [regularCheck,setRegularCheck] =useState(true);
  const [decafCheck,setDecafCheck]=useState(true);
  const [keyword, setKeyword] = useState("");
  const [productData,setProductData]=useState([]);
  const [productFilter,setProductFilter]=useState([]);
  useEffect(()=>{
    refreshData(setProductData,setProductFilter);
  },[]);
  useEffect(()=>{
    if (productData===[]){return;}
    const datafilter=productData.filter((item)=> {
      return ((item.type ==="regular" && regularCheck) || (item.type ==="decaf" && decafCheck))})
    setProductFilter(datafilter);
  },[regularCheck,decafCheck,productData])

  const searchHandle=(e)=>{
      if(e.key==='Enter'){
        if(keyword===""){
          setProductFilter(productData);
          return; 
        }
        
        const tempkeyword=nonAccentVietnamese(keyword);
        const datafilter=productData.filter((item)=> {
          return ((item.type ==="regular" && regularCheck) || (item.type ==="decaf" && decafCheck))})

        const datasearch=datafilter.filter((item)=> {
          const name=nonAccentVietnamese(item.name);
          return name.includes(tempkeyword)
        })
        setProductFilter(datasearch);
      }
  }
  return (
    <div className="App">
      <div className='main'>
          <div className='filter'>
            <div className='title'>COFFEE POWDER</div>

            <div className='rightbar'>
              <div className='rightbarname'>COFFEE TYPE</div>
              
              <div>
                <input className="form-check-input" type="checkbox" id="type1" name="type1" defaultChecked={regularCheck} onChange={()=> setRegularCheck(!regularCheck)}></input>
                <label htmlFor="type1" className='filterlabel' >Regular</label><br/>
                <input className="form-check-input" type="checkbox" id="type2" name="type2" defaultChecked={decafCheck} onChange={()=> setDecafCheck(!decafCheck)}></input>
                <label htmlFor="type2" className='filterlabel'>Decaf</label>
              </div>
            </div>
          </div>

          <div className='products'>
            <input className='search'
              key="input-search"
              type="text"
              placeholder=" Tìm kiếm..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e)=>searchHandle(e)}
            />
            <div className='pros d-flex flex-wrap'>
              {productFilter.map((product,index) => (
                <ProductCard  props={product} key={index}/>
              ))}
            </div>
          </div>

      </div>
    </div>
  );
}

export default Products;
