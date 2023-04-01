import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Stacks_controlChild() {
  return(
   <>
   <h3>The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.</h3>
   <Stack spacing={2}>
  
    <Button variant='contained'>One</Button>
    <Button variant='contained'>Two</Button>
    <Button variant='contained'>Three</Button> 
    <Button variant='contained'>Fourth</Button>
 
   </Stack>

   <h1>direction of children : row or column</h1>
   <Stack direction='row' spacing={4}>
  
  <Button variant='contained'>One</Button>
  <Button variant='contained'>Two</Button>
  <Button variant='contained'>Three</Button> 
  <Button variant='contained'>Fourth</Button>


 </Stack>
    
   
   </>
  )
}
