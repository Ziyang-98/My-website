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
        sx={styles.showcaseTitle}
      >
        {showcase.title}
      </Typography>
    </Box>
  );
}

const ADD_CAROUSELL_HEIGHT = 50;

function ShowcaseCarousel({ showcases, showcaseSizes }) {
  // Breakpoints to resize showcase
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.only("sm"));
  const small = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Carousel
      navButtonsAlwaysInvisible={showcases.length <= 1}
      navButtonsAlwaysVisible={showcases.length > 1}
      indicators={showcases.length > 1}
      autoPlay={false}
      animation={"slide"}
      height={
        (small
          ? showcaseSizes.small.height
          : medium
          ? showcaseSizes.medium.height
          : showcaseSizes.large.height) + ADD_CAROUSELL_HEIGHT
      }
    >
      {showcases.map((item, i) => {
        const sizes = item.specificSizes ?? showcaseSizes;
        return (
          <Item
            key={i}
            showcase={item}
            index={i}
            width={
              small
                ? sizes.small.width
                : medium
                ? sizes.medium.width
                : sizes.large.width
            }
            height={
              small
                ? sizes.small.height
                : medium
                ? sizes.medium.height
                : sizes.large.height
            }
          />
        );
      })}
    </Carousel>
  );
}

export default ShowcaseCarousel;
