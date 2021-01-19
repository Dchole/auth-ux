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
import useInfoStyles from "./useInfoStyles";
import useUser from "@/hooks/useUser";

const userData = {
  photo: undefined,
  name: "Xanthe Neal",
  bio: "I am a software developer and a big fan of devchallenges...",
  phone: "908249274292",
  email: "xanthe.neal@gmail.com",
  password: "************"
};

const ProfileInfo = () => {
  const classes = useInfoStyles();
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
        <Button variant="outlined">Edit</Button>
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
        <TableContainer>
          <Table aria-labelledby="table-heading">
            <TableBody>
              {Object.entries(user).map(([key, value], index) => (
                <TableRow key={key}>
                  <TableCell
                    component="th"
                    scope="row"
                    classes={{ root: classes.cell }}
                  >
                    {key.toUpperCase()}
                  </TableCell>
                  <TableCell>
                    {!index ? (
                      <Avatar variant="rounded" className={classes.avatar} />
                    ) : (
                      value || "Empty"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default ProfileInfo;
