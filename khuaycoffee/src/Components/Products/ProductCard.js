import './index.css'


function ProductCard (product)
{
    console.log("producy",product.props)
    return (
        <div className='product'>
          <div className='container'>
            <img src={""} alt='product'></img>
          </div>
          <h6>{product.props.name}</h6>
          <h6>{product.props.price+" VND"}</h6>
          <div className='add'>
            Thêm vào giỏ hàng
          </div>  
        </div>
    );
}

export default ProductCard;