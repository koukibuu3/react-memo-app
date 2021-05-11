import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// screens
import Create from './create/Create'
import Detail from './detail/Detail'
import Edit from './edit/Edit'
import List from './list/List'

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" exact component={List} />
        <Route path="/create" component={Create} />
        <Route path="/detail" component={Detail} />
        <Route path="/edit" component={Edit} />
      </div>
    </BrowserRouter>
  )
}

export default Routes
