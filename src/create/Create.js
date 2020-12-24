import React from 'react';
import { Link } from 'react-router-dom';

const Create = () => {
  return (
    <>
      <h1>追加ページ</h1>
      <table>
        <tr>
          <th>タイトル</th>
          <td><textarea placeholder="タイトルを入力してください" /></td>
        </tr>
        <tr>
          <th>本文</th>
          <td><textarea placeholder="本文を入力してください" /></td>
        </tr>
      </table>
      <Link to="/"><button type="button">戻る</button></Link>
      <Link to="/"><button type="button">保存</button></Link>
    </>
  );
};

export default Create;
