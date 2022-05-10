import * as React from 'react';
import { Box, Stack } from '@mui/material';
import TopCardView from './TopCardView/TopCardView';
import PaperView from './PaperView/PaperView';

export default function RecipieView(props) {
    return (
        <Box
            flex={10}
            sx={{display:{xs:"block"}, justifyContent:"center"}}
        >
            <Stack spacing={1}>
                <TopCardView recipie={props.recipie}/>
                <PaperView recipie={props.recipie}/>
            </Stack>
        </Box>
    );
}