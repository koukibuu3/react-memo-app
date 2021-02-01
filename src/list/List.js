import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Grid } from '@material-ui/core';

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
  const list = getList();

  return (
    <div className="List">
      <Header/>
      <Grid container direction="row" spacing={3}>
        <Grid item spacing={3}>
          <Button variant="outlined" color="primary">
            <Link to="/create">
              create
            </Link>
          </Button>
        </Grid>
        { list.map((value) => (
          <Grid item spacing={3}>
            <Item content={value} />
          </Grid>
        )) }
      </Grid>
    </div>
  );
};

const Item = (props) => {
  const { content } = props;
  return (
    <Box component="span" m={1}>
      <Link to="/detail">
        <Button variant="contained">
          {content.title}
          to detail
        </Button>
      </Link>
    </Box>
  );
};

export default List;
