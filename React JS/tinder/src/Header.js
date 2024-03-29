import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon fontSize='large' className='Person_Icon'/>
      </IconButton>
      <img className='header_icon'src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' />
     <IconButton>
     <ForumIcon fontSize='large' className='forum_icon'/>
     </IconButton>
    </div>
    
  );
}

export default Header
