import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "../Link";
import useAuthStyles from "./useAuthStyles";
import GoogleIcon from "../GoogleIcon";

interface IFormWrapperProps {
  href?: "login";
}

const services = [
  { name: "google", icon: <GoogleIcon /> },
  { name: "facebook", icon: <FacebookIcon /> },
  { name: "twitter", icon: <TwitterIcon /> },
  { name: "github", icon: <GitHubIcon /> }
];

const FormWrapper: React.FC<IFormWrapperProps> = ({ children, href = "" }) => {
  const classes = useAuthStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
      {children}
      <Typography variant="body2" color="textSecondary">
        or continue with these social profile
      </Typography>
      <ul className={classes.services}>
        {services.map(service => (
          <li key={service.name}>
            <IconButton aria-label={service.name}>{service.icon}</IconButton>
          </li>
        ))}
      </ul>
      <Typography component="span" variant="body2" color="textSecondary">
        {href === "login" ? "Already a member?" : "Don’t have an account yet?"}{" "}
        <Link href={`/${href}`}>{href === "login" ? "Login" : "Register"}</Link>
      </Typography>
    </Paper>
  );
};

export default FormWrapper;
