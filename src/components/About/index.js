import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function About() {
  return (
    <section className="my-5">
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 16,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            HI! 👋 I'M <span>CHRIS ANGALET</span>
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            I'm a currently working as a Salesforce Administrator at Papé Group and have my Salesforce Administrator Certification and in pursuit of certifications.  I'm currently enrolled in the University of Oregon's FullStack Javascript Web Development Bootcamp to get a better understanding and experience with coding languages and processes.
            A sales operations professional, learning Salesforce and software development. 
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Feel free to: check out my resume, learn a little more about me, or get in touch.
          </Typography>
        </Container>
      </Box>
      {/* End hero unit */}
    </section>
  );
}