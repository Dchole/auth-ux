import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import {
  handleSubmit,
  initialValues
} from "@/lib/formik-options/register-options";
import { validationSchema } from "@/lib/formik-options/auth-options";
import useShowPassword from "@/hooks/useShowPassword";

const RegisterForm = () => {
  const [showPassword, handleToggle] = useShowPassword();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form aria-labelledby="heading">
          <Typography id="heading" component="h1" variant="body1">
            Join thousands of learners from around the world
          </Typography>
          <Typography id="description" variant="body2">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Typography>
          <Field
            component={TextField}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            autoComplete="email"
            autoFocus
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon color="action" />
                </InputAdornment>
              )
            }}
          />
          <Field
            component={TextField}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            autoComplete="new-password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggle}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={isSubmitting}
            disableElevation={isSubmitting}
            aria-busy={isSubmitting}
            fullWidth
          >
            {isSubmitting ? <CircularProgress size={25} /> : "Start coding now"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
