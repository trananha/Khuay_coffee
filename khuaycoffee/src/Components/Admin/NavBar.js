import React from 'react';
import {Link} from 'react-router-dom';
import { PathData } from './PathData';

function NavBar(){
    return (
        <>
            <div className='navbar'>
                <ul>
                   {PathData.map((item,index)=>{
                       return (
                           <li key={index} className="nav-item">
                               <Link to={item.path} >
                                   {item.icon}
                                   <span>{item.title}</span>
                               </Link>
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