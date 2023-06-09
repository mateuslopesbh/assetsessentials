import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

// Import your step components here
import BasicInformationStep from './BasicInformationStep';
import ContentStep from './ContentStep';
import TeamStep from './TeamStep';
import SocialStep from './SocialStep';
import ConfirmationStep from './ConfirmationStep';
import MicrositeCreated from './MicrositeCreated';

const steps = ['Who we are', 'What we do', 'Meet our team', 'Connect on social', 'Finish'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Initialize your form data state here
    basicInformation: {},
    content: {},
    team: {},
    social: {},
  });
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    console.log(formData)
    const currentStep = activeStep;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCompletedSteps((prevCompletedSteps) => [...prevCompletedSteps, currentStep]);
  };

  const handleBack = () => {
    const previousStep = completedSteps.pop();
    setActiveStep(previousStep);
    setCompletedSteps([...completedSteps]);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
  
    // Send the formData using a POST request to http://aem.local/bin/micrositebuilder
    fetch('http://aem.local/bin/micrositebuilder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from micrositebuilder:', data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };
  

  const updateFormData = (step, updatedData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [step]: { ...prevFormData[step], ...updatedData },
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicInformationStep
            formData={formData.basicInformation}
            setFormData={(updatedFormData) => updateFormData('basicInformation', updatedFormData)}
          />
        );
      case 1:
        return (
          <ContentStep
            formData={formData.content}
            setFormData={(updatedFormData) => updateFormData('content', updatedFormData)}
          />
        );
      case 2:
        return (
          <TeamStep formData={formData.team} setFormData={(updatedFormData) => updateFormData('team', updatedFormData)} />
        );
      case 3:
        return (
          <SocialStep
            formData={formData.social}
            setFormData={(updatedFormData) => updateFormData('social', updatedFormData)}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            formData={formData}
            handleSubmit={handleSubmit} // Pass the handleSubmit function to the ConfirmationStep component
          />
        );
      default:
        return (
          <MicrositeCreated
          formData={formData} />
        );
    }
  };
  

  return (
    <Box sx={{ width: '100%' }}>
      <Card sx={{ p: 4, m: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Card>

      <Container maxWidth="xl">
        <div>
          {getStepContent(activeStep)}
          {activeStep !== steps.length && (
            <>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </>
          )}
        </div>
      </Container>

    </Box>
  );
};


export default MultiStepForm;