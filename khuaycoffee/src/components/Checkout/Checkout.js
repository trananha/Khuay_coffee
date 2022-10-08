import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'popper/dist/js/popper.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { db, getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase';
import { projectFirestore } from '../../Firebase/firebase';
import sp1 from '../../Assets/sp1.jpg';
import './form-validation.css';
import './form-validation.js';
import './checkout.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';



function Checkout() {

    // const idUser = "TtGxZVtl3Okdtkrc16Th";
    const idUser = useSelector(state => state.login.docId);

    const costTransform = 30000;
    const [dataCart, setDataCart] = useState([]);
    const getDataAll = async () => {
        // setDataProduct(await getData(PRODUCT, db));
        setDataCart(await getData(CART, db));
    }
    useEffect(() => getDataAll(), []);
    console.log(dataCart);
    var cartCustomer;
    for (var i of dataCart) {
        if (i.userID === idUser) {
            cartCustomer = i;
            console.log('find');

            // setLenList(i.listQuantity.length);
            // console.log("find");
            // setSumPrice(i.totalPrice);
            break;
        }
    }
    console.log(cartCustomer);

    const navigate = useNavigate();
    const handleOnClickHome = useCallback(() => navigate('/', { replace: true }), [navigate]);

    if (cartCustomer !== undefined) {
        return (
            <>

                <div className="container">
                    <main>
                        <div className="checkout-header text-center">
                            <h2 className="">Thanh toán</h2>
                        </div>
                        <div className="row g-5">
                            <div className="col-md-5 col-lg-5 order-md-last">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Giỏ hàng</span>
                                    {/* <span className="badge bg-primary rounded-pill">2</span> */}
                                    <span className="badge bg-primary rounded-pill">{cartCustomer.listPrice.length}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    {
                                        cartCustomer.listPrice.map((price, index) => (
                                            <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                                                <div>
                                                    <h6 className="my-0">{cartCustomer.listNameProduct[index]} </h6>
                                                    <small className="text-muted">{cartCustomer.listGrindSize[index]} , {cartCustomer.listWeightProduct[index]}</small>
                                                </div>
                                                <span className="text-muted">{price * cartCustomer.listQuantity[index]} VNĐ</span>
                                            </li>
                                        ))
                                    }
                                    {/* <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Product name</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">$12</span>
                                </li> */}
                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                        <div className="text-success">
                                            <h6 className="my-0">Phí vận chuyển</h6>
                                            <small></small>
                                        </div>
                                        <span className="text-success">{costTransform} đ</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                        <div className="text-success">
                                            <h6 className="my-0">Mã giảm giá</h6>
                                            <small></small>
                                        </div>
                                        <span className="text-success">−0 đ</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Tổng (VND)</span>
                                        <strong>{cartCustomer.totalPrice + costTransform} VNĐ</strong>
                                    </li>
                                </ul>
                                <form className="card p-2">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Nhập mã giảm giá" />
                                        <button type="submit" className="btn btn-secondary">Chọn</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-7 col-lg-7">
                                <h4 className="mb-3">Thông tin hóa đơn</h4>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" className="form-label">Họ và tên đệm</label>
                                            <input type="text" className="form-control" id="firstName" placeholder required />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="lastName" className="form-label">Tên</label>
                                            <input type="text" className="form-control" id="lastName" placeholder required />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input type="text" className="form-control" id="username" placeholder="Username" required />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div> */}
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                                            <input type="email" className="form-control" id="email" placeholder="" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Số điện thoại <span className="text-muted"></span></label>
                                            <input type="email" className="form-control" id="phone" placeholder="" />
                                            <div className="invalid-feedback">
                                                Please enter a valid phone address for shipping updates.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="address" className="form-label">Địa chỉ</label>
                                            <input type="text" className="form-control" id="address" placeholder="" required />
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="address2" className="form-label">Địa chỉ 2 <span className="text-muted"></span></label>
                                            <input type="text" className="form-control" id="address2" placeholder="" />
                                        </div>
                                        {/* <div className="col-md-5">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <select className="form-select" id="country" required>
                                                <option value>Choose...</option>
                                                <option>United States</option>
                                                <option>Vietnam</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <select className="form-select" id="state" required>
                                                <option value>Choose...</option>
                                                <option>Ho Chi Minh</option>
                                                <option>Da Nang</option>
                                                <option>Ha Noi</option>
                                                <option>Hai Phong</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder required />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* <hr className="my-4" />
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="same-address" />
                                        <label className="form-check-label" htmlFor="same-address">Địa chỉ giao hàng giống với địa chỉ thanh toán của tôi</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="save-info" />
                                        <label className="form-check-label" htmlFor="save-info">Lưu thông tin này cho lần sau</label>
                                    </div> */}
                                    <hr className="my-4" />
                                    <h4 className="mb-3">Thanh toán</h4>
                                    <div className="my-3">
                                        <div className="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required
                                                onClick={
                                                    () => {
                                                        document.querySelector('.payment-card-info').classList.add('d-none');
                                                        document.querySelector('.payment-momo-info').classList.add('d-none');
                                                    }
                                                }
                                            />
                                            <label className="form-check-label" htmlFor="credit">Thanh toán khi nhận hàng</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required
                                                onClick={
                                                    () => {
                                                        document.querySelector('.payment-momo-info').classList.remove('d-none');
                                                        document.querySelector('.payment-card-info').classList.add('d-none');
                                                    }
                                                }
                                            />
                                            <label className="form-check-label" htmlFor="debit">Momo</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required
                                                onClick={
                                                    () => {
                                                        document.querySelector('.payment-card-info').classList.remove('d-none');
                                                        document.querySelector('.payment-momo-info').classList.add('d-none');
                                                    }
                                                }
                                            />
                                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                        </div>
                                    </div>
                                    <div className="payment-momo-info row gy-3 d-none">
                                        <div className="col-md-6">
                                            <label htmlFor="cc-name" className="form-label">Số điện thoại</label>
                                            <input type="text" className="form-control" id="cc-phone" placeholder required />
                                            <small className="text-muted">Full name as displayed on card</small>
                                            <div className="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-card-info row gy-3 d-none">
                                        <div className="col-md-6">
                                            <label htmlFor="cc-name" className="form-label">Tên thẻ</label>
                                            <input type="text" className="form-control" id="cc-card" placeholder required />
                                            <small className="text-muted">Full name as displayed on card</small>
                                            <div className="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="cc-number" className="form-label">Số thẻ</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder required />
                                            <div className="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="cc-expiration" className="form-label">Hạn dùng</label>
                                            <input type="text" className="form-control" id="cc-expiration" placeholder required />
                                            <div className="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder required />
                                            <div className="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <button
                                        onClick={(event) => {
                                            // if(document.querySelector('#first-name').value) {}
                                            // console.log(document.querySelector('#first-name').value);
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // if(document.querySelector('#first-name').value) {}
                                            // cartCustomer = {};
                                            // cartCustomer.userID = idUser;

                                            var checkForm = true;
                                            if (document.getElementById('firstName').value.length == 0) {
                                                alert('Vui lòng nhập họ tên');
                                                checkForm = false;
                                                event.preventDefault();
                                            }
                                            else{
                                                if (document.getElementById('lastName').value.length == 0) {
                                                    alert('Vui lòng nhập họ tên');
                                                    checkForm = false;
                                                }
                                                else {
                                                    if (document.getElementById('phone').value.length == 0) {
                                                        alert('Vui lòng nhập số điện thoại');
                                                        checkForm = false;
                                                    }
                                                    else {
                                                        if (document.getElementById('address').value.length == 0) {
                                                            alert('Vui lòng nhập địa chỉ');
                                                            checkForm = false;
                                                        }
                                                    }
                                                }
                                                event.preventDefault()
                                            }
                                            if (checkForm) {
                                                var NewOder = {};
                                                NewOder.customerid = idUser;
                                                var orderDate = new Date();
                                                NewOder.purchasedate = orderDate.getDate() + '/' + (orderDate.getMonth() + 1) + '/' + orderDate.getFullYear();
                                                NewOder.list_nameProduct = cartCustomer.listNameProduct;
                                                NewOder.list_quantity = cartCustomer.listQuantity;
                                                NewOder.totalmoney = cartCustomer.totalPrice + costTransform;
                                                NewOder.list_price = cartCustomer.listPrice;
                                                NewOder.ID = cartCustomer.docId;
                                                addData(NewOder, ORDER, db);

                                                alert('Xác nhận đơn hàng thành công. Chúng tôi sẽ sớm gửi hàng cho bạn');

                                                console.log(NewOder);
                                                cartCustomer.listGrindSize = [];
                                                cartCustomer.listIdProduct = [];
                                                cartCustomer.listPrice = [];
                                                cartCustomer.listWeightProduct = [];
                                                cartCustomer.listNameProduct = [];
                                                cartCustomer.listQuantity = [];
                                                cartCustomer.totalPrice = Number(0);
                                                // console.log(document.getElementById('qty').value);
                                                // console.log(Number(priceProduct));
                                                updateData(cartCustomer, cartCustomer.docId, CART, db);
                                                // deleteData(cartCustomer.docId, CART, db );
                                                handleOnClickHome();
                                            }


                                        }}
                                        className="w-100 btn btn-primary btn-lg" type="submit">Xác nhận thanh toán</button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>

            </>
        )
    }
    return (
        <>
        </>
    )
}


export default Checkout;