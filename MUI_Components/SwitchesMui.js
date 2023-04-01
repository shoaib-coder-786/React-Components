import React from "react";
import Switch from '@mui/material/Switch';
import { FormControlLabel, TextField } from "@mui/material";
function SwitchesMui(){
return(<>
<h1>Switches </h1>
<Switch/>
<Switch defaultChecked/>
<h3>form control switch</h3>
<FormControlLabel control={<Switch color="secondary"/>} label='dark'/>

<h1>Text Field</h1>
<TextField/>
<h1>variation of textfield</h1>
<TextField label='Standard' variant="standard"/>
<TextField label='Filled' variant="filled"/>
<TextField label='Outlined' variant="outlined"/>
</>)

}
export default SwitchesMui