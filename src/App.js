import logo from './logo.svg';
import './App.css';
import NavComponent from './component/NavComponent';
import LoginForm from './component/LoginForm';

function App() {
  const name = "Olarotimi";
  return (
    <div className="App">
      <NavComponent
         username = {name}
      
      />

      <NavComponent username ="Ademola" loginChecker = "notLoggedin" backgroundColor= "red"/>
      <div className='login-form-wrapper'>
         <LoginForm/>
      </div>
      
    </div>
  );
}

export default App;
