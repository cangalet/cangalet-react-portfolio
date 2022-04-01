import React, { useState } from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material';

export default function Portfolio() {

    const portfolio = [
        {
            img: 'LearnIt-screenshot.png',
            title: 'Learn-IT',
            description: 'Coding Bootcamp Project 2: An interactive educational forum for exploring web development languages!',
            repo: 'https://github.com/ChristopherLawn/learn-code-work',
            live: 'https://damp-journey-96412.herokuapp.com/'
        }, 
        {
            img: 'StreamView-screenshot.png',
            title: 'Streamview',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        }, 
        {
            img: 'Weather-Dashboard-screenshot.png',
            title: 'Weather Dashboard',
            description: 'A web app that uses OpenWeather API to view the current weather of your city search along with that cities five day forecast.',
            repo: 'https://github.com/cangalet/CHLG-Weather-Dashboard',
            live: 'https://cangalet.github.io/CHLG-Weather-Dashboard/'
        },
        {
            img: 'Code-Quiz-screenshot.png',
            title: 'Code Quiz',
            description: 'Welcome to my code quiz built using JavaScript, HTML, and CSS. Go ahead and see how well you can fair in the alloted time.',
            repo: 'https://github.com/cangalet/CHLG-Code-Quiz',
            live: 'https://cangalet.github.io/CHLG-Code-Quiz/'
        },
        {
            img: 'StreamView-screenshot',
            title: 'STREAMVIEW',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        },
        {
            img: 'cangalet-screenshot.png',
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
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image="/static/images/cards/paella.jpg"
                alt={portfolio.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {portfolio.title}
                </Typography>
                <Typography>
                    {portfolio.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button color="secondary" size="small" href={portfolio.repo} target="_blank">Repo</Button>
                <Button color="secondary" size="small" href={portfolio.live} target="_blank">Live</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
    </Grid></Container>
  );
}