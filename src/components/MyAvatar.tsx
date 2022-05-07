import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

// 画像ファイルをインポート
import ImageFile from '../static/images/MyAvatar.png'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Tako'
            src={ImageFile}
            className={classes.large}
          />
          <Typography className={classes.typography} variant='h5' >
            <br /><br />
            Yuhi Mazda<br />
            2001/10/18<br />
            Aichi
          </Typography>
        </Box>
        {/* <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Yuhi Mazda
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='body1'>
            Aichi
          </Typography>
        </Box> */}
      </Box>
    </>
  );
}

export default MyAvatar;