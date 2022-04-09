import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography className={classes.typography} variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.typography} variant="h6">
                Programming Language
              </Typography>
              <Typography className={classes.typography} color="textSecondary">
                Python / JavaScript / Java / Go / C / C++
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.typography} variant="h6">
                Framework
              </Typography>
              <Typography className={classes.typography} color="textSecondary">
                React / Django
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.typography} variant="h6">
                Database
              </Typography>
              <Typography className={classes.typography} color="textSecondary">
                PostgreSQL
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.typography} variant="h6">
                AWS
              </Typography>
              <Typography className={classes.typography} color="textSecondary">
                During study...
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Skills;