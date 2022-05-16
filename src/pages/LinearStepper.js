import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import UploadPicture from "./upload picture/upload picture";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Payment",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
      <>
        <Controller
            control={control}
            name="college"
            render={({ field }) => (
                <TextField
                    required={true}
                    id="college"
                    label="College"
                    variant="outlined"
                    placeholder="Enter Your College Name"
                    fullWidth
                    margin="normal"
                    {...field}
                />
            )}
        />

        <Controller
            control={control}
            name="passingYear"
            render={({ field }) => (
                <TextField
                    required={true}
                    id="passing-year"
                    label="Passing Year"
                    variant="outlined"
                    placeholder="Enter Your Passing Year"
                    fullWidth
                    margin="normal"
                    {...field}
                />
            )}
        />

        <Controller
            control={control}
            name="boardName"
            render={({ field }) => (
                <TextField
                    id="board-name"
                    label="Board Name"
                    variant="outlined"
                    placeholder="Enter Your Board Name"
                    fullWidth
                    margin="normal"
                    {...field}
                />
            )}
        />
      </>
  );
};

const PaymentForm = () => {
  const { control } = useFormContext();
  return (
      <>
        <Controller
            control={control}
            name="cardNumber"
            render={({ field }) => (
                <UploadPicture/>
            )}
        />
        <Controller
            control={control}
            name="cardMonth"
            render={({ field }) => (
                <TextField
                    id="cardMonth"
                    label="Card Month"
                    variant="outlined"
                    placeholder="Enter Your Card Month"
                    fullWidth
                    margin="normal"
                    {...field}
                />
            )}
        />
        <Controller
            control={control}
            name="cardYear"
            render={({ field }) => (
                <TextField
                    id="cardYear"
                    label="Card Year"
                    variant="outlined"
                    placeholder="Enter Your Card Year"
                    fullWidth
                    margin="normal"
                    {...field}
                />
            )}
        />
      </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      college: "",
      passingYear: "",
      boardName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };


  const handleNext = (data) => {

    if (activeStep == steps.length - 1) {
      console.log(data);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);

    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
      <div>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                  <Typography
                      variant="caption"
                      align="center"
                      style={{ display: "block" }}
                  >
                    optional
                  </Typography>
              );
            }

            return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
            <Typography variant="h3" align="center">
              Thank You
            </Typography>
        ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                  {getStepContent(activeStep)}

                  <Button
                      className={classes.button}
                      disabled={activeStep === 0}
                      onClick={handleBack}
                  >
                    back
                  </Button>

                  <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      // onClick={handleNext}
                      type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </form>
              </FormProvider>
            </>
        )}
      </div>
  );
};

export default LinaerStepper;