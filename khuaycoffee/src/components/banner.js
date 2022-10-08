import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import demo from "../Assets/demo4.jpg"
import khuyacoffeepods from "../Assets/khuaycoffeepods.png"
import {Grid} from "@mui/material";
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  const handleOnClickProducts = useCallback(() => navigate('/Products', {replace: true}), [navigate]);
  return (
    <Grid sx={{bgcolor:"#B9A6A6"}} container>
      <Grid item xs={12} sm={3} md={6} sx={{pt: 0.5, pl: 0.5, pb: 0.5 }}>
        <img src={demo} alt="banner" width="100%" />
      </Grid>
      <Grid item xs={12} sm={3} md={6} sx={{pl: 10,display:{xs:'none',md:'flex', flexDirection: "column"},justifyContent:'space-evenly'}}>
        <Typography component="div" variant="h5">
          <img src={khuyacoffeepods} alt="banner" width={600} sx={{ flexGrow: 1, paddingLeft: 10, display: { xs: 'flex', md: 'none' } }} />
        </Typography>
        <Box mx={5}>
          <Typography variant="subtitle1" color="black" sx={{fontWeight:"bold", fontStyle:"italic", fontFamily: 'Roboto', textAlign: 'center'}}>
          Hãy để Khuấy mang lại hương vị ngọt ngào trên đầu lưỡi bạn bằng các loại cà phê thượng hạng đến từ khắp nơi trên thế giới.
          </Typography>
        </Box>
        <Box sx={{px: 35,pt: 1}}>
          <Button onClick={handleOnClickProducts} variant="contained" sx={{backgroundColor:"#542E2E"}}>Mua ngay</Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{alignItems: "center",height: 60,backgroundColor:"#492C2C",display:{md:'flex', flexDirection: "column"},justifyContent:'space-evenly', color:"white"}} >
          <Typography variant="h6" sx={{fontWeight:"bold", letterSpacing: 5, fontFamily: 'Monospace'}} component='div'>Được sự tin tưởng từ hơn <Box color={"red"} display='inline'>50.000</Box> khách hàng trên khắp cả nước</Typography>
      </Grid>
    </Grid>
  );
}

export default Banner;
