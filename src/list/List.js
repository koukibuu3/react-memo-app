import React from 'react';
import { Link } from 'react-router-dom';

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
      <ul>
        { list.map((value) => (
          <Item content={value} />
        )) }
      </ul>
    </div>
  );
};

const Item = (props) => {
  const { content } = props;
  return (
    <li key="key">
      {content.title}
      <span>
        {content.body}
      </span>
      <Link to="/detail"><button type="button">to detail</button></Link>
    </li>
  );
};

export default List;
