import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './productDetail.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { db, getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase';
import { projectFirestore } from '../../Firebase/firebase';
import  Cart  from '../Cart/Cart';
import sp1 from '../../Assets/sp1.jpg';

function ProductDetail({ id, idUser }) {

    const listGrindDetail = [
        ["Espresso", "Bình Moka", "Aeropress"],
        ["Bình Pour-over hình phễu", "Aeropress"],
        ["Bình Pour-over hình phễu", "Bình pha cà phê đáy phẳng", "Siphon, Aeropress (thời gian pha lâu hơn 3 phút)"],
        ["French Press", "Bình pha cà phê (Percolator)", "Thử cà phê (Cupping)"]
    ]

    var [grindSize, showGrindSize] = useState(listGrindDetail[0]);
    const [cartSide, showCartSide] = useState(false);
    const [dataCustomer, setDataCustomer] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const getDataAll = async () => {
        setDataCustomer(await getData(CUSTOMER, db));
        setDataProduct(await getData(PRODUCT, db));
        setDataCart(await getData(CART, db));
    }
    // console.log(dataCustomer);
    useEffect(() => getDataAll(), []);

    console.log(dataCustomer);
    console.log(dataProduct);
    console.log(dataCart);
    console.log('after');


    // console.log(DataProduct);
    // console.log(id);
    // var product = getData(PRODUCT, db);
    // console.log(product);
    var productDetail = {};
    for (var i of dataProduct) {
        if (i.ID === id) {
            productDetail = i;
            console.log("find");
            break;
        }
    }
    console.log(productDetail);
    // const [priceProduct, setPriceProduct] = useState(productDetail.price/4);
    const [priceProduct, setPriceProduct] = useState(0);


    // function AddCart() {
    //     showCartSide(!cartSide);
    // }
    return (
        <>
        {/* {setPriceProduct(productDetail.price/4)} */}
            <div className="body-product">
                <div className="container">
                    <div className="detail-product">
                        <div className="row">
                            <div className="col-5">
                                <img src={sp1} className="img-product img-fluid" alt="ảnh sản phẩm" />

                            </div>
                            <div className="col-7 prefix">
                                <div className="detail-product-header">
                                    <h2>{productDetail.name}</h2>
                                </div>
                                <div className="detail-product-bot">
                                    <form id="add-to-cart">
                                        <div className="row">
                                            <div className="col-4">
                                                <p>Kích cỡ xay:</p>
                                                <div className="input-grind">
                                                    <input onClick={() => showGrindSize(listGrindDetail[0])} type="radio" id="min" name="grind" defaultValue="Mịn" defaultChecked="checked" />
                                                    <label htmlFor="min">Mịn</label><br />
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => showGrindSize(listGrindDetail[1])} type="radio" id="hoi-min" name="grind" defaultValue="Hơi mịn" />
                                                    <label htmlFor="hoi-min">Hơi mịn</label><br />
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => showGrindSize(listGrindDetail[2])} type="radio" id="vua" name="grind" defaultValue="Vừa" />
                                                    <label htmlFor="vua">Vừa</label>
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => showGrindSize(listGrindDetail[3])} type="radio" id="tho" name="grind" defaultValue="Thô" />
                                                    <label htmlFor="tho">Thô</label>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="product-element">
                                                    <p className="bold">Thành phần:</p>
                                                    <p>{productDetail.makeof}</p>
                                                </div>
                                                {/* <div className="caffeine">
                                                    <p className="bold">Hàm lượng caffeine:</p>
                                                    <p>{productDetail.content}</p>
                                                </div> */}
                                                <div className="input-weight">
                                                    <p className="bold">Khối lượng:</p>
                                                    <div className="input-grind">
                                                        {/* <input onLoad={setPriceProduct(productDetail.price/4)} type="radio" id="250g" name="weight" defaultValue="250g" defaultChecked="checked" /> */}
                                                        <input onChange={() => setPriceProduct(productDetail.price/4)} type="radio" id="250g" name="weight" defaultValue="250g"/>
                                                        <label htmlFor="250g">250g</label><br />
                                                    </div>
                                                    <div className="input-grind">
                                                        <input onChange={() => setPriceProduct(productDetail.price*8)} type="radio" id="10kg" name="weight" defaultValue="10kg" />
                                                        <label htmlFor="10kg">10kg</label><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="col-4">

                                                        <div className="input-qty prefix">
                                                            <p className="bold">Số lượng:</p>
                                                            <button className="change-qty" onClick={() => { var num = document.getElementById('qty'); console.log(num); var qty = num.value; if (qty > 1) num.value--; }} type="button">
                                                                <i className="fa fa-minus-circle" aria-hidden="true"></i></button>
                                                            <input id="qty" type="text" maxLength={4} defaultValue={1} onChange={() => { var num = document.getElementById('qty'); if (num.value === "0") num.value = 1; }} />
                                                            <button className="change-qty" onClick={() => { var num = document.getElementById('qty'); var qty = num.value; if (qty < 999) num.value++; }} type="button">
                                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="product-price prefix">
                                                            <p className="text-start bold">Giá:</p>
                                                            <p className="text-end">{priceProduct} đ</p>
                                                            {console.log(priceProduct)}
                                                            {/* <p className="text-end">{productDetail.price} đ</p> */}
                                                        </div>
                                                        <button type="button" className="btn btn-primary btn-lg btn-gray btn-cart btn_buy add_to_cart"
                                                            onClick={() =>{
                                                                // var idUsernew = idUser;
                                                                if (priceProduct === 0){
                                                                    alert('Vui lòng chọn khối lượng');
                                                                }
                                                                else {
                                                                    // AddCart();
                                                                    // var price = priceProduct;
                                                                    showCartSide(!cartSide);
                                                                }
                                                                
                                                            } }
                                                        >
                                                            Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-product">
                        <div className="row">
                            <div className="col-6">
                                <div className="about-coffee">
                                    <h2 className="text-center">Mô tả</h2>
                                    <p>{productDetail.description}</p>
                                </div>
                                <hr />
                                <div className="hint">
                                    <h2 className="text-center">Gợi ý:</h2>
                                    <ul>
                                        {
                                            grindSize.map((grind, index) => (
                                                <li key={index}>{grind}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 about-img">
                                <img src="https:thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg" className="img-fluid" alt="hình ảnh về cà phê" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {cartSide && <Cart idUser = {idUser} showCartSide = {showCartSide} />}
        </>
    )
}

export default ProductDetail;