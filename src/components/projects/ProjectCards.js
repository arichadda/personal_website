import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Tooltip, Link, Zoom } from "@material-ui/core";
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
      linkText: { 
        "&:hover": {
            color: theme.palette.primary.main,
        },
    }
}));

export const ProjectCards = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <Tooltip title={"Play Store"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://play.google.com/store/apps/details?id=ai.chadda.dsmdp2" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    HealthMine
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                    primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/yolov5" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Aircraft Sub-Characteristic Classification Pipeline
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
                    secondary={
                        <React.Fragment>
                            {"Machine learning pipeline to perform complex classifications of civilian and military aircraft by using YOLOv5."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/chess_ai" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Chess AI
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/resturant_textbot" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Restaurant Textbot
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code Available Upon Request"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Tiny Search Engine*
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/sudoku_solver" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Sudoku Solver
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/hidden_markov_model_maze_solver" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    HMM Maze Solver
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/android_run_tracker" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Run Tracker App
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
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
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/constraint_satisfaction_problem_solver" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    Constraint Satisfaction Problem Solver
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
                    secondary={
                        <React.Fragment>
                            {"Implementations of solvers for the map coloring and circut board constraint satisfaction probelms using backtracking, ac3, etc. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                     primary={
                        <Tooltip title={"Code"} placement="left-end" TransitionComponent={Zoom}>
                            <Link color="inherit" underline="true" href="https://github.com/arichadda/" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                                <Typography variant="body1">
                                    More projects can be found on my GitHub
                                </Typography>
                            </Link>
                        </Tooltip>
                    }
                    />
                </ListItem>
                <Divider component="li" />
            </List>
        </Container>
    );
};
 