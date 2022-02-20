import "./App.css";
import { Route, Switch } from "react-router-dom";
import { SignUp } from "./routes/signup";
import { Success } from "./routes/success";
import { Login } from "./routes/login";
import { Forgot } from "./routes/forgotPassword";
import { Reset } from "./routes/resetPassord";
import ProtectedRoute from "./routes/ProtectedRoute";
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
        <ProtectedRoute path="/success" Proute={Success} />
        <Route path="/forgotpassword">
          <Forgot />
        </Route>
        <Route path="/resetpassword/:id/:token">
          <Reset />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
