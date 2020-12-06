import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

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

  level: {
    fontStyle: "italic",
  },
  description: {
    // marginTop: theme.spacing(2),
    fontStyle: "italic",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    // fontStyle: "italic",
  },
}));

/*---- My Achievement (Update here, format: {title:  , level , description:}) ----*/
const achievements = [
  {
    title: "Edusave Certificate of Academic Award 2015",
    // level: "",
    // description:
    //   "Achieved top 25% in terms of academic performance in level and course\
    //    and good conduct in the academic institute.",
  },

  {
    title: "CDC - CCC Education Merit Award 2016",
    // level: "",
    // description:
    //   "Identified by MOE and was awarded by Mr Victor Lye who was the advisor of .",
  },

  {
    title: "NUS Orbital Apollo 11(Advanced) 2020",
    // level: "Apollo 11",
    // description:
    //   "A Summer Independent Project designed by NUS School Of Computing,\
    //    where Year 1 Computing students work together in pairs to develop \
    //    software applications in an independent learning environment.",
  },

  {
    title: "Shopee Code League Certificate of Participation 2020",
    // level: "Certificate of Participation",
    // description:
    //   "Led a team of 4 to participate in data analytics, \
    // data science and algorithm competitions and applied various skills \
    // such as machine learning, analyzing data and algorithm knowledge.",
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
        <Card className={classes.card} key="Achievements">
          <CardContent>
            <List dense={false}>
              {achievements.map((a) => (
                <div className={classes.listItem}>
                  <ListItemIcon>
                    <IndeterminateCheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="subtitle1" component="h2">
                      {a.title}
                    </Typography>
                  </ListItemText>
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
