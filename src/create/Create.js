import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Header from '../components/Header';

const Create = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = value => console.log(value)

  return (
    <>
      <Header/>
      <h1>追加ページ</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          title
          <input
            type="text"
            label='title'
            className={errors.title && 'error'}
            name="title"
            ref={register({
              required: "titleは入力必須です",
              maxLength: { value: 30, message: 'titleは30文字以内で入力してください。' }
            })}
          />
          {errors.title && errors.title.message}
        </div>
        <div>
          body
          <input
            type="text"
            label='body'
            name="body"
            className={errors.body && 'error'}
            ref={register({
              required: "bodyは入力必須です",
              minLength: { value: 10, message: 'bodyは10文字以上で入力してください。' }
            })}
            />
            {errors.body && errors.body.message}
          </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      <Link to='/'><button type="button">一覧ページに戻る</button></Link>
    </>
  );
};

export default Create;
