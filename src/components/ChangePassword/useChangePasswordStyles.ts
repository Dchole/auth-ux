import { createStyles, makeStyles } from "@material-ui/core/styles";

const useChangePasswordStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& .MuiDialogTitle-root, & .MuiDialogContent-root, & .MuiDialogActions-root": {
        padding: theme.spacing(1, 1)
      }
    },
    paper: {
      padding: theme.spacing(2),
      margin: theme.spacing(2)
    }
  })
);

export default useChangePasswordStyles;
