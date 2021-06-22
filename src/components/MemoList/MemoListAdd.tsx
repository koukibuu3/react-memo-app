import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'

import MemoListItemWrapper from './MemoListItemWrapper'

const useStyles = makeStyles(() => ({
  createButton: {
    height: '100%',
    width: '100%',
  },
}))

const MemoListAdd: React.VFC = () => {
  const classes = useStyles()
  const history = useHistory()

  const actionHandler = () => {
    setTimeout(() => {
      history.push('/create')
    }, 150)
  }

  return (
    <MemoListItemWrapper>
      <Button className={classes.createButton} onClick={() => actionHandler()}>
        <Add fontSize="large" />
      </Button>
    </MemoListItemWrapper>
  )
}

export default MemoListAdd
