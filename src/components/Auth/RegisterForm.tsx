import Typography from "@material-ui/core/Typography";
import { handleSubmit } from "@/lib/formik-options/register-options";
import AuthForm from ".";

const RegisterForm = () => {
  return (
    <AuthForm form="Register" handleSubmit={handleSubmit}>
      <Typography id="heading" component="h1" variant="body1">
        Join thousands of learners from around the world
      </Typography>
      <Typography id="description" variant="body2">
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </Typography>
    </AuthForm>
  );
};

export default RegisterForm;
