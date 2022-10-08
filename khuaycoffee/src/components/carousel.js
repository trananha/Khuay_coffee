import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';
import phuonghuong from "../Assets/phuonghuong.jpg"
import trainghiem from "../Assets/trainghiem.jpg"
import thanhtuu from "../Assets/demo.jpg"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'THÀNH TỰU',
    message: 'Là nơi cung cấp cà phê và các loại thiết bị pha chế uy tín trên cả nước',
    imgPath: thanhtuu,
  },
  {
    label: 'PHƯƠNG HƯỚNG',
    message: 'Chúng tôi muốn tiếp cận đến những ai đam mê uống cà phê như một thói quen',
    imgPath: phuonghuong,
  },
  {
    label: 'TRẢI NGHIỆM',
    message: 'Mang đến trải nhiệm chân thật nhất từ cách pha đến cách thưởng thức',
    imgPath: trainghiem,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{backgroundColor: "#C4C4C4", display: 'flex', flexDirection:'column', alignItems:'center' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          pt:2,
          bgcolor: '#C4C4C4',
        }}
      >
        <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} color="text.secondary" gutterBottom>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid sx={{bgcolor:"#B9A6A6"}} container>
                <Grid item  sx={{pt: 0.5, pb: 0.5 }}>
                  <Box
                   component="img"
                   sx={{
                     height: 455,
                     width: "100%",
                     maxWidth: 600,
                     display: 'block',
                     overflow: 'hidden',
                   }}
                   src={step.imgPath}
                   alt={step.label}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{px: 20,display:{xs:'none',md:'flex', flexDirection: "column"},justifyContent:'space-evenly'}}>
                  <Typography sx={{fontWeight: "bold", fontStyle: 'oblique', fontFamily: 'Monospace'}}>
                     {step.message}
                  </Typography>
                </Grid>
              </Grid>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{backgroundColor:'#C4C4C4'}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
