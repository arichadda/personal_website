import React from "react";
import { ProjectCards } from "../components/projects/ProjectCards";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    head: {
        marginTop: 60,
        marginLeft: 20
    }
}));

export const Projects = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h1 className={classes.head}>Recent Projects:</h1>
                <ProjectCards/>
            </div>
        </>
    );
};
