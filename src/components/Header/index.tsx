import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, Stack } from '@mui/material';
import { tabList } from './tab-lists';
import { ITabPanel } from './type';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Header({ value, onChange }: { value: number, onChange: (event: React.SyntheticEvent, newValue: number) => void }) {

 


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" spacing={2} style={{ padding: "1rem" }}>
          <Avatar alt="Behzad News" src="/logo192.png" style={{
            width: "4rem"
          }} />
        </Stack>
        <Tabs value={value} onChange={onChange} aria-label="basic tabs example" variant="scrollable">
          {tabList.map((tab: ITabPanel, index: number) => (
            <Tab key={index} label={tab.name} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>

    </Box>
  );
}
