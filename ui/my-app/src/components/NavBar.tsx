import React from 'react';

import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import Header from '../components/Header';
import { Grid, AppBar, makeStyles, Button } from '@material-ui/core';

interface NavBarProps {

}

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        padding: theme.spacing(2),
        minHeight: '65px'
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
                    <Grid item>
                        {window.location.pathname !== '/' ? 
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            spacing={1}
                        >
                            <Grid item> <Header inAppBar={true}/> </Grid>
                            <Grid item> <Search></Search> </Grid>
                            <Grid item> <ImageSearchButton></ImageSearchButton> </Grid>
                        </Grid> : 
                        <div></div>}
                    </Grid>
                    <Grid item>
                        <Button color="secondary">
                            Discover
                        </Button>
                        <Button color="secondary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
                
                

            </AppBar>
        </div>
    )
}

export default NavBar;