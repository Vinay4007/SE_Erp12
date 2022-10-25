import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Icon1 from "@mui/icons-material/CatchingPokemon"
import Icon2 from "@mui/icons-material/IceSkating"
import Icon3 from "@mui/icons-material/ConfirmationNumber"
import { FileUpload } from '../utils/FileUpload';
import { HEFAModalUtil } from '../utils/HEFAModalUtil';

// for HEFA Request 
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 100%,rgb(233,64,87) 50%,rgb(138,35,135) 0%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#ffee00',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Icon1 />,
    2: <Icon2 />,
    3: <Icon3 />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export function HEFAModel() {

  const [hName, sethName] = useState("Nishanth")
  const [hage, sethAge] = useState(21)
  const [hdocs, sethDocs] = useState("MyDocs")


  const steps = [
    {
      name: "other",
      label: "Other Details",
    }, {
      name: "upload",
      label: "Upload Documents"
    },
    {
      name: "confirm",
      label: "Confirm"
    }]

  const handleFinish = (event) => {
    console.log("Halde Finish")
  }

  const handleNext = (event) => {
    if (activeStep === steps.length - 1) {
      handleFinish();
    }

    if (activeStep === steps.length) {
      handleReset();
      return;
    }
    setActiveStep((prevStep) => (prevStep + 1))
    console.log(activeStep)
  }

  const handleReset = (event) => {
    setActiveStep((prevStep) => (0));
  }

  const handleBack = (event) => {
    setActiveStep((prevStep) => (prevStep === 0 ? 0 : prevStep - 1))
  }

  const [activeStep, setActiveStep] = useState(0)


  // [step<count>] [back] [next next finish]

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper orientation='horizontal' activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}
        >
          {
            steps.map((value, index) => (
              <Step key={value.name} completed={activeStep >= index}>{
                console.log(`${activeStep} ${index}`)
              }
                <StepLabel StepIconComponent={ColorlibStepIcon}>{value.label}</StepLabel>
              </Step>
            ))
          }
        </Stepper>


        <Box
          sx={{
              width: "100%",
              height: 250,
              backgroundColor : 'steelblue',
              color : 'black'
            }
          }
        >
          <HEFAModalUtil step={activeStep}/>
        </Box>

        {
          activeStep === steps.length ?
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>Completed</Typography>
            </>
            : <>
              <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}>
                  Back
                </Button>
              </Box>
            </>
        }
        {
          <Box sx={{ flex: '1 1 auto' }}>
            <Button onClick={handleNext} sx={{ flex: '1 1 auto' }}>
              {activeStep === steps.length ? "Reset" : (activeStep === steps.length - 1 ? "Finish" : "Next")}
            </Button>
          </Box>
        }
      </Box>
    </>
  )
}
