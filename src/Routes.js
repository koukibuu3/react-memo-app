import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// screens
import List from './list/List';
import Detail from './detail/Detail';
import Edit from './edit/Edit';
import Create from './create/Create';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={List} />
        <Route path="/create" component={Create} />
        <Route path="/detail" component={Detail} />
        <Route path="/edit" component={Edit} />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
