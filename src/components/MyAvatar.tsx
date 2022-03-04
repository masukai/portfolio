import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

// 画像ファイルをインポート
import ImageFile from '../static/images/pu.png'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  mainred: {
    color: '#B5495B',
  },
  backcolor: {
    color: '#373C38',
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();
  return (
    <p className={classes.backcolor}>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Kaito Masuda'
            src={ImageFile}
            className={classes.large}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5'>
            KAITO MASUDA / 増田 凱斗
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            <Link href='https://masukai.github.io/portfolio/' className={classes.mainred} target="_blank">
            このサイト
            </Link>
            はポートフォリオ/CVとなっております．
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body2'>
            *If you want to check my email adress, please click the above icon and watch the URL.<br />
            *メールアドレスは上のアイコンクリック後にURLをご確認ください．
          </Typography>
        </Box>
      </Box>
    </p>
  );
}

export default MyAvatar;