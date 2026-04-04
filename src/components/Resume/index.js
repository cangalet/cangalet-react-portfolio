import React from "react";
import {Button, Card, CardContent, CardMedia, Grid, Typography, Container, Box} from '@mui/material';
import myResume from '../../assets/Angalet_Chris_Resume.pdf'

export default function Resume() {
    const downloadFile = () => {
        window.open(myResume)
      }
    const certs = [
        {
            name: 'Administrator',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077917/cangalet-portfolio/Certifications/2021-03_Badge_SF-Certified_Advanced-Administrator_High-Res_azt5v8.png,
        }, 
        {
            name: 'Advanced Administrator',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077917/cangalet-portfolio/Certifications/2021-03_Badge_SF-Certified_Administrator_High-Res_tj6ih5.png',
        },
        {
            name: 'Marketing Cloud Email Specialist',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077919/cangalet-portfolio/Certifications/2021-03_Badge_SF-Certified_Marketing-Cloud-Email-Specialist_High-Res_l1uyww.png',
        }, 
        {
            name: 'Marketing Cloud Administrator',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077919/cangalet-portfolio/Certifications/2021-03_Badge_SF-Certified_Marketing-Cloud-Administrator_High-Res_ozhiwx.png',
        },
        {
            name: 'Platform App Builder',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077920/cangalet-portfolio/Certifications/2021-03_Badge_SF-Certified_Platform-App-Builder_High-Res_fp67mx.png',
        }, 
        {
            name: 'Strategy Designer',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077922/cangalet-portfolio/Certifications/2022-04_Badge_SF-Certified_Strategy-Designer_High-Res_us5shw.png',
        }, 
        {
            name: 'Data Cloud Consultant',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077924/cangalet-portfolio/Certifications/2023-08_Badge_SF-Certified_Data-Cloud-Con_High-Res_pbddjq.png',
        }, 
        {
            name: 'AI Associate',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1714077923/cangalet-portfolio/Certifications/2023-07_Badge_SF-Certified_AI-Associate_High-Res_lb2yfb.png',
        }, 
    ];
    const skills = [
        {
            name: 'HTML',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,w_35/v1648836137/cangalet-portfolio/Skills/html_uqhblc.svg',
        }, 
        {
            name: 'CSS',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,h_75/v1648836139/cangalet-portfolio/Skills/css_ldiaz6.svg',
        },
        {
            name: 'JS',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648838913/cangalet-portfolio/Skills/javascript-1_tfneyy.svg',
        }, 
        {
            name: 'React',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648838913/cangalet-portfolio/Skills/react-1_zb0ao6.svg',
        },
        {
            name: 'Git',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,w_35/v1648836137/cangalet-portfolio/Skills/git_bllfzr.svg',
        }, 
        {
            name: 'VS Code',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,w_35/v1648836137/cangalet-portfolio/Skills/vscode_rvxuxe.svg',
        }, 
        {
            name: 'Microsoft',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,w_35/v1648836137/cangalet-portfolio/Skills/microsoftWindows_go5ypj.svg',
        }, 
        {
            name: 'Mac',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648838755/cangalet-portfolio/Skills/apple-1_rt4zom.svg',
        }, 
        {
            name: 'Salesforce',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648838620/cangalet-portfolio/Skills/Salesforce-1_jmduxe.svg',
        },
        {
            name: 'Marketo',
            icon: 'https://res.cloudinary.com/dddcuw7qw/image/upload/c_scale,w_35/v1648836137/cangalet-portfolio/Skills/marketo-icon_jc1pi3.svg',
        },   
    ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center' 
            }}
        >
            <Typography component="h1" variant="h5">
                Salesforce Certifications
            </Typography>
            <Grid container spacing={4} sx={{ mt: 1 }}>
                {certs.map((cert) => (
                    <Grid item key={skill.cert} xs={3} sm={2} md={2}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center' }}
                    >
                        <CardMedia
                        component="img"
                        sx={{ width: 75, p: 2 }}
                        image={cert.icon}
                        alt={cert.name}
                        />
                        <CardContent sx={{ flexGrow: 1, }}>
                        <Typography gutterBottom variant="body2" component="h2">
                            {cert.name}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            <Typography component="h1" variant="h5">
                Skills
            </Typography>
            <Grid container spacing={4} sx={{ mt: 1 }}>
                {skills.map((skill) => (
                    <Grid item key={skill.name} xs={3} sm={2} md={2}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        alignItems: 'center' }}
                    >
                        <CardMedia
                        component="img"
                        sx={{ width: 75, p: 2 }}
                        image={skill.icon}
                        alt={skill.name}
                        />
                        <CardContent sx={{ flexGrow: 1, }}>
                        <Typography gutterBottom variant="body2" component="h2">
                            {skill.name}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                type="submit"
                onClick={downloadFile}
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
            >
              Resume
            </Button>
        </Box>
    </Container>
  );
}
