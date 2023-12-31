import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton className= 'swipeButton_repeat'>
            <ReplayIcon fontSize = "large"/>
        </IconButton>
        <IconButton className= 'swipeButton_left'>
            <CloseIcon fontSize = "large"/>
        </IconButton>
        <IconButton className= 'swipeButton_star'>
            <StarRateIcon fontSize = "large"/>
        </IconButton>
        <IconButton className= 'swipeButton_right'>
            <FavoriteIcon fontSize = "large"/>
        </IconButton>
        <IconButton className= 'swipeButton_lightning'>
            <FlashOnIcon fontSize = "large"/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons;