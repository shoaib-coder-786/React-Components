import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Chip, Stack } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function AvatarImgMUi() {
    const handleDelete = () => {
        console.info('You clicked the delete icon.')}
  return (
   <>
   <h1>Avatar or profile image icons </h1>
   <Avatar/>

   <h4>letter icons by default column direction </h4>
   <Stack direction='row' spacing={2}>
   <Avatar alt='icons' >S</Avatar>
   <Avatar alt='icons' >H</Avatar>
   <Avatar alt='icons' >O</Avatar>
   <Avatar alt='icons' >A</Avatar>
    </Stack>

<h1>Image icons</h1>

    <Avatar alt='micky' src="muipractice\src\MUI_Components\iconImage1.jpg" /> 
    <Stack direction="row" spacing={3}> 
<Avatar > <AutoStoriesIcon color='error'/></Avatar> 
<Avatar variant="rounded" > <ChatIcon color='success'/></Avatar>
<Avatar variant="square"> <LocationOnIcon color='secondary'/></Avatar>
 </Stack>

<h1>Badges on icons in material ui </h1>
<Stack spacing={3} direction='row'> 
<Badge badgeContent='5' color='secondary'> <Avatar variant="rounded" > <ChatIcon color='success'/></Avatar>  </Badge>
<Badge badgeContent="10"  color='primary'> <PermPhoneMsgIcon/> </Badge>
<Badge badgeContent="100"  color='primary'> <NotificationsActiveIcon/> </Badge>
</Stack>
<h1>chips in material ui</h1>
<Chip label='shoaib'/>
<Chip label='c++' variant="outlined"/>

<Chip label='deletable' onDelete={handleDelete}/>
<Chip label='notify icon'    onDelete={handleDelete} deleteIcon={<ChatIcon/>}  variant="outlined"/>
<Chip
  label="Custom delete icon"
  onDelete={handleDelete}
  deleteIcon={<AutoStoriesIcon/>}
  color='secondary'
/>
<Chip label='python'/>
<Chip label='parl'/>
<Chip label='react js'/>
<Chip label='nodejs'  color='primary'/>

   </>
  )
}
