import Snackbar from "@material-ui/core/Snackbar";
import Alert, { Color } from "@material-ui/lab/Alert";

interface IToastProps {
  open: boolean;
  message: string;
  severity: Color;
  autoHide: boolean;
  handleClose: () => void;
}

const Toast: React.FC<IToastProps> = ({
  open,
  message,
  severity,
  autoHide = true,
  handleClose
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHide ? 2500 : null}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
