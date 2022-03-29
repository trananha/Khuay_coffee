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
            if (i.ID === OrderDetail.customerid) {
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
            <div onClick={()=>setShowDetail(false)} >
                <div className="content2">
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
                            <th scope="col">Kích cở</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OrderDetail.list_nameProduct.map(item => {
                            var name,price,quantity,roast;
                            var index = 0
                            for (var i of productsData) {
                                if (i.ID === item) {
                                    name = i.name;
                                    price = i.price;
                                    quantity = i.quantity;
                                    roast = i.roast;
                                    break;
                                }
                                index++;
                            }
                            return (
                            <tr key = {item}>
                                <td>{name}</td>
                                <td scope="row">{item}</td>
                                <td>{price}</td>
                                <td>{roast}</td>
                                <td>{OrderDetail.list_quantity[index]}</td>
                                <td>{OrderDetail.list_quantity[index]*price}</td>
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
                <h1>Loading</h1>
            </div>
        )
    }
}
export default OrderDetail;