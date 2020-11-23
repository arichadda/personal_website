import React from "react";
import { LogoLink } from "../components/logo/LogoLink";
import { Content } from "../components/content/Content";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { FooterText } from "../components/footer/FooterText";
import { FooterIcons } from "../components/footer/FooterIcons";
import { SpeedDials } from "../components/speedDial/SpeedDial";
import { HeaderIcons } from "../components/header/HeaderIcons";



const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
}));

export const Home = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <LogoLink/>
                <HeaderIcons/>
                <Content/>
                <ThemeToggle/>
                <Hidden smDown>
                    <FooterIcons/>
                </Hidden>
                <Hidden mdUp>
                    <SpeedDials/>
                </Hidden>
                <FooterText/>
            </div>
        </>
    );
};
