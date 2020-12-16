import React, { useRef } from "react";

import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe"; 
import { Projects } from "../pages/Projects"; 
import { Work } from "../pages/Work";

const useStyles = makeStyles((theme) => ({
    footerIcons: {
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(6),
    },
    iconButton: {
        height: "12",
        width: "12",
        marginBottom: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();
    const  homeRef = useRef(null);
    const  aboutMeRef = useRef(null);
    const  projectRef = useRef(null);
    const  workExpRef = useRef(null);

    return (
        <ThemeProvider>
            <CssBaseline/>
            <HelmetMeta/>
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={aboutMeRef}>
                <AboutMe></AboutMe>
            </div>
            <div ref={projectRef}>
                <Projects/>
            </div>
            <div ref={workExpRef}>
                <Work/>
            </div>
            <div className={classes.footerIcons}>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (homeRef && homeRef.current) {
                            window.scrollTo({ top: homeRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"Home"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (aboutMeRef && aboutMeRef.current) {
                          window.scrollTo({ top: aboutMeRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"About Me"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (projectRef && projectRef.current) {
                            window.scrollTo({ top: projectRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"Projects"}
                </Button>
                <Button
                    color="inherit"
                    className={classes.iconButton}
                    onClick={() => { 
                        if (workExpRef && workExpRef.current) {
                            window.scrollTo({ top: workExpRef.current.offsetTop, behavior: "smooth"})
                        } 
                      }
                  }
                >
                    {"Work Experience"}
                </Button>
            </div>
        </ThemeProvider>
    );
};