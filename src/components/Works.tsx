import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 770,
    maxWidth: '100%',
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'sans-serif',
    ].join(','),
  },
}));

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const Works: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' className={classes.typography}>
            Works
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <List className={classes.root}>
            <ListItem>
              {/*  GitHubリポジトリなどのURLを貼る */}
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                {/* 「primary」に作品名、「secondary」に説明文を書く */}
                <ListItemText disableTypography
                  primary={<Typography className={classes.typography} variant="body1">制作物</Typography>}
                  secondary={<Typography className={classes.typography} variant="body2">制作途中...</Typography>}
                />
              </ListItemLink>
            </ListItem>
            {/* <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work2' secondary='Work2です。' />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href='#'>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Work3' secondary='Work3です。' />
              </ListItemLink>
            </ListItem> */}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default Works;