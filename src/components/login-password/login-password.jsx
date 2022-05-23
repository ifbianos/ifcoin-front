import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://ifba.com/'>
        IFBA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      code: data.get('code'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component='main'
        maxWidth='xs'
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#DCECDE',
            padding: 4,
            borderRadius: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#40A852' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Senha
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='code'
              label='Senha'
              name='code'
              autoComplete='code'
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                mt: 10,
                mb: 2,
                background:'#40A852'
              }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' sx={{ color: '#A9A7A7' }}>
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2' sx={{ color: '#A9A7A7' }}>
                  {'Não possui uma conta?'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
