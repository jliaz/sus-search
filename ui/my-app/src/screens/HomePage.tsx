import React from 'react';

import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import Header from '../components/Header';
import { Grid, GridListTileBar, makeStyles } from '@material-ui/core';

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
        <Search></Search>
        <ImageSearchButton></ImageSearchButton>
      </Grid>
    </Grid>


  )
}

export default HomePage;