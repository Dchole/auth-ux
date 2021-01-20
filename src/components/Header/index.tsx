import dynamic from "next/dynamic";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useHeaderStyles from "./useHeaderStyles";
import useUser from "@/hooks/useUser";

const Menu = dynamic(() => import("@/components/Menu"));

const Header = () => {
  const classes = useHeaderStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const { user } = useUser();
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("xs"));

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <AppBar
        elevation={0}
        position={mobile ? "static" : "fixed"}
        color="transparent"
      >
        <Toolbar className={classes.toolbar}>
          <div></div>
          <Grid
            justify="space-between"
            alignItems="center"
            classes={{ container: classes.gridContainer }}
            container
          >
            <Avatar
              variant="rounded"
              src={user?.photo}
              alt={user?.name || "profile"}
            />
            <Typography component="span">{user?.name}</Typography>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              aria-label="menu"
              onClick={handleOpen}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};

export default Header;
