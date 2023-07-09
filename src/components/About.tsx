import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  backcolor: {
    color: '#373C38',
    backgroundColor: '#FFFFFF',
  },
});

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <p className={classes.backcolor}>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body2' align='center'>
            Hello! I'm Masuda. I love cooking and traveling.<br />
            I am interested in Data Scientist (statistical skills), Infrastructure (DB) Engineer and Project Manager (PM).<br />
            Applied Information Technology Engineer Examination [AP] was passed (Spring 2023).<br />
            My skill: Python, SQL, AWS & IaC.<br /><br />
            こんにちは！初めまして！趣味は料理と旅行です．<br />
            データサイエンティスト(統計スキル)・インフラ(DB)エンジニア・プロジェクトマネージャー(PM)に興味があります．<br />
            応用情報技術者試験合格(2023年春)．統計検定・データベーススペシャリスト・AWS関連の資格を受験予定です．<br />
            Pythonちょっと使えます．業務でよくSQL書いています．Infrastructure as Code(IaC)を意識したインフラ開発、勉強中です．<br />
            Typescript+Reactは雰囲気で書いています．論文博士も取るために頑張っています...<br />
          </Typography>
        </Box>
      </Box>
    </p>
  );
}

export default About;