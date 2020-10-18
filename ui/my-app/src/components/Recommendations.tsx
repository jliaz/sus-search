import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';

interface RecommendationSpecs {
    productName: string,
    companyName: string,
    price: number,
    productLink: string,
    imageLink: string,
}

interface RecommendationsProps {
    Rec1Specs: RecommendationSpecs,
    Rec2Specs: RecommendationSpecs,
    Rec3Specs: RecommendationSpecs,
}

const useStyles = makeStyles({

});

const Recommendations = (props: RecommendationsProps): React.ReactElement => {
    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <ProductCard
                productName={props.Rec1Specs.productName}
                companyName={props.Rec1Specs.companyName}
                price={props.Rec1Specs.price}
                productLink={props.Rec1Specs.productLink}
                imageLink={props.Rec1Specs.imageLink}></ProductCard>
            <ProductCard
                productName={props.Rec2Specs.productName}
                companyName={props.Rec2Specs.companyName}
                price={props.Rec2Specs.price}
                productLink={props.Rec2Specs.productLink}
                imageLink={props.Rec2Specs.imageLink}></ProductCard>
            <ProductCard
                productName={props.Rec3Specs.productName}
                companyName={props.Rec3Specs.companyName}
                price={props.Rec3Specs.price}
                productLink={props.Rec3Specs.productLink}
                imageLink={props.Rec3Specs.imageLink}></ProductCard>

        </Grid>
    )
}

export default Recommendations;
