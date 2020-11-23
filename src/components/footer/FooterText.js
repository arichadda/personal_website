import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom } from "@material-ui/core";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    footerText: {
        position: "absolute",
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        "&:hover": {
            color: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const FooterText = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title={"Freepik Website"}
            placement="top"
            TransitionComponent={Zoom}
        >
            <Link
                color="inherit"
                underline="none"
                href="http://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footerText}
            >
                <Typography variant="body1">
                    <div>Icons created by Freepik</div>
                </Typography>
            </Link>
        </Tooltip>
    );
};
