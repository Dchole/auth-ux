import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  shape: {
    borderRadius: 8
  },
  typography: {
    button: {
      textTransform: "initial"
    }
  }
});

export default theme;
