import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

interface ImageSearchButtonProps {
    onSearch: Function;
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
  const { onSearch } = props;
  const classes = useStyles();

  const [img, setImg] = useState("");

  const onFileUpload = (event: any) => {
      setImg(event.target.value);
      onSearch(event.target.value);
  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        name="file"
        id="contained-button-file"
        type="file"
        onChange={(event) =>
          onFileUpload(event)}
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