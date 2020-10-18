import React from 'react';

import ResultsInfo from '../components/ResultsInfo';

interface ResultsPageProps {

}

const ResultsPage = (props: ResultsPageProps): React.ReactElement => {
  return(
    <div>
       <ResultsInfo/>
    </div>
  )
}

export default ResultsPage;
