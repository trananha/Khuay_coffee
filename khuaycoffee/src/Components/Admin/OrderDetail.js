import './OrderDetail.css'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ORDER,CUSTOMER, db, getData } from '../../Firebase/firebase'
function OrderDetail({id}) {
    const [order, setOrder] = useState([1, 2, 3, 4]);
    const [orderID, setOrderID] = useState("ABS001");
    const [name, setName] = useState("Nguyẽn Văn A");
    const [customerID, setCustomerID] = useState("KH01");
    const [address, setAddress] = useState("Hà Nội");
    const [dayTime, setDayTime] = useState("2020-01-01");
    const [orderData, setOrderData] = useState([]);
    const [totalmoney, setTotalmoney] = useState(0);
    const[userData,setUserData]=useState([]);

    useEffect(async () => {
        setOrderData(await getData(ORDER, db));
        for (var i of orderData) {
            if (i.ID === id) {
                setOrderID(i.ID);
                setCustomerID(i.customerid);
                setDayTime(i.purchasedate);
                setTotalmoney(i.totalmoney);
                setOrder(i.list_product);
            }
        }
        setUserData(await getData(CUSTOMER, db));
        for (var i of userData) {
            if (i.ID === customerID) {
                setName(i.name);
                setAddress(i.address);
            }}

        console.log("data")
        console.log(orderData);
        console.log(userData);

    }, [])
    return (
        <div >
            <div className="content2">
                <h1>Chi tiết đơn hàng</h1>
                <div className="row">
                    <div className="col-md-6 alignment">
                        <b>Tên Khách Hàng: </b>
                        {name}
                        <div>
                            <b>Mã Đơn hàng: </b>
                            {orderID}
                        </div>
                        <div>
                            <b>Địa chỉ: </b>
                            {address}
                        </div>
                        <div>
                            <b>Ngày đặt: </b>
                            {dayTime}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <b>Mã Khách Hàng: </b>
                        {customerID}
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
                        {order.map(item => {
                            <tr key = {item}>
                                <td scope="row">{item}</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        })}


                    </tbody>
                </table>
                <div>
                    <b>Tổng tiền: </b>
                    {order.length}
                </div>
            </div>
        </div>
    )
}
export default OrderDetail;