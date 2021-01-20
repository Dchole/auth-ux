import Snackbar from "@material-ui/core/Snackbar";
import Alert, { Color } from "@material-ui/lab/Alert";

interface IToastProps {
  open: boolean;
  message: string;
  severity: Color;
  handleClose: () => void;
}

const Toast: React.FC<IToastProps> = ({
  open,
  message,
  severity,
  handleClose
}) => {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
