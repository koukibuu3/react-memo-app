import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Header from '../components/Header'
import { Memo } from '../types'

const Detail = () => {
  const location = useLocation<Memo>()
  const state = location.state

  return (
    <>
      <Header />
      <h1>詳細ページ</h1>
      <table>
        <tr>
          <th>タイトル</th>
          <td>{state.title}</td>
        </tr>
        <tr>
          <th>本文</th>
          <td>{state.body}</td>
        </tr>
      </table>
      <Link to="/">
        <button type="button">一覧ページに戻る</button>
      </Link>
      <button type="button">削除</button>
      <Link
        to={{
          pathname: '/edit',
          state: state,
        }}
      >
        <button type="button">編集</button>
      </Link>
    </>
  )
}

export default Detail
