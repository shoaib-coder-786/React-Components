import React from 'react'
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';




export default function SlidersMui() {
  return (
    <><h1>Slider in UI</h1>
    <p>by default it takes viewport width of screen....we can set it height and width by put  it into box</p>
    <Slider/>
    <h2>slider with default value setted</h2>
    <Slider className='jds' defaultValue={50} color='secondary'/>
    <Slider value={50} color='success'/>
    <h2>orientation vertical</h2>
    <div className="abc" style={{height:'100px', width:'100px', border:'3px dotted red'}}>
        <Slider orientation='vertical'/>
    </div>
    <Box sx={{height:'100px' , width:'100px' ,border:'3px solid black'}}>
        <Slider orientation='vertical' defaultValue={40}  color='success' size='large'/>
    </Box>
    
    </>
  )
}
