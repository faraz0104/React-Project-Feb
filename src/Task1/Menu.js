import React from 'react';
import {Link} from "react-router-dom"

const Menu=()=>{
    return(
        <div className='Menustyle'>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="bookmark" >BookMark</Link></li>
              
            </ul>
        </div>

    )
}
export default Menu;