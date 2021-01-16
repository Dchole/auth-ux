import Typography from "@material-ui/core/Typography";
import { handleSubmit } from "@/lib/formik-options/login-options";
import AuthForm from ".";

const LoginForm = () => {
  return (
    <AuthForm form="Login" handleSubmit={handleSubmit}>
      <Typography id="heading" component="h1">
        Login
      </Typography>
    </AuthForm>
  );
};

export default LoginForm;
