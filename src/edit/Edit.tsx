import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import { Memo } from '../types'
import { UpdateMemo as updateMemo } from '../utils'

const Edit: React.FC = () => {
  // TODO 今は固定でデータを用意しているため、編集対象のメモデータを渡してくるようにする
  // TODO 特にidを固定で'1'に設定しているためどの記事を編集してもid='1'の記事が更新されます
  const content: Memo = {
    id: '1',
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }
  const [memo, setMemo] = useState<Memo>(content)

  return (
    <>
      <Header />
      <h1>編集ページ</h1>
      <table>
        <tr>
          <th>タイトル</th>
          <td>
            <textarea onChange={(e) => setMemo({ ...memo, title: e.target.value })}>{memo.title}</textarea>
          </td>
        </tr>
        <tr>
          <th>本文</th>
          <td>
            <textarea onChange={(e) => setMemo({ ...memo, body: e.target.value })}>{memo.body}</textarea>
          </td>
        </tr>
      </table>
      <Link to="/detail">
        <button type="button" onClick={() => updateMemo(memo)}>
          保存
        </button>
      </Link>
    </>
  )
}

export default Edit
