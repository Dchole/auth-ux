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
    container: {
      borderTop: `1px solid ${theme.palette.grey[300]}`
    },
    cell: {
      padding: theme.spacing(2, 4)
    },
    alignRight: {
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "initial"
    },
    avatar: {
      borderRadius: 4,
      width: 50,
      height: 50
    }
  })
);

export default useInfoStyles;
