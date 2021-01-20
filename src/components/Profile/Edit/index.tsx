import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import clsx from "clsx";
import { capitalize } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import CameraIcon from "@material-ui/icons/CameraAlt";
import { useFormik } from "formik";
import {
  handleSubmit as onSubmit,
  validationSchema
} from "@/lib/formik-options/profile-options";
import rearrangeUserKeys from "@/utils/rearrange-user-keys";
import useEditStyles from "./useEditStyles";

const ChangePassword = dynamic(() => import("@/components/ChangePassword"));
const Toast = dynamic(() => import("@/components/Toast"));

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const classes = useEditStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleError = (error: string) => setError(error);
  const clearError = () => setError("");

  const handleSuccess = (message: string) => setSuccess(success);
  const clearSuccess = () => setSuccess("");

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    errors,
    values,
    touched
  } = useFormik({
    initialValues: rearrangeUserKeys(user),
    validationSchema,
    onSubmit: onSubmit(handleError, handleSuccess)
  });

  return (
    <Paper variant="outlined" className={classes.root}>
      <div className={classes.header}>
        <Typography component="h1" variant="h4">
          Change Info
        </Typography>
        <Typography variant="body2">
          Changes will be reflected to every services
        </Typography>
      </div>
      <div className={classes.avatar}>
        <div>
          <Avatar variant="rounded" src={user.photo} alt={user.name} />
          <IconButton
            id="upload-profile-button"
            aria-labelledby="change-photo-label"
            onClick={() => inputRef.current.click()}
          >
            <CameraIcon />
          </IconButton>
          <input
            ref={inputRef}
            id="upload-profile-photo"
            accept="image/*"
            name="photo"
            type="file"
            aria-labelledby="change-photo-label"
          />
        </div>
        <Typography
          id="change-photo-label"
          component="span"
          color="textSecondary"
        >
          CHANGE PHOTO
        </Typography>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        {Object.keys(values)
          .slice(1)
          .map((key, index) => (
            <FormControl key={key} className={classes.formControl}>
              <label htmlFor={key}>{capitalize(key)}</label>
              <OutlinedInput
                id={key}
                name={key}
                type={key === "email" ? "email" : "text"}
                placeholder={`Enter your ${key}...`}
                aria-describedby={`${key}-error-message`}
                error={touched[key] && Boolean(errors[key])}
                value={values[key]}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.input}
                autoCapitalize={
                  // Auto Capitalize name and bio
                  // Docs: (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
                  key === "name" ? "words" : key === "bio" ? "on" : "off"
                }
                autoFocus={index === 0}
                multiline={key === "bio"}
                autoComplete={
                  // Autofill
                  // Docs: (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
                  key === "phone" ? "tel" : key === "bio" ? "off" : key
                }
                rows={3}
                fullWidth
              />
              {touched[key] && errors[key] && (
                <FormHelperText error id={`${key}-error-message`}>
                  {errors[key]}
                </FormHelperText>
              )}
            </FormControl>
          ))}
        <FormControl
          className={clsx(classes.formControl, classes.passwordControl)}
        >
          <label htmlFor="password">Password</label>
          <OutlinedInput
            id="password"
            name="password"
            placeholder="****************"
            className={classes.input}
            disabled
          />
          <div id="password-button">
            <IconButton aria-label="change password" onClick={handleOpen}>
              <LockIcon />
            </IconButton>
          </div>
        </FormControl>
        <div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={isSubmitting}
            disableElevation={isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={25} /> : "Save Changes"}
          </Button>
        </div>
      </form>
      <ChangePassword open={open} handleClose={handleClose} />
      <Toast
        open={Boolean(error)}
        message={error}
        severity="error"
        handleClose={clearError}
      />
      <Toast
        open={Boolean(success)}
        message={success}
        severity="success"
        handleClose={clearSuccess}
      />
    </Paper>
  );
};

export default EditProfile;
