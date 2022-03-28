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
import { db, CUSTOMER, addData } from '../Firebase/firebase';
import { store } from '..';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

function Singup(name, email, password, phone, address, setConfirm,handleOnClickLogin) {
  const USER = {
    'name': name,
    'email': email,
    'phone': phone,
    'password': password,
    'address': address,
    'ID': 'KH01',
    'admin' : false
  }
  addData(USER,CUSTOMER,db).then(() => setConfirm('Đăng kí thành công')).catch(() => setConfirm('Đăng kí thất bại'))
  handleOnClickLogin()
}


function SignUpInterface() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [confirm,setConfirm] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [address, setAddress] = React.useState('')
  const navigate = useNavigate()
  const handleOnClickLogin = useCallback(() => navigate('/Login', {replace: true}), [navigate]);

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:"#C4C4C4"}} minHeight={450} pt={7} pb={8}>
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
            TẠO TÀI KHOẢN
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  variant='standard'
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  variant='standard'
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Tên người dùng"
                  variant='standard'
                  onChange={(e)=>setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Điện thoại"
                  name="phone"
                  variant='standard'
                  autoComplete="phone"
                  onChange={(e)=>setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Địa chỉ"
                  name="address"
                  variant='standard'
                  autoComplete="address"
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:"#542E2E" }}
              onClick={()=>Singup(name, email, password, phone, address, setConfirm, handleOnClickLogin)}
            >
              ĐĂNG KÍ
            </Button>
            <Typography>
              {confirm}
            </Typography>
            <Grid container justifyContent="center" >
              <Grid item>
                <Link href="#" variant="caption" color="inherit" onClick={handleOnClickLogin}>
                  Đã có tài khoản? Đăng nhập
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

export default SignUpInterface;