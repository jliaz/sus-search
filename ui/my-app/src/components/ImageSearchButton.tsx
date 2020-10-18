import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

interface ImageSearchButtonProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: '50px',
    maxHeight: '45px',
    minHeight: '45px',
  },
  input: {
    display: 'none',
  },
}));

const ImageSearchButton = (props: ImageSearchButtonProps): React.ReactElement => {
  const classes = useStyles();

  const [img, setImg] = useState("");

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(event) =>
          setImg(event.target.value)}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.button}
          startIcon={<ImageSearchIcon />}
        >
          Image Search
        </Button>
      </label>
    </div>
  )
}

export default ImageSearchButton;