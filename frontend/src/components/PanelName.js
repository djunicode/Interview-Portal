import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function PanelName() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Panel Alpha" />
        {/* <Tab label="Panel Beta" > ERFFVV </Tab> */}
        {/* <Tab label="Panel Three" /> */}
      </Tabs>
    </Box>
  );
}
