import { useEffect, useState } from 'react';
import './App.css';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';

const PREVIOUS_LOGGED_VIEW = localStorage.getItem("LOGGED_VIEW")

function App() {
  const [forRegister, toggleRegisterView] = useState(PREVIOUS_LOGGED_VIEW === "true"); // [value, setFn]

  const toggleView = function () {
    // toggleRegisterView(false);
    toggleRegisterView(function (prevValue) {
      const changedValue = !prevValue;
      // localStorage.setItem("LOGGED_VIEW", String(changedValue));
      return changedValue;
    });
  };

  useEffect(() => {
    localStorage.setItem("LOGGED_VIEW", String(forRegister));
  }, [forRegister]);

  return (
    <>
      {forRegister ? <RegisterForm /> : <LoginForm />}
      <div onClick={toggleView}>Goto {forRegister ? 'Login' : 'Register'}</div>
    </>
  );
}

export default App;
