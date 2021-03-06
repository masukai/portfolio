import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstaIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'
import Avatar from '@material-ui/core/Avatar'

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
    backgroundColor: '#B5495B',
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
        <Toolbar>
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#achievements' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              ACHIEVEMENTS
            </Button>
          </AnchorLink>
          <AnchorLink href='#history' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              HISTORY
            </Button>
          </AnchorLink>
        </Toolbar>
        <Box className={classes.root}>
          <Link href='#masuda.kaito.v30_kyoto-u.jp'>
            <Avatar className={classes.mainblack}>
              <MailIcon />
            </Avatar>
          </Link>
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
          <Link href='https://www.youtube.com/channel/UCs3PA1NIqcmAq3FZBOSax6g' target="_blank">
            <Avatar className={classes.mainblack}>
              <YouTubeIcon />
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