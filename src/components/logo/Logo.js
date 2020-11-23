import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        // "&:hover": {
        //     fill: theme.palette.primary.main,
        // },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21.331 21.331"
            className={classes.svgHover}
        >
            <path
                d="M10.19,11.288c0.75-0.038,2.656-0.197,2.656-0.197V7.724l-2.856,3.21
                C9.99,10.935,9.435,11.325,10.19,11.288z M18.731,9.943c0,0-0.75-0.594-0.712-2.734C18.058,5.068,18.1,3.246,18.1,3.246
                s-0.318-5.944-5.985-1.744L2.843,12.321c0,0-3.289,5.15,3.568,6.417c1.743-0.118,3.446-1.188,4.595,0.753
                c0.436,0.753,2.021,3.014,5.547,1.072c0.517-0.398,1.229-1.19,1.267-3.369c0.081-0.832-0.081-4.984,0.912-5.048
                C18.731,12.146,19.96,10.695,18.731,9.943z M16.411,11.489c-0.854,0.109-1.179,0.217-1.268,0.198c0,0.527,0.039,4.922,0.039,6.299
                c-1.229,1.349-2.496,0-2.496,0s-0.077-3.369-0.038-5.759c-4.56,0.529-6.34,2.946-6.739,3.303c-0.475,0.197-1.03-0.239-1.03-0.239
                c-0.555-0.157,0-0.99,0-0.99l8.362-9.906c1.585-1.149,1.783,0.514,1.783,0.514v6.181c0,0,0.633,0,1.345-0.038
                C17.085,11.288,16.411,11.489,16.411,11.489z"
                transform="translate(-1 0)"
            />
        </svg>

    );
};
