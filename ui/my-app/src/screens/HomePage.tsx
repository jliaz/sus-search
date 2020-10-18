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

  const onSearch = (searchText: string) => {
      console.log("SEARCHHHH");
      history.push({
          pathname: '/results',
          search: searchText
      });
  }

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item className={classes.header}>
            <Header/>
        </Grid>
        <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Search onSearch={onSearch}></Search>
            <ImageSearchButton></ImageSearchButton>
        </Grid>
      </Grid>

      <ProductCard
        productName="Green Lizard"
        companyName="The Lizard Company"
        price={125}
        productLink="https://www.nationalgeographic.com/animals/reptiles/"
        imageLink="https://www.nationalgeographic.com/content/dam/animals/pictures/hero/reptiles-hero.jpg"></ProductCard>
    </div>


  )
}

export default HomePage;