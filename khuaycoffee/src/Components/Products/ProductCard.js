import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductCard (product)
{
    console.log("producy",product.props)
    return (
        <div className='product'>
          <div className='container'>
            <img src="https://i.ibb.co/rMLQdcg/1cd3270b54457b-img-2478.png" alt='product'></img>
          </div>
          <h6 className='cardname'>{product.props.name}</h6>
          <h6 className='cardprice'>{product.props.price+" VND"}</h6>
          <div className='add'>
            Thêm vào giỏ hàng
          </div>  
        </div>
    );
}

export default ProductCard;