import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import { handleSubmit as onSubmit } from "@/lib/formik-options/profile-options";
import rearrangeUserKeys from "@/utils/rearrange-user-keys";
import useEditStyles from "./useEditStyles";

interface IUser {
  photo: string;
  name: string;
  bio: string;
  phone: string;
  email: string;
}

interface IEditProfileProps {
  user: IUser;
}

const EditProfile: React.FC<IEditProfileProps> = ({ user }) => {
  const classes = useEditStyles();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    touched
  } = useFormik({ initialValues: rearrangeUserKeys(user), onSubmit });

  return (
    <Paper variant="outlined" className={classes.root}>
      <div>
        <Typography component="h1" variant="h4">
          Change Info
        </Typography>
        <Typography variant="body2">
          Changes will be reflected to every services
        </Typography>
      </div>
      <div>
        <Avatar variant="rounded" />
        <Typography component="span" color="textSecondary">
          CHANGE PHOTO
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor="name">Name</label>
          <OutlinedInput
            id="name"
            name="name"
            placeholder="Enter your name..."
            aria-describedby="name-error-message"
            error={touched.name && Boolean(errors.name)}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />
          {touched.name && errors.name && (
            <FormHelperText id="name-error-message">
              {errors.name}
            </FormHelperText>
          )}
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={isSubmitting}
          disableElevation={isSubmitting}
        >
          {isSubmitting ? <CircularProgress /> : "Save Changes"}
        </Button>
      </form>
    </Paper>
  );
};

export default EditProfile;
