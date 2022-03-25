import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';
import './productDetail.css';
import { useState } from 'react';
import {getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase'
import { projectFirestore } from '../../Firebase/firebase';

function ProductDetail() {
    var product = getData(PRODUCT);
    console.log(product);

    const [productDetail, showProductDetail] = useState ([
        {id: '1', name: 'Cà phê Ánh Sáng G', price: 100000, component: 'Arabica, Robusta, Excelsa, Catimor', mass: 250, image: 'https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/sang20tao204-218569j9752.jpg' },
        {id: '2', name: 'Cà phê Ánh Sáng I', price: 200000, component: 'Arabica, Aname, Excelsa, Canama', weight: 250, image: 'https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/sang20tao204-218569j9752.jpg' },
        {id: '3', name: 'Cà phê Sáng Tạo G', price: 100000, component: 'Araha, Robita, Exescia, Catimor', weight: 250, image: 'https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/sang20tao204-218569j9752.jpg' },
        {id: '4', name: 'Cà phê Sáng Tạo I', price: 100000, component: 'Akaca, Robusta, Manala, Chacimo', weight: 250, image: 'https://trungnguyencoffeevn.com/wp-content/uploads/2018/09/sang20tao204-218569j9752.jpg' }
    ])
    // let [cart, showCart] = useState([
    //     {id:};
    // ])
    function CloseCart() {
        var cart = document.getElementById("CartDrawer");
        // console.log(cart);
        cart.classList.remove("active");
        document.querySelector(".background-body").classList.remove("active");
    }
    function DeleteCartProduct(a) {
        // console.log(a);
        while (!a.parentNode.classList.contains("ajaxcart__row")) {
            a = a.parentNode;
        }
        a.remove();
        // a.parentNode.classList.add("mustDelete");
        // document.querySelector(".ajaxcart__row.mustDelete").remove();
    }
    function AddCart() {
        // console.log("add");
        var cart = document.getElementById("CartDrawer");
        cart.classList.add("active");
        document.querySelector(".background-body").classList.add("active");
        var newCart = document.createElement("div");
        newCart.innerHTML = `\
        <div class="ajaxcart__product cart_product" data-line="1">\
            <div class="cart_image">\
                <img width="80" height="80"\
                    src="${document.querySelector(".detail-product .img-product").src}"\
                    alt="${document.querySelector(".detail-product-header h2").innerText}"> </img>\
            </div>\
            <div class="grid__item cart_info">\
                <div class="ajaxcart__product-name-wrapper cart_name">\
                    <p>${document.querySelector(".detail-product-header h2").innerText}</p>\
                    <span class="ajaxcart__product-meta variant-title">500.000đ</span>\
                </div>\
                <div class="grid">\
                    <div class="grid__item one-half cart_select cart_item_name">\
                        <label class="cart_quantity">Số lượng</label>\
                        <div class="ajaxcart__qty input-group-btn clearfix">\
                            <button type="button"\
                            onclick="var result = this.parentNode.childNodes[3]; var qty = result.value; if( qty > 1 ) result.value--;\
                                this.parentNode.childNodes[3].value = result.value;"\
                                class="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"\
                                data-id="" data-qty="0" data-line="1" aria-label="-">\
                                -\
                            </button>\
                            <input type="text" name="updates[]"\
                                class="ajaxcart__qty-num number-sidebar" maxlength="3" value=${document.querySelector("#qty").value}\
                                min="0" data-id="" data-line="1" aria-label="quantity"\
                                pattern="[0-9]*"> </input>\
                            <button type="button"\
                                onclick=" var result = this.parentNode.childNodes[3]; var qty = result.value; if( !isNaN(qty)) result.value++;"\
                                class="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"\
                                data-id="" data-line="1" data-qty="2" aria-label="+">\
                                +\
                            </button>\
                        </div>\
                    </div>\
                    <div class="grid__item one-half text-right cart_prices">\
                        <span class="cart-price">${document.querySelector('.product-price p.text-end').innerText}</span>\
                        <a 
                            onclick="console.log(this); var = this; while(!a.parentNode.classList.contains('ajaxcart__row')) a = a.parentNode; a.remove();" \
                            class="cart__btn-remove remove-item-cart ajaxifyCart--remove"\
                            href="javascript:;" data-line="1">Xóa</a>\
                    </div>\
                </div>\
            </div>\
        </div>`;

        var cartTotal = document.querySelector(".CartSideContainer .ajaxcart__inner");
        cartTotal.appendChild(newCart);
    }
    return (
        <div className="body">
            <div className="container">
                <div className="detail-product">
                    <div className="row">
                        <div className="col-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" className="img-product img-fluid" alt="ảnh sản phẩm" />
                        </div>
                        <div className="col-7 prefix">
                            <div className="detail-product-header">
                                <h2>Cà phê Khuây chữ I</h2>
                            </div>
                            <div className="detail-product-bot">
                                <form id="add-to-cart">
                                    <div className="row">
                                        <div className="col-4">
                                            <p>Kích cỡ xay:</p>
                                            <div className="input-grind">
                                                <input type="radio" id="min" name="grind" defaultValue="Mịn" defaultChecked="checked" />
                                                <label htmlFor="min">Mịn</label><br />
                                            </div>
                                            <div className="input-grind">
                                                <input type="radio" id="hoi-min" name="grind" defaultValue="Hơi mịn" />
                                                <label htmlFor="hoi-min">Hơi mịn</label><br />
                                            </div>
                                            <div className="input-grind">
                                                <input type="radio" id="vua" name="grind" defaultValue="Vừa" />
                                                <label htmlFor="vua">Vừa</label>
                                            </div>
                                            <div className="input-grind">
                                                <input type="radio" id="tho" name="grind" defaultValue="Thô" />
                                                <label htmlFor="tho">Thô</label>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="product-element">
                                                <p className="bold">Thành phần:</p>
                                                <p>Arabica, Robusta, Excelsa, Catimor</p>
                                            </div>
                                            <div className="caffeine">
                                                <p className="bold">Hàm lượng caffeine:</p>
                                                <p>2.0%</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="col-4">
                                                    <div className="input-qty prefix">
                                                        <p className="bold">Số lượng:</p>
                                                        <button className="change-qty" onClick={() => { var num = document.getElementById('qty'); console.log(num); var qty = num.value; if (qty > 1) num.value--; }} type="button">
                                                            <i className="fa fa-minus-circle" aria-hidden="true"></i></button>
                                                        <input id="qty" type="text" maxLength={3} defaultValue={1} onChange={() => { var num = document.getElementById('qty'); if (num.value === "0") num.value = 1; }} />
                                                        <button className="change-qty" onClick={() => { var num = document.getElementById('qty'); var qty = num.value; if (qty < 999) num.value++; }} type="button">
                                                            <i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                        {/* <i class="fa fa-plus-circle" aria-hidden="true"></i></button> */}
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="product-price prefix">
                                                        <p className="text-start bold">Giá:</p>
                                                        <p className="text-end">20.000 đ</p>
                                                    </div>
                                                    <button onClick={AddCart} type="button" className="btn btn-primary btn-lg btn-gray btn-cart btn_buy add_to_cart">Thêm
                                                        vào giỏ
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
                                <p>Với công thức phối trộn đặc biệt dựa trên sự kết hợp 4 loại hạt Arabica, Robusta, Excelsa, Catimor tốt nhất
                                    cũng những công nghệ ché biến cà phê hàng đầuThế giới và bí quyết không thể sao chép, cà phê Khuây I
                                    với màu nước nâu đậm, hương thơm nồng, vị đậm đà đặc trưng được sáng tạo nên với ý niệm đem tới bạn những
                                    tách cà phê tuyệt hảo, những ý tưởng sáng tạo đột phát để cùng bạn thổi bùng lên KHÁT VỌNG KHỞI NGHIỆP.</p>
                            </div>
                            <hr />
                            <div className="hint">
                                <h2 className="text-center">Gợi ý:</h2>
                                <ul>
                                    <li>Espresso</li>
                                    <li>Bình Moka</li>
                                    <li>Aeropress</li>
                                </ul>
                                <ul className="d-none">
                                    <li>Bình Pour-over hình phễu</li>
                                    <li>Aeropress</li>
                                </ul>
                                <ul className="d-none">
                                    <li>Bình Pour-over hình phễu</li>
                                    <li>Bình pha cà phê đáy phẳng</li>
                                    <li>Siphon, Aeropress (thời gian pha lâu hơn 3 phút)</li>
                                </ul>
                                <ul className="d-none">
                                    <li>French Press,</li>
                                    <li>Bình pha cà phê (Percolator)</li>
                                    <li>Thử cà phê (Cupping)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 about-img">
                            <img src="https://thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg" className="img-fluid" alt="hình ảnh về cà phê" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="CartDrawer" className="cart-sidebar ">
                <div className="clearfix cart_heading">
                    <h4 className="cart_title">Giỏ hàng</h4>
                    <div className="cart_btn-close" onClick={CloseCart} title="Đóng giỏ hàng">
                        <svg className="Icon Icon--close" viewBox="0 0 16 14">
                            <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="drawer__inner">
                    <div id="CartContainer" className="CartSideContainer">
                        <form action method="post" noValidate className="cart ajaxcart">
                            <div className="ajaxcart__inner ajaxcart__inner--has-fixed-footer cart_body items">
                                <div className="ajaxcart__row">
                                    <div className="ajaxcart__product cart_product" data-line={1}>
                                        <div className="cart_image">
                                            <img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" alt="Cà phê Khuây chữ G" />
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
                                                    {/* <a onClick={(event) => { DeleteCartProduct(event.target) }}
                                                        className="cart__btn-remove remove-item-cart ajaxifyCart--remove" href="javascript:;" data-line={1}>
                                                        Xóa
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ajaxcart__row">
                                    <div className="ajaxcart__product cart_product" data-line={1}>
                                        <div className="cart_image">
                                            <img width={80} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjafn3qTV7audjpe2E4OhtSYAlaMdErjtLA&usqp=CAU" alt="GIÀY Adidas Ultraboost DNA X LEGO đỏ" />
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
                                                    {/* <a
                                                        onClick={(event) => { DeleteCartProduct(event.target) }} href="javascript:;" data-line={1}
                                                        className="cart__btn-remove remove-item-cart ajaxifyCart--remove"
                                                    >
                                                        Xóa
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ajaxcart__footer ajaxcart__footer--fixed cart-footer">
                                <div className="ajaxcart__subtotal">
                                    <div className="cart__subtotal">
                                        <div className="cart__col-6">Tổng tiền:</div>
                                        <div className="text-right cart__totle"><span className="total-price">1.000.000₫</span></div>
                                    </div>
                                </div>
                                <div className="cart__btn-proceed-checkout-dt">
                                    {/* onClick={() => {location.href='/checkout'}} */}
                                    <button type="button" className="button btn btn-default cart__btn-proceed-checkout" id="btn-proceed-checkout" title="Thanh toán">Thanh toán</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="background-body" onClick={CloseCart} />
        </div>
    )
}

export default ProductDetail;