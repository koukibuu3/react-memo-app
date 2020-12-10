import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const list = ['hoge', 'huga', 'piyo'];

  return (
    <div className="List">
      <ul>
        { list.map((value) => (
          <li key="key">
            {value}
            <Link to="/detail"><button type="button">to detail</button></Link>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default List;
