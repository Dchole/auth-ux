import { createStyles, makeStyles } from "@material-ui/core/styles";

const useAuthStyles = makeStyles(theme =>
  createStyles({
    paper: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(5),
      borderRadius: 24,
      display: "grid",
      placeItems: "center",

      "& h1": {
        fontWeight: 600,
        fontSize: "1.125rem",
        lineHeight: "25px",
        marginBottom: theme.spacing(2)
      },

      "& .MuiTypography-body2": {
        marginBottom: theme.spacing(2)
      },

      "& .MuiFormControl-root": {
        marginTop: theme.spacing(2)
      },

      "& .MuiButton-root": {
        margin: theme.spacing(2, 0, 2)
      }
    },
    services: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      padding: 0,
      margin: 0,

      "& .MuiIconButton-root": {
        border: "1px solid #828282",
        margin: theme.spacing(2, 1, 3)
      }
    }
  })
);

export default useAuthStyles;
