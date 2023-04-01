import React from 'react'
import Radio from '@mui/material/Radio';
import { FormControlLabel, RadioGroup} from '@mui/material';
export default function Radio1() {
  return (
    <div>
        <h1>Radio Buttons</h1>
        
        <Radio/> <br />
<FormControlLabel control={<Radio/>} label="male"/> 
<FormControlLabel control={<Radio/>} label="female"/>
<FormControlLabel  control={<Radio/>} label="Top" labelPlacement='top'/>
<FormControlLabel  control={<Radio/>} label="bottom" labelPlacement='bottom'/>
<FormControlLabel  control={<Radio/>} label="start" labelPlacement='start'/>

<h1>Radio Group</h1>
<RadioGroup>
<FormControlLabel  control={<Radio/>} label="male"/>
<FormControlLabel  control={<Radio/>} label="female" />
<FormControlLabel  control={<Radio/>} label="other" />
    
    </RadioGroup>

        </div>
  )
}
