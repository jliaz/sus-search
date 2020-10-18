import React from 'react';
import logo from '../assets/logo.png';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, makeStyles } from '@material-ui/core'

interface HeaderProps {

}

const useStyles = makeStyles((theme) => ({
    root: {
     
    },
    logo: {
        width: '40px'
    }
  }));

const Header = (props: HeaderProps): React.ReactElement => {
    const classes = useStyles();
  return(
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        className={classes.root}
      >
          <Grid item>
            <img src={logo} alt="Logo" className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography component="h6">
                <Box fontSize="h6.fontSize" m={1}>
                    SusSearch
                </Box>
            </Typography>
          </Grid>
      </Grid>
        
  )
}

export default Header;