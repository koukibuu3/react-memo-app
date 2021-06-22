import { Button, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Memo } from '../../types'

import MemoListItemWrapper from './MemoListItemWrapper'

const useStyles = makeStyles(() => ({
  detailButton: {
    height: '100%',
    width: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}))

type Props = {
  memo: Memo
}

const MemoListItem: React.VFC<Props> = ({ memo }) => {
  const classes = useStyles()
  const history = useHistory()

  const actionHandler = (state: Memo) => {
    setTimeout(() => {
      history.push({
        pathname: '/detail',
        state,
      })
    }, 150)
  }

  return (
    <MemoListItemWrapper>
      <Button className={classes.detailButton} onClick={() => actionHandler(memo)}>
        <CardContent>
          <Typography variant="h6" component="h2">
            {memo.title}
          </Typography>
          <Typography>{memo.body}</Typography>
        </CardContent>
      </Button>
    </MemoListItemWrapper>
  )
}

export default MemoListItem
