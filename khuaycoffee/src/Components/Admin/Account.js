import React from 'react';
import NavBar from './NavBar';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import { account_data } from './FakeData';
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';


function Account(){
    return (
        <>
            <NavBar/>
            <ReactTable
              data={account_data}
              columns={[
                {
                  Header: "Tên tài khoản",
                  accessor:'name'
                } ,
                {
                  Header: "Ngày tham gia",
                  accessor:'date'
                },
                {
                  Header: "Mật khẩu",
                  accessor:'password'
                },
                {
                  Header:"Sửa",
                  accessor:'id',
                  Cell:(props)=>{
                      return (
                          <Button variant="danger" onClick={()=>console.log('delete account: ',props.value)}>
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
export default Account;