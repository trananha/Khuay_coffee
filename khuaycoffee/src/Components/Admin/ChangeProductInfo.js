import './AddProduct.css'
import { useState,useEffect } from 'react';
import {updateData,PRODUCT,db,getData} from '../../Firebase/firebase'

const getDataProduct=async (setState)=>{
    const data= await getData(PRODUCT,db);
    setState(data);
}
function ChangeProductInfo({id}) {
    const [IDCol, setIDCol] = useState("");
    const [product, setProduct] = useState("");
    const [ID, setID] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [mass, setMass] = useState();
    const [makeof, setMakeof] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [roast, setRoast] = useState("");
    const [type, setType] = useState("");
    const [productData, setProductData] = useState([]);
    // console.log(image);
    useEffect(()=>{

        getDataProduct(setProductData);
        console.log(productData);
        for(var i of productData){
        if(i.ID === id)
        {
            
            setID(i.ID);
            setProduct(i.name);
            setPrice(i.price);
            setQuantity(i.quantity);
            setMass(i.mass);
            setMakeof(i.makeof);
            setImage(i.image);
            setDescription(i.description);
            setRoast(i.roast);
            setType(i.type);
            setIDCol(i.docId);
            console.log(i.docId);
        }
    }
    },[])
    
    const handleSubmit = async () => {
        await updateData({
            ID: ID, 
            name: product,
            price: price,
            quantity: quantity,
            mass: mass,
            image: image,
            description: description,
            makeof: makeof
        },IDCol,PRODUCT,db);
        console.log("update");
    }
    return (
        <div>
            <div className="content">
                <h1>Thông tin sản phẩm</h1>

                <table>
                    <tbody>
                    <tr>
                        <td><label className="label">Tên sản phẩm</label></td>
                        <td>  <input type="text" className="formInput Padding" onChange={e => setProduct(e.target.value)} value = {product}></input> </td>
                    </tr>

                    <tr>
                        <td>
                            <label className=" label">Mã sản phẩm</label>
                        </td>
                        <td>
                            <input type="text" className="formInput Padding" onChange={e => setID(e.target.value)} value = {ID} disabled></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="label">Giá Bán</label>
                        </td>
                        <td>
                            <input type="number" className="formInput Padding" onChange={e => setPrice(e.target.value)} value = {price}></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="label">Số lượng</label>
                        </td>
                        <td>
                            <input type="number" className="formInput Padding" onChange={e => setQuantity(e.target.value)} value = {quantity}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="label">Thành Phần</label>
                        </td>
                        <td>
                            <input type="text" className="formInput Padding" onChange={e => setMakeof(e.target.value)} value = {makeof}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="label">Khối lượng</label>
                        </td>
                        <td>
                            <input type="text" className="formInput Padding" onChange={e => setMass(e.target.value)} value={mass}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className=" label">Loại</label>
                        </td>
                        <td>
                            <select className="Padding formInput selectInput" onChange={e => setType(e.target.value)} aria-label=".form-select-sm example" value={type}>

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
                            <select className="Padding formInput selectInput" onChange={e => setRoast(e.target.value)} aria-label=".form-select-sm example" value={roast}>

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

                            <input type="file" className="formInput Padding" onChange={e => setImage(e.target.value)}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>

                            <label className=" label">Mô tả</label>
                        </td>
                        <td>

                            <textarea type="area" className="formInput Padding area" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>


                <div className="col-auto">
                    <button type="submit" className="btn btn-primary buttonSubmit" onClick={handleSubmit}>Xác nhận</button>
                </div>
            </div>

        </div>
    )
}

export default ChangeProductInfo;