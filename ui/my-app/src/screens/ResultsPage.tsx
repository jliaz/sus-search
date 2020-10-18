import React from 'react';

import ResultsInfo from '../components/ResultsInfo';

import { Grid, makeStyles } from '@material-ui/core';


interface ResultsPageProps {

}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '2000px'
    } 
}));

const ResultsPage = (props: ResultsPageProps): React.ReactElement => {
    const classes = useStyles();
  return(
    <div className={classes.root}>
       <ResultsInfo/>
    </div>
  )
}

export default ResultsPage;
