import React from 'react';
import "../css/Login.css";

const Login = () => {
  return (
    <div className='box'>
      <h1>Todo List</h1>

      <form method='post' action='/login' id="login">
        <input type='text' name='id' placeholder='아이디'></input><br></br>
        <input type='password' name='password' placeholder='비밀번호'></input><br></br>
        <input type='submit' value={'로그인'}></input>
      </form>
      
    </div>
  );
};

export default Login;