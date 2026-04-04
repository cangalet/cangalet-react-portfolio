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
            I'm the Senior Salesforce Administrator at Precoa with nearly 7 years of experience across the Salesforce ecosystem. He has held diverse roles spanning Sales Cloud and Marketing Cloud Engagement administration, bringing a well-rounded perspective to both CRM strategy and marketing automation. Most recently, Christopher has expanded his expertise into Data Cloud implementation, positioning him at the forefront of Salesforce's next generation of data-driven customer experiences.. 
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
