// import react from 'react'
import Button from '@mui/material/Button';
import { ButtonGroup, Fab, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAlertIcon from '@mui/icons-material/AddAlert';


function Buton(){
    return (<>
<h1>Text buttion </h1>
<Button variant="text">Text</Button>

    <h1>contained button </h1>
    <Button variant="contained" color='primary' >Click me</Button>
    {
    // different color size option for Button (sx == style in react )
/* color               -size-      
 'inherit'              small
| 'primary'             medium
| 'secondary'           large
| 'success'
| 'error'
| 'info'
| 'warning'
| string	'primary' 
*/}
    <br /><br />
    <Button disabled variant="contained"  style={{backgroundColor:'silver', display:'inline-block' , marginRight : 20} } >Disabled</Button>
    <Button variant="contained"  href="https://www.google.com/">Link Google </Button>
    
    <h1>outlined button</h1>
    <Button variant="outlined" color='primary' >Click me</Button>
    <Button disabled variant="outlined"  style={{backgroundColor:'silver', display:'inline-block' , marginRight : 20} } >Disabeld </Button>
    <Button variant="outlined" size="large" href="https://www.google.com/">Link Google </Button>

    <h1>control Size of button</h1>
    <Button variant="contained" color='primary' size='small'>Click me</Button>
    <Button  variant="contained" color='primary' size='medium' >contained </Button>
    <Button variant="contained" color='primary' size="large" href="https://www.google.com/">Link Google </Button>
   
   
   <h1>Button with Icon</h1>
   <Button variant="contained" color='primary' startIcon={<DeleteIcon/>}>delete</Button>
   <Button variant="contained" color='secondary' endIcon={<DeleteIcon/>}>delete</Button>

   <h1>Icon Button</h1>
   <IconButton>
    <DeleteIcon/>
    <AddAlertIcon color="secondary"/>
   </IconButton>
   
   <h1>button with click event</h1>
   <Button variant="contained" color='primary' onClick={()=>alert('click event')}> clickEvent</Button>
   
   <h1>Button GROUP</h1>
   <ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Fourth</Button>
   </ButtonGroup>
   <br />
   <ButtonGroup variant='contained'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button>Fourth</Button>
   </ButtonGroup>

   <h1>vertical Button Group</h1>
   <ButtonGroup variant='contained' orientation='vertical'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button> 
    <Button>Fourth</Button>
   </ButtonGroup>
   
   <h1>Floating Action Buttion (FAB) </h1>
   <Fab ><DeleteIcon/></Fab>
   <Fab color='secondary' size='large'><DeleteIcon/>-#-</Fab>

   <Fab color='success'><AddAlertIcon/></Fab>
   <Fab color='error' size='large'><AddAlertIcon/></Fab>
   
   
   
   
    </>)
}
export default Buton