import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FormControlLabel } from '@mui/material';




function Acheck(){
    return (<>
   <h1>Check Box in Material UI</h1>
   <Checkbox color='primary'/>
   <Checkbox checked/>

<h1>Icons wuth click or CheckBox icon</h1>

   <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
   <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon color='secondary'/>}/>

   <h1>handling event on checkBox</h1>
   <Checkbox onChange={()=>alert('success')} />
<h1>checkbox with Label</h1>
<FormControlLabel  control={<Checkbox/>} />
<FormControlLabel  control={<Checkbox/>} label="Male"/>
<FormControlLabel  control={<Checkbox/>} label="Top" labelPlacement='top'/>
<FormControlLabel  control={<Checkbox/>} label="bottom" labelPlacement='bottom'/>
<FormControlLabel  control={<Checkbox/>} label="start" labelPlacement='start'/>



    </>)
}
export default Acheck