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
          HI! 👋 I'M <span>CHRIS ANGALET</span> (he/him)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
          <Card sx={{ maxWidth: 850 }}>
            <CardMedia
                component="img"
                height="100%"
                image="https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077070/cangalet-portfolio/Chris-Angalet_Headshot_ptp3el.jpg"
                alt="Chris Angalet"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
            I'm an 8x Salesforce Certified Administrator with 4+ years of experience working within the Salesforce ecosystem.  I've specialized on Sales Cloud and Marketing Cloud.  In addition I've expanded my knowledge and understanding of coding languages and software development methodologies by completing the the University of Oregon's FullStack Javascript Web Development Bootcamp. 
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