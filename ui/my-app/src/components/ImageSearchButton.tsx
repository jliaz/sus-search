import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

interface ImageSearchButtonProps {

}

function submit() {
  alert('t r i g g e r e d');
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ImageSearchButton = (props: ImageSearchButtonProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="default"
          component="span"
          className={classes.button}
          startIcon={<ImageSearchIcon />}
        // onClick={() => submit()}
        >
          Image Search
        </Button>
      </label>
    </div>
  )
}

export default ImageSearchButton;