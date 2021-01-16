import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "../Link";
import useAuthStyles from "./useAuthStyles";

interface IFormWrapperProps {
  href?: "login";
}

const FormWrapper: React.FC<IFormWrapperProps> = ({ children, href = "" }) => {
  const classes = useAuthStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      {children}
      <Typography variant="body2">
        or continue with these social profile
      </Typography>
      <span>
        {href === "login" ? "Already a member?" : "Don’t have an account yet?"}{" "}
        <Link href={`/${href}`}>{href === "login" ? "Login" : "Register"}</Link>
      </span>
    </Paper>
  );
};

export default FormWrapper;
