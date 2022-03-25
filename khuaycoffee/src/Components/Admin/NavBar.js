import React from 'react';
import {Link} from 'react-router-dom';
import { PathData } from './PathData';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar(props){
    console.log(props.path);
    return (
        <>
            <div className='d-flex flex-column flex-shrink-0 p-3 text-white bg-dark' style={{width:'280px',minHeight:window.innerHeight}}>
                <Link to="#" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'>
                    <h1>Khuay</h1>
                </Link>
                <hr/>
                <ul className='nav nav-pills flex-column mb-auto'>
                   {PathData.map((item,index)=>{
                       return (
                           <li key={index} className="nav-item">
                               {item.path=== props.path ?
                                (
                                    <Link to={item.path} className='nav-link active' >
                                        {item.icon}
                                        <span> {item.title}</span>
                                    </Link>
                                ):
                                (
                                    <Link to={item.path} className='nav-link text-white' >
                                        {item.icon}
                                        <span className='pl-2'> {item.title}</span>
                                    </Link>
                                )
                                }
                               
                           </li>
                       )
                    }
                   )}
                </ul>
            </div>
        </>
    );
}
export default NavBar;


const Login= (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return state=true
        case 'LOGOUT':
            return state=false
        default:
            return state
    }
}

