import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Header from '../components/Header';

const Create = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <>
      <Header/>
      <h1>追加ページ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" placeholder="タイトルを入力してください" ref={register({ required: true, maxLength: 20 })} />
        {errors.title && <span>タイトルが未入力です</span>}
        <input name="body" placeholder="本文を入力してください" ref={register({ required: true})} />
        <input type="submit" />
      </form>
      <Link to='/'><button>戻る</button></Link>
    </>
  );
};

export default Create;
