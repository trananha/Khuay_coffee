import Divider from '@mui/material/Divider';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CUSTOMER, getData } from '../Firebase/firebase';
import { db } from './../Firebase/firebase';
import { store } from '../redux/login';
import { login } from '../redux/login';
import { useDispatch,useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();


async function Signin(email, password, setConfirm,dispatch,handleOnClickHome) {
  const data = await getData(CUSTOMER, db);
  for (let i=0; i<data.length; i++){
    if (email === data[i].email && password === data[i].password) {
      setConfirm('Đăng nhập thành công');
      
      dispatch(login({name:data[i].name, isAdmin:data[i].admin, userID:data[i].docId}))
      
      handleOnClickHome();
      return;
    }
  }
  setConfirm('Đăng nhập thất bại');
}


function SignInInterface() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const dispatch=useDispatch();
  const isLogin=useSelector(state=>state.login.isLogin)
  const [confirm, setConfirm] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const handleOnClickRegister = useCallback(() => navigate('/register', {replace: true}), [navigate]);
  const handleOnClickHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:"#C4C4C4"}} minHeight={450} pt={7}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            px: 2,
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#B9A6A6"
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontWeight:"bold", fontFamily:"Helvetica"}}>
            ĐĂNG NHẬP
          </Typography>
          <Divider variant="middle" />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              variant='standard'
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              variant='standard'
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:"#542E2E" }}
              onClick={()=>Signin(email, password, setConfirm,dispatch,handleOnClickHome)}
            >
              Đăng nhập
            </Button>
            {/* <Button onClick={()=>console.log("lohin",isLogin)}>
              Test
            </Button> */}
            <Typography>
              {confirm}
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="caption" color="inherit" onClick={handleOnClickRegister}>
                  {"Tạo tài khoản mới"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </Box>
    </ThemeProvider>
  );
}


export default SignInInterface;