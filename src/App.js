import MainCard from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import ExperienceCard from "./Views/Experience";
import Projects from "./Views/Projects";
import AboutMe from "./Views/AboutMe";

class App extends Component {


  render() {
    // let routes = (
    //   <HashRouter>
    //     <Route exact path="/" component={MainCard}/>
    //     <Route exact path="/experience" component={ExperienceCard} />
    //     <Route exact path="/projects" component={Projects} />
    //     <Route exact path="/about-me" component={AboutMe} />
    //   </HashRouter>
    // );

    // return (
    //   <BrowserRouter>
    //     <div>{routes}</div>
    //   </BrowserRouter>
    // );

    let routes = (
      <Switch>
        <Route exact path="/" component={MainCard}/>
        <Route exact path="/experience" component={ExperienceCard} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={AboutMe} />
      </Switch>
    )

    return (
      <BrowserRouter>
        <div className="App">
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
