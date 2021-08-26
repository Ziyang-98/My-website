import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function ShowcaseCarousel({ showcases, showcaseSizes }) {
  // Breakpoints to resize showcase
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.only("sm"));
  const small = useMediaQuery(theme.breakpoints.only("xs"));
  return (
    <Carousel
      NextIcon={<NavigateNextIcon />}
      PrevIcon={<NavigateBeforeIcon />}
      //   navButtonsAlwaysVisible={showcases.length > 1}
      navButtonsAlwaysInvisible={showcases.length <= 1}
      indicators={showcases.length > 1}
      autoPlay={true}
    >
      {showcases.map((item, i) => {
        return small ? (
          <img
            src={item}
            alt={"showcase" + i}
            width={showcaseSizes.small.width}
            height={showcaseSizes.small.height}
          />
        ) : medium ? (
          <img
            src={item}
            alt={"showcase" + i}
            width={showcaseSizes.medium.width}
            height={showcaseSizes.medium.height}
          />
        ) : (
          <img
            src={item}
            alt={"showcase" + i}
            width={showcaseSizes.large.width}
            height={showcaseSizes.large.height}
          />
        );
      })}
    </Carousel>
  );
}

export default ShowcaseCarousel;
