import React, { useState,useEffect } from 'react';
import './reset.css';
import { Link, } from 'react-router-dom';

import './App.css';


const App = () => {


  return (

    <section className='app '>
      <h1 className='playwrite welcome'>welcome</h1>

      <section className=' loginCard ' >
        <input placeholder='username' />
        <input placeholder='passcode' />
        <button onClick={()=>{}} className='loginButton'> login</button>
        <Link to="/admin"> admin view</Link>
        <Link to="/tenent"> tenent view</Link>
      </section>

      <h1 >
        website is currently under development  only adminview and tenent view will link to other views 
      </h1>
    </section>
  );
};

export default App;
