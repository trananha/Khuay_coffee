import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './cart.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { db, getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase';
import { projectFirestore } from '../../Firebase/firebase';
import sp1 from '../../Assets/sp1.jpg';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// function Cart({ idUser, id, quantity, grindSize }) {
function Cart({ showCartSide, cartCustomer }) {
    // var cartCustomer;
    const [sumPrice, setSumPrice] = useState(0);
    // const [lenList, setLenList] = useState(0);
    // const [dataProduct, setDataProduct] = useState([]);
    // const [dataCart, setDataCart] = useState([]);
    // const getDataAll = async () => {
    //     setDataProduct(await getData(PRODUCT, db));
    //     setDataCart(await getData(CART, db));
    // }
    // for (var i of dataCart) {
    //     if (i.idUser === idUser) {
    //         cartCustomer = i;
    //         // setLenList(i.listQuantity.length);
    //         console.log("find");
    //         // setSumPrice(i.totalPrice);
    //         break;
    //     }
    // }
    // useEffect(() => getDataAll(), []);

    // console.log(dataProduct);
    // console.log(dataCart);
    // console.log('after');



    // console.log(cartCustomer);

    const navigate = useNavigate();
    // const handleOnClickHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
    const handleOnClickCheckout = useCallback(() => navigate('/checkout', {replace: true}), [navigate]);
    if (cartCustomer !== undefined) {
        console.log(cartCustomer);
        console.log(cartCustomer);
        return (
            <>
                <div className="body-cart">
                    <div id="CartDrawer" className="cart-sidebar active">
                        <div className="clearfix cart_heading">
                            <h4 className="cart_title">Giỏ hàng</h4>
                            <div className="cart_btn-close" title="Đóng giỏ hàng"
                                onClick={() => showCartSide(false)}
                            >
                                <svg onClick={() => showCartSide(false)} className="Icon Icon--close" viewBox="0 0 16 14">
                                    <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <div className="drawer__inner">
                            <div id="CartContainer" className="CartSideContainer">
                                <form action method="post" noValidate className="cart ajaxcart">
                                    <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">
                                        {
                                            //  console.log(cartCustomer.listQuantity.length) 
                                            
                                            cartCustomer.listQuantity.map((cart, index) => (
                                                // {setSumPrice(1)}
                                                <div key={index}>
                                                    <div className="ajaxcart__row">
                                                        <div className="ajaxcart__product cart_product" data-line={1}>
                                                            <div className="cart_image">
                                                                <img width={80} height={95} src="https://i.ibb.co/rMLQdcg/1cd3270b54457b-img-2478.png" alt="Cà phê Khuây chữ G" />
                                                            </div>
                                                            <div className="grid__item cart_info">
                                                                <div className="ajaxcart__product-name-wrapper cart_name">
                                                                    <p>{cartCustomer.listNameProduct[index]}</p>
                                                                    <div className="">
                                                                        <span className="ajaxcart__product-meta variant-title float-start">Khối lượng: {cartCustomer.listWeightProduct[index]}</span>
                                                                        <span className="ajaxcart__product-meta variant-title text-end">Kích cỡ xay: {cartCustomer.listGrindSize[index]}</span>
                                                                    </div>

                                                                </div>
                                                                <div className="grid">
                                                                    <div className="grid__item one-half cart_select cart_item_name">
                                                                        <label className="cart_quantity">Số lượng</label>
                                                                        <div className="ajaxcart__qty input-group-btn clearfix">
                                                                            <button type="button"
                                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (qty > 1) { result.value--;  var tt = document.querySelector('.cart__total.cart_total_price .total-price'); tt.innerText= tt.innerText - cartCustomer.listPrice[index];} }}
                                                                                // onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var tt = document.querySelector('cart-price');; tt.innerHTML = tt.innerHTML - cartCustomer.listPrice[index]; var qty = result.value; if (qty > 1) result.value--; }}
                                                                                className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count" data-id data-qty={0} data-line={1} aria-label="-"
                                                                            >
                                                                                -
                                                                            </button>
                                                                            <input type="text" name="updates[]" maxLength={3} defaultValue={cart} min={0} data-id data-line={1}
                                                                                className="ajaxcart__qty-num number-sidebar" aria-label="quantity"
                                                                                onChange={(event) => { console.log(event.target);}} pattern="[0-9]*"
                                                                            />
                                                                            <button type="button"
                                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (!isNaN(qty)){ result.value++; var tt = document.querySelector('.cart__total.cart_total_price .total-price'); tt.innerText= Number(tt.innerText) + cartCustomer.listPrice[index];} }}
                                                                                className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count" data-id data-line={1} data-qty={2} aria-label="+"
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid__item one-half text-right cart_prices">
                                                                        <span className="cart-price">{cartCustomer.listPrice[index]} ₫</span>
                                                                        {/* <span onClick= {(e) => {var tt = document.querySelector('.cart__total.cart_total_price .total-price'); tt.innerText= Number(tt.innerText) - (cartCustomer.listPrice[index] * document.querySelector('.ajaxcart__qty-num.number-sidebar').value);  console.log(document.querySelector('.ajaxcart__qty-num.number-sidebar'));}} */}
                                                                        {/* <span onClick= {(e) => {console.log(e.target.parentNode.parentNode.parentNode)}} */}
                                                                        <span onClick = {(e) => 
                                                                            {
                                                                                console.log(e.target.parentNode.parentNode.parentNode.children[0].children[0].innerText);
                                                                                var textName = e.target.parentNode.parentNode.parentNode.children[0].children[0].innerText;
                                                                                // console.log(e.target.parentNode.parentNode.parentNode.children[0].children[0].innerText);
                                                                                // console.log(e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].innerText);
                                                                                var textWeight = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].innerText;
                                                                                textWeight = textWeight.slice(12);
                                                                                // console.log(textWeight);
                                                                                // console.log(e.target.parentNode.parentNode.parentNode.children[0].children[1].children[1].innerText);
                                                                                var textGrind = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[1].innerText;
                                                                                textGrind = textGrind.slice(13);
                                                                                // console.log(textGrind);
                                                                                var count = cartCustomer.listGrindSize.length;
                                                                                for (var iCount = 0; iCount < count; iCount++){
                                                                                    if(cartCustomer.listNameProduct[iCount]===textName && cartCustomer.listWeightProduct[iCount] === textWeight && cartCustomer.listGrindSize[iCount] === textGrind){
                                                                                        cartCustomer.totalPrice -= cartCustomer.listQuantity[iCount] * cartCustomer.listPrice[iCount];
                                                                                        cartCustomer.listNameProduct.splice(iCount, 1);
                                                                                        cartCustomer.listWeightProduct.splice(iCount, 1);
                                                                                        cartCustomer.listGrindSize.splice(iCount, 1);
                                                                                        cartCustomer.listPrice.splice(iCount, 1);
                                                                                        cartCustomer.listQuantity.splice(iCount, 1);
                                                                                        cartCustomer.listIdProduct.splice(iCount, 1);
                                                                                        // console.log('cart')
                                                                                        // console.log(cartCustomer);
                                                                                        break;
                                                                                    }
                                                                                }
                                                                                setSumPrice(cartCustomer.totalPrice);
                                                                                updateData(cartCustomer, cartCustomer.docId, CART, db);
                                                                            }
                                                                        }
                                                                         className="cart-delete">Xóa</span>
                                                                        {/* <span className="cart-price"> ₫</span> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))


                                        }
                                    </div>
                                    <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">

                                    </div>
                                    <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                                        <div className="ajaxcart__subtotal">
                                            <div className="cart__subtotal">
                                                <div className="cart__col-6">Tổng tiền:</div>
                                                <div className="text-right cart__total cart_total_price"><span className="total-price"> {(cartCustomer.totalPrice) }</span></div>
                                                <div className="text-right cart__total"><span className="total-price"> ₫</span></div>
                                                {/* <div className="text-right cart__totle"><span className="total-price"> {} ₫</span></div> */}
                                            </div>
                                        </div>
                                        <div className="cart__btn-proceed-checkout-dt">
                                            <button onClick = {handleOnClickCheckout}
                                             type="button" className="button btn btn-default cart__btn-proceed-checkout" id="btn-proceed-checkout" title="Thanh toán">Thanh toán</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="background-body active"
                        onClick={() => showCartSide(false)} />
                </div>
            </>
        )

    }
    else {
        console.log('null');
    }
    // console.log(cartCustomer);

    // const getLenList = async () => {
    //     setLenList(await cartCustomer.listQuantity.length);
    //     console.log(lenList);
    // }

    // useEffect(() => getLenList(), []);

    // if (cartCustomer !== {}){
    //     console.log(cartCustomer.listQuantity);
    // }
    // const lenList = cartCustomer.listQuantity.length;
    // console.log(lenList);
    // cartCustomer && console.log(cartCustomer.listQuantity.length);

    // const calcSum = () => { 

    // }

    // setSumPrice(calcSum);

    return (
        <>

        </>
    )
}

export default Cart

// 