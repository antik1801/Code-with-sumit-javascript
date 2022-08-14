import React from 'react'
import "./swipeButtons.css";
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';
function swipeButtons() {
  return (
    <div className='swipeButtons'>
        <h1>Bal</h1>
      <IconButton className='SwipeButton_repeat'>
        <ReplyIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default swipeButtons
