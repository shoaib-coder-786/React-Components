import { Drawer, IconButton, List,  ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Array = ["Home" , "products" ,"About" , "ContactUs" , "Login", "Logout"]

const DrawerMui = () => {
    const [openDrawer , setDrawer] = useState(false)
  return (
   <>
 
   <Drawer anchor={'left'} open={openDrawer} onClose={()=>setDrawer(false)} >
<List>
    {Array.map((pages, index)=>{
   return (<> 
    <ListItemButton onClick={()=>setDrawer(!openDrawer)} id='index'>
        <ListItemIcon>
            <ListItemText>{pages}</ListItemText>
        </ListItemIcon>
    </ListItemButton></>)
  })}
    
</List>

   </Drawer>
   <IconButton sx={{color:'white' , marginLeft:'auto'}} onClick={()=>setDrawer(!openDrawer)}>
    <MenuIcon/>
</IconButton>
   </>
  )
}

export default DrawerMui