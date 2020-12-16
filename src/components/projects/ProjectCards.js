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
        // backgroundColor: theme.palette.background.paper,
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
                    primary="Project One"
                    secondary={
                        <React.Fragment>
                            {"The allocation of capital is society is an incredibly onus as one decides how the future is shaped. VC's determine which technologies are nurtured into existence and which less-promising ones are left by the wayside. The VCIC and related workshops would give me valuable insight and experience into the process of valuing companies and predicting their trajectories. In the near term, weak-AI/ML companies will restructure our relationships with data and each other, in the mid-term synthetic biology will revolutionize our understanding of the limits of the natural world, and, in the long term, once, quantum computing can maintain millions of stable qubits, as opposed to the fifty-or-so that are in quantum computers today, it will usher in a new age of computational achievement that may even allow for true artificial intelligence. With, VCIC and related workshops I would love to explore and discuss the future of civilization. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Project One"
                    secondary={
                        <React.Fragment>
                            {"The allocation of capital is society is an incredibly onus as one decides how the future is shaped. VC's determine which technologies are nurtured into existence and which less-promising ones are left by the wayside. The VCIC and related workshops would give me valuable insight and experience into the process of valuing companies and predicting their trajectories. In the near term, weak-AI/ML companies will restructure our relationships with data and each other, in the mid-term synthetic biology will revolutionize our understanding of the limits of the natural world, and, in the long term, once, quantum computing can maintain millions of stable qubits, as opposed to the fifty-or-so that are in quantum computers today, it will usher in a new age of computational achievement that may even allow for true artificial intelligence. With, VCIC and related workshops I would love to explore and discuss the future of civilization. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Project One"
                    secondary={
                        <React.Fragment>
                            {"The allocation of capital is society is an incredibly onus as one decides how the future is shaped. VC's determine which technologies are nurtured into existence and which less-promising ones are left by the wayside. The VCIC and related workshops would give me valuable insight and experience into the process of valuing companies and predicting their trajectories. In the near term, weak-AI/ML companies will restructure our relationships with data and each other, in the mid-term synthetic biology will revolutionize our understanding of the limits of the natural world, and, in the long term, once, quantum computing can maintain millions of stable qubits, as opposed to the fifty-or-so that are in quantum computers today, it will usher in a new age of computational achievement that may even allow for true artificial intelligence. With, VCIC and related workshops I would love to explore and discuss the future of civilization. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary="Project One"
                    secondary={
                        <React.Fragment>
                            {"The allocation of capital is society is an incredibly onus as one decides how the future is shaped. VC's determine which technologies are nurtured into existence and which less-promising ones are left by the wayside. The VCIC and related workshops would give me valuable insight and experience into the process of valuing companies and predicting their trajectories. In the near term, weak-AI/ML companies will restructure our relationships with data and each other, in the mid-term synthetic biology will revolutionize our understanding of the limits of the natural world, and, in the long term, once, quantum computing can maintain millions of stable qubits, as opposed to the fifty-or-so that are in quantum computers today, it will usher in a new age of computational achievement that may even allow for true artificial intelligence. With, VCIC and related workshops I would love to explore and discuss the future of civilization. "}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider component="li" />
            </List>
        </Container>
    );
};
 