import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    root: {
        width: '100%',
        marginBottom: 100,
      },
      inline: {
        display: 'inline',
      },
}));

export const ProjectCards = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="HealthMine App"
                    secondary={
                        <React.Fragment>
                            {"Full-stack Android mobile sensing application called HealthMine to contextualize adverse diabetes-related glycemic events to foster better patient care."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Aircraft Sub-Characteristic Classification Pipeline"
                    secondary={
                        <React.Fragment>
                            {"machine learning pipeline to perform complex classifications of civilian and military aircraft by using YOLOv5."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Chess AI"
                    secondary={
                        <React.Fragment>
                            {"Implemented the Minimax algorithm with the material heuristic to create a search-tree-based chess player."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Restaurant Textbot"
                    secondary={
                        <React.Fragment>
                            {"Created a text-based chatbot service using Twillio and Google APIs to find top restaurants in your city."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Tiny Search Engine"
                    secondary={
                        <React.Fragment>
                            {"Wrote a web crawler, indexer, and querier interfaces in C to find web pages using keywords."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Sudoku Solver"
                    secondary={
                        <React.Fragment>
                            {"Converted puzzles to constraint normal form and implemented WalkSAT and GSAT algorithms to solve."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="HMM Maze Solver"
                    secondary={
                        <React.Fragment>
                            {"Implemented the particle filtering Hidden Markov Model to solve robot maze problems with probabilistic inputs."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Run Tracker App"
                    secondary={
                        <React.Fragment>
                            {"Created full-stack Android run tracking app that supports both GPS tracking and manual entry."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Constraint Satisfaction Problem Solver"
                    secondary={
                        <React.Fragment>
                            {"Implementations of solvers for the map coloring and circut board constraint satisfaction probelms using backtracking, ac3, etc. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
            </List>
        </Container>
    );
};
 