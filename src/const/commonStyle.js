import { createTheme } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";
import amber from "@material-ui/core/colors/amber";

const commonStyle = () =>
  createTheme({
    palette: {
      primary: {
        main: pink[300],
      },
      secondary: {
        main: amber[400],
      },
    },
  });

export default commonStyle;
