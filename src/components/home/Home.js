import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularImage from '../ui_assets/CircularImage';
import profileImg from '../media_assets/profile_img.png';
import Typography from '@mui/material/Typography';
import './home_styles.css';

function Home() {
  return (
    <Container maxWidth="bg">
        <Grid container spacing={4}>
            <Grid item md={3} style={{marginTop:"25px"}}>
                <CircularImage src={profileImg} alt="Rick" />
            </Grid>
            <Grid item md={9}>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Typography variant="h3" gutterBottom className='home_title orange'>
                            Tech Lead / Fullstack Developer
                        </Typography>
                        <br/>
                        <Typography variant="body1" gutterBottom>
                            I am a professional with a degree in computer science, 
                            educated and visionary for new projects. I have the ability 
                            to work in a team. I display a high initiative at work and 
                            am interested in new technologies and/or systems. 
                            The skills in computing have allowed me to adapt and excel in any area. 
                            I have a lot of work experience in project leadership and sales, 
                            which has given me strong communication skills for project execution.
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6" gutterBottom className='home_subtitle orange'>
                            Personal information
                        </Typography>
                        <Typography variant="body" className='orange'>
                            Date of Birth: 
                        </Typography>
                        <Typography variant="body">
                            December 13, 1989
                        </Typography>
                        <br/>
                        <Typography variant="body" className='orange'>
                            Nationality: 
                        </Typography>
                        <Typography variant="body">
                            Mexican
                        </Typography>
                        <br/>
                        <Typography variant="body" className='orange'>
                            Address: 
                        </Typography>
                        <Typography variant="body">
                            Camino Real a Toluca #1150
                        </Typography>
                        <br/>
                        <Typography variant="body" className='orange'>
                            Phone: 
                        </Typography>
                        <Typography variant="body">
                            +52 55 28 55 52 52
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6" gutterBottom className='home_subtitle orange'>
                            Languages
                        </Typography>
                        <Typography variant="body">
                            Spanish (Native)
                        </Typography>
                        <br/>
                        <Typography variant="body">
                            English (Advanced)
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Home;