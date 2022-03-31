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
            img: 'StreamView-screenshot',
            title: 'Streamview',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        }, 
        {
            img: 'StreamView-screenshot',
            title: 'Weather Dashboard',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        },
        {
            img: 'StreamView-screenshot',
            title: 'Code Quiz',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        },
        {
            img: 'StreamView-screenshot',
            title: 'STREAMVIEW',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://emdok.github.io/bang-imdb/'
        },
        {
            img: 'StreamView-screenshot',
            title: 'Portfolio-V1',
            description: 'Coding Bootcamp Project 1: Web application where an end user is able to search for a movie or tv show and see which streaming service that media is available to view on.',
            repo: 'https://github.com/emdok/bang-imdb',
            live: 'https://cangalet.github.io/chrisangalet/'
        },
    ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
        {portfolio.map((portfolio) => (
            <Grid item key={portfolio} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="img"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image="../../assets/img/LearnIt-screenshot.png"
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
                <Button color="secondary" size="small" href={portfolio.repo}>Repo</Button>
                <Button color="secondary" size="small" href={portfolio.live}>Live</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
    </Grid></Container>
  );
}