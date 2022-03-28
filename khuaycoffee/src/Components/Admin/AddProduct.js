import './AddProduct.css'
import { useState,useEffect } from 'react';
import { addData, PRODUCT, db, getData } from '../../Firebase/firebase'

function AddProduct() {

    const [product, setProduct] = useState("");
    const [ID, setID] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [mass, setMass] = useState(0);
    const [makeof, setMakeof] = useState("");
    const [roast, setRoast] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [productData, setProductData] = useState([]);
    // console.log(typeof(getData(PRODUCT,db)));
    useEffect(async () => {
        setProductData(await getData(PRODUCT, db));
        
    }, [])
    const handleSubmit = () => {
        var check = true;
        console.log(productData);
        for (var i of productData) {
            if (i.ID === ID) {
                console.log("ID đã tồn tại");
                check = false;
                break;
            }
            // console.log("ID chưa tồn tại");
        }

        if (check) {
            addData({
                ID: ID,
                name: product,
                price: parseInt(price),
                quantity: parseInt(quantity),
                mass: parseInt(mass),
                image: image,
                description: description,
                makeof: makeof,
                type: type,
                roast: roast
            }, PRODUCT, db);
        }
        setProduct("");
        setID("");
        setPrice(0);
        setQuantity(0);
        setMass(0);
        setImage("");
        setDescription("");
        setMakeof("");
        setType("");
        setRoast("");

    }

    return (
            <div className="content">
                <h1>Thêm Sản Phẩm</h1>

                <table>
                    <tbody>
                        <tr>
                            <td><label className="label">Tên sản phẩm</label></td>
                            <td>  <input type="text" className="formInput Padding" onChange={e => setProduct(e.target.value)}></input> </td>
                        </tr>

                        <tr>
                            <td>
                                <label className=" label">Mã sản phẩm</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setID(e.target.value)}></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="label">Giá Bán</label>
                            </td>
                            <td>
                                <input type="number" className="formInput Padding" onChange={e => setPrice(e.target.value)}></input>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="label">Số lượng</label>
                            </td>
                            <td>
                                <input type="number" className="formInput Padding" onChange={e => setQuantity(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="label">Thành Phần</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setMakeof(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="label">Khối lượng</label>
                            </td>
                            <td>
                                <input type="text" className="formInput Padding" onChange={e => setMass(e.target.value)}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className=" label">Loại</label>
                            </td>
                            <td>
                                <select className="Padding formInput selectInput" onChange={e => setType(e.target.value)} aria-label=".form-select-sm example">

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
                                <select className="Padding formInput selectInput" onChange={e => setRoast(e.target.value)} aria-label=".form-select-sm example">

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

                                <textarea type="area" className="formInput Padding area" onChange={e => setDescription(e.target.value)} ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>


                <div className="col-auto centerBtn">
                    <button type="submit" className="btn btn-primary buttonSubmit" onClick={handleSubmit}>Xác nhận</button>
                </div>
            </div>

        
    )
}

export default AddProduct;