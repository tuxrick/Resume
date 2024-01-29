import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularImage from '../ui_assets/CircularImage';

import trebolbit_logo from '../media_assets/companies/trebolbit.png';
import appc_logo from '../media_assets/companies/appc.png';
import virtual from '../media_assets/companies/virtual.jpg';
import segob from '../media_assets/companies/segob.jpg';
import rojo from '../media_assets/companies/rojo.png';
import icat from '../media_assets/companies/icat.png';

import './experience_styles.css';

function Experience() {
  return (
    <Container maxWidth="bg">
        <Grid container spacing={4}>
            <Grid item md={12}>
                <Typography variant="h3" gutterBottom className='title orange'>
                    Experience
                </Typography>
            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={trebolbit_logo} alt="Trebolbit"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        Trebolbit
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Tech Lead / Fullstack Developer
                      </Typography>
                      <Typography variant="body1">
                        2018 - 2024 Santa Fe Mexico City
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Managing two development teams and developing a range of applications, web systems, administrative systems, and databases.</li>
                          <li>Offering consulting services for other Trebolbit client companies to provide tailored technological solutions based on their needs.</li>
                          <li>Growth marketing lead.</li>
                          <li>SCRUM Master.</li>
                          <li>.NET Developer (3 years).</li>
                        </ul>
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Major Accomplishments:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Being the first to integrate video games and augmented reality into a political campaign.</li>
                          <li>Never surpassing the final delivery date of a project.</li>
                          <li>Leading the company's transition from a small to medium enterprise.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={appc_logo} alt="Appcelerator"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        Axway / Appcelerator
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Support Manager and developer
                      </Typography>
                      <Typography variant="body1">
                        2015 - 2018 San Jose, California
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Leading the Appcelerator platform support team, working on its improvement while simultaneously assisting global companies such as CISCO, LEGO, Santander, among others.</li>
                        </ul>
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Major Accomplishments:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Attaining premium support with a 94% customer satisfaction rate and an 89% SLA compliance without exceeding limits.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>

            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={virtual} alt="Virtual Market"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        Virtual Market
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Mobile Expert
                      </Typography>
                      <Typography variant="body1">
                        2014 - 2015 Polanco, Mexico City
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Member of the innovation team.</li>
                        </ul>
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Major Accomplishments:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Being the first company to offer a portable and versatile POS solution in Mexico.</li>
                          <li>Receiving a 50-million investment from Coca-Cola for data analysis.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={segob} alt="Secretaría de Gobernación"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        Interior Ministry
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Technical Leader and PHP Developer
                      </Typography>
                      <Typography variant="body1">
                        2014 Mexico City, Mexico
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Developing various administrative systems and optimizing processes.</li>
                          <li>Developing administrative apps for internal use.</li>
                        </ul>
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Major Accomplishments:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Never having been hacked or suffered data breaches.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={rojo} alt="Rojo Technology"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        Rojo Technogy
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Mobile Developer & PHP Developer
                      </Typography>
                      <Typography variant="body1">
                        2013 - 2014 Mexico City, Mexico
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Developing various administrative systems, e-commerce platforms, and mobile apps.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item md={6}>
              <div style={{marginLeft:"auto", marginRight:"auto", display:"block", width:"50%"}}>
                <CircularImage src={icat} alt="Instituo de Ciencias Aplicadas y tecnología"/>
              </div>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="h4" className='subtitle orange centered'>
                        CCADET (Now ICAT)
                      </Typography>
                      <Typography variant="body1">
                        <b>Position: </b> Part-time Researcher
                      </Typography>
                      <Typography variant="body1">
                        2011 - 2013 Mexico City, Mexico
                      </Typography>
                      <Typography
                        variant="body1"
                        className='subtitle'
                      >
                        Responsibilities:
                      </Typography>
                      <Typography
                        sx={{ display: 'inline' }}
                        variant="body1"
                      >
                        <ul>
                          <li>Research and develop new human technology interfaces.</li>
                        </ul>
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Experience;