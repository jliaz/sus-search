import React from 'react';

import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import { Grid, makeStyles } from '@material-ui/core';
import Header from '../components/Header';

interface HomePageProps {

}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '35%',
  },
}));

const HomePage = (props: HomePageProps): React.ReactElement => {
  const classes = useStyles();

  return (
      <div>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
        >
            <Search></Search>
            <ImageSearchButton></ImageSearchButton>
        </Grid>
      </div>
    

  )
}

export default HomePage;