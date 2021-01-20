import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from "@/components/Link";
import useUser from "@/hooks/useUser";
import rearrangeUserKeys from "@/utils/rearrange-user-keys";
import useInfoStyles from "./useInfoStyles";

const ProfileInfo = () => {
  const classes = useInfoStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { user, fetchingUser } = useUser();

  return (
    <Paper component="section" variant="outlined" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography id="table-heading" component="h2" variant="h6">
            Profile
          </Typography>
          <Typography variant="body2">
            Some info may be visible to other people
          </Typography>
        </div>
        {/* @ts-ignore */}
        <Button
          component={Link}
          href="/edit"
          variant="outlined"
          role={undefined}
          naked
        >
          Edit
        </Button>
      </Toolbar>
      {fetchingUser ? (
        <Box
          width="100%"
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer className={classes.container}>
          <Table aria-labelledby="table-heading">
            <TableBody>
              {Object.entries(rearrangeUserKeys(user)).map(
                ([key, value], index) => (
                  <TableRow key={key}>
                    <TableCell
                      component="th"
                      scope="row"
                      classes={{ root: classes.cell }}
                    >
                      {key.toUpperCase()}
                    </TableCell>
                    <TableCell
                      align={mobile ? "right" : "left"}
                      classes={
                        index === 0
                          ? { alignRight: classes.alignRight }
                          : undefined
                      }
                    >
                      {!index ? (
                        <Avatar
                          variant="rounded"
                          src={user.photo}
                          alt={user.name}
                          className={classes.avatar}
                        />
                      ) : (
                        value || "Empty"
                      )}
                    </TableCell>
                  </TableRow>
                )
              )}
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  classes={{ root: classes.cell }}
                >
                  PASSWORD
                </TableCell>
                <TableCell align={mobile ? "right" : "left"}>
                  ************
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default ProfileInfo;
