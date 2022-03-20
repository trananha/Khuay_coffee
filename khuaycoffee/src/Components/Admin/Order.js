import React from "react";
import NavBar from "./NavBar";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import { order_data } from './FakeData';
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';

function Order(){
    const path= useLocation();
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
                  data={order_data}
                  columns={[
                    {
                      Header: "Mã đơn",
                      accessor:'id'
                    } ,
                    {
                      Header: "Tổng tiền",
                      accessor:'total'
                    },
                    {
                      Header: "Thời gian đặt",
                      accessor:'date'
                    },
                    {
                      Header:"Sửa",
                      accessor:'id',
                      Cell:(props)=>{
                          return (
                              <Button variant="danger" onClick={()=>console.log('delete order: ',props.value)}>
                                  <BsTrashFill/>
                              </Button>
                          )
                      }
                    }
                  ]}
                />
              </div>
              
            </div>
            
        </>
    )
}
export default Order;