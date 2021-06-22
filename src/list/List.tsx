import React from 'react'

import Header from '../components/Header'
import { MemoList } from '../components/MemoList'
import { FetchMemoList as fetchMemoList } from '../utils'

const List = () => {
  const memoList = fetchMemoList()

  return (
    <div className="List">
      <Header />
      <MemoList memoList={memoList} />
    </div>
  )
}

export default List
