import React from 'react';

class Detail extends React.Component {
  contents = {
    title : 'たいとるだよー',
    body : 'ほんぶんだよー',
  }

  render() {
    return(
      <>
        <h1>詳細ページ</h1>
        <table>
          <tr>
            <th>タイトル</th>
            <td>{contens.title}</td>
          </tr>
          <tr>
            <th>本文</th>
            <td>{contents.body}</td>
          </tr>
        </table>
        <button>
          削除
        </button>
        <button>
          編集
        </button>
      </>
    )
  }
}

export default Detail;
