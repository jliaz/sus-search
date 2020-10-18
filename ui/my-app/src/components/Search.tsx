import { IconButton, InputBase, makeStyles, Paper, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

interface SearchProps {
  placeholderText?: string;
  onSearch: Function;
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

const Search = (props: SearchProps): React.ReactElement => {
  const { placeholderText, onSearch } = props;
  const classes = useStyles();

  const [content, setContent] = useState("");

  const onClick = (searchText: string) => {
    console.log(searchText);
    onSearch(searchText);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholderText ? placeholderText : 'Search...'}
        color="secondary"
        onChange={(event) => setContent(event.target.value)}
      />
      <IconButton className={classes.iconButton} onClick={() => onClick(content)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search;