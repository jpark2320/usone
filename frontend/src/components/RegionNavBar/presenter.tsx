import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import styles from "./styles";

interface IamProps extends WithStyles<typeof styles> {
  images: any;
  region: string;
  onClickRegion: (actions: object) => void;
}

const RegionNavBar: React.SFC<IamProps> = props => {
  const { images, classes, region, onClickRegion } = props;
  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple={true}
          key={image.title}
          className={
            region === image.key ? classes.focusVisible : classes.image
          }
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
          onClick={onClickRegion}
        >
          <span
            className={classes.imageSrc}
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};

export default withStyles(styles)(RegionNavBar);
