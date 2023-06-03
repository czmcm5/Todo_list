import React from 'react';
import "../css/Login.css";

const SignUp = () => {
  return (
    <div className='box'>
      <h2>회원가입</h2>
      
      <form method='post' action='/signup' id="signup">
        <input type='text' name='id' placeholder='아이디'></input><br></br>
        <input type='password' name='password' placeholder='비밀번호'></input><br></br>
        <input type='password' placeholder='비밀번호 확인'></input><br></br>
        <input type='submit' value={'회원가입'}></input>
      </form>
      
    </div>
  );
};

export default SignUp;