import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

const Detail = () => {
  const contents = {
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }

  return (
    <>
      <Header />
      <h1>詳細ページ</h1>
      <table>
        <tr>
          <th>タイトル</th>
          <td>{contents.title}</td>
        </tr>
        <tr>
          <th>本文</th>
          <td>{contents.body}</td>
        </tr>
      </table>
      <Link to="/">
        <button type="button">一覧ページに戻る</button>
      </Link>
      <button type="button">削除</button>
      <Link
        to={{
          pathname: '/edit',
          state: contents,
        }}
      >
        <button type="button">編集</button>
      </Link>
    </>
  )
}

export default Detail
