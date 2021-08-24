import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

// 画像ファイルをインポート
import ImageFile from '../static/images/masuda2.png'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
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
            Master Student. <Link href='https://www.kais.kyoto-u.ac.jp/english/' className={classes.mainred} target="_blank">
            Graduate School of Agriculture, Kyoto University.
            </Link><br />
            <Link href='https://www.kais.kyoto-u.ac.jp/japanese/' className={classes.mainred} target="_blank">
              京都大学大学院農学研究科
            </Link> 修士課程
          </Typography>
        </Box>
      </Box>
    </p>
  );
}

export default MyAvatar;