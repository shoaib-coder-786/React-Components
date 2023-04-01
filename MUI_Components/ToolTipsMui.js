import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
// import AgricultureIcon from '@mui/icons-material/Agriculture';

export default function ToolTipsMui() {
  return (
    <>
    <h1>Tool tips</h1>
    <Stack direction="row" spacing={5}>
    <Tooltip title="Delete" color='secondary'>
     <DeleteIcon />
 </Tooltip>
 
 
 <Tooltip title=" do not delete me please" placement='top'><DeleteIcon/></Tooltip>
 
 <Tooltip title="delete top start" placement='top-start'><DeleteIcon/></Tooltip>

 <Tooltip title="delete top end" placement='top-end'><DeleteIcon/></Tooltip>

 <Tooltip title="delete bottom" placement='bottom'><DeleteIcon/></Tooltip>

 <Tooltip title="delete left" placement='left'><DeleteIcon/></Tooltip>

 <Tooltip title="delete right" placement='right'><DeleteIcon/></Tooltip>
</Stack>


    </>
  )
}
