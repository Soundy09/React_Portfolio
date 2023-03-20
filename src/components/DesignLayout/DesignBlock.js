import React from 'react';
import {Box} from "@mui/material";
import Gig_1 from "../../img/Gig_1.jpg"

function DesignBlock(props) {
   const {image, live, source, title, subTitle} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>Hello World</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               
              
               {/* <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/> */}


            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               
{/*                
               <DesignLink 
               link={source} 
               subTitle={subTitle} 
               icon={'fa fa-code'}/> */}


            </Box>
         </Box>
      </Box>
   );
}

export default DesignBlock;