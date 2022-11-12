import React from 'react';
import { useState } from 'react';
import Result from './Results';
import './index.css';

const App = () =>{

    const [state,newstate] =useState("");
   
    const changes = (e)=>{
        newstate(e.target.value);
    }
    
    return (
        <div className='seachbar'>
            <input type="text"
            placeholder='Search anything' 
            value = {state}
            onChange = {changes}
            />
           {state===""? null:<Result name = {state}/>} 
        </div>
    );
}

export default App;