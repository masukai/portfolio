import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
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
            Hello! Nice to meet you! My name is Masuda.<br />
            I love cooking and traveling (driving). 
            I've been playing with my 3D printer lately.<br />
            I'm interested in data scientist and IT planner / strategist.<br />
            Fundamental Information Technology Engineer Examination [FE] was passed (CBT; 2020).<br />
            I will be taking Applied Information Technology Engineer Examination [AP] (Spring 2022).<br />
            I can use Python and R a little (about 5 years), and I'm learning Typescript+React and SQL.<br /><br />
            こんにちは！初めまして！増田と申します．<br />
            趣味は料理と旅行(ドライブ)です．
            最近は3Dプリンタにもハマっています．<br />
            データサイエンティストやIT企画・ストラテジストに興味があります．<br />
            基本情報技術者試験合格(2021年春)．
            応用情報技術者試験受験予定(2022年春)．<br />
            PythonとRはちょっと使えます(5年くらい)．Typescript+ReactとSQLは勉強中です．<br />
          </Typography>
        </Box>
      </Box>
    </p>
  );
}

export default About;