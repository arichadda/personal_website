import React from "react";
import { Tooltip, Zoom, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
    svg: {
        width: "40px",
        height: "40px",
        position: "fixed",
        top: theme.spacing(2),
        left: theme.spacing(6),

    },
}));

function refreshPage() { 
    window.location.reload(); 
}

export const LogoLink = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title="larroes catch medloes"
            placement="right"
            TransitionComponent={Zoom}
        >
             <Button
                color="inherit"
                className={classes.svg}
                onClick={refreshPage}
            >
                <Logo/>
            </Button>
        </Tooltip>
    );
};
