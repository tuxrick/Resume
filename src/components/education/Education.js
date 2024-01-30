import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import CodeIcon from '@mui/icons-material/Code';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SchoolIcon from '@mui/icons-material/School';

import './education_styles.css';

function Education() {
  return (
    <Container maxWidth="bg">
      <Typography variant="h3" gutterBottom className='education_title orange'>
          Education
      </Typography>
      <Timeline position="alternate">

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Growth Marketing Certification
            </Typography>
            <Typography><b>Institution:</b> DevF</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <ShoppingBagIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2018
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              SCRUM Master Certification
            </Typography>
            <Typography><b>Institution:</b> Scrum Study</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <DateRangeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2017
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Mobile App Development Certification (Native iOS)
            </Typography>
            <Typography><b>Institution:</b> KMMX</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <AppleIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2014
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              CMMI Certification
            </Typography>
            <Typography><b>Institution:</b> Praxis</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <ElectricBoltIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2014
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Software Architecture
            </Typography>
            <Typography><b>Institution:</b> Praxis</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <ApartmentIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2014
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Android Certification
            </Typography>
            <Typography><b>Institution:</b> UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <AndroidIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2013
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Multi Plartform Mobile Development Certification
            </Typography>
            <Typography><b>Institution:</b> KMMX</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <DeveloperModeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2013
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Computer Science Degree
            </Typography>
            <Typography><b>Institution:</b> Universidad Nacional Autónoma de México UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="success">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2007 - 2012
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              MAX/MSP/JITTER/, SuperCollider
            </Typography>
            <Typography><b>Institution:</b> Faculty of Sciences UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <LibraryMusicIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2010
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Java Basic, Intermediate, and Advanced
            </Typography>
            <Typography><b>Institution:</b> Faculty of Engineering UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2008
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Computer Maintenance and Repair
            </Typography>
            <Typography><b>Institution:</b> UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="primary">
              <BuildCircleIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2007
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ py: '15px', px: 2 }}>
            <Typography variant="body1" component="span" className='education_timeline_title orange'>
              Computer Technician
            </Typography>
            <Typography><b>Institution:</b> Escuela Nacional Preparatoria UNAM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }} />
            <TimelineDot color="success">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#DB6846' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '25px', px: 2 }}>
            <Typography variant="h6" component="span" className='education_timeline_year'>
              2005 - 2007
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Container>
  );
}

export default Education;