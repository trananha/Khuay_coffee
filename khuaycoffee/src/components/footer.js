import React from 'react';
import {Grid, Typography} from "@mui/material";
import footer from '../Assets/footer.png'
import facebook_icon from '../Assets/facebook.png';
import twitter_icon from '../Assets/twitter.png';
import google_icon from '../Assets/instagram.png';
import Box from "@mui/material/Box";
// import {company_selectors} from "../../redux/slices/company/SettingsSlice";
// import {useSelector} from "react-redux";


const Footer = ({additionalStyle}) => {
    // const page_setting = useSelector(company_selectors.getCompanyData);
    const icons = [
        {
            name: "facebook",
            link: `https://www.facebook.com/FoodyVietnam/`,
            icon: facebook_icon
        },    {
            name: "twitter",
            link: `https://twitter.com/?lang=vi`,
            icon: twitter_icon
        },  {
            name: "google",
            link: "thinh.nguyenbk2018@hcmut.edu.vn",
            icon: google_icon
        },
    ]
    return (
        <Grid sx={{position:'static',boxShadow:3,left:0,bottom:0,right:0,bgcolor:"#B9A6A6", paddingTop:"20px"}} container >
            <Grid item xs={12} sm={3} md={3} mx={3}>
                <Typography variant={`h5`} align="left" sx={{fontWeight:'bold'}} >
                    HỖ TRỢ
                </Typography>
                <Typography sx={{mb:1}} variant={`h6`} align="left">
                    {`Hotline: 0866457235`}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3} mx={3}>
                <Typography variant={`h5`} align="left" sx={{fontWeight:'bold'}}> SÁNG LẬP</Typography>
                <Typography variant={`body1`} align="left"> Tran Viet Huynh</Typography>
                <Typography variant={`body1`} align="left"> Tuan Phong Tran</Typography>
                <Typography variant={`body1`} align="left"> An Ha Tran</Typography>
                <Typography variant={`body1`} align="left"> Hoang Khoi Tran</Typography>
                <Typography variant={`body1`} align="left"> Manh Quyen Khong</Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3} mx={3}>
                <Typography variant={`h5`} align="left" sx={{fontWeight:'bold'}}> ĐỊA CHỈ</Typography>
                <Typography variant={`body1`} align="left">268 Ly Thuong Kiet St, District 10, HCMC, Vietnam</Typography>
                <Typography variant={`subtitle2`} align="left" sx={{fontStyle:'italic'}}>See on map</Typography>
            </Grid>
            <Typography component="div" variant="h5" sx={{py:3}}>
                <img src={footer} alt="banner" width={200} sx={{ flexGrow: 1, paddingLeft: 10, display: { xs: 'flex', md: 'none' } }} />
            </Typography>
            <Grid item xs={12} sm={12} md={12} mx={3} sx={{display:{xs:'none',md:'flex'},justifyContent:'space-evenly'}} >
                <Box sx={{display:`flex`,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    {icons.map((item,index) => {
                        return <Box maxWidth={`30px`} maxHeight={`30px`} key={item.name} mx={1}>
                            <a href={item.link}><img src={item.icon} height={`30px`} alt={item.name}/></a>
                        </Box>
                    })}
                    <Box maxWidth={`100px`} maxHeight={`30px`} mx={1}>
                        <Typography variant="caption" align="left" >Term Of Use</Typography>
                    </Box>
                    <Box maxWidth={`100px`} maxHeight={`30px`} mx={1}>
                        <Typography variant="caption" align="left" >Term Of Supply</Typography>
                    </Box>
                    <Box maxWidth={`100px`} maxHeight={`30px`} mx={1}>
                        <Typography variant="caption" align="left" >Privacy Policy</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} mx={3} sx={{display:{xs:'none',md:'flex'},justifyContent:'space-evenly'}} >
                <Typography variant="overline" display="block" gutterBottom color={`elevation.layer2.contrast`}>
                    {`© Copyright 2022, Promax Team, Ho Chi Minh City University of Techonology`}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;