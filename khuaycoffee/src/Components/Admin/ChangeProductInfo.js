// import { useState } from 'react';
// import { useEffect } from 'react';
// import './AddProduct.css'
// import { db, getData, addData, deleteData, updateData, CUSTOMER, ORDER, PRODUCT, CART } from '../../Firebase/firebase';
// import { projectFirestore } from '../../Firebase/firebase';
// // import sp1 from '../../Assets/sp1.jpg';

// // function Cart({ idUser, id, quantity, grindSize }) {
// function ChangeProductInfo() {
//     // var cartCustomer;
//     const [sumPrice, setSumPrice] = useState(0);
//     // const [lenList, setLenList] = useState(0);
//     const [dataProduct, setDataProduct] = useState([]);
//     const [dataCart, setDataCart] = useState([]);
//     const getDataAll = async () => {
//         setDataProduct(await getData(PRODUCT, db));
//         setDataCart(await getData(CART, db));
//     }
//     var cartCustomer;
//     for (var i of dataCart) {
//         if (i.idUser === "KH02") {
//             cartCustomer = i;
//             // setLenList(i.listQuantity.length);
//             console.log("find");
//             // setSumPrice(i.totalPrice);
//             break;
//         }
//     }
//     console.log(cartCustomer)
//     useEffect(() => getDataAll(), []);

//     console.log(dataProduct);
//     console.log(dataCart);
//     console.log('after');


import './AddProduct.css'
import { useState, useEffect } from 'react';
import { updateData, PRODUCT, db, getData } from '../../Firebase/firebase'

// const refreshData= async (setState)=>{
//     const data= await getData(PRODUCT,db);
//     setState(data);
//     console.log(data);
//   }
function ChangeProductInfo({ id, setState ,callUp,status}) {
    const [IDCol, setIDCol] = useState("");
    const [product, setProduct] = useState("");
    const [ID, setID] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [mass, setMass] = useState("");
    const [makeof, setMakeof] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [roast, setRoast] = useState("");
    const [type, setType] = useState("");
    const [productData, setProductData] = useState([]);

    // console.log(image);

    const refreshData = async () => {
        setProductData(await getData(PRODUCT, db));
        console.log(productData);
    }
    var productData1;
    for (var i of productData) {
        if (i.docId === id) {
            
            console.log(i);
            productData1 = i;
            break;
        }
    }
    console.log(productData1);
    useEffect(() => refreshData(), []);

    const handleSubmit = async () => {
        console.log("productData1");
        await updateData({

            ID: ID !== "" ? ID : productData1.ID,
            name: product !== "" ? product : productData1.name,
            price: price !== 0 ? price : productData1.price,
            quantity: quantity !== 0 ? quantity : productData1.quantity,
            mass: mass !== "" ? mass : productData1.mass,
            description: description !== "" ? description : productData1.description,
            makeof: makeof !==""? makeof : productData1.makeof,
            roast: roast !== ""? roast : productData1.roast,
            type: type !== "" ? type : productData1.type,
        }, productData1.docId, PRODUCT, db);
        setState(false)
        callUp(!status);
    }
    if(productData1 !== undefined){
    return (

        <div>
            <div className="content">
                <h1>Thông tin sản phẩm</h1>

                <table>
                    <tbody>
                        <tr>
                            <td><label className="label">Tên sản phẩm</label></td>
                            <td>  <input type="text" className="formInput Padding" onChange={e => setProduct(e.target.value)} value={product !== "" ? product : productData1.name}></input> </td>
                        </tr> 

                         <tr>
                            <td>
                                <label className=" label">Mã sản phẩm</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setID(e.target.value)} value={ID !== "" ? ID : productData1.ID} disabled></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="label">Giá Bán</label>
                            </td>
                            <td>
                                <input type="number" className="formInput Padding" onChange={e => setPrice(e.target.value)} value={price !== 0 ? price :productData1.price}></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="label">Số lượng</label>
                            </td>
                            <td>
                                <input type="number" className="formInput Padding" onChange={e => setQuantity(e.target.value)} value={quantity !== 0? quantity :productData1.quantity}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="label">Thành Phần</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setMakeof(e.target.value)} value={makeof !== "" ? makeof :productData1.makeof}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="label">Khối lượng</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setMass(e.target.value)} value={mass !== "" ? mass : productData1.mass}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className=" label">Loại</label>
                            </td>
                            <td>
                                <select className="Padding formInput selectInput" onChange={e => setType(e.target.value)} aria-label=".form-select-sm example" value={type !== "" ? type :productData1.type}>

                                    <option selected >-- Chọn loại --</option>
                                    <option value="regular">Regular</option>
                                    <option value="decaf">Decaf</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className=" label">Loại rang</label>
                            </td>
                            <td>
                                <select className="Padding formInput selectInput" onChange={e => setRoast(e.target.value)} aria-label=".form-select-sm example" value={roast !== ""?roast:productData1.roast}>

                                    <option selected >-- Chọn loại rang --</option>
                                    <option value="dark-espresso">Dark Espresso</option>
                                    <option value="medium-dark">Medium Dark</option>
                                    <option value="light">Light</option>

                                </select>
                            </td>
                        </tr>


                        <tr>
                            <td>

                                <label className=" label">Hình ảnh</label>
                            </td>
                            <td>

                                <input type="file" className="formInput Padding" onChange={e => setImage(e.target.value)} ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <label className=" label">Mô tả</label>
                            </td>
                            <td>

                                <textarea type="area" className="formInput Padding area" onChange={e => setDescription(e.target.value)} value={ description !==""? description:productData1.description}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className="col-auto centerBtn">
                    <button type="submit" className="btn btn-primary buttonSubmit" onClick={() => handleSubmit()}>Xác nhận</button>
                    
                </div>
            </div>

        </div>
    )
    }
    else{
        return(
            <div>
                {/* <h1>Loading</h1> */}
            </div>
        )
    }
}

export default ChangeProductInfo;