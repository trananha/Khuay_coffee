import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard (product)
{
    const navigate=useNavigate();
    const handleOnClickAdmin = useCallback(() => navigate('/product/'+product.props.docId, {replace: true}), [navigate]);
    return (
        <div className='product'>
          <div className='container'>
            <img src="https://i.ibb.co/rMLQdcg/1cd3270b54457b-img-2478.png" alt='product' onClick={handleOnClickAdmin} style={{cursor:"pointer"}}></img>
          </div>
          <h6 className='cardname'>{product.props.name}</h6>
          <h6 className='cardprice'>{product.props.price+" VND"}</h6>
          <div onClick={handleOnClickAdmin} className='add'>
            Xem thông tin chi tiết
          </div>  
        </div>
    );
}

export default ProductCard;