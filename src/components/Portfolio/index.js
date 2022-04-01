import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material';

export default function Portfolio() {

    const portfolio = [
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776426/cangalet-portfolio/LearnIt-screenshot_w7jcvf.png',
            title: 'Learn-IT',
            description: 'Coding Bootcamp Project 2: An interactive educational forum for exploring web development languages!',
            repo: 'https://github.com/ChristopherLawn/learn-code-work',
            live: 'https://damp-journey-96412.herokuapp.com/'
        }, 
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776305/cangalet-portfolio/StreamView-screenshot_ukicq7.png',
            title: 'Streamview',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        }, 
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776863/cangalet-portfolio/Weather-Dashboard-screenshot_qgqfq5.png',
            title: 'Weather Dashboard',
            description: 'A web app that uses OpenWeather API to view the current weather of your city search along with that cities five day forecast.',
            repo: 'https://github.com/cangalet/CHLG-Weather-Dashboard',
            live: 'https://cangalet.github.io/CHLG-Weather-Dashboard/'
        },
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776949/cangalet-portfolio/Code-Quiz-screenshot_wwzofe.png',
            title: 'Code Quiz',
            description: 'Welcome to my code quiz built using JavaScript, HTML, and CSS. Go ahead and see how well you can fair in the alloted time.',
            repo: 'https://github.com/cangalet/CHLG-Code-Quiz',
            live: 'https://cangalet.github.io/CHLG-Code-Quiz/'
        },
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776745/cangalet-portfolio/Photo-Port-screenshot_sxo9ms.png',
            title: 'Photo Port',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/cangalet/photo-port',
            live: 'https://cangalet.github.io/photo-port/'
        },
        {
            img: 'https://res.cloudinary.com/dddcuw7qw/image/upload/v1648776269/cangalet-portfolio/cangalet-screenshot_pszzk5.png',
            title: 'Portfolio-V1',
            description: 'Welcome to my portfolio to learn a little more about me. This portfolio is meant to highlight my development skills through this University of Oregon coding bootcamp. Learn more about me, view my projects, and contact me.',
            repo: 'https://github.com/cangalet/chrisangalet',
            live: 'https://cangalet.github.io/chrisangalet/'
        },
    ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
        {portfolio.map((portfolio) => (
            <Grid item key={portfolio.title} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="img"
                image={portfolio.img}
                alt={portfolio.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {portfolio.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {portfolio.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button variant="contained" size="small" href={portfolio.repo} target="_blank">Repo</Button>
                <Button variant="contained" size="small" href={portfolio.live} target="_blank">Live</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
    </Grid></Container>
  );
}