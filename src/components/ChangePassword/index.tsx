import { useState } from "react";
import dynamic from "next/dynamic";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import useChangePasswordStyles from "./useChangePasswordStyles";
import {
  handleSubmit,
  initialValues,
  validationSchema
} from "@/lib/formik-options/password-options";

const Toast = dynamic(() => import("@/components/Toast"));

interface IChangePasswordProps {
  open: boolean;
  handleClose: () => void;
}

const ChangePassword: React.FC<IChangePasswordProps> = ({
  open,
  handleClose
}) => {
  const classes = useChangePasswordStyles();
  const [error, setError] = useState("");

  const handleError = (error: string) => setError(error);
  const clearError = () => setError("");

  return (
    <Dialog
      open={open}
      aria-labelledby="change-password-title"
      onClose={handleClose}
      classes={{ paper: classes.paper }}
      className={classes.root}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit(handleClose, handleError)}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle id="change-password-title">
              Change Password
            </DialogTitle>
            <DialogContent>
              <Field
                component={TextField}
                id="current-password"
                name="current"
                type="password"
                variant="outlined"
                label="Current Password"
                autoComplete="current-password"
                autoFocus
                fullWidth
              />
              <Field
                component={TextField}
                id="new-password"
                name="new"
                type="password"
                variant="outlined"
                label="New Password"
                autoComplete="new-password"
                margin="normal"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                disableElevation={isSubmitting}
              >
                Save new password
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
      <Toast
        open={Boolean(error)}
        message={error}
        severity="error"
        handleClose={clearError}
      />
    </Dialog>
  );
};

export default ChangePassword;
