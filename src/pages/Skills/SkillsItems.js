import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillsItems = (props) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
      {props.config.map((item) => (
        <Box
          key={item.id}
          sx={{
            color: '#38bdf8',
            textAlign: 'center',
            p: '1.5rem',
            bgcolor: '#0f172a',
            m: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
            borderRadius: '15px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.35)',
              cursor: 'pointer'
            }
          }}
        >
          {item.icon}
          <Typography variant="body2" sx={{ mt: '0.6rem', fontWeight: 'bold', color: '#e2e8f0' }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsItems;

