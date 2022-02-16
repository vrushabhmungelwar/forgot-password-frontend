import "./App.css";
import { Route, Switch } from "react-router-dom";
import { SignUp } from "./routes/signup";
import { Success } from "./routes/success";
import { Login } from "./routes/login";
import { Forgot } from "./routes/forgotPassword";
import { Reset } from "./routes/resetPassord";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/forgotpassword">
          <Forgot />
        </Route>
        <Route path="/resetpassword/:token">
          <Reset />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
