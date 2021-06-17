import { Grid } from '@material-ui/core'
import React from 'react'

import { Memo } from '../../types'

import { MemoListItem, MemoListAdd } from '.'

type Props = {
  memoList: Memo[]
}

const MemoList: React.VFC<Props> = ({ memoList }) => {
  return (
    <Grid container direction="row" spacing={3}>
      <MemoListAdd />
      {memoList.map((memo) => (
        <MemoListItem memo={memo} key={memo.id} />
      ))}
    </Grid>
  )
}

export default MemoList
