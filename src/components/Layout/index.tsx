import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import useLayoutStyles from "./useLayoutStyles";

interface ILayoutProps {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Layout: React.FC<ILayoutProps> = ({ children, maxWidth = "md" }) => {
  const classes = useLayoutStyles();

  return (
    <Container component="main" maxWidth={maxWidth} className={classes.root}>
      {children}
      <Grid justify="space-between" container>
        <Link
          href="http://brains.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          Derek Oware
        </Link>
        <Link
          href="http://devchallenges.io"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          devchallenges.io
        </Link>
      </Grid>
    </Container>
  );
};

export default Layout;
