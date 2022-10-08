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
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
// var id = "SP01";
// var idUser = "KH02";

// function ProductDetail({ id, idUser }) {
function ProductDetail() {
    // test
    let { id } = useParams();
    const idUser = useSelector(state=>state.login.docId);
    // const custumerid = useSelector(state=>state.login);
    console.log( "user" ,idUser);
    // console.log( "customer id" ,custumerid);
    console.log("id", id);

    const listGrindDetail = [
        ["Espresso", "Bình Moka", "Aeropress"],
        ["Bình Pour-over hình phễu", "Aeropress"],
        ["Bình Pour-over hình phễu", "Bình pha cà phê đáy phẳng", "Siphon, Aeropress (thời gian pha lâu hơn 3 phút)"],
        ["French Press", "Bình pha cà phê (Percolator)", "Thử cà phê (Cupping)"]
    ]

    const [grind, setGrind] = useState("Mịn");
    const [weight, setWeight] = useState("");
    var [grindSize, showGrindSize] = useState(listGrindDetail[0]);
    const [cartSide, showCartSide] = useState(false);
    // const [dataCustomer, setDataCustomer] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const getDataAll = async () => {
        // setDataCustomer(await getData(CUSTOMER, db));
        setDataProduct(await getData(PRODUCT, db));
        setDataCart(await getData(CART, db));
    }
    var cartCustomer;
    for (var i of dataCart) {
        if (i.userID === idUser) {
            cartCustomer = i;
            // setLenList(i.listQuantity.length);
            // console.log("find");
            // setSumPrice(i.totalPrice);
            break;
        }
    }
    console.log(cartCustomer);
    // console.log(dataCustomer);
    useEffect(() => getDataAll(), []);

    // console.log(dataCustomer);
    // console.log(dataProduct);
    // console.log(dataCart);
    // console.log('after');


    // console.log(DataProduct);
    // console.log(id);
    // var product = getData(PRODUCT, db);
    // console.log(product);
    var productDetail = {};
    for (var i of dataProduct) {
        if (i.docId === id) {
            productDetail = i;
            // console.log("find");
            break;
        }
    }
    // console.log(productDetail);
    // const [priceProduct, setPriceProduct] = useState(productDetail.price/4);
    const [priceProduct, setPriceProduct] = useState(0);
    // console.log('set')
    // const [sumPrice, setSumPrice] = useState(0);


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
                                {/* <img src={sp1} className="img-product img-fluid" alt="ảnh sản phẩm" /> */}
                                <img src="https://i.ibb.co/rMLQdcg/1cd3270b54457b-img-2478.png" className="img-product img-fluid" alt="ảnh sản phẩm" />
                                {/* <img src="https://i.ibb.co/19k7J93/s-ng-o-5.jpg" className="img-product img-fluid" alt="ảnh sản phẩm" /> */}

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
                                                    <input onClick={() => {showGrindSize(listGrindDetail[0]); setGrind("Mịn")}} type="radio" id="min" name="grind" defaultValue="Mịn" defaultChecked="checked" />
                                                    <label htmlFor="min">Mịn</label><br />
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => {showGrindSize(listGrindDetail[1]); setGrind("Hơi mịn")}} type="radio" id="hoi-min" name="grind" defaultValue="Hơi mịn" />
                                                    <label htmlFor="hoi-min">Hơi mịn</label><br />
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => {showGrindSize(listGrindDetail[2]); setGrind("Vừa")}} type="radio" id="vua" name="grind" defaultValue="Vừa" />
                                                    <label htmlFor="vua">Vừa</label>
                                                </div>
                                                <div className="input-grind">
                                                    <input onClick={() => {showGrindSize(listGrindDetail[3]); setGrind("Thô")}} type="radio" id="tho" name="grind" defaultValue="Thô" />
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
                                                        <input onChange={() => {setPriceProduct(productDetail.price/4); setWeight("250g")}} type="radio" id="250g" name="weight" defaultValue="250g"/>
                                                        <label htmlFor="250g">250g</label><br />
                                                    </div>
                                                    <div className="input-grind">
                                                        <input onChange={() => {setPriceProduct(productDetail.price*8); setWeight("10kg")}} type="radio" id="10kg" name="weight" defaultValue="10kg" />
                                                        <label htmlFor="10kg">10kg</label><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="col-4">

                                                        <div className="input-qty prefix">
                                                            <p className="bold">Số lượng:</p>
                                                            <button className="change-qty" onClick={() => { var num = document.getElementById('qty');  var qty = num.value; if (qty > 1) num.value--; }} type="button">
                                                                <i className="fa fa-minus-circle" aria-hidden="true"></i></button>
                                                            <input id="qty" type="text" maxLength={4} defaultValue={1} onChange={(e) => { var num = document.getElementById('qty'); if (num.value === "0") num.value = 1; console.log(e.target.value); }} />
                                                            <button className="change-qty" onClick={() => { var num = document.getElementById('qty');  var qty = num.value; if (qty < 999) num.value++; }} type="button">
                                                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="product-price prefix">
                                                            <p className="text-start bold">Giá:</p>
                                                            <p className="text-end">{priceProduct} đ</p>
                                                            {/* {console.log(priceProduct)} */}
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
                                                                    // cartCustomer.listGrindSize.push()
                                                                    if(cartCustomer === undefined){
                                                                        cartCustomer = {};
                                                                        cartCustomer.userID = idUser;
                                                                        cartCustomer.listGrindSize = [grind];
                                                                        cartCustomer.listIdProduct = [productDetail.ID];
                                                                        cartCustomer.listPrice = [priceProduct];
                                                                        cartCustomer.listWeightProduct = [weight];
                                                                        cartCustomer.listNameProduct = [productDetail.name];
                                                                        cartCustomer.listQuantity = [Number(document.getElementById('qty').value)];
                                                                        cartCustomer.totalPrice = Number(document.getElementById('qty').value) * Number(priceProduct);
                                                                        // console.log(document.getElementById('qty').value);
                                                                        // console.log(Number(priceProduct));
                                                                        addData(cartCustomer, CART, db);
                                                                        showCartSide(!cartSide);
                                                                    }
                                                                    else{
                                                                        var count = cartCustomer.listGrindSize.length;
                                                                        let check = false;
                                                                        for (var iCount = 0; iCount < count; iCount++){
                                                                            if(cartCustomer.listIdProduct[iCount] === productDetail.ID && cartCustomer.listWeightProduct[iCount] === weight && cartCustomer.listGrindSize[iCount] === grind){
                                                                                cartCustomer.listQuantity[iCount] += Number(document.getElementById('qty').value) ;
                                                                                check = true;
                                                                            }
                                                                        }
                                                                        if(!check){
                                                                            cartCustomer.listGrindSize.push(grind);
                                                                            cartCustomer.listIdProduct.push(productDetail.ID);
                                                                            cartCustomer.listPrice.push(priceProduct);
                                                                            cartCustomer.listQuantity.push( Number(document.getElementById('qty').value) );
                                                                            cartCustomer.listWeightProduct.push(weight);
                                                                            cartCustomer.listNameProduct.push(productDetail.name);
                                                                        }
                                                                        // console.log(priceProduct);
                                                                        // console.log(weight);
                                                                        // console.log(document.getElementById('qty').value);
                                                                        
                                                                        cartCustomer.totalPrice += Number(document.getElementById('qty').value) * Number(priceProduct);
                                                                        updateData(cartCustomer, cartCustomer.docId, CART, db);
                                                                        showCartSide(!cartSide);
                                                                    }
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
            {cartSide && <Cart showCartSide = {showCartSide} cartCustomer = {cartCustomer} />}
            {/* {cartSide && <Cart idUser = {idUser} showCartSide = {showCartSide} cartCustomer = {cartCustomer} />} */}
        </>
    )
}

export default ProductDetail;
