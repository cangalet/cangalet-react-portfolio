import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HikingIcon from '@mui/icons-material/Hiking';
import {Box, Grid, Typography, Container, Button} from '@mui/material';

export default function Footer() {
    const footerIconStyle = {
        color: '#BF8F00',
        textDecoration: "none",
        borderRadius: 2,
        mr: 1,
    };
    const iconTextStyle = {
        paddingLeft: 1,
        
    };

    return (
        <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
        }}
        >
        <Container sx={{ display: 'flex', justifyContent: 'center'}}>
            <Grid item sx={{ display: 'flex' }}>
                <Button href="https://github.com/cangalet" target="_blank" color="inherit" sx={footerIconStyle}>
                    <GitHubIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                        Github
                        </Typography>
                </Button>
                <Button href="https://www.linkedin.com/in/christopher-angalet/" target="_blank" color="inherit" sx={footerIconStyle}>
                    <LinkedInIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                            LinkedIn
                        </Typography>
                </Button>
                <Button href="https://trailblazer.me/id/cangalet" target="_blank" color="inherit" sx={footerIconStyle}>
                    <HikingIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                        Trailhead
                        </Typography>
                </Button>
            </Grid>
        </Container>
        </Box>
    );
}