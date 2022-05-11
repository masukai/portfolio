import React from 'react';
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import SchoolIcon from '@material-ui/icons/School';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PencilIcon from '@material-ui/icons/Create';
import PublicIcon from '@material-ui/icons/Public';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import MemoryIcon from '@material-ui/icons/Memory';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CodeIcon from '@material-ui/icons/Code';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  Tail: {
    backgroundColor: '#373C38',
  },
  mainred: {
    color: '#E8E8E8',
    backgroundColor: '#B5495B',
    //border: 0,
    //borderRadius: 3,
    boxShadow: '0 2px 5px 3px rgba(255, 105, 135, .5)',
  },
  maincolor: {
    color: '#B5495B',
  },
  subblue: {
    color: '#E8E8E8',
    backgroundColor: '#5B49B5',
    //border: 0,
    //borderRadius: 3,
    boxShadow: '0 2px 5px 3px rgba(135, 105, 255, .5)',
  },
  subcolor: {
    color: '#5B49B5',
  },
  backcolor: {
    color: '#373C38',
    backgroundColor: '#E8E8E8',
  },
}));

const History: React.FC = () => {
  const classes = useStyles();

  return (
    <p className={classes.backcolor}>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4' >
            History
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2016.04-2020.03
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.subblue}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://www.kais.kyoto-u.ac.jp/japanese/' className={classes.subcolor} target="_blank">
              京都大学農学部
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href='http://www.aee.kais.kyoto-u.ac.jp/' className={classes.subcolor} target="_blank">
              地域環境工学科
              </Link>
              に入学しました．
              <Link href='http://energy.kais.kyoto-u.ac.jp/lase/index.php' className={classes.subcolor} target="_blank">
              農業システム工学分野
              </Link>
              で人工光型植物工場の研究をしたく，この学科を選択しました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2016.04-2018.07
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.subblue}>
            <FlightTakeoffIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='http://shootingstars.hannnari.com/' className={classes.subcolor} target="_blank">
              京都大学鳥人間チームShootingStars
              </Link>
            </Typography>
            <Typography variant="body2">
              フェアリング班班長兼設計をしていました．3DCADのFusion360を扱う経験をしました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2016.05-2021.05
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <PencilIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://www.try-plus.com/schools/342' className={classes.maincolor} target="_blank">
              トライプラス宝ヶ池駅前校
              </Link>
            </Typography>
            <Typography variant="body2">
              塾講師として小学生から浪人生まで幅広く見てきました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2017.04-2021.03
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <PublicIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://www.usss.kyoto-u.ac.jp/' className={classes.maincolor} target="_blank">
              京都大学宇宙総合学研究ユニット
              </Link>
            </Typography>
            <Typography variant="body2">
              オフィスアシスタントとしてwebページの更新，宇宙木材利用研究会の参加，長期真空木材実験の参加(Pythonを用いたプログラム作成)，有人宇宙学実習での模擬微小重力実験支援，パラボリックフライト実験の搭乗，と幅広く活動しました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2018.11-2019.03
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <DesktopWindowsIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://hilltop21.co.jp/' className={classes.maincolor} target="_blank">
              HILLTOP株式会社
              </Link>
            </Typography>
            <Typography variant="body2">
              モデラーとして，鳥人間で培った製図能力を活かしながらGO2camやSOLIDWORKSを用いた2Dから3Dへの図面引き起こしや切削プログラム作成の経験をしました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2019.12
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <MemoryIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://www.proglab.education/news/20191129.html' className={classes.maincolor} target="_blank">
              ロボット教室
              </Link>
            </Typography>
            <Typography variant="body2">
              小学生を対象としたArduinoと3Dプリンタを用いたロボット製作全般の運営支援をしました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2020.04-2022.03
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.subblue}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
              <Link href='https://www.kais.kyoto-u.ac.jp/japanese/' className={classes.subcolor} target="_blank">
              京都大学大学院農学研究科
              </Link><br />
              <Link href='https://www.kais.kyoto-u.ac.jp/english/' className={classes.subcolor} target="_blank">
              Graduate School of Agriculture, Kyoto University
              </Link>
            </Typography>
            <Typography variant="body2">
              引き続き，人工光型植物工場の研究をするために同じ研究室の
              <Link href='http://www.est.kais.kyoto-u.ac.jp/' className={classes.subcolor} target="_blank">
              地域環境科学専攻
              </Link>
              /
              <Link href='http://energy.kais.kyoto-u.ac.jp/lase/index.php' className={classes.subcolor} target="_blank">
              農業システム工学分野
              </Link>
              に入りました．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2020.04-2021.09
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <QuestionAnswerIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6" className={classes.maincolor}>
              京都大学大学院農学研究科(NO URL)
            </Typography>
            <Typography variant="body2">
              ティーチングアシスタント/チューターとして，学部3回生向け学生実験の指導/留学生の生活支援をしています．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2020.09-
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.subblue}>
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6" className={classes.subcolor}>
              深層学習・機械学習勉強会(NO URL)
            </Typography>
            <Typography variant="body2">
              Python3系でのTensorFlow・kerasを用いた深層学習勉強会を週一で行っています．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2021.05-2022.03
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.mainred}>
            <PublicIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
            <Link href='https://space.innovationkyoto.org/' className={classes.maincolor} target="_blank">
              京都大学総合生存学館有人宇宙学研究センター
            </Link>
            </Typography>
            <Typography variant="body2">
              オフィスアシスタントとして長期真空木材実験(Pythonを用いたプログラム作成)の運行をしています．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="inherit">
            2022.04-
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.subblue}>
            <EmojiFoodBeverageIcon />
          </TimelineDot>
          <TimelineConnector className={classes.Tail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" component="h6">
            <Link href='https://www.glico.com/jp/' className={classes.subcolor} target="_blank">
              江崎グリコ株式会社
            </Link>
            </Typography>
            <Typography variant="body2">
              経営企画部で働いています．
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
          </Box>
      </Box>
    </p>
  );
}

export default History;