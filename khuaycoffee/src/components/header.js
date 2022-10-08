import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../Assets/logo-header.png";
import {store,logout} from '../redux/login'
import { deepOrange } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const settings = ['Đăng ký', 'Đăng nhập'];

const Header = () => {
  const dispatch=useDispatch();
  const isLogin= useSelector(state=>state.login.isLogin);
  const name=useSelector(state=>state.login.name);
  const isAdmin=useSelector(state=>state.login.isAdmin)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()
  const handleOnClickProducts = useCallback(() => navigate('/products', {replace: true}), [navigate]);
  const handleOnClickCart = useCallback(() => navigate('/cart', {replace: true}), [navigate]);
  const handleOnClickHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const handleOnClickLogin = useCallback(() => navigate('/login', {replace: true}), [navigate]);
  const handleOnClickRegister = useCallback(() => navigate('/register', {replace: true}), [navigate]);
  const handleOnClickAdmin = useCallback(() => navigate('/admin/account', {replace: true}), [navigate]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 

  return (
    <AppBar sx={{marginTop:0}} position="static" style={{ background: '#542E2E' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} alt="Logo" width={70} height={50} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleOnClickHome}>
                <Typography textAlign="center">Trang chủ</Typography>
              </MenuItem>
              <MenuItem onClick={handleOnClickProducts}>
                <Typography textAlign="center">Sản phẩm</Typography>
              </MenuItem>
              <MenuItem onClick={handleOnClickCart}>
                <Typography textAlign="center">Giỏ hàng</Typography>
              </MenuItem>
              {isAdmin ? (
              <MenuItem onClick={handleOnClickAdmin}>
                <Typography textAlign="center">Quản lý</Typography>
              </MenuItem>
              ) :(<></>)}
              <MenuItem onClick={handleOnClickLogin}>
                <Typography textAlign="center">Đăng nhập</Typography>
              </MenuItem>
              <MenuItem onClick={handleOnClickRegister}>
                <Typography textAlign="center">Đăng kí</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} alt="Logo" width={70} height={50} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleOnClickHome}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
            >
              Trang chủ
            </Button>
            <Button
              onClick={handleOnClickProducts}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
            >
              Sản phẩm
            </Button>
            <Button
              onClick={handleOnClickCart}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
            >
              Giỏ hàng
            </Button>
            {isAdmin ? (
               <Button
               onClick={handleOnClickAdmin}
               sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
             >
               Quản lý
             </Button>
            ):(<></>)}
          </Box>
          {isLogin? (
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Avatar
              sx={{ my:2 ,bgcolor: deepOrange[500] }}
              alt="Remy Sharp"
            >
              {name? name[0]: name}
            </Avatar>
              <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }} onClick={()=>dispatch(logout())}>
                Đăng xuất
              </Button>
            {console.log("log",name)}
          </Box>
        
          ):(
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={handleOnClickRegister}
                  sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
                >
                  Đăng ký
                  {console.log("log",isLogin)}
                </Button>
                <Button
                  onClick={handleOnClickLogin}
                  sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
                >
                  Đăng nhập
                  {console.log("log",isLogin)}
                </Button>
              </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
