import { Box, Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Header from '../components/Header'
import { Memo } from '../types'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}))
const Detail = () => {
  const location = useLocation<Memo>()
  const state = location.state

  const classes = useStyles()
  return (
    <>
      <Header />
      <Container>
        <Grid item>
          <Typography variant="h4" component="h2">
            <Box my={2}>{state.title}</Box>
          </Typography>
        </Grid>
        <div className={classes.root}>
          <Box my={2}>{state.body}</Box>
        </div>
        <Box my={1}>
          <Link
            to={{
              pathname: '/edit',
              state: state,
            }}
          >
            <Button type="button">編集</Button>
          </Link>
          <Button type="button">削除</Button>
        </Box>
        <Box my={2}>
          <Link to="/">
            <Button type="button">一覧ページに戻る</Button>
          </Link>
        </Box>
      </Container>
    </>
  )
}

export default Detail
