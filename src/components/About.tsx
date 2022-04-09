import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
  },
});

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography className={classes.typography} variant='h5'>
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography className={classes.typography} variant='body1' align='left'>
            Work : Aichi Institute of Technology student.<br />
            Birthplace : Nara prefecture.<br />
            Hobbies : Programming.<br />
            Special skill : Basketball.<br />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;