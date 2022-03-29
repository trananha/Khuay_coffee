import React from "react";
import NavBar from "./NavBar";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';
import { db,getData,deleteData,ORDER } from './../../Firebase/firebase';
import OrderDetail from "./OrderDetail";

const refreshData= async (setState)=>{
  const data= await getData(ORDER,db);
  setState(data);
}
function Order(){
    const path= useLocation();
    const [orderData,setOrderData] =React.useState([]);
    const [update,setUpdate]=React.useState(true);
    const [showDetail,setShowDetail]=React.useState(false);
    const [docId,setDocId]=React.useState("");
    React.useEffect(()=>{
      refreshData(setOrderData)
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
                {showDetail ? <OrderDetail  setShowDetail={setShowDetail} docId={docId}/> : null}
                <ReactTable
                  data={orderData}
                  columns={[
                    {
                      Header: "Mã đơn",
                      accessor:'ID'
                    } ,
                    {
                      Header: "Tổng tiền",
                      accessor:'totalmoney'
                    },
                    {
                      Header: "Thời gian thanh toán",
                      accessor:'purchasedate'
                    },
                    {
                      Header:"Sửa",
                      accessor:'docId',
                      Cell:(props)=>{
                          return (
                              <Button variant="danger" onClick={()=>{
                                deleteData(props.value,ORDER,db);
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
                      onClick: (e)=>{ setShowDetail(true);setDocId(rowInfo.original.docId)},
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
export default Order;