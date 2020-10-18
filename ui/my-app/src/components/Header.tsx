import React from 'react';
import logo from '../assets/logo.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';


interface HeaderProps {
  inAppBar?: boolean
}

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: '"Crimson Text"',
  },
}));

const Header = (props: HeaderProps): React.ReactElement => {
  const classes = useStyles();
  const { inAppBar } = props;
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <img src={logo} alt="Logo" style={{ width: inAppBar ? "40px" : "60px" }} />
        </Grid>
        <Grid item>
          <Typography component="h6" color="secondary" className={classes.typography}>
            <Box fontSize={inAppBar ? "h6.fontSize" : "h3.fontSize"} m={1}>
              SusSearch
                </Box>
          </Typography>
        </Grid>
      </Grid>
    </Link>

  )
}

export default Header;