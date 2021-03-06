import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import ImageSearchButton from '../components/ImageSearchButton';
import Header from '../components/Header';
import { Grid, AppBar, makeStyles, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

interface NavBarProps {
    atHome: boolean;
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
    const { atHome } = props;
    console.log(window.location.pathname);
    const history = useHistory();

    const isUrl = (searchText: string) => {
        return(searchText.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const onSearch = (searchText: string) => {
        console.log("SEARCHHHH");
        if (isUrl(searchText)) {
            history.push({
                pathname: '/results',
                search: `img=${searchText}`
            })
        } else {
            history.push({
                pathname: '/results',
                search: `search=${searchText}`
              });
        }
    }

    const onImageSearch = (img: string) => {
        console.log('image searccch');
        history.push({
            pathname: '/results',
            search: `img=${img}`
        });
    }
    
    return (
        <div>
            <AppBar position="static" color="transparent" className={classes.appBar}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        { !atHome ?
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
                                <Grid item> <Header inAppBar={true} /> </Grid>
                                <Grid item> <Search placeholderText="Search another..." onSearch={onSearch}></Search> </Grid>
                                <Grid item> <ImageSearchButton onSearch={onImageSearch}></ImageSearchButton> </Grid>
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