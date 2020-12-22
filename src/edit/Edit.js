import React from 'react';

class Edit extends React.Component {
  contents = {
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }

  render() {
    return (
      <>
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
        <button type="button">
          保存
        </button>
      </>
    );
  }
}

export default Edit;