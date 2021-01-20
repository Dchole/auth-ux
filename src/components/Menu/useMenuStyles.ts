import { createStyles, makeStyles } from "@material-ui/core/styles";

const useMenuStyles = makeStyles(theme =>
  createStyles({
    root: {
      "& .MuiList-root": {
        padding: theme.spacing(2, 0),

        "& .MuiMenuItem-root": {
          margin: theme.spacing(0, 1.5),
          borderRadius: theme.shape.borderRadius,

          "&:last-child": {
            color: theme.palette.secondary.main,

            "&:hover": {
              backgroundColor: "rgb(255 0 0 / 4%)"
            }
          }
        }
      },
      "& .MuiLink-root": {
        display: "flex",
        alignItems: "center"
      }
    },
    divider: {
      margin: theme.spacing(1.5, 0)
    }
  })
);

export default useMenuStyles;
