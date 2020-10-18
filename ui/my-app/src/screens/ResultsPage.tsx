import React, { useEffect } from 'react';
import Recommendations from '../components/Recommendations';

interface RecommendationSpecs {
  productName: string,
  companyName: string,
  price: number,
  productLink: string,
  imageLink: string,
}

interface ResultsPageProps {

}

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

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://127.0.0.1:5000/imageSearch?uri=https://cdn.shopify.com/s/files/1/0373/2642/2152/products/IMG_2918_420x.jpg?v=1602820943')
        .then(response => {
          console.log(response)
        });

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <Recommendations
      Rec1Specs={Rec1Specs}
      Rec2Specs={Rec2Specs}
      Rec3Specs={Rec3Specs}></Recommendations>
  )
}

export default ResultsPage;
