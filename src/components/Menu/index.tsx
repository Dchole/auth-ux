import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "../Link";
import useMenuStyles from "./useMenuStyles";

interface IOptionsProps {
  anchorEl: any;
  handleClose: () => void;
}

const Options: React.FC<IOptionsProps> = ({ anchorEl, handleClose }) => {
  const classes = useMenuStyles();

  const logout = () => {
    handleClose();
  };

  const handleProfileClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
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
      <MenuItem onClick={handleProfileClick}>
        <Link href="/profile" underline="none" color="textPrimary">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </Link>
      </MenuItem>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <ExitToAppIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );
};

export default Options;
