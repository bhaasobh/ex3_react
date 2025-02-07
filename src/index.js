import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbartop from './components/Navbartop';
import Navbarside from './components/Navbarside';
import Content from './components/Content';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
   
    <body>
      <div className='navbartop'>
         <Navbartop />
      </div>
     
     <div className='middleContainer'>
       <Navbarside />
        <Content />
         </div> 
         <Footer/>
    </body>
     
    </div>
  </React.StrictMode>
);