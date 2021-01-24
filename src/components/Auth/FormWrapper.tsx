import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "../Link";
import useAuthStyles from "./useAuthStyles";
import DeviceContextProvider from "../DeviceContext";
import LoginServices from "./LoginServices";

interface IFormWrapperProps {
  href?: "login";
}

const FormWrapper: React.FC<IFormWrapperProps> = ({ children, href = "" }) => {
  const classes = useAuthStyles();

  return (
    <DeviceContextProvider>
      <Paper variant="outlined" className={classes.paper}>
        {children}
        <Typography variant="body2" color="textSecondary">
          or continue with these social profile
        </Typography>
        <LoginServices />
        <Typography component="span" variant="body2" color="textSecondary">
          {href === "login"
            ? "Already a member?"
            : "Don’t have an account yet?"}{" "}
          <Link href={`/${href}`}>
            {href === "login" ? "Login" : "Register"}
          </Link>
        </Typography>
      </Paper>
    </DeviceContextProvider>
  );
};

export default FormWrapper;
