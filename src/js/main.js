import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/*" component={Home} />
  </Switch>
);

export default Main;
