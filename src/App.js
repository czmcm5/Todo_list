import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Todos from './page/Todos';

const style = { textDecoration: "none", margin: 10 };

const App = () => {
  return (
      <div className='header'>
        <Link to="/login" style={ style }>로그인</Link>
        <Link to="/signup" style={ style }>회원가입</Link>
        <Link to="/todos" style={ style }>Todo List</Link>
        <hr />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
  );
};

export default App;