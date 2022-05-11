
import './App.css';
// import Routing from './Task1/Routing';


// import PasswordHome from './Password-Generator/component/PasswordHome';
// import Background from './Password-Generator/component/Background';
// import Home from './Material-Ui/Components/Home';
import Home from './Recipe-App/component/Home';

// import Home from './url-shortner/component/Home';
// import BackgroundAnimation from './url-shortner/component/BackgroundAnimation';
// import LinkResult from './url-shortner/component/LinkResult';
// import { useState } from 'react';


function App() {
  // const[inputValue,setInputValue] =useState("")

  return (
    <>
  
       <div className='container'>
      {/* <Home setInputValue={setInputValue} />
       <BackgroundAnimation />
       <LinkResult inputValue={inputValue} /> */}
       <Home />  recipe
       {/* <Home /> */}
        {/* <PasswordHome />
       <Background />  */}
      {/* <Routing /> */}
   
      
    </div>
    </>
          
  );


}

export default App;
