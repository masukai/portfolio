import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstaIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  mainblack: {
    color: '#E8E8E8',
    backgroundColor: '#373C38',
    //border: 0,
    //borderRadius: 3,
    boxShadow: '0 2px 5px 3px rgba(55, 55, 55, .5)',
  },
  mainred: {
    color: '#E8E8E8',
    backgroundColor: '#5B49B5',
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar
        color='default'
        position='relative'
        style={{ alignItems: 'center'}}
        className={classes.mainred}
      >
        <Box display='flex' justifyContent='center' p={1} >
        <Typography variant='body2'>
            <Link href='https://masukai.github.io/portfolio/' className={classes.mainred} target="_blank">
            このサイト
            </Link>
            はポートフォリオ/CVです．
          </Typography>
        </Box>
        <Box className={classes.root}>
          <Link href='https://twitter.com/poyo010_' target="_blank">
            <Avatar className={classes.mainblack}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href='https://www.instagram.com/poyo010_/' target="_blank">
            <Avatar className={classes.mainblack}>
              <InstaIcon />
            </Avatar>
          </Link>
          <Link href='https://www.facebook.com/kaito.masuda.581' target="_blank">
            <Avatar className={classes.mainblack}>
              <FacebookIcon />
            </Avatar>
          </Link>
          <Link href='https://github.com/masukai' target="_blank">
            <Avatar className={classes.mainblack}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;