import { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import GoogleIcon from "../GoogleIcon";
import useAuthStyles from "./useAuthStyles";
import { DeviceContext } from "../DeviceContext";

const services = [
  { name: "google", icon: <GoogleIcon /> },
  { name: "facebook", icon: <FacebookIcon /> },
  { name: "twitter", icon: <TwitterIcon /> },
  { name: "github", icon: <GitHubIcon /> }
];

const LoginServices = () => {
  const classes = useAuthStyles();
  const mobile = useContext(DeviceContext);

  return (
    <>
      <ul className={classes.services}>
        {services.map(service => (
          <li key={service.name}>
            <IconButton aria-label={service.name}>{service.icon}</IconButton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LoginServices;
