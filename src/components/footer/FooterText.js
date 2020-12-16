import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footerText: {
        // position: "absolute",
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        transition: "all 0.5s ease",
    },
    linkText: { 
        "&:hover": {
            color: theme.palette.primary.main,
        },
    }
}));

export const FooterText = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerText}>
            <Tooltip
                title={"Freepik Website"}
                placement="bottom"
                TransitionComponent={Zoom}
            >
                <Link
                    color="inherit"
                    underline="none"
                    href="http://www.freepik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.linkText}
                >
                    <Typography variant="body1">
                        <div>Icons created by Freepik</div>
                    </Typography>
                </Link>
            </Tooltip>
            <Typography variant="body1" >
                    <div>* Code avaliable on request</div>
            </Typography>
        </div>
    );
};
