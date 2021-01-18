import { createStyles, makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles(theme =>
  createStyles({
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    gridContainer: {
      width: "initial",
      gap: theme.spacing(2)
    }
  })
);

export default useHeaderStyles;
