import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    [theme.breakpoints.down("xl")]: {
      marginRight: "35%",
    },

    [theme.breakpoints.down("lg")]: {
      marginRight: "25%",
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: "0%",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    // marginLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },

  cardHolder: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  card: {
    width: 450,
    [theme.breakpoints.down("md")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      width: 450,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
    backgroundColor: "#e8eaf6",
  },

  levelHolder: {
    // marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },

  level: {
    fontStyle: "italic",
  },
  description: {
    // marginTop: theme.spacing(2),
    fontStyle: "italic",
  },
}));

/*---- My Achievement (Update here, format: {title:  , level , description:}) ----*/
const achievements = [
  {
    title: "Orbital Project",
    level: "Apollo 11",
    description:
      "A Summer Independent Project designed by NUS School Of Computing,\
       where Year 1 Computing students work together in pairs to develop \
       software applications in an independent learning environment.",
  },
  {
    title: "Shopee Code League 2020",
    level: "Certificate of Participation",
    description:
      "Led a team of 4 to participate in data analytics, \
    data science and algorithm competitions and applied various skills \
    such as machine learning, analyzing data and algorithm knowledge.",
  },
];

export default function Achievements() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">Achievements</Typography>
      </div>

      <Box className={classes.container}>
        {achievements.map((a) => (
          <div className={classes.cardHolder}>
            <Card className={classes.card} key={a.title}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {a.title}
                </Typography>
                <div className={classes.levelHolder}>
                  <Typography variant="body1" component="span">
                    Achievement Level:{" "}
                  </Typography>
                  <Typography
                    className={classes.level}
                    variant="body1"
                    component="span"
                    color="primary"
                  >
                    {" "}
                    {a.level}
                  </Typography>
                </div>
                <Typography
                  className={classes.description}
                  variant="body2"
                  component="p"
                >
                  {a.description}
                  {/* <br />
              {'"a benevolent smile"'} */}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Box>
    </div>
  );
}
