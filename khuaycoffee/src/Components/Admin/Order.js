import React from "react";
import NavBar from "./NavBar";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import { order_data } from './FakeData';
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function Order(){
    return (
        <>
            <NavBar/>
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
        </>
    )
}
export default Order;