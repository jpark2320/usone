import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme) => createStyles({
    root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    },
    image: {
        position: 'relative',
        height: 70,
        [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor'
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
    },
});

const images = [
    {
        url: require('images/city/la.jpg'),
        title: 'LA',
        width: '25%',
    },
    {
        url: require('images/city/seattle.jpg'),
        title: 'Seattle',
        width: '25%',
    },
    {
        url: require('images/city/atlanta.jpg'),
        title: 'Atlanta',
        width: '25%',
    },
    {
        url: require('images/city/newyork.jpg'),
        title: 'New York',
        width: '25%',
    }
];

class RegionNaviBar extends React.Component<WithStyles<typeof styles>> {
  public render() {
      return (
      <div className={this.props.classes.root}>
        {images.map(image => (
        <ButtonBase
                focusRipple ={true}
                key={image.title}
                className={this.props.classes.image}
                focusVisibleClassName={this.props.classes.focusVisible}
                style={{
                width: image.width,
                }}
        >
            <span
                className={this.props.classes.imageSrc}
                style={{backgroundImage: `url(${image.url})`}}
            />
            <span className={this.props.classes.imageBackdrop} />
            <span className={this.props.classes.imageButton}>
                <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={this.props.classes.imageTitle}
                >
                  {image.title}
                    <span className={this.props.classes.imageMarked} />
                </Typography>
              </span>
        </ButtonBase>
        ))}
      </div>
      );
  }
}

  export default withStyles(styles)(RegionNaviBar);