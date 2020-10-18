import { IconButton, InputBase, makeStyles, Paper, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';


interface SearchProps {
  placeholderText?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    borderRadius: '50px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function submit(searchContent: String) {
  console.log(searchContent);
}

const Search = (props: SearchProps): React.ReactElement => {
  const classes = useStyles();
  const { placeholderText } = props;

  const [searchContent, setContent] = useState("");

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholderText ? placeholderText : 'Search...'}
        color="secondary"
        onChange={(event) => setContent(event.target.value)}
      />
      <IconButton className={classes.iconButton} onClick={() => submit(searchContent)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search;