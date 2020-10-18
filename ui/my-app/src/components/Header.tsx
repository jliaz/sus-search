import React from 'react';
import logo from '../assets/logo.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, makeStyles } from '@material-ui/core'

interface HeaderProps {
    inAppBar?: boolean
}

const useStyles = makeStyles((theme) => ({
  }));

const Header = (props: HeaderProps): React.ReactElement => {
    const classes = useStyles();
    const { inAppBar } = props;
    return(
      <Grid
        container
        justify="flex-start"
        alignItems="center"
      >
          <Grid item>
            <img src={logo} alt="Logo" style={{width: inAppBar ? "40px" : "60px"}}/>
          </Grid>
          <Grid item>
            <Typography component="h6" color="secondary">
                <Box fontSize={inAppBar ? "h6.fontSize" : "h4.fontSize"} m={1}>
                    SusSearch
                </Box>
            </Typography>
          </Grid>
      </Grid>
    )
}

export default Header;