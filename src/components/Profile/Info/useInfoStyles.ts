import { createStyles, makeStyles } from "@material-ui/core/styles";

const useInfoStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: "100%",
      margin: theme.spacing(5.5, 0, 2)
    },
    toolbar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(3, 4)
    },
    cell: {
      padding: theme.spacing(2, 4)
    },
    avatar: {
      borderRadius: 4
    }
  })
);

export default useInfoStyles;
