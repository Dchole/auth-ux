import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import useInfoStyles from "./useInfoStyles";

const ProfileInfo = () => {
  const classes = useInfoStyles();

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
        <Button variant="outlined">Edit</Button>
      </Toolbar>
      <TableContainer>
        <Table aria-labelledby="table-heading">
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                classes={{ root: classes.cell }}
              >
                PHOTO
              </TableCell>
              <TableCell>
                <Avatar variant="rounded" className={classes.avatar} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProfileInfo;
