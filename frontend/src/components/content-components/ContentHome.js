import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ContentHomePanel } from '../utils/ContentHomePanel';
import {StyledTabs,StyledTab} from "./../utils/styles/TabStyle"

function allProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function ContentHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cntArray = ["Nishanth", "Arun" , "Saptha" , "Kavin" , "Rakesh"];
  const cntContentArray = ["Nishanth Content" , "Arun Content" , "Saptha Content" , 
  "Kavin Content" , "Rakesh Content"]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs value={value} onChange={handleChange} aria-label="basic tabs example"
        scrollButtons="auto">
          {
            cntArray.map((value,index)=>{
              return (
                <StyledTab label={value} {...allProps(index)} sx={{
                  "color" :"steelblue",
                  "&:hover" :{
                    "color" : "steelblue",
                    "opacity"  :"0.6"
                  }
                }}/>
              )
            })
          }
        </StyledTabs>
      </Box>
      {
        cntContentArray.map((mvalue,mindex)=>{
          return (
            <ContentHomePanel value={value} index={mindex}>
              {mvalue}
            </ContentHomePanel>
          )
        })
      }
    </Box>
  );
}