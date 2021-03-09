import { Container, makeStyles } from '@material-ui/core'
import React from 'react'

import Routes from './Routes'

const useStyles = makeStyles(() => ({
  root: {
    margin: '20px 0',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Routes />
    </Container>
  )
}

export default App
