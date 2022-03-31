import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HikingIcon from '@mui/icons-material/Hiking';
import {Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
    const footerIconStyle = {
        height: 48,
        padding: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textDecoration: "none",
        borderRadius: 2,
        backgroundColor: 'secondary.main',
        mr: 1,
        '&:hover': {
          bgcolor: 'secondary.light',
        },
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
                <Box component="a" href="https://mui.com/" sx={footerIconStyle}>
                    <GitHubIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                        Github
                        </Typography>
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={footerIconStyle}>
                    <LinkedInIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                            LinkedIn
                        </Typography>
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" sx={footerIconStyle}>
                    <HikingIcon fontSize="medium" />
                        <Typography variant="button" sx={iconTextStyle}>
                        Trailhead
                        </Typography>
                </Box>
            </Grid>
        </Container>
        </Box>
    );
}