import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import banner from "../assets/banner.png";

const Banner = () => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', backgroundColor:'#B9A6A6' }}>
      <img src={banner} alt="banner" width={400} sx={{ flexGrow: 1, paddingLeft: 10, display: { xs: 'flex', md: 'none' } }} />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontFamily:"Inspiration"}}>
            Khuya's Coffee Pods
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Hãy để chúng tôi mang lại hương vị ngọt ngào trên đầu lưỡi bạn bằng các loại cà phê thượng hạng đến từ khắp nơi trên thế giới.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" sx={{backgroundColor:"#542E2E"}}>Mua ngay</Button>
        </Box>
      </Box>
      
    </Card>
  );
}

export default Banner;
