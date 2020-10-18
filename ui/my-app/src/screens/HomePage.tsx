import React from 'react';
import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import Header from '../components/Header';
import { Grid, makeStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";

interface HomePageProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '35%',
  },
  header: {
    marginBottom: theme.spacing(3)
  }
}));

const HomePage = (props: HomePageProps): React.ReactElement => {
  const classes = useStyles();
  const history = useHistory();

  console.log(history);

  const isUrl = (searchText: string) => {
    return(searchText.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  const onSearch = (searchText: string) => {
    console.log("SEARCHHHH", searchText);
    if (isUrl(searchText)) {
        history.push({
            pathname: '/results',
            search: `img=${searchText}`
        })
    } else {
        history.push({
            pathname: '/results',
            search: `search=${searchText}`
          });
    }
  }

  const onImageSearch = (img: string) => {
      console.log('image searccch');
      history.push({
          pathname: '/results',
          search: `uploadedImg=${img}`,
      });
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Search onSearch={onSearch}></Search>
        <ImageSearchButton onSearch={onImageSearch}></ImageSearchButton>
      </Grid>
    </Grid>
  )
}

export default HomePage;