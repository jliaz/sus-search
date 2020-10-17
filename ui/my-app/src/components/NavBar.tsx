import React from 'react';

import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import { Grid, AppBar, makeStyles, Button } from '@material-ui/core';

interface NavBarProps {

}

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none'
    }
  }));

const NavBar = (props: NavBarProps): React.ReactElement => {
    const classes = useStyles();
    console.log(window.location.pathname);
    return(
        <div>
            <AppBar position="static" color="transparent" className={classes.appBar}>
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid
                        item
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            {window.location.pathname !== '/' ? 
                            <>
                                <Search></Search>
                                <ImageSearchButton></ImageSearchButton>
                            </> : 
                            <div></div>}
                            
                        </Grid>
                    </Grid>
                    <Grid
                        item
                    >
                        <Button>
                            Discover
                        </Button>
                        <Button>
                            Login
                        </Button>
                    </Grid>
                </Grid>
                
                

            </AppBar>
        </div>
    )
}

export default NavBar;