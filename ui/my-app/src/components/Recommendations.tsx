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
    specs: Array<RecommendationSpecs>;
}

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
    }
}));

const Recommendations = (props: RecommendationsProps): React.ReactElement => {
    const classes = useStyles();
    const { specs } = props;

    const renderRecommendations = (): React.ReactElement => {
        let code: Array<React.ReactElement> = [];
        specs.forEach((spec) => {
            code.push(<ProductCard
                productName={spec.productName}
                companyName={spec.companyName}
                price={spec.price}
                productLink={spec.productLink}
                imageLink={spec.imageLink}></ProductCard>)
        })
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                {code}
            </Grid>
        )
    };

    return (
        <div>
            { renderRecommendations()}
        </div>
    )
}

export default Recommendations;
