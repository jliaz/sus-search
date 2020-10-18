import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';

interface RecommendationSpecs {
    brand: string,
    imageLink: string,
    link: string,
    name: string,
    price: number,
}

interface RecommendationsProps {
    specs: Array<RecommendationSpecs>;
}

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
    }, 
    root: {
        maxWidth: '65%',
        marginLeft: 600,
        
    }
}));

const Recommendations = (props: RecommendationsProps): React.ReactElement => {
    const classes = useStyles();
    const { specs } = props;

    const renderRecommendations = (): React.ReactElement => {
        let code: Array<React.ReactElement> = [];
        specs.forEach((spec) => {
            code.push(<ProductCard
                productName={spec.name}
                companyName={spec.brand}
                price={spec.price}
                productLink={spec.link}
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
        <div className={classes.root}>
            { renderRecommendations()}
        </div>
    )
}

export default Recommendations;
