import React from "react";
import { Link, Tooltip, Button, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";

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
        marginLeft: theme.spacing(2)

    },
    icon: {
        fontSize: "12",
    },
}));

export const HeaderIcons = () => {
    const classes = useStyles();

    const menuItems = Resume.basics.pages.map((menuItem) => (
        <Link
            href={menuItem.url}
            key={menuItem.name.toLowerCase()}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="inherit"
        >
            <Button
                color="inherit"
                aria-label={menuItem.name}
                className={classes.iconButton}
            >
                {menuItem.name}
            </Button>
        </Link>
    ));

    return <div className={classes.footerIcons}>{menuItems}</div>;
};
