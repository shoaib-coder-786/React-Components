import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';

import { Button, Tabs, Toolbar, Typography} from '@mui/material';
import DrawerMui from './DrawerMui';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function ResponsiveNavbar() {
const [data ,setdata] = useState();
const theme = useTheme();
console.log(theme);
const matches = useMediaQuery('(max-width:662px)', { noSsr: true });

console.log(matches);

  return (
<>

<AppBar>
   <Toolbar>
<ShoppingCartIcon/>
{matches ? <> <Typography sx={{fontSize:"1.5rem" ,marginLeft:"10%"}}>E-Cart</Typography><DrawerMui/></> 
         : <> <Tabs textColor='success' value={data} onChange={(e,val)=>setdata(val)} indicatorColor='secondary'>
<Tab label="Home"/>
<Tab label="About "/>
<Tab label="Contact"/>
<Tab label="Courses"/>
</Tabs>
<Button sx={{marginLeft:'auto'}} variant='contained' color='secondary'>Login</Button>
<Button sx={{marginLeft:'10px'}} variant='contained' color="success">Sign UP</Button></>}

</Toolbar> 

</AppBar>






</>
  )
}
