import React from 'react';

import { Grid, makeStyles, Typography, Box, Chip } from '@material-ui/core';


interface ResultsInfoProps {
    image: string;
    text: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        maxWidth: '25%',
        borderRadius: '5px',
        margin: theme.spacing(2),
        position: 'fixed',
    },
    chip: {
        margin: theme.spacing(0.5),
    }
}));

const ResultsInfo = (props: ResultsInfoProps): React.ReactElement => {
    const { image, text } = props;
    const classes = useStyles();
    const attributes = ['Pants', 'Denim', 'Light Blue', 'Sweater'];
    

    const renderAttributeChips = (): React.ReactElement => {
        let chips: Array<React.ReactElement> = [];
        attributes.forEach((attr) => {
            chips.push(<Chip label={attr} className={classes.chip} />);
        })
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {chips}
            </Grid>
        );
    }

    return (
        <Box boxShadow={3} className={classes.root}>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <Typography component="h6" color="secondary">
                        <Box fontSize="h6.fontSize" m={1}>
                            Showing results for...
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                {/* <img src={image} alt="Logo" style={{ width: '100%' }}/> */}
                    {image !== '' ?
                        <img src={image} alt="Logo" style={{ width: '100%' }}/> :
                        <Typography component="p" color="secondary">
                            <Box fontSize="p" m={1}>
                                { text }
                            </Box>
                        </Typography>
                    }
                </Grid>
                <Grid item>
                    {renderAttributeChips()}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultsInfo;