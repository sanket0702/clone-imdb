import React from 'react'
import Card from './MovieCard3';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FanFav = () => {
  return (
    <div>
        
      <h1 style={{paddingLeft:'20px', color:'white',display:'flex',alignItems:'center'}}><span style={{height:'35px',width:'6px',borderRadius:'4px', marginRight:'5px',background:'yellow'}}></span>Fan Fav  <KeyboardArrowRightIcon sx={{fontSize:'40px','&:hover': {
          color: 'yellow', // Pseudo-class styling
        },}}/></h1>
      <Card />
    </div>
  )
}

export default FanFav
