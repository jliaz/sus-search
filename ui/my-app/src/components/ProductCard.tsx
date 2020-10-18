import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { stringify } from 'querystring';


interface ProductCardProps {
    productName: string,
    companyName: string,
    price: number,
    productLink: string,
    imageLink: string,
}

const useStyles = makeStyles((theme) => ({
    cardAction: {
        display: 'block',
        textAlign: 'initial'
    },
    root: {
        maxWidth: 350,
        minWidth: 350,
        margin: theme.spacing(2),
    },
    media: {
        height: 450,

    },
}));


const ProductCard = (props: ProductCardProps): React.ReactElement => {
    const classes = useStyles();
    const { productName, companyName, price, productLink, imageLink } = props;

    const fixCasing = (name: string): string => {
        var newName: string;
        newName = '';
        name.split(' ').forEach( (word) => {
            newName += word[0].toUpperCase() + word.substring(1, word.length).toLowerCase() + ' ';
        });


        return newName;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageLink}
                    title={productName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {fixCasing(productName)}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        {companyName} · {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container justify="center">
                    <Button target="_blank" href={productLink} >
                        See Product
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default ProductCard;
