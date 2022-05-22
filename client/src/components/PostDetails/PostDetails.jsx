import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Button, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>

        <Button  component={Link} to="/posts" className={classes.esc} size="small" color="primary" > <img src="https://img2.freepng.ru/20180704/ktc/kisspng-arrow-computer-icons-symbol-download-clip-art-left-arrow-5b3c75cf68f5a6.5627501015306889754299.jpg" height='20px' weight='20px'/> </Button>

          <Typography className={classes.title} variant="h3" component="h2">{post.title}</Typography>
          <Typography className={classes.tagss} gutterBottom variant="body1" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography className={classes.mess} gutterBottom variant="h6" component="p">{post.message}</Typography>
       
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />

          <Typography className={classes.creator} variant="h6"> Created by: {post.name}</Typography>
          <Typography className={classes.creator} variant="body1">{moment(post.createdAt).fromNow()}</Typography>

        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;

