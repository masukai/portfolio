import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  mainred: {
    color: '#B5495B',
  },
  backcolor: {
    color: '#373C38',
    backgroundColor: '#E8E8E8',
  },
});

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <p className={classes.backcolor}>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h4' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='center'>
            Hello! <br />
            I'm researching the relationship between irradiation methods and 
            leaf lettuce in plant factories with artificial light (PFALs) in Kyoto. <br />
            My hobbies are cooking, running, and traveling (driving). <br />
            I'm interested in data scientist and IT planner / strategist.
            I can use Python and R a little, and I'm learning Typescript+React and SQL. <br />
            I'm working as an office assistant (OA) at <Link href='https://space.innovationkyoto.org/' className={classes.mainred} target="_blank">
            the Center for Human Space Studies, Kyoto University</Link>.<br /><br />
            こんにちは！<br />
            京都で人工光型植物工場における照射方法とリーフレタスの応答について研究してます．<br />
            趣味は料理，ランニング，旅行(ドライブ)です．<br />
            データサイエンティストやIT企画・ストラテジストに興味があります．
            PythonとRはちょっと使えます．Typescript+ReactとSQLは勉強中です．<br />
            その他，<Link href='https://space.innovationkyoto.org/' className={classes.mainred} target="_blank">
            京都大学総合生存学館有人宇宙学研究センター</Link>でオフィスアシスタントとして働いています．
          </Typography>
        </Box>
      </Box>
    </p>
  );
}

export default About;