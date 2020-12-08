import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// screens
import List from './list/List';
import Detail from './detail/Detail';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={List} />
        <Route path="/detail" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
