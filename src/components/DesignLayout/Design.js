import React from 'react';
import DesignBlock from "./DesignBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Design() {
    return (
      
        <Box>
        

            <Grid container display={'flex'} justifyContent={'center'}>
                {info.Gig.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                      
                     

                       <DesignBlock 
                       image={gig.image} 
                       live={gig.live} 
                       source={project.source}
                        title={project.title} 
                        subTitle={project.subTitle}
                        />
                        <h1>Hello</h1>
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};