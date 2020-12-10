import React from 'react';

class Detail extends React.Component {
  contents = {
    title: 'たいとるだよー',
    body: 'ほんぶんだよー',
  }

  render() {
    return (
      <>
        <h1>詳細ページ</h1>
        <table>
          <tr>
            <th>タイトル</th>
            <td>{this.contents.title}</td>
          </tr>
          <tr>
            <th>本文</th>
            <td>{this.contents.body}</td>
          </tr>
        </table>
        <button type="button">
          削除
        </button>
        <button type="button">
          編集
        </button>
      </>
    );
  }
}

export default Detail;
