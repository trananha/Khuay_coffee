import React from 'react';
import NavBar from './NavBar';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" ;
import { account_data } from './FakeData';
import {Button} from 'react-bootstrap';
import {BsTrashFill} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useLocation} from 'react-router-dom';
import { db,getData,deleteData,CUSTOMER } from './../../Firebase/firebase';

const refreshData= async (setState)=>{
  const data= await getData(CUSTOMER,db);
  setState(data);
}

function Account(){
    const path= useLocation();
    const [accountData,setAccountData] =React.useState([]);
    const [update,setUpdate]=React.useState(true);
    React.useEffect(()=>{
      refreshData(setAccountData)
    },[update]);

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
                  data={accountData}
                  columns={[
                    {
                      Header: "Tên tài khoản",
                      accessor:'name'
                    } ,
                    {
                      Header: "Email",
                      accessor:'email'
                    },
                    {
                      Header: "Mật khẩu",
                      accessor:'password'
                    },
                    {
                      Header:"Sửa",
                      accessor:'docId',
                      Cell:(props)=>{
                          return (
                              <Button variant="danger" onClick={()=>{
                                deleteData(props.value,CUSTOMER,db);
                                setUpdate(!update);
                              }}>
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