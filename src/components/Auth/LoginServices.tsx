import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import GoogleIcon from "../GoogleIcon";
import useAuthStyles from "./useAuthStyles";
import useLoginWithProvider from "@/hooks/useLoginWithProvider";

const Toast = dynamic(() => import("../Toast"));

const services = [
  { name: "google", icon: <GoogleIcon /> },
  { name: "facebook", icon: <FacebookIcon /> },
  { name: "twitter", icon: <TwitterIcon /> },
  { name: "github", icon: <GitHubIcon /> }
];

const LoginServices = () => {
  const classes = useAuthStyles();
  const { replace } = useRouter();

  const { error, clearError, login } = useLoginWithProvider(replace);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { provider } = event.currentTarget.dataset;
    login(provider);
  };

  return (
    <>
      <ul className={classes.services}>
        {services.map(service => (
          <li key={service.name}>
            <IconButton
              data-provider={service.name}
              aria-label={service.name}
              onClick={handleClick}
            >
              {service.icon}
            </IconButton>
          </li>
        ))}
      </ul>
      <Toast
        open={Boolean(error)}
        message={error}
        severity="error"
        handleClose={clearError}
        autoHide={false}
      />
    </>
  );
};

export default LoginServices;
