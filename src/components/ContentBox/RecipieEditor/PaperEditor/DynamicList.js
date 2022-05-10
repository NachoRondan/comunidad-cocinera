import React from "react";
import { Box, Stepper, TextField, Button, Step, StepLabel, StepContent, Typography } from "@mui/material";

export default function DynamicList(props){
    
    const [steps, setSteps] = React.useState(props.list);
    const [value, setValue] = React.useState("");
    const [activeStep, setActiveStep] = React.useState(steps.length-1);

    const handleAdd = () => {
        let auxSteps = [...steps];
        let auxValue = {...steps[steps.length-1]};
        auxValue.label = value;
        auxSteps[steps.length-1] = auxValue;
        auxSteps.push("");
        setSteps( auxSteps );     
        setValue("");   
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleEliminate = () => {
        steps.splice(-2,1,"");
        steps.pop();
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                        optional={
                            index === steps.length-1 ? (
                            <TextField value={value} id="standard-basic" variant="standard" onChange={handleChange}/>
                            ) : null
                        }
                        >
                        {step.label}
                    </StepLabel>
                    <StepContent>
                        <Box sx={{ mb: 2 }}>
                            <div>
                            <Button disabled={index === 0} variant="contained" color="error" onClick={handleEliminate} sx={{ mt: 1, mr: 1 }}>
                                Eliminar
                            </Button>
                            <Button variant="contained" color="success" onClick={handleAdd} sx={{ mt: 1, mr: 1 }}>
                                Agregar
                            </Button>
                            </div>
                        </Box>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
        </Box>
    );
}