import React from 'react';

import { Grid, makeStyles, Typography, Box, Chip } from '@material-ui/core';


interface ResultsInfoProps {

}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        maxWidth: '30%',
        borderRadius: '5px',
        margin: theme.spacing(2),
        position: 'fixed',
    },
    chip: {
        margin: theme.spacing(0.5),
    }
}));

const ResultsInfo = (props: ResultsInfoProps): React.ReactElement => {
    const classes = useStyles();
    const attributes = ['Pants', 'Denim', 'Light Blue', 'Sweater'];
    const imgSrc = 'https://00f74ba44bfb6de3c57743b8e796177505353cf07a-apidata.googleusercontent.com/download/storage/v1/b/dubhacks-ref-images/o/004faa53-9a0c-42f8-98d4-d285cf04ee5a.jpg?jk=AFshE3Wztw2j8vD0SuJ2qSPDznajlzH1Zl87X3H3awlmuyO7HKTuQ-xIVFCCZVCcEPvrWU-JCjq7cuSLLys2qaDQPvphMs_p5U6QYTT9vwdNKIySf5ajQXOrde8f3OMejVJUaWXZyUELuWjubtXAnG3y_ntGsslYam7DqtJC-vSrv0PO46PHlfbaKJoA0FVmaL1hVMvEILhgXEuZK0WZ7WbLeipsX6TzMcHkLMvh61C-RHgxzgpsI-gRe50YndQZrNcH4kRxgcxB3MXOtZQG4bzkQ-FNQEXIz6FSABG0_kk3RRZX3n-KKVuPV8pYwdi8Qw4idSgnj6PORicWSVk1ESYzDRSvrrWXUQjE3gsPwebgFuhBt1dFiSaFvB9MUkMmf2jhDNWfvivkUo7OrSUVaeSnN7vUZousN1c0VRw9xYZCH3AEMNwUyBcv6YR-8CHQ9kRF4TTPC5n-EsLwM8f2yWF5y5LwsPdp4r2TRWUETOfwuh5HiOVbxKNzmedtaIq8Ho_JH6CcQeYIf7EdTkaAqpoHW9l4u2-r4EfJ1IohWD8R7kh7b_8r4AXDAeTXV43ff2A73RsR-67VnJwlXhiGw4J8SXvgfqxSfBl7qtr8luvCOZHwqx07tvCkDU1ihJfQFlXGCAwQSiEQqmaVVdiAWfe3KET84ihEdOx0kAhsQ2GOhjn0oJ0bUV_gZao6xXU9ueBkDr4eSil48HJrE9a1vP51DO3ZcLhx5VvOifvs_80TuRJ4sxx6vF2V6B2Vpi8b-uusVWtpLYGvXMmPjB6cUGodCOfgokAqKUxaTG-BhIQwrtHlu3sl19aW06YQI1YvA0eIjJKJYDO17iZvlcRZE0KCdphxVcmaoq9Y1ymDcJ6A8Ps81FXavf642Ukk7lIqNwh3dh0cUKtZjDfYEEnW6xvxU0HK4UPEOA&isca=1';

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
                    <img src={imgSrc} alt="Logo" style={{ width: '100%' }} />
                </Grid>
                <Grid item>
                    {renderAttributeChips()}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ResultsInfo;