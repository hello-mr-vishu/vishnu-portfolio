import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
    <Box id="about" sx={{ my: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, textAlign: 'center', color: '#f8fafc' }}>
        About Me
      </Typography>

      <Card sx={{ backgroundColor: '#0f172a', color: '#f8fafc', overflow: 'hidden', borderRadius: '16px' }}>

        {/* Top Header Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: { xs: 3, md: 5 }, gap: 4, alignItems: 'center', backgroundColor: '#1e293b', color: '#e2e8f0' }}>

          {/* Profile Picture */}
          <Box
            component="img"
            src={require('../assets/images/Vishnu.png')}
            alt="Vishnu Vardhan"
            sx={{
              width: { xs: 180, md: 220 },
              height: { xs: 220, md: 260 },
              borderRadius: '24px',
              objectFit: 'cover',
              border: '4px solid #38bdf8',
              boxShadow: '0 10px 30px -10px rgba(56,189,248,0.5)',
              flexShrink: 0
            }}
          />

          {/* Intro Text */}
          <Box sx={{ flexGrow: 1, fontSize: '1.15rem', lineHeight: 1.7 }}>
            <Typography variant="body1" paragraph sx={{ fontSize: 'inherit' }}>
              {start}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 'inherit', mb: 3 }}>
              {exit}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 'inherit', fontStyle: 'italic', fontWeight: 600, color: '#38bdf8' }}>
              "The only way to win is to fight — with code, with curiosity, and with consistency."
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default About;

