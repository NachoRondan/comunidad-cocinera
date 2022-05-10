import * as React from 'react';
import { Box, Stack } from '@mui/material';
import TopCardEditor from './TopCardEditor';
import PaperEditor from './PaperEditor/PaperEditor';

export default function RecipieEditor(props) {
    return (
        <Box
            flex={10}
            sx={{display:{xs:"block"}, justifyContent:"center"}}
        >
            <Stack spacing={1}>
                <TopCardEditor recipie={props.recipie}/>
                <PaperEditor recipie={props.recipie}/>
            </Stack>
        </Box>
    );
}