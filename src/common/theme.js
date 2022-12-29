import { createTheme } from "@mui/material/styles";

const commonTheme = {
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#7580e8",
    },
    whiteColor: {
      main: "#212121",
    },
    background: {
      main: "#424242",
    },
    h2: {
      fontSize: 11,
    },
  },
});

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    whiteColor: {
      main: "#F7FCFC",
    },
    background: {
      main: "#F7FCFC",
    },
    h2: {
      fontSize: 11,
    },
  },
});
