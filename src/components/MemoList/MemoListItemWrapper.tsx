import { Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  card: {
    height: 180,
    width: 180,
  },
}))

const MemoListItemWrapper: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item>
      <Card className={classes.card}>{children}</Card>
    </Grid>
  )
}

export default MemoListItemWrapper
