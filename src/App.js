import logo from './logo.svg';
import './App.css';
import NavComponent from './component/NavComponent';
import LoginForm from './component/LoginForm';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className='login-form-wrapper'>
<LoginForm/>
      </div>
      
    </div>
  );
}

export default App;
