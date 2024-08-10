import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/login";
import Signup from "../signup/signup";
import ErrorPage from "../errorPage/errorPage";
import ForgetPassword from "../forgetPasswordPage/forgetPasswordPage";
import DashBoard from "../dashBoard/dashBoard";
let user = {
  name: "eve",
  email: "eve.holt@reqres.in",
  password: "123",
  age: "19",
};
function App() {
  return (
    //<div className="App">
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element=<ErrorPage /> />
          <Route path="/login" Component={Login} />
          <Route path="/dashBoard" element=<DashBoard userObj={user} /> />
          <Route path="/signup" element=<Signup /> />
          <Route path="/forgetPasswordPage" element=<ForgetPassword /> />
        </Routes>
      </BrowserRouter>
    </>
    //</div>;
  );
}

export default App;
