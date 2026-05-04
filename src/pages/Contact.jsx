import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import contactConfig from '../assets/configs/contactConfig';
import Seo from '../components/Seo';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData(e.target);
      submitData.append("access_key", "11711a0b-bc53-47d7-bca9-225fd6f27f56");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();
      if (data.success) {
        setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSnackbar({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'An error occurred. Please try again.', severity: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', color: '#f8fafc', py: { xs: 5, md: 10 } }}>
      <Seo title="Contact | Vishnu Vardhan" description="Contact Vishnu Vardhan for internships, collaborations, and AI/ML opportunities." />

      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -0.8, color: '#f8fafc', textAlign: 'center', mb: 2 }}>
          {contactConfig.title}
        </Typography>
        <Typography sx={{ color: '#cbd5e1', textAlign: 'center', mb: 8, maxWidth: 600, mx: 'auto' }}>
          {contactConfig.subtitle}
        </Typography>

        <Grid container spacing={4}>
          {/* Left: Contact Info */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {contactConfig.contacts.map((contact, index) => (
                <Card
                  key={index}
                  sx={{
                    bgcolor: '#1e293b',
                    color: '#f8fafc',
                    borderRadius: 4,
                    border: '1px solid #334155',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px rgba(0,0,0,0.35)', borderColor: '#38bdf8' }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2, '&:last-child': { pb: 2 } }}>
                    <Box sx={{ color: '#38bdf8', display: 'flex', alignItems: 'center' }}>
                      {contact.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" sx={{ color: '#94a3b8', fontWeight: 600 }}>
                        {contact.type}
                      </Typography>
                      <Typography
                        component="a"
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#f8fafc', textDecoration: 'none', fontWeight: 700, '&:hover': { color: '#38bdf8' } }}
                      >
                        {contact.value}
                      </Typography>
                    </Box>
                    {contact.type === 'Email' && (
                      <Tooltip title="Copy Email">
                        <IconButton onClick={() => copyToClipboard(contact.value)} sx={{ color: '#cbd5e1', '&:hover': { color: '#38bdf8' } }}>
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right: Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: '#1e293b', color: '#f8fafc', borderRadius: 4, border: '1px solid #334155', p: { xs: 2, md: 3 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#38bdf8' }}>
                Send a Message
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3 }}>
                I usually respond within 24 hours.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': { color: '#94a3b8' },
                    '& .MuiOutlinedInput-root': {
                      color: '#f8fafc',
                      bgcolor: '#0f172a',
                      '& fieldset': { borderColor: '#334155' },
                      '&:hover fieldset': { borderColor: '#38bdf8' },
                      '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': { color: '#94a3b8' },
                    '& .MuiOutlinedInput-root': {
                      color: '#f8fafc',
                      bgcolor: '#0f172a',
                      '& fieldset': { borderColor: '#334155' },
                      '&:hover fieldset': { borderColor: '#38bdf8' },
                      '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': { color: '#94a3b8' },
                    '& .MuiOutlinedInput-root': {
                      color: '#f8fafc',
                      bgcolor: '#0f172a',
                      '& fieldset': { borderColor: '#334155' },
                      '&:hover fieldset': { borderColor: '#38bdf8' },
                      '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                    }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: '#38bdf8',
                    color: '#0f172a',
                    fontWeight: 800,
                    py: 1.5,
                    '&:hover': { bgcolor: '#0284c7' },
                    '&.Mui-disabled': { bgcolor: '#334155', color: '#94a3b8' }
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} sx={{ color: '#0f172a' }} /> : 'Send Message'}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', fontWeight: 600 }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
