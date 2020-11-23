import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe"; 
import { Projects } from "../pages/Projects"; 
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {

    return (
        <ThemeProvider>
            <CssBaseline/>
            {/* <Router> */}
            <HelmetMeta/>
            <Home/>
            <AboutMe/>
            <Projects/>

                {/* <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="*" component={PageNotFound} />
                </Switch> */}
            {/* </Router> */}
        </ThemeProvider>
    );
};
