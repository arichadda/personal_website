import React from "react";
import { WorkExperience } from "../components/workexp/WorkExperience";
import { makeStyles } from "@material-ui/core/styles";
import { FooterText } from "../components/footer/FooterText";



const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    head: {
        marginLeft: 20,
        marginTop: 60
    },
 
}));

export const Work = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h1 className={classes.head}>Work Experience:</h1>
                <WorkExperience/>
                <FooterText/>
            </div>
        </>
    );
};
