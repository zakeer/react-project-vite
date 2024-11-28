import { useState } from 'react';
import './App.css';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';

function App() {
  const [forRegister, toggleRegisterView] = useState(true); // [value, setFn]

  const toggleView = function () {
    // toggleRegisterView(false);
    toggleRegisterView(function (prevValue) {
      return !prevValue;
    });
  };

  return (
    <>
      {forRegister ? <RegisterForm /> : <LoginForm />}
      <div onClick={toggleView}>Goto {forRegister ? 'Login' : 'Register'}</div>
    </>
  );
}

export default App;
