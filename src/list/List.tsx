import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import Header from '../components/Header';
import { Memo } from '../types';

const useStyles = makeStyles(() => ({
  card: {
    height: 180,
    width: 180,
  },
  createButton: {
    height: '100%',
    width: '100%',
  },
  detailButton: {
    height: '100%',
    width: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    }
  }
}));

const memos: Array<Memo> = [
  { id: '1', title: 'たいとる', body: 'ぼでー' },
  { id: '2', title: 'たいとる2', body: 'ぼでー2' },
  { id: '3', title: 'たいとる3', body: 'ぼでー3' },
];

const getList = (): Array<Memo> => {
  return memos;
};

const List = () => {
  const classes = useStyles();
  const list = getList();

  return (
    <div className="List">
      <Grid container direction="row" spacing={3}>
        <Grid item spacing={3}>
          <Card className={classes.card}>
            <Button className={classes.createButton}>
              <Link to="/create"><Add fontSize="large" /></Link>
            </Button>
          </Card>
        </Grid>
        { list.map((value) => (
          <Grid item spacing={3}>
            <Card className={classes.card}>
              <Button className={classes.detailButton}>
                <Link to="/detail">
                  <CardContent>
                    <Typography variant="h6" component="h2">{value.title}</Typography>
                    <Typography>{value.body}</Typography>
                  </CardContent>
                </Link>
              </Button>
            </Card>
          </Grid>
        )) }
      </Grid>
    </div>
  );
};

export default List;
