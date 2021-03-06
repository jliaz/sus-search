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
   
  },

}));

const ResultsPage = (props: ResultsPageProps): React.ReactElement => {
  const classes = useStyles();
  const [recommendations, setRecommendations] = useState<Array<RecommendationSpecs>>([]);

  const [searchedImage, setSearchedImage] = useState('');
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const img = params.get('img');
    const txt = params.get('search');
    setSearchedImage(img || '');
    setSearchedText(txt || '');
    // GET request using fetch inside useEffect React hook
    axios.get(`http://127.0.0.1:5000/imageSearch?uri=${img}`)
    .then(res => {
        const data = res.data;
        setRecommendations(data.results);
    })
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  });
  return (
    <>
      <ResultsInfo image={searchedImage} text={searchedText}/>
      <Recommendations specs={recommendations}/>
    </>
    
  )
}

export default ResultsPage;
