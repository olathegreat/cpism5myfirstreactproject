import logo from "./logo.svg";
import "./App.css";
import NavComponent from "./component/NavComponent";
import LoginForm from "./component/LoginForm";
import CardComponent from "./component/CardComponent";
import CounterGame from "./component/CounterGame";

function App() {
  const name = "Olarotimi";
  return (
    <div className="App">
      <NavComponent username={name} />

      <NavComponent
        username="Ademola"
        loginChecker="notLoggedin"
        backgroundColor="red"
      />
      <div className="login-form-wrapper">
        <LoginForm
          header="Log In Now"
          messageToDisplay="Type in your correct details"
        />
      </div>

      <h3 className="default-header">Use of props and event handling</h3>

      <div className="cards-wrapper">
        <CardComponent
          img="https://images.pexels.com/photos/6801684/pexels-photo-6801684.jpeg"
          name="Mose Jackson"
          description="Fullstack developer with 5 years experience"
          link=""
        />

        <CardComponent
          img="https://images.pexels.com/photos/34575018/pexels-photo-34575018.jpeg"
          name="Jamiu Zainab"
          description="Experienced UI/UX designer"
        />

        <CardComponent
          img="https://images.pexels.com/photos/26885613/pexels-photo-26885613.jpeg"
          name="Ademola Olalekan"
          description="Frontend developer and designer"
        />
      </div>


      <h3 className="default-header">React hooks using  use state</h3>
      <div className="counter-game-wrapper">
        <CounterGame/>

      </div>
    </div>
  );
}

export default App;
