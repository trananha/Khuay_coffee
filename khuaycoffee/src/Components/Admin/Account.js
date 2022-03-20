import React from 'react';
import NavBar from './NavBar';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import { account_data } from './FakeData';
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';

function Account(){
    const path= useLocation();
    return (
        <>  
            <div className="d-flex flex-grow-1">
              <NavBar path={path.pathname}/>
              <div className="flex-grow-1 mx-4">
                <h2>Tài khoản</h2>
                <br/>
                <br/>
                <br/>
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
              </div>
            </div>
        </>
    )
}
export default Account;