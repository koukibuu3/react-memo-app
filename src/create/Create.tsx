import { Box, Grid, TextField, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

import Header from '../components/Header'
import { Memo } from '../types'
import { CreateMemo as createMemo } from '../utils'

const Create = () => {
  const { register, handleSubmit, errors } = useForm()
  const [memo, setMemo] = useState<Memo>()
  const history = useHistory()

  const onSubmit = (value) => {
    console.log(value)
    createMemo(memo)
    history.push('/')
  }

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h4" component="h2">
              新規メモ追加
            </Typography>
          </Grid>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid item>
              <TextField
                label="title"
                margin="dense"
                fullWidth
                name="title"
                helperText={errors.title && errors.title.message}
                inputRef={register({
                  required: 'titleは入力必須です',
                  maxLength: { value: 30, message: 'titleは30文字以内で入力してください。' },
                })}
                onChange={(e) => setMemo({ ...memo, title: e.target.value })}
              />
            </Grid>
            <Grid item>
              <TextField
                label="body"
                margin="dense"
                fullWidth
                name="body"
                helperText={errors.body && errors.body.message}
                inputRef={register({
                  required: 'bodyは入力必須です',
                  minLength: { value: 10, message: 'bodyは10文字以上で入力してください。' },
                })}
                onChange={(e) => setMemo({ ...memo, body: e.target.value })}
              />
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              保存
            </Button>
          </form>
        </Grid>
      </Container>
      <Box my={2}>
        <Link to="/">
          <Button type="button">一覧ページに戻る</Button>
        </Link>
      </Box>
    </>
  )
}

export default Create
