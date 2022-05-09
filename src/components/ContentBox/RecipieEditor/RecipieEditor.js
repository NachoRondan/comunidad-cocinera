import * as React from 'react';
import { Box, Stack } from '@mui/material';
import TopCardEditor from './TopCardEditor';


export default function RecipieEditor(props) {
    return (
        <Box
            flex={10}
            sx={{display:{xs:"block"}, justifyContent:"center"}}
        >
            <Stack>
                <TopCardEditor recipie={props.recipie}/>
                
            </Stack>
        </Box>
    );
}