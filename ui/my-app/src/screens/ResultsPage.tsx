import React from 'react';
import Recommendations from '../components/Recommendations';
import ResultsInfo from '../components/ResultsInfo';

import { Grid, makeStyles } from '@material-ui/core';


interface ResultsPageProps {

}


interface RecommendationSpecs {
  productName: string,
  companyName: string,
  price: number,
  productLink: string,
  imageLink: string,
}


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '2000px'
  }
}));

const ResultsPage = (props: ResultsPageProps): React.ReactElement => {
  const Rec1Specs = {
    productName: "O'Sullivan Coat",
    companyName: "A Kind of Guise",
    price: 695,
    productLink: "https://akindofguise.com/product/osullivan-coat-forest-green/",
    imageLink: "https://akindofguise.com/app/uploads/osullivan_coat_forest_green_0459-1000x1500.jpg",
  };
  const Rec2Specs = {
    productName: "Avalon Jacket",
    companyName: "A Kind of Guise",
    price: 495,
    productLink: "https://akindofguise.com/product/avalon-jacket-burned-red/",
    imageLink: "https://akindofguise.com/app/uploads/avalon_jacket_burnedred_0088-1000x1500.jpg",
  };
  const Rec3Specs = {
    productName: "Kilkee Vest",
    companyName: "A Kind of Guise",
    price: 395,
    productLink: "https://akindofguise.com/product/kilkee-vest-dark-saphire/",
    imageLink: "https://akindofguise.com/app/uploads/kilkee_vest_darksaphire_0096-1000x1500.jpg",
  };


  const recommendations: Array<RecommendationSpecs> = [
    Rec1Specs, Rec2Specs, Rec3Specs, Rec3Specs, Rec3Specs, Rec3Specs, Rec3Specs, Rec3Specs, Rec3Specs,
  ]

  return (
    <Recommendations
      specs={recommendations}></Recommendations>
  )
}

export default ResultsPage;
