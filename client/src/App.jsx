import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Profile from "./pages/profile/Profile";
import Plans from "./pages/plans/Plans";
import Loading from "./components/loading/Loading";
import ForgotPass from "./pages/forgotPass/ForgotPass";
import Auth from "./components/test/Auth";

const App = () => {
  const { user } = useContext(AuthContext);
  // const user = true

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/*{user ? <Home /> : <Redirect to="/register" />}*/}
          <Home />
        </Route>
        <Route path="/register">
          {/*{!user ? <Register /> : <Redirect to="/" />}*/}
          <Register />
        </Route>
        <Route path="/login">
          {/*{!user ? <Login /> : <Redirect to="/" />}*/}
          <Login />
        </Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/loading">
              <Loading />
            </Route>
            <Route path="/forgot">
              <ForgotPass />
            </Route>
            <Route path="/test">
              <Auth />
            </Route>
            <Route path="/watch/:movie_id">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;