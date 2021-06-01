import axios from 'axios'
import { useState, useEffect } from 'react'

import { Memo } from '../types'

import { db } from './firebase'

// メモの全件取得
export const FetchMemoList = (): Memo[] => {
  const [memoList, setMemoList] = useState<Memo[]>([])
  const fetchData = () => {
    if (process.env.REACT_APP_ENVIRONMENT === 'local') {
      // local用処理
      axios
        .get(process.env.REACT_APP_LOCAL_DB_URL)
        .then((res) => {
          setMemoList(res.data)
          console.log(`fetching ${res.data.length} memo data.`)
        })
        .catch((e) => {
          console.error(e)
        })
    } else if (process.env.REACT_APP_ENVIRONMENT === 'production') {
      // 本番用処理
      db.collection('memos')
        .orderBy('createdAt', 'desc')
        .get()
        .then((snapshots) => {
          setMemoList(snapshots.docs.map((doc) => doc.data() as Memo))
          console.log(`fetching ${snapshots.docs.length} memo data.`)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }

  // マウント時とアンマウント時に実行させる
  useEffect(() => fetchData(), [])
  return memoList
}
// 参考 : https://qiita.com/Sotq_17/items/9a3e083d12a52afed6cd

// メモの更新
export const UpdateMemo = (memo: Memo) => {
  const configs = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .put(
      `http://localhost:3030/memos/${memo.id}`, // TODO URLは定数に切る
      {
        title: memo.title,
        body: memo.body,
      },
      configs
    )
    .catch((e) => console.log(e))
}

// メモの新規追加
export const CreateMemo = (memo: Memo) => {
  const configs = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  axios
    .post(
      `http://localhost:3030/memos/`,
      {
        title: memo.title,
        body: memo.body,
      },
      configs
    )
    .catch((e) => console.log(e))
}
