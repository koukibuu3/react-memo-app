import { useState, useEffect } from 'react'
import axios from 'axios'

import { Memo } from '../types';

// メモの全件取得
export const FetchMemoList = (): Memo[] => {
  const [ memoList, setMemoList ] = useState<Memo[]>([])
  const fetchData = () => {
    axios.get('http://localhost:3030/memos') // TODO URLは定数に切る
      .then((res) => {
        setMemoList(res.data)
        console.log(`fetching ${res.data.length} memo data.`)
      })
      .catch((e) => console.log(e))
  }

  // マウント時とアンマウント時に実行させる
  useEffect(() => fetchData(), [])
  return memoList
}
// 参考 : https://qiita.com/Sotq_17/items/9a3e083d12a52afed6cd
