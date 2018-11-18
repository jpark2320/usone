import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      overflowX: "auto",
      position: "relative"
    },
    table: {
      maxWidth: "100%"
    },
    category__button: {
      minWidth: 33,
      marginRight: "10px",
      backgroundColor: "#636469",
      padding: "6px",
      minHeight: "28px"
    },
    category__button__label: {
      fontSize: "11px"
    }
  });

export default styles;
