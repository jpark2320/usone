import { Theme } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme) =>
  createStyles({
    tempContainerStyle: {
      marginTop: "5%",
      marginLeft: "15%",
      marginRight: "15%",

      [theme.breakpoints.down("lg")]: {
        marginTop: "10%",
        marginLeft: "3%",
        marginRight: "3%"
      }
    },
    paper: {
      // marginTop:'5%',
      // marginLeft:'3%',
      // marginRight:'3%',
      textOverflow: "ellipsis",
      padding: theme.spacing.unit * 3,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    root: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    tableWrapper: {
      // border:'solid grey'
      // overflowX: 'auto',
    },
    tableNoOverFlow: {
      // tableLayout: 'fixed',
    },
    tableContainer: {
      // marginLeft:'3%',
      // marginRight:'3%'
    },

    tableHeaderRow: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
      // color:'white',
      // backgroundColor: 'black',
    },
    tableHeaderCell: {
      overflow: "hidden",
      textVverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    defaultTableCell: {
      overflow: "hidden",
      textVverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    smallTableCell: {
      // paddingLeft : theme.spacing.unit * 2 ,
      // paddingRight: theme.spacing.unit * 2 ,
      width: "5rem",

      overflow: "hidden",
      textVverflow: "ellipsis",
      whiteSpace: "nowrap",

      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    midTableCell: {
      // paddingLeft : theme.spacing.unit * 2 ,
      // paddingRight: theme.spacing.unit * 2 ,
      width: "10rem",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    titleCell: {
      width: "30rem",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("lg")]: {
        whiteSpace: "unset"
      }
    },
    consolidatedInfoForTitleCell: {
      display: "none",

      [theme.breakpoints.down("xs")]: {
        display: "block",
        whiteSpace: "unset",
        color: "lightgray",
        fontSize: "0.8em",
        marginTop: "0.3rem",
        fontWeight: 700
      }
    },
    titleCellViewTag: {
      display: "none",

      [theme.breakpoints.down("sm")]: {
        display: "inline-block",
        color: "grey"
      }
    },
    tablePagination: {
      color: "grey"
    },
    tableCurrentPagePagination: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit * 1,

      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },

    pagenationAction: {
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0
      }
    },
    paginationSelect: {
      paddingRight: theme.spacing.unit * 3,
    },
    paginationSelectFontSize:{
      fontSize:'12px',
      paddingLeft:theme.spacing.unit * 1,
      color:'grey'
    },

    displayWhenDesktop: {
      [theme.breakpoints.up("lg")]: {
        // display:'none'
      }
    },
    displayWhenMobile: {
      display: "none",

      [theme.breakpoints.down("sm")]: {
        display: "inline-block"
      }
    },
    hideWhenLessThanMobileXS: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    }
  });

export default styles;
