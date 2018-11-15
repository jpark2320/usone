import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: 600,
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto",
      position: 'relative',
      top: 150
    },
    table: {
      minWidth: 400,
      maxWidth: 600
    }
  });

export default styles;
