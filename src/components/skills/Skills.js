import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import './skills_styles.css';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


function Skills() {
  return (
    <Container maxWidth="bg">
      <Grid container spacing={4}>
          <Grid item md={12}>
              <Typography variant="h3" gutterBottom className='title orange'>
                  Skills
              </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Frontend
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Javascript / Typescript
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                React
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Angular
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />            
          </Grid>

          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                PHP
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Code Igniter
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Cake
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Laravel
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Wordpress
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
          </Grid>

          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                HTML / CSS
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Sass
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                HTML5
            </Typography>
            <BorderLinearProgress variant="determinate" value={95} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Material
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Bootstrap
            </Typography>
            <BorderLinearProgress variant="determinate" value={95} />
          </Grid>

          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Backend
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Javascript / Typescript
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Express JS
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Nest JS
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Node
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                AWS Lambda
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
          </Grid>
          
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                PHP
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Code Igniter
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Laravel
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
          </Grid>

          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                C#
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                ASP
            </Typography>
            <BorderLinearProgress variant="determinate" value={65} />
            <Typography variant="body1" gutterBottom className='code_language'>
                .NET
            </Typography>
            <BorderLinearProgress variant="determinate" value={65} />
          </Grid>

          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                JAVA
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Springboot
            </Typography>
            <BorderLinearProgress variant="determinate" value={75} />
            <Typography variant="body1" gutterBottom className='code_language'>
                JSP
            </Typography>
            <BorderLinearProgress variant="determinate" value={65} />
          </Grid>

          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Mobile
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Javascript / Typescript
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                React Native
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Cordova
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Ionic
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                DART
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Flutter
            </Typography>
            <BorderLinearProgress variant="determinate" value={75} />
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                IOS
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                SWIFT
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Objective C
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Android
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Java
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Kotlin
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>

          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Data Base
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                NoSQL
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Mongo
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />
            <Typography variant="body1" gutterBottom className='code_language'>
                DynamoDB
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant="body1" gutterBottom className='code_language'>
                CouchBase
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                SQL
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Postgress
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                MySQL
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                SQL Server
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>

          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Devops
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                AWS
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                EC2
            </Typography>
            <BorderLinearProgress variant="determinate" value={85} />
            <Typography variant="body1" gutterBottom className='code_language'>
                S3 Buckets
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Lambda
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Google
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Firebase
            </Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Google Cloud
            </Typography>
            <BorderLinearProgress variant="determinate" value={70} />
          </Grid>

          <Grid item md={12}>
            <Typography variant="body1" gutterBottom className='area_title orange'>
                Firebase
            </Typography>
          </Grid>
          
          <Grid item md={3}>
            <Typography variant="body1" gutterBottom className='technology orange'>
                Firestore
            </Typography>
            <Typography variant="body1" gutterBottom className='code_language'>
                Real Time Database
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Cloud Functions
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Authentication
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1" gutterBottom className='code_language'>
                Cloud Storage
            </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
          </Grid>

      </Grid>
      <br/><br/><br/><br/>
    </Container>
  );
}

export default Skills;