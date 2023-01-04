import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

import Carousel from "react-material-ui-carousel";

const useStyles = (theme) => ({
  showcaseHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  showcaseTitle: {
    margin: theme.spacing(2, 0, 0, 0),
    fontStyle: "italic",
  },
});

function Item({ showcase, index, width, height }) {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box sx={styles.showcaseHolder}>
      <img
        src={showcase.image}
        alt={"showcase" + index}
        width={width}
        height={height}
      />
      <Typography
        variant="subtitle1"
        color="textPrimary"
        className={styles.showcaseTitle}
      >
        {showcase.title}
      </Typography>
    </Box>
  );
}

function ShowcaseCarousel({ showcases, showcaseSizes }) {
  // Breakpoints to resize showcase
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.only("sm"));
  const small = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Carousel
      navButtonsAlwaysVisible={showcases.length > 1}
      indicators={showcases.length > 1}
      autoPlay
      animation={"slide"}
    >
      {showcases.map((item, i) => {
        return small ? (
          <Item
            showcase={item}
            index={i}
            width={showcaseSizes.small.width}
            height={showcaseSizes.small.height}
          />
        ) : medium ? (
          <Item
            showcase={item}
            index={i}
            width={showcaseSizes.medium.width}
            height={showcaseSizes.medium.height}
          />
        ) : (
          <Item
            showcase={item}
            index={i}
            width={showcaseSizes.large.width}
            height={showcaseSizes.large.height}
          />
        );
      })}
    </Carousel>
  );
}

export default ShowcaseCarousel;
