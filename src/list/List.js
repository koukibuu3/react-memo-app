import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/Header';

const useStyles = makeStyles(() => ({
  card: {
    height: 180,
    width: 180
  },
  createButton: {
    margin: 'auto'
  }
}));

import Header from '../components/Header';

const MEMOS = [
  { title: 'たいとる', body: 'ぼでー' },
  { title: 'たいとる2', body: 'ぼでー2' },
  { title: 'たいとる3', body: 'ぼでー3' },
];

const getList = () => {
  return MEMOS;
};

const List = () => {
  const classes = useStyles();
  const list = getList();

  return (
    <div className="List">
      <Header/>
      <Grid container direction="row" spacing={3}>
        <Grid item spacing={3}>
          <Card className={classes.card}>
            <CardActions>
              <Button className={classes.createButton} size="medium">
                <Link to="/create">create</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        { list.map((value) => (
          <Grid item spacing={3}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2">{value.title}</Typography>
                <Typography>{value.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        )) }
      </Grid>
    </div>
  );
};

export default List;
