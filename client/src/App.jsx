import "./app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
    const {user} = useContext(AuthContext);

    return (
        <Router>
            <AnimatedRoutes user={user}/>
        </Router>
    );
};

export default App;