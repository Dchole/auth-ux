import { createStyles, makeStyles } from "@material-ui/core/styles";

const useLayoutStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

export default useLayoutStyles;
