import React from "react";
import NavBar from "./NavBar";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';
import { db,getData,deleteData,PRODUCT } from './../../Firebase/firebase';

const refreshData= async (setState)=>{
    const data= await getData(PRODUCT,db);
    setState(data);
  }

function Product(){
    const path= useLocation();
    const [productData,setProductData] =React.useState([]);
    const [update,setUpdate]=React.useState(true);
    React.useEffect(()=>{
      refreshData(setProductData)
    },[update]);
    console.log()
    return (
        <>
            <div className="d-flex flex-grow-1">
              <NavBar path={path.pathname}/>
              <div className="flex-grow-1 mx-4">
                <h2>Đơn hàng</h2>
                <br/>
                <br/>
                <br/>
                <ReactTable
                  data={productData}
                  columns={[
                    {
                      Header: "Tên sản phẩm",
                      accessor:'name'
                    } ,
                    {
                      Header: "Giá thành",
                      accessor:'price'
                    },
                    {
                      Header: "Tồn kho",
                      accessor:'quantity'
                    },
                    {
                      Header:"Sửa",
                      accessor:'docId',
                      Cell:(props)=>{
                          return (
                              <Button variant="danger" onClick={()=>{
                                deleteData(props.value,PRODUCT,db);
                                setUpdate(!update);
                              }}>
                                  <BsTrashFill/>
                              </Button>
                          )
                      }
                    }
                  ]}
                  getTrProps={(state, rowInfo, column) => {
                    return{
                      onClick: (e)=>{console.log("hah1",rowInfo.row.docId)},
                      style: {
                        cursor:"pointer"
                      }
                    }
                  }}
                  
                />
              </div>
              
            </div>
            
        </>
    )
}
export default Product;