import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import dayjs from 'dayjs';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const PhotosWrapper = styled.div`
  display: grid;
  grid-gap: 2em;
  padding-top: 2em;
  justify-content: center;
`;

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 545,
    width: 500
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light
  }
}));

function Index() {
  const classes = useStyles();
  const [auth] = useState(firebase.auth());
  const [firestore] = useState(firebase.firestore());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const detach = firestore
      .collection('photos')
      .limit(10)
      .onSnapshot(snapshot => {
        const users = [];
        snapshot.forEach(user => {
          users.push({ data: user.data(), id: user.id });
        });
        setUsers(users);
      });
    return () => detach();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <PhotosWrapper>
      {users.map(user => {
        const date = user.data.date ? dayjs(user.data.date.toDate()) : dayjs();
        return (
          <Card className={classes.card} key={user.id}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="owner"
                  title={user.data.user}
                  className={classes.avatar}
                >
                  {user.data.user.slice(0, 1).toUpperCase()}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <ClearIcon />
                </IconButton>
              }
              title={user.data.name}
              subheader={date.format('MMMM DD, YYYY')}
            />
            <CardMedia
              className={classes.media}
              image={user.data.file || user.data.url}
              title={user.data.name}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                dangerouslySetInnerHTML={{ __html: user.data.fileDescription }}
              ></Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </PhotosWrapper>
  );
}

export default Index;
