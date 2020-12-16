import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom, Container } from "@material-ui/core";
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';


const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
    linkText: { 
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
}));

export const WorkExperience = () => {
    const classes = useStyles();

    return (
        <Container component="main" className={`${classes.main}`} maxWidth="lg">
            <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color="textPrimairy">March 2020 - Present</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color="primary"></TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="h3">Augmented Health Lab @ Dartmouth College</Typography>
                    <Typography variant="h8" component="h3">Full-Stack Engineer/Machine Learning Researcher</Typography>
                    <Typography variant="body2">• Led a team of developers in building a full-stack Android mobile sensing application called HealthMine to contextualize adverse diabetes-related glycemic events to foster better patient care and helped design the upcoming study.*</Typography>
                    <Tooltip title={"HealthMine App"} placement="bottom" TransitionComponent={Zoom}>
                        <Link color="inherit" underline="true" href="https://play.google.com/store/apps/details?id=ai.chadda.dsmdp2" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                            <Typography variant="body2">
                                <div>• Click here to see the deployed HealthMine app on the Google Play Store.</div>
                            </Typography>
                        </Link>
                    </Tooltip>
                    <Typography variant="body2">• Working to design a deployable renal tumor detection pipeline in Tensorflow/PyTorch for CT scan imagery using CNNs and crowd-sourced annotations with emphasis on explainability to provide radiologists with a second-look confirmation tool.*</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography color="textPrimairy">June 2020 - August 2020</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="h3">In-Q-Tel – IQT Labs - CosmiQ Works</Typography>
                    <Typography variant="h8" component="h3">Data Science/Machine Learning Intern</Typography>
                    <Typography variant="body2">• Built and optimized a machine learning pipeline to perform complex classifications of civilian and military aircraft by using convolutional neural networks (semantic segmentation and object detection approaches in PyTorch) on remote sensing imagery</Typography>
                    <Tooltip title={"IQT Company Blog"} placement="bottom" TransitionComponent={Zoom}>
                        <Link color="inherit" underline="true" href="https://www.iqt.org/you-only-look-once%E2%80%8A-%E2%80%8Amulti-faceted-object-detection-w-rareplanes/" target="_blank" rel="noopener noreferrer" className={classes.linkText}>
                            <Typography variant="body2">
                                <div>• Click here to see the blog I wrote for In-Q-Tel about some of my work.</div>
                            </Typography>
                        </Link>
                    </Tooltip>
                    <Typography variant="body2">• Created an AWS Amazon Machine Image instance, accompanying GitHub repository, YouTube walkthrough, Medium tutorial and presented to IQT’s Intelligence Community partners</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography color="textPrimairy">Dec 2018 – Feb 2019</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="h3">Government of the District of Columbia OCFO</Typography>
                    <Typography variant="h8" component="h3">Data Science Intern – Office of Revenue Analysis and the Chief Economist</Typography>
                    <Typography variant="body2">• Performed empirical data and economic analyses using Excel, SAS and SQL plus on District of Columbia Income Tax Data to evaluate the efficacy of the D.C. Earned Income Tax Credit Policy</Typography>
                    <Typography variant="body2">• Presented to the Chief Economist of the District of Columbia as well as composed an internally circulated findings paper</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
                    <Typography color="textPrimairy">Jun 2016 - Aug 2017</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" component="h3">National Institutes of Health</Typography>
                    <Typography variant="h8" component="h3">Neurobiology Intern – Summer Research Student Program</Typography>
                    <Typography variant="body2">• In 2017, investigated, in-depth, the underlying aberrant neurobiology in hopes of expanding on research from my previous summer by performing qRT-PCR assays on developing mouse brains to study interneuron migration defects related to schizophrenia-related behaviors and presented at the NIH 2017 Summer Poster Day for 100+ scientific experts</Typography>
                    <Typography variant="body2">• In 2016, performed 5-CSRT assays on transgenic mice to study the NRG-ErbB4 signaling pathway to investigate schizophrenia- related at attention and impulsivity deficits culminating in a presentation at NIH 2016 Summer Poster Day</Typography>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
        </Container>
    );
}