import { createTheme } from "@mui/material";
import { purple, green } from "@mui/material/colors";

// todo: do I want to use custom theme?
export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
