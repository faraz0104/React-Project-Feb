import React from 'react';
import Menu from './Menu';
import BookMark from './BookMark';
import Home from './Home';
import "./Task.css"

import{BrowserRouter, Route,Routes} from "react-router-dom";


function Routing()
{
    return(
        <BrowserRouter>
      <div>
          <Menu />

           <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bookmark" element={<BookMark />}/>
          
              </Routes>

              
      </div>
      </BrowserRouter>
    )
}
export default Routing;