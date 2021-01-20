import { createStyles, makeStyles } from "@material-ui/core/styles";

const useEditStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      margin: theme.spacing(2),
      width: "100%",

      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(5, 6)
      }
    },
    header: {
      marginBottom: theme.spacing(2)
    },
    avatar: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2),

      "& #upload-profile-photo": {
        display: "none"
      },

      "& > div": {
        position: "relative",

        "&:hover, &:focus, &:focus-within": {
          "& .MuiAvatar-root": {
            backgroundColor: "#575757aa",
            color: "#888"
          },

          "& button": {
            opacity: 1
          }
        },

        "& .MuiAvatar-root": {
          width: 60,
          height: 60,
          borderRadius: 4,
          transition: theme.transitions.create(["background-color", "color"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest
          })
        },

        "& button": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: theme.transitions.create("opacity", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.short
          }),

          "& svg": {
            color: "white"
          }
        }
      }
    },
    form: {
      display: "flex",
      flexDirection: "column",

      "& button[type=submit]": {
        minWidth: 125
      }
    },
    formControl: {
      width: "60%"
    },
    input: {
      margin: theme.spacing(0.5, 0, 2)
    },
    passwordControl: {
      position: "relative",

      "& #password-button": {
        position: "absolute",
        width: "100%",
        height: "56%",
        top: "26%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#aaa1",

        "& button": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }
      }
    }
  })
);

export default useEditStyles;
