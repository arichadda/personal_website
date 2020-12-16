import React from "react";
import { Typography, Container, Avatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    large: {
        marginTop: 20,
        marginRight: 40,
        width: theme.spacing(35),
        height: theme.spacing(35),
      },
    right: {
        flex: 1,
    },
    left: {
        marginTop: 0,
        flex: 3,
    }
}));

export const Bio = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <div className={classes.right}>
                <Avatar alt="Ari Chadda" src={require("../images/index.jpg")} className={classes.large}></Avatar>
            </div>
            <div className={classes.left}>
                <Typography variant="h5" component="h2" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body2">
                    I'm Ari Chadda, a junior at Dartmouth College double majoring in Computer Science and Philosophy as well as pursuing a minor in Arabic.  
                    I spent this past summer at the Intelligence Community’s Venture Capital arm: In-Q-Tel as a Data Science/Machine Learning intern creating and optimizing machine learning pipelines to detect and classify aircraft using complex characteristics in remote sensing imagery. 
                </Typography>
                <br></br>
                <Typography variant="body2">
                    A little more about me: I’ve been exposed to a wide range of coursework related to artificial intelligence, machine learning, and data science. 
                    Most recently, for my lab at Dartmouth, I’ve been building a mobile sensing application with a team of developers and have been involved in developing the full stack (API integration, UI/UX, database, etc.). 
                    From there, we hope to leverage the data collected to create machine learning pipelines to predict and contextualize adverse glycemic events in diabetes patients. 
                    Additionally, in the data collection interim, I’ve been working on a renal tumor detection pipeline on CT scan imagery to provide radiologists with a second-look confirmation tool. 
                    In addition to my work at In-Q-Tel and the Augmented Health Lab, I have also worked at the National Institutes of Health and the D.C. Gov’s Office of the Chief Financial Officer. 
                    While seemingly unrelated, the breadth of these experiences has often given me unique insights into problems that I would not have considered otherwise.
                </Typography>
                <br></br>
                <Typography variant="body2">
                    I have strong programming fundamentals as well as experience with various neural networks (YOLO, EfficentNet, etc.) and other machine learning techniques in both PyTorch and TensorFlow. 
                    I am most interested in leveraging what I’ve learned to create production-ready solutions.
                </Typography>
                <br></br>
                <Typography variant="body2">
                    Currently in search of a 2021 summer internship in data science, ML/AI engineering, or software engineering. 
                    If you know of any opportunities or are looking for a scrappy and persistent summer intern please reach out and let me know. 
                </Typography>
            </div>

        </Container>
    );
};
 