import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "../Link";
import useMenuStyles from "./useMenuStyles";
import logout from "@/utils/logout";
import { useRouter } from "next/router";

interface IOptionsProps {
  anchorEl: any;
  handleClose: () => void;
}

const Options: React.FC<IOptionsProps> = ({ anchorEl, handleClose }) => {
  const classes = useMenuStyles();
  const { replace } = useRouter();

  const handleLogout = () => {
    logout(replace);
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.currentTarget.querySelector("a").click();
    handleClose();
  };

  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className={classes.root}
      keepMounted
    >
      <MenuItem onClick={handleClick}>
        <Link href="/profile" underline="none" color="textPrimary">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClick}>
        <Link href="/edit" underline="none" color="textPrimary">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Account" />
        </Link>
      </MenuItem>
      <Divider component="li" className={classes.divider} />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <ExitToAppIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );
};

export default Options;
