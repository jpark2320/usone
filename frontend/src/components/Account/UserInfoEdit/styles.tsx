import { Theme } from "@material-ui/core/styles/createMuiTheme";
import createStyles from "@material-ui/core/styles/createStyles";

// const drawerWidth = 245;
// const regionBarHeight = 81;
// const appBarHeight = 56;
// const drawerHeight = regionBarHeight + appBarHeight;
// const AdWidth = 200;

const styles = (theme: Theme) =>
  createStyles({

    childCenterAlign:{
      display: 'flex',
      alignItems: 'center',
      justifycontent: 'center',
    },

    rightAlign:{
      marginLeft:'auto'
    }
   
  });

export default styles;
