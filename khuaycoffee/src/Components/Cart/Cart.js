import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './cart.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { db, getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase';
import { projectFirestore } from '../../Firebase/firebase';
import sp1 from '../../assets/sp1.jpg';

// function Cart({ idUser, id, quantity, grindSize }) {
function Cart({ idUser }) {
    var cartCustomer;
    const [sumPrice, setSumPrice] = useState(0);
    // const [lenList, setLenList] = useState(0);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataCart, setDataCart] = useState([]);
    const getDataAll = async () => {
        setDataProduct(await getData(PRODUCT, db));
        setDataCart(await getData(CART, db));

    }
    for (var i of dataCart) {
        if (i.idUser === idUser) {
            cartCustomer = i;
            // setLenList(i.listQuantity.length);
            console.log("find");
            break;
        }
    }
    useEffect(() => getDataAll(), []);

    console.log(dataProduct);
    console.log(dataCart);
    console.log('after');



    // console.log(cartCustomer);
    if (cartCustomer !== undefined) {
        console.log(cartCustomer);
        return (
            <>
                <div className="body-cart">
                    <div id="CartDrawer" className="cart-sidebar active">
                        <div className="clearfix cart_heading">
                            <h4 className="cart_title">Giỏ hàng</h4>
                            <div className="cart_btn-close" title="Đóng giỏ hàng">
                                <svg className="Icon Icon--close" viewBox="0 0 16 14">
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
                                                <div key={index}>
                                                    {/* <h1>{cart}</h1>
                                                    {console.log(index)}
                                                    <h2>abc</h2> */}
                                                    <div className="ajaxcart__row">
                                                        <div className="ajaxcart__product cart_product" data-line={1}>
                                                            <div className="cart_image">
                                                                <img width={80} height={80} src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" alt="Cà phê Khuây chữ G" />
                                                            </div>
                                                            <div className="grid__item cart_info">
                                                                <div className="ajaxcart__product-name-wrapper cart_name">
                                                                    <p>{cartCustomer.listNameProduct[index]}</p>
                                                                    <span className="ajaxcart__product-meta variant-title">Khối lượng: {cartCustomer.listWeightProduct[index]}</span>
                                                                </div>
                                                                <div className="grid">
                                                                    <div className="grid__item one-half cart_select cart_item_name">
                                                                        <label className="cart_quantity">Số lượng</label>
                                                                        <div className="ajaxcart__qty input-group-btn clearfix">
                                                                            <button type="button"
                                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (qty > 1) result.value--; }}
                                                                                className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count" data-id data-qty={0} data-line={1} aria-label="-"
                                                                            >
                                                                                -
                                                                            </button>
                                                                            <input type="text" name="updates[]" maxLength={3} defaultValue={cart} min={0} data-id data-line={1}
                                                                                className="ajaxcart__qty-num number-sidebar" aria-label="quantity"
                                                                                onChange={(event) => { console.log(event.target); if (event.target.value === "0") event.target.value = 1; }} pattern="[0-9]*"
                                                                            />
                                                                            <button type="button"
                                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (!isNaN(qty)) result.value++; }}
                                                                                className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count" data-id data-line={1} data-qty={2} aria-label="+"
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid__item one-half text-right cart_prices">
                                                                        <span className="cart-price">{cartCustomer.listPri} ₫</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))


                                        }
                                        {/* <div className="ajaxcart__row">
                                        <div className="ajaxcart__product cart_product" data-line={1}>
                                            <div className="cart_image">
                                                <img width={80} height={80} src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" alt="Cà phê Khuây chữ G" />
                                            </div>
                                            <div className="grid__item cart_info">
                                                <div className="ajaxcart__product-name-wrapper cart_name">
                                                    <p>Cà phê Khuây chữ G</p>
                                                    <span className="ajaxcart__product-meta variant-title">Khối lượng: 250g</span>
                                                </div>
                                                <div className="grid">
                                                    <div className="grid__item one-half cart_select cart_item_name">
                                                        <label className="cart_quantity">Số lượng</label>
                                                        <div className="ajaxcart__qty input-group-btn clearfix">
                                                            <button type="button"
                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (qty > 1) result.value--; }}
                                                                className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count" data-id data-qty={0} data-line={1} aria-label="-"
                                                            >
                                                                -
                                                            </button>
                                                            <input type="text" name="updates[]" maxLength={3} defaultValue={1} min={0} data-id data-line={1}
                                                                className="ajaxcart__qty-num number-sidebar" aria-label="quantity"
                                                                onChange={(event) => { console.log(event.target); if (event.target.value === "0") event.target.value = 1; }} pattern="[0-9]*"
                                                            />
                                                            <button type="button"
                                                                onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (!isNaN(qty)) result.value++; }}
                                                                className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count" data-id data-line={1} data-qty={2} aria-label="+"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="grid__item one-half text-right cart_prices">
                                                        <span className="cart-price">500.000₫</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ajaxcart__row">
                                        <div className="ajaxcart__product cart_product" data-line={1}>
                                            <div className="cart_image">
                                                <img width={80} height={80} src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" alt="GIÀY Adidas Ultraboost DNA X LEGO đỏ" />
                                            </div>
                                            <div className="grid__item cart_info">
                                                <div className="ajaxcart__product-name-wrapper cart_name">
                                                    <p>Cà phê Khuây chữ I</p>
                                                    <span className="ajaxcart__product-meta variant-title">Khối lượng: 250g</span>
                                                </div>
                                                <div className="grid">
                                                    <div className="grid__item one-half cart_select cart_item_name">
                                                        <label className="cart_quantity">Số lượng</label>
                                                        <div className="ajaxcart__qty input-group-btn clearfix">
                                                            <button type="button" onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (qty > 1) result.value--; }} className="ajaxcart__qty-adjust ajaxcart__qty--minus items-count" data-id data-qty={0} data-line={1} aria-label="-">
                                                                -
                                                            </button>
                                                            <input type="text" name="updates[]" className="cart_qty" maxLength={3} defaultValue={1} min={0} data-id data-line={1} aria-label="quantity" onChange={(event) => { if (event.target.value === "0") event.target.value = 1; }} pattern="[0-9]*" />
                                                            <button type="button" onClick={(event) => { var result = event.target.parentNode.childNodes[1]; var qty = result.value; if (!isNaN(qty)) result.value++; }} className="ajaxcart__qty-adjust ajaxcart__qty--plus items-count" data-id data-line={1} data-qty={2} aria-label="+">
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="grid__item one-half text-right cart_prices">
                                                        <span className="cart-price">500.000₫</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}





                                    </div>
                                    <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">

                                        {/* <h1>{cartCustomer.idUser}</h1>
                                        {cartCustomer.listQuantity.map((cart, index) => (
                                                <h2>{cart}</h2>
                                            ))} */}




                                    </div>
                                    <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                                        <div className="ajaxcart__subtotal">
                                            <div className="cart__subtotal">
                                                <div className="cart__col-6">Tổng tiền:</div>
                                                <div className="text-right cart__totle"><span className="total-price">1.000.000₫</span></div>
                                            </div>
                                        </div>
                                        <div className="cart__btn-proceed-checkout-dt">
                                            <button type="button" className="button btn btn-default cart__btn-proceed-checkout" id="btn-proceed-checkout" title="Thanh toán">Thanh toán</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="background-body active" />
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