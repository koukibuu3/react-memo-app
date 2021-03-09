import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

const Edit: React.FC = () => {
  const contents = {
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }

  return (
    <>
      <Header />
      <h1>編集ページ</h1>
      <table>
        <tr>
          <th>タイトル</th>
          <td>
            <textarea>{contents.title}</textarea>
          </td>
        </tr>
        <tr>
          <th>本文</th>
          <td>
            <textarea>{contents.body}</textarea>
          </td>
        </tr>
      </table>
      <Link to="/detail">
        <button type="button">保存</button>
      </Link>
    </>
  )
}

export default Edit
