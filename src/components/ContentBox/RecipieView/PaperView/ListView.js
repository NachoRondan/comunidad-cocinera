import React from "react";
import { Box, Stepper, Step, StepLabel, } from "@mui/material";
import { Settings } from "@mui/icons-material";

export default function DynamicList(props){
    
    const [steps, setSteps] = React.useState(props.list);
    
    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper  orientation="vertical">
                {steps.map((step, index) => (       
                index < steps.length-1 ?        
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                    </Step>
                : null
                ))}
            </Stepper>
        </Box>
    );
}