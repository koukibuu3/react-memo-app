import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import TextInput from '../components/Atoms/TextInput';
import { TextField } from '@material-ui/core';

import Header from '../components/Header';

const Create = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <>
      <Header/>
      <h1>追加ページ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <TextInput label="title" required="true" maxLength="20"/>
        </div>
        <div>
          <TextInput label="body" required="false" maxLength="200"/>
        </div>
        <input type="submit" />
      </form>
      <Link to='/'><button>戻る</button></Link>
    </>
  );
};

export default Create;
