const drawerWidth = 245;
const regionBarHeight = 79;
const appBarHeight = 70;
const drawerHeight = regionBarHeight + appBarHeight;
const AdWidth = 200;

const styles: any = (theme: any) => ({
  root: {
    position: "relative",
    color: "black",
    backgroundColor: "white",
    width: `calc(100% - ${drawerWidth}px)`,
    paddingRight: `${AdWidth}px`,
    top: `${drawerHeight}px`,
    left: `${drawerWidth}px`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: 0
    },
    [theme.breakpoints.down("xs")]: {
      top: `${appBarHeight}px`,
      paddingRight: 0,
      left: 0
    }
  },
  bodyContainer: {
    color: "black",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: 0
    }
  },
  main: {
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: "auto",
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: 400
    }
  },
  // tslint:disable-next-line:object-literal-sort-keys
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing.unit
  },
  form: {
    marginTop: theme.spacing.unit,
    width: "100%"
  },
  paper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

export default styles;
