import { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import MailIcon from "@material-ui/icons/Mail";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  initialValues,
  TValues,
  validationSchema
} from "@/lib/formik-options/auth-options";

interface IFormProps {
  form: "Login" | "Register";
  handleSubmit: (values: TValues, actions: FormikHelpers<TValues>) => void;
}

const AuthForm: React.FC<IFormProps> = ({ children, form, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => setShowPassword(!showPassword);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form aria-labelledby="heading">
          {children}
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
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <CircularProgress size={20} color="inherit" />
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
            autoComplete={
              form === "Login" ? "current-password" : "new-password"
            }
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
                    onClick={handleToggleVisibility}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
            {isSubmitting ? (
              <CircularProgress size={25} />
            ) : form === "Login" ? (
              "Login"
            ) : (
              "Start coding now"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
