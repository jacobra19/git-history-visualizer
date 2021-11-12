import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: 'ASD-123/asdf/asdfff',
    },
    {
        value: 20,
        label: 'ASD-546/asdf/ukn',
    },
    {
        value: 37,
        label: 'ASD-888/fgh/hvbvv',
    },
    {
        value: 100,
        label: 'ASD-543/jhg/vbn',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSliderLabel() {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                aria-label="Always visible"
                // defaultValue={80}
                getAriaValueText={valuetext}
                // step={10}
                // marks={marks}
                valueLabelDisplay="on"
            />
        </Box>
    );
}
