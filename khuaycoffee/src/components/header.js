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
import logo from "../assets/logo-header.png";
import {store,logout} from '../redux/login'
import { deepOrange } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';




const pages = ['Sản phẩm', 'Giỏ hàng'];
const settings = ['Đăng ký', 'Đăng nhập'];





const Header = () => {
  const dispatch=useDispatch();
  const isLogin= useSelector(state=>state.login.isLogin);
  const name=useSelector(state=>state.login.name);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  
  // let LogBox;
  // if (isLogin) {
  //   LogBox = <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
  //             <Avatar
  //               sx={{ bgcolor: deepOrange[500] }}
  //               alt="Remy Sharp"
  //             >
  //               {store.getState().name[0].toUpperSase()}
  //             </Avatar>
  //             <Link to="/" onClick={()=>dispatch(logout())}>
  //               <Button sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }} >
  //                 Đăng xuất
  //               </Button>
  //             </Link>
              
  //           </Box>
  // } else {
  //   LogBox = <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
  //             {settings.map((setting) => (
  //               <Button
  //                 key={setting}
  //                 onClick={handleCloseNavMenu}
  //                 sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
  //               >
  //                 {setting}
  //               </Button>
  //             ))}
  //             </Box>
  // }

  

  return (
    <AppBar position="static" style={{ background: '#542E2E' }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
              >
                {page}
              </Button>
            ))}
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
              {settings.map((setting) => (
                <Button
                  key={setting}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 'bold' }}
                >
                  {setting}
                  {console.log("log",isLogin)}
                </Button>
              ))}
              </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
