import React from "react";
import { createTheme } from "@mui/material/styles";

const useTheme = () => {
  const [toggleDark, setToggleDark] = React.useState(false);

  const handleToggle = () => {
    setToggleDark(!toggleDark);
  };
  const theme = createTheme({
    typography: {
      fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(
        ","
      ),
    },
    palette: {
      type: toggleDark ? "dark" : "light",

      primary: {
        main: toggleDark ? "#7580e8" : "#3f51b5",
      },
      whiteColor: {
        main: toggleDark ? "#002984" : "#F7FCFC",
      },
      typography: {
        h2: {
          fontSize: 11,
        },
      },
    },
  });
  return { theme, handleToggle };
};

export default useTheme;
