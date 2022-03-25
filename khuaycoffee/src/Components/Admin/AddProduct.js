import './AddProduct.css'
import { useState } from 'react';
import { db } from '../../Firebase/firebase';
import { collection, addDoc } from "firebase/firestore"; 

function AddProduct() {

    const [product, setProduct] = useState("");
    const [ID, setID] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [mass, setMass] = useState(0);
    const [makeof, setMakeof] = useState("");
    const [size, setSize] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    // console.log(image);

    const handleSubmit = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        // const product = db.collection('Product').doc(ID).set({
        //     name: product,
        //     price: price,
        //     quantity: quantity,
        //     mass: mass,
        //     image: image,
        //     description: description,
        //     makeof: makeof
        // })
        // console.log(product);
    }
    return (
        <div>
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
                            <label className=" label">Cỡ hạt</label>
                        </td>
                        <td>
                            <select className="Padding formInput selectInput" onChange={e => setSize(e.target.value)} aria-label=".form-select-sm example">

                                <option selected >-- Chọn cỡ hạt --</option>
                                <option value="Mịn">Mịn</option>
                                <option value="Hơi Mịn">Hơi Mịn</option>
                                <option value="Vừa">Vừa</option>
                                <option value="Thô">Thô</option>
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


                <div className="col-auto">
                    <button type="submit" className="btn btn-primary buttonSubmit" onClick={handleSubmit}>Xác nhận</button>
                </div>
            </div>

        </div>
    )
}

export default AddProduct;