import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

interface ImageSearchButtonProps {

}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ImageSearchButton = (props: ImageSearchButtonProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      startIcon={<ImageSearchIcon />}
      onClick = {() => {alert('t r i g g e r e d')}}
    >
      Image Search
    </Button>
  )
}

export default ImageSearchButton;