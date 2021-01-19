import { createStyles, makeStyles } from "@material-ui/core/styles";

const useEditStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(5, 6),
      width: "100%"
    }
  })
);

export default useEditStyles;
