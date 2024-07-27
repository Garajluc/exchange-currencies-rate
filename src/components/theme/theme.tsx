import { createTheme } from "@mui/material";
import { purple, orange, pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
      light: purple[300],
      contrastText: "#ffffff",
    },
    secondary: {
      main: orange[500],
      light: pink[300],
      dark: orange[900],
      contrastText: "#000000",
    },
  },
  typography: {
    allVariants: {
      color: "#3f3e5b",
    },
    htmlFontSize: 16,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: "2.375rem",
      lineHeight: 1.21,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.57,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 300,
      lineHeight: 1.66,
    },
  },
});
