import React, { useState } from 'react';
import { Card, Typography, Box, Dialog, IconButton, CardActionArea } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';

// Image imports
import coursera1 from '../assets/images/Data Analyses and Visualization with Power BI_coursera.jpg';
import coursera2 from '../assets/images/Data Analysis with Python_page-coursera.jpg';
import coursera3 from '../assets/images/Databases and SQL_page-coursera.jpg';
import coursera4 from '../assets/images/ML coursera.jpg';

import cisco1 from '../assets/images/cyber_security_page-cisco.jpg';
import cisco2 from '../assets/images/Intro_to_cyber_page-0001.jpg';
import cisco3 from '../assets/images/python1_page-0001.jpg';
import cisco4 from '../assets/images/python2_page-0001.jpg';

const certificates = [
  { id: 1, title: 'Data Analyses and Visualization with Power BI', image: coursera1, issuer: 'Coursera' },
  { id: 2, title: 'Data Analysis with Python', image: coursera2, issuer: 'Coursera' },
  { id: 3, title: 'Databases and SQL', image: coursera3, issuer: 'Coursera' },
  { id: 4, title: 'Machine Learning', image: coursera4, issuer: 'Coursera' },
  { id: 5, title: 'Cyber Security', image: cisco1, issuer: 'Cisco' },
  { id: 6, title: 'Intro to Cyber Security', image: cisco2, issuer: 'Cisco' },
  { id: 7, title: 'Python 1', image: cisco3, issuer: 'Cisco' },
  { id: 8, title: 'Python 2', image: cisco4, issuer: 'Cisco' },
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImg(null);
  };

  return (
    <Box id="certifications" sx={{ my: 6 }}>
      <Typography component="h2" variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#f8fafc' }}>
        Certifications
      </Typography>

      <Grid2 container spacing={4}>
        {certificates.map((cert) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} xs={12} sm={6} md={4} lg={3} key={cert.id}>
            <Card sx={{ 
                backgroundColor: '#1e293b', 
                color: '#f8fafc', 
                borderRadius: '16px', 
                border: '1px solid #334155',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px -10px rgba(56,189,248,0.3)',
                  borderColor: '#38bdf8'
                }
              }}>
              <CardActionArea onClick={() => handleOpen(cert.image)}>
                <Box
                  component="img"
                  src={cert.image}
                  alt={cert.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderBottom: '1px solid #334155'
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    {cert.issuer}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
            style: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                overflow: 'hidden'
            }
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -8,
              right: -8,
              color: '#fff',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.8)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImg && (
            <Box
              component="img"
              src={selectedImg}
              alt="Certificate Fullscreen"
              sx={{
                width: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Certifications;
