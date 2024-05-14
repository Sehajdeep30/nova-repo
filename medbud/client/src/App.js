import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Footer from "./components/footer/Footer";
import VirtualConnect from "./components/VirtualConnect";
import Resource from "./components/Resource";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/service">
            <Service/>
          </Route>
          <Route exact path="/virtual">
            <VirtualConnect/>
          </Route>
          <Route exact path="/resource">
            <Resource/>
          </Route>
          <Route exact path="/loginsignup">
            <LoginSignup/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
