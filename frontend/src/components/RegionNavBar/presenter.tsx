import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import styles from './styles';

export interface IamProps extends WithStyles<typeof styles> {
  images: any
}

export const RegionNavBar: React.SFC<IamProps> = (props) => {
    const images = props.images
      return (
      <div className={props.classes.root}>
        {images.map(image => (
        <ButtonBase
                focusRipple ={true}
                key={image.title}
                className={props.classes.image}
                focusVisibleClassName={props.classes.focusVisible}
                style={{
                width: image.width,
                }}
        >
          <span
            className={props.classes.imageSrc}
            style={{backgroundImage: `url(${image.url})`}}
          />
          <span className={props.classes.imageBackdrop} />
          <span className={props.classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={props.classes.imageTitle}
            >
              {image.title}
              <span className={props.classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        ))}
      </div>
      );
}

export default withStyles(styles)(RegionNavBar);
