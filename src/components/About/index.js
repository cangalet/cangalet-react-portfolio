import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Card, CardMedia, Grid} from '@mui/material';

export default function About() {
  return (
    <section className="my-5">
      {/* Hero unit */}
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          HI! 👋 I'M <span>CHRIS ANGALET</span>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 850 }}>
            <CardMedia
                component="img"
                height="100%"
                image="https://res.cloudinary.com/dddcuw7qw/image/upload/v1648846055/cangalet-portfolio/Chris-Angalet_Headshot_ptp3el.jpg"
                alt="Chris Angalet"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
            I'm a currently working as a Salesforce Administrator at Papé Group and have my Salesforce Administrator Certification and in pursuit of additional certifications.  I'm currently enrolled in the University of Oregon's FullStack Javascript Web Development Bootcamp to get a better understanding and experience with coding languages and processes.
            A sales operations professional, learning Salesforce and software development. 
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Feel free to: check out my resume, learn a little more about me, or get in touch.
          </Typography>
          </Grid>
        </Grid>
        
      {/* End hero unit */}
    </section>
  );
}