import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Recommendations from '../components/Recommendations';
import ResultsInfo from '../components/ResultsInfo';

import { Grid, makeStyles } from '@material-ui/core';


interface ResultsPageProps {

}


interface RecommendationSpecs {
  brand: string,
  imageLink: string,
  link: string,
  name: string,
  price: number,
}


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '2000px'
  },

}));

const ResultsPage = (props: ResultsPageProps): React.ReactElement => {
  const classes = useStyles();
  const [recommendations, setRecommendations] = useState<Array<RecommendationSpecs>>([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    axios.get(`http://127.0.0.1:5000/imageSearch?uri=https://cdn.shopify.com/s/files/1/0373/2642/2152/products/IMG_2918_420x.jpg?v=1602820943`)
    .then(res => {
        const data = res.data;
        setRecommendations(data.results);
    })

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <>
      <ResultsInfo/>
          <Recommendations
            specs={recommendations}/>
    </>
    
  )
}

export default ResultsPage;
