import "./app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    const {user} = useContext(AuthContext);

    return (
        <Router>
            <ScrollToTop>
                <AnimatedRoutes user={user}/>
            </ScrollToTop>
        </Router>
    );
};


export default App;