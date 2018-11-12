import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';

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