import React, { useState } from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container} from '@mui/material';

export default function Portfolio() {

    const portfolio = [
        {
            img: 'LearnIt-screenshot.png',
            title: 'LEARN-IT',
            description: 'Coding Bootcamp Project 2: An interactive educational forum for exploring web development languages!',
            repo: 'https://github.com/ChristopherLawn/learn-code-work',
            live: 'https://damp-journey-96412.herokuapp.com/'
        }, 2, 3, 4, 5, 6, 7, 8, 9
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
                src=""
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
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
                </CardActions>
            </Card>
            </Grid>
        ))}
    </Grid></Container>
  );
}