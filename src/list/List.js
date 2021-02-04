import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

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
      <Button variant="outlined" color="primary">
        <Link to="/create">
          create
        </Link>
      </Button>
      { list.map((value) => (
        <Item content={value} />
      )) }
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
