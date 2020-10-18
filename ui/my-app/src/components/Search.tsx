import { IconButton, InputBase, makeStyles, Paper, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';


interface SearchProps {

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
    [`& fieldset`]: {
        borderRadius: 50,
      },
  },
  iconButton: {
    padding: 10,
  },
}));

function submit() {
  alert("sus");
}

const Search = (props: SearchProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        color="secondary"
      />
      <IconButton type="submit" className={classes.iconButton} onClick={() => submit()}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search;