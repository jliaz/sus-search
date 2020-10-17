import React from 'react';

import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';

interface HomePageProps {

}

const HomePage = (props: HomePageProps): React.ReactElement => {
  return (
    <div>
      <Search></Search>
      <ImageSearchButton></ImageSearchButton>
    </div>

  )
}

export default HomePage;