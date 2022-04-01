import React, { useState } from 'react';
import {Box, TextField, Button, Container, Typography} from '@mui/material';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Contact me
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name:"
              name="name"
              defaultValue={name}
              onBlur={handleChange} 
              autoFocus
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              label="Email address:"
              type="text"
              id="email"
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              defaultValue={message}
              onBlur={handleChange} 
              label="Message:"
              id="message"
              multiline
              rows={4}
              variant="filled"
            />
            <Typography component="h6" variant="body2">
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
            </Typography>
            <Button
              type="submit"
              data-testid="button"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
    </Container>
  );
}

export default Contact;
