import './OrderDetail.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ORDER, CUSTOMER,PRODUCT, db, getData } from '../../Firebase/firebase'


function OrderDetail({ setShowDetail, docId }) {
    const [userData, setUserData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    var OrderDetail;
    var user;
    const getUserData = async () => {
        setOrderData(await getData(ORDER, db));
        setUserData(await getData(CUSTOMER, db));
        setProductsData(await getData(PRODUCT, db));
    }

    for (var i of orderData) {
        if (i.docId === docId) {
            OrderDetail = i;
            break;
        }
    }
    if (OrderDetail !== undefined) {
        for (var i of userData) {
            // if (i.ID === OrderDetail.customerid) {
            if (i.docId === OrderDetail.customerid) {
                user = i;
                break;
            }
        }
    }
    useEffect(() => getUserData(), [])
    console.log(OrderDetail)
    console.log(user)
    if (OrderDetail !== undefined && user !== undefined) {
        return (
            <div  style={{position: "fixed", "zIndex": "1" }}>
                <div className="content2" style={{margin : "auto"}}>
                    <button onClick={()=>setShowDetail(false)} style = {{float: "right"}}>Close</button>
                    <h1>Chi tiết đơn hàng</h1>
                    
                    <div className="row">
                        <div className="col-md-6 alignment">
                            <b>Tên Khách Hàng: </b>
                            {user.name}
                            <div>
                                <b>Mã Đơn hàng: </b>
                                {OrderDetail.ID}
                            </div>
                            <div>
                                <b>Địa chỉ: </b>
                                {user.address}
                            </div>
                            <div>
                                <b>Ngày đặt: </b>
                                {OrderDetail.purchasedate}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <b>Mã Khách Hàng: </b>
                            {user.ID}
                        </div>
                    </div>

                    <table className="table fullTable" >
                    <thead>
                        <tr>
                            <th scope="col" >Tên SP</th>
                            <th scope="col">Mã SP</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Loại</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OrderDetail.list_nameProduct.map((item,index) => {
                            var id,price,roast;
                            
                            for (var i of productsData) {
                                if (i.name === item) {
                                    id = i.ID;
                                    price = i.price;
                                    roast = i.roast;
                                    
                                    break;
                                }
                            }
                            return (
                            <tr key = {item}>
                        
                                <td scope="row">{item}</td>
                                <td>{id}</td>
                                <td>{OrderDetail.list_price[index]}</td>
                                <td>{roast}</td>
                                <td>{OrderDetail.list_quantity[index]}</td>
                                <td>{OrderDetail.list_quantity[index]*OrderDetail.list_price[index]}</td>
                            </tr>
                            )})}


                    </tbody>
                </table> 
                    <div>
                        <b>Tổng tiền: </b>
                        {OrderDetail.totalmoney}
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div>
                {/* <h1>Loading</h1> */}
            </div>
        )
    }
}
export default OrderDetail;