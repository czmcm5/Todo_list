import React from 'react';
import "../css/Login.css";


const data = {
    dabin:{
        name:'dabin',
        description:'hello react'
    },
    note:{
        name:'note',
        description:'hello router'
    }
};


const Todos = ({match}) => {
    
    return (
        <div>
        <div className='box'>
      <h1>Todo List</h1>

      <input type='checkbox'></input>
      
    </div>
            
        </div>
    );
};

export default Todos;