import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class Edit extends React.Component {
  contents = {
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }

  render() {
    return (
      <>
        <Header/>
        <h1>編集ページ</h1>
        <table>
          <tr>
            <th>タイトル</th>
            <td><textarea>{this.contents.title}</textarea></td>
          </tr>
          <tr>
            <th>本文</th>
            <td><textarea>{this.contents.body}</textarea></td>
          </tr>
        </table>
        <Link to="/detail"><button type="button">保存</button></Link>
      </>
    );
  }
}

export default Edit;
