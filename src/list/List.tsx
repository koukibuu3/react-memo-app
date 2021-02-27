import { Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import { FetchMemoList as fetchMemoList } from '../utils'

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
    },
  },
}))

const List = () => {
  const classes = useStyles()
  const memoList = fetchMemoList()

  return (
    <div className="List">
      <Header />
      <Grid container direction="row" spacing={3}>
        <Grid item spacing={3}>
          <Card className={classes.card}>
            <Button className={classes.createButton}>
              <Link to="/create">
                <Add fontSize="large" />
              </Link>
            </Button>
          </Card>
        </Grid>
        {memoList.map((value) => (
          <Grid item spacing={3} key={value.id}>
            <Card className={classes.card}>
              <Button className={classes.detailButton}>
                <Link to="/detail">
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {value.title}
                    </Typography>
                    <Typography>{value.body}</Typography>
                  </CardContent>
                </Link>
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
