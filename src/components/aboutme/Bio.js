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
        marginTop: 30,
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
                <p>I’ve been around the world twice, talked to everyone once, seen two whales fuck, been to 3 world fairs, and I even know a man in Thailand with a wooden cock. 
                    Push more peter, more sweeter and more completer than any other peter pusher around. 
                    I’m a hard bodied, hairy chested, rootin, tootin, shootin, parachutin, demolition double cap crimping, frog man. 
                    There ain’t nothing I can’t do, no sky too high, no sea to rough, no muff too tough. 
                    Learnt a lot of lessons in my life, never shoot a large caliber man with a small caliber bullet. 
                    Drive all kinds of truck 2 bys, 4 bys, 6 bys, those big motherfuckers that bend and go tshhhh, tshhhh, when you step on the breaks. 
                    Anything in life worth doing, is worth overdoing, moderation is for cowards. 
                    I’m a lover, I’m a fighter, I’m a UDT Navy Seal Diver, I wine, dine, intertwine and sneak out the back door when the revealing is done. 
                    So if you’re feeling froggy you better jump because this frogman’s been there, done that, and is going back for more. Cheers Boys!
                </p>
            </div>

        </Container>
    );
};
 