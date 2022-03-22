import './index.css'
import product from '../../Assets/sp1.jpg'

function ProductCard ()
{
    return (
        <div className='product'>
          <div className='container'>
            <img src={product} alt='product'></img>
          </div>
          <div className='add'>
            Thêm vào giỏ hàng
          </div>  
        </div>
    );
}

export default ProductCard;