import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
    color: '#E8E8E8',
    backgroundColor: '#373C38',
  },
  maincolor: {
    color: '#ff495B',
  },
  subcolor: {
    color: '#E8E8E8',
  },
  backcolor: {
    color: '#373C38',
  },
});

const Achievements: React.FC = () => {
  const classes = useStyles();
  return (
    <p className={classes.backcolor}>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4'>
            Achievements
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.12.15
              </Typography>
              <Typography color='inherit'>
                <Link href='http://jsabees.org/ecb/' className={classes.maincolor} target="_blank">
                Environmental Control in Biology</Link>: Published / 出版<br />
                Title / タイトル: <Link href='https://www.jstage.jst.go.jp/article/ecb/59/4/59_181/_article/-char/en' className={classes.maincolor} target="_blank">
                Quantification of the effects of alternating and simultaneous red and blue irradiations on
                plant morphology and shoot fresh weight in leaf lettuce 'Greenwave'</Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.11.02
              </Typography>
              <Typography color='inherit'>
                <Link href='https://sites.google.com/view/jsabees-online-congress2021/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=0' className={classes.maincolor} target="_blank">
                Online Next Generation Research Conference<br />
                by Japanese Society of Agricultural, Biological Environmental Engineers and Scientists</Link>: Presentation<br />
                Title: Relationship between temporal variation of light intensity by mimicking the solar cycle and growth / morphology of leaf lettuce
              </Typography>
              <Typography color='inherit'>
                <Link href='https://sites.google.com/view/jsabees-online-congress2021/%E3%83%9B%E3%83%BC%E3%83%A0?authuser=0' className={classes.maincolor} target="_blank">
                日本生物環境工学会オンライン次世代研究発表会</Link>: プレゼン発表<br />
                タイトル: 太陽周期を模倣した光強度の時間変動とリーフレタスの成長/形態の関係
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.10.27
              </Typography>
              <Typography color='inherit'>
                <Link href='https://mos.odyssey-com.co.jp/index.html' className={classes.maincolor} target="_blank">
                Microsoft Office Specialist (MOS) Office Excel®︎ 2013</Link>: Passed / 合格
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.09.30
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.kansai.j-sam.org/conference/index.php' className={classes.maincolor} target="_blank">
                Meeting of Kansai Branch No. 146</Link>: Presentation<br />
                Title: Causal Analysis of Shoot Fresh Weight and Morphology of Leaf Lettuce under Alternating / Simultaneous Red and Blue LED Irradiations
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.kansai.j-sam.org/conference/index.php' className={classes.maincolor} target="_blank">
                関西農業食料工学会第146回例会</Link>: プレゼン発表<br />
                タイトル: 赤青交互/同時LED照射におけるリーフレタスの地上部重量と形態の因果解析
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.09.22
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.sasj.org/meeting/2021/index_en.html' className={classes.maincolor} target="_blank">
                AY2021 Society of Agricultural Structures, Japan (SASJ) Annual conference (online)<br />
                Research presentation / SASJ 50th Anniversary Program</Link>: Poster<br />
                Title: Effects of time-variant irradiation and dark period on the leaf lettuce
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.sasj.org/meeting/2021/' className={classes.maincolor} target="_blank">
                2021年度農業施設学会大会(オンライン)<br />
                研究発表会・農業施設学会50周年記念事業</Link>: ポスター発表<br />
                タイトル: リーフレタスにおける照射強度の時間変動と暗期の効果
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.09.15
              </Typography>
              <Typography color='inherit'>
                <Link href='https://jsamfe2021.bpes.kyushu-u.ac.jp/?Page=Home&Lang=en' className={classes.maincolor} target="_blank">
                79th Annual Meeting on The Japanese Society of Agricultural Machinery and Food Engineers (Online)</Link>: Presentation<br />
                Title: Time series growth analysis of leaf lettuce under alternating / simultaneous red and blue rradiations
              </Typography>
              <Typography color='inherit'>
                <Link href='https://jsamfe2021.bpes.kyushu-u.ac.jp/' className={classes.maincolor} target="_blank">
                第79回農業食料工学会年次大会(オンライン開催)</Link>: プレゼン発表<br />
                タイトル: 赤青交互照射と同時照射におけるリーフレタスの時系列生長解析
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="2021-first-content"
            id="2021-first-header"
          >
            <Typography variant='body1' align='center'>2021 Summary (first half)</Typography>
          </AccordionSummary>
          <AccordionDetails>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.04.27
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.jitec.ipa.go.jp/2_01english/02examcategories.html' className={classes.maincolor} target="_blank">
                Fundamental Information Technology Engineer Examination [FE] (CBT; 2020)</Link>: Passed
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.jitec.ipa.go.jp/1_11seido/fe.html' className={classes.maincolor} target="_blank">
                令和2年度基本情報技術者試験(CBT)</Link>: 合格
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.04.09
              </Typography>
              <Typography color='inherit'>
                <Link href='http://jsabees.org/ecb/' className={classes.maincolor} target="_blank">
                Environmental Control in Biology</Link>: Accepted a peer-reviewed treatise / 査読付き英語論文受諾<br />
                Title / タイトル: Quantification of the effects of alternating and simultaneous red and blue irradiations on
                plant morphology and shoot fresh weight in leaf lettuce 'Greenwave'
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2021.02.13
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.usss.kyoto-u.ac.jp/events/symp2020-2/' className={classes.maincolor} target="_blank">
                Space Unit Symposium "e-Poster Exhibition and Exchange"</Link>: Grand Award<br />
                Work: The Challenge of Martian Afforestation (Space Wood Utilization Research Group)
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.usss.kyoto-u.ac.jp/events/symp2020-2/' className={classes.maincolor} target="_blank">
                宇宙ユニットシンポジウム「eポスター展示交流会」</Link>: 最優秀賞<br />
                作品: 火星造林への挑戦(宇宙木材利用研究会)
              </Typography>
            </CardContent>
          </Card>
        </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="2020-content"
            id="2020-header"
          >
            <Typography variant='body1' align='center'>2020 Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2020.09.25
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.kansai.j-sam.org/conference/2020/entry_000143.php' className={classes.maincolor} target="_blank">
                Meeting of Kansai Branch No. 144</Link>: Student best Presentation Award<br />
                Title: Quantification of Leaf Contour by Elliptic Fourier Descriptors (EFD)
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.kansai.j-sam.org/about/award.php#student' className={classes.maincolor} target="_blank">
                関西農業食料工学会第144回例会</Link>: 学生ベストプレゼンテーション賞<br />
                タイトル: EFD(楕円フーリエ記述子)による葉輪郭の定量化について
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2020.09.05
              </Typography>
              <Typography color='inherit'>
                <Link href='https://peakers.jp/projects/66' className={classes.maincolor} target="_blank">
                Learning with Glico "Food + AI" Competition + Business Competition 3Days-2020 Summer-</Link>:
                <Link href="https://journal.peakers.jp/1501072334/" className={classes.subcolor} target="_blank"> Overall Victory (Interview)</Link>
              </Typography>
              <Typography color='inherit'>
                <Link href='https://peakers.jp/projects/66' className={classes.maincolor} target="_blank">
                グリコと学ぶ「食+AI」コンペティション+ビジネスコンテスト3Days-2020 Summer-</Link>:
                <Link href="https://journal.peakers.jp/1501072334/" className={classes.subcolor} target="_blank"> 総合優勝(インタビュー)</Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2020.08.24-26 (canceled)
              </Typography>
              <Typography color='inherit'>
                International Symposium on Machinery and Mechatronics for Agriculture and Biosystems Engineering (ISMAB) 2020:<br />
                Accepted a peer-reviewed treatise / 査読付き英語論文受諾<br />
                Title / タイトル: Growth Promotion Mechanism of Leaf Lettuce under Alternating Red and Blue Irradiation by Light-Emitting Diodes
              </Typography>
            </CardContent>
          </Card>
        </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="2019-content"
            id="2019-header"
          >
            <Typography variant='body1' align='center'>2019 Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2019.11.24
              </Typography>
              <Typography color='inherit'>
                <Link href='http://www.kansai.j-sam.org/conference/2020/entry_000143.php' className={classes.maincolor} target="_blank">
                The 6th Space Architecture Award / 第6回宇宙建築賞</Link>: Winning / 入賞<br />
                Work / 作品: Our Eco
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant='body1'>
                2019.02.09
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.usss.kyoto-u.ac.jp/events/symp2019/' className={classes.maincolor} target="_blank">
                Space Unit Symposium "Space Research Plaza 2019"</Link>: Excellence Award (General Section)<br />
                Work: <Link href='https://www.usss.kyoto-u.ac.jp/wp-content/uploads/2021/03/pst_33.pdf' className={classes.maincolor} target="_blank">
                Exploration of Wood Use and Tree Growth in Space (Space Wood Utilization Research Group)</Link>
              </Typography>
              <Typography color='inherit'>
                <Link href='https://www.usss.kyoto-u.ac.jp/events/symp2019/' className={classes.maincolor} target="_blank">
                宇宙ユニットシンポジウム「宇宙研究の広場2019」</Link>: 優秀賞(一般の部)<br />
                作品: <Link href='https://www.usss.kyoto-u.ac.jp/wp-content/uploads/2021/03/pst_33.pdf' className={classes.maincolor} target="_blank">
                宇宙での木材利用と樹木育成の探究(宇宙木材利用研究会)</Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </p>
  );
}

export default Achievements;