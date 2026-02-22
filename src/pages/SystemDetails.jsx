import React from 'react';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import { Box, Container, Typography, Paper, Divider, Stack, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import architectureConfig from '../assets/configs/architectureConfig';
import Seo from '../components/Seo';

const SectionBlock = ({ title, content }) => {
    if (!content) return null;

    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#f8fafc', mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box component="span" sx={{ width: 6, height: 24, bgcolor: '#34d399', borderRadius: 1 }} />
                {title}
            </Typography>
            <Box sx={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.8, '& p': { mb: 2 } }}>
                {typeof content === 'string' ? (
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{content}</Typography>
                ) : content}
            </Box>
        </Box>
    );
};

export default function SystemDetails() {
    const { id } = useParams();
    const system = architectureConfig.find(s => s.id === id);

    if (!system) {
        return <Navigate to="/architecture" replace />;
    }

    const { details } = system;

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', color: '#f8fafc', pb: 10, pt: 4 }}>
            <Seo title={`${system.title} Architecture | Vishnu Vardhan`} description={system.summary} />

            <Container maxWidth="md">
                <Button
                    component={RouterLink}
                    to="/architecture"
                    startIcon={<ArrowBackIcon />}
                    sx={{ color: '#94a3b8', mb: 4, '&:hover': { color: '#38bdf8', bgcolor: 'transparent' } }}
                >
                    Back to Architecture Overview
                </Button>

                <Box sx={{ mb: 6 }}>
                    <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 2 }}>
                        {system.icon}
                        <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -1, color: '#f8fafc', fontSize: { xs: '2.5rem', md: '4rem' } }}>
                            {system.title}
                        </Typography>
                    </Stack>
                    <Typography variant="h5" sx={{ color: '#38bdf8', fontWeight: 600 }}>
                        {system.summary}
                    </Typography>
                </Box>

                {system.image && (
                    <Box
                        component="img"
                        src={system.image}
                        alt={`${system.title} Architecture Diagram`}
                        sx={{ width: '100%', height: 350, objectFit: 'cover', borderRadius: 4, border: '1px solid #334155', mb: 8, opacity: 0.8 }}
                    />
                )}

                <Paper elevation={0} sx={{ bgcolor: '#1e293b', p: { xs: 3, md: 5 }, borderRadius: 4, border: '1px solid #334155' }}>
                    <SectionBlock title="1. Problem Statement" content={details.problem} />
                    <Divider sx={{ borderColor: '#334155', my: 4 }} />

                    <SectionBlock title="2. System Architecture Overview" content={details.overview} />
                    <Divider sx={{ borderColor: '#334155', my: 4 }} />

                    <Box sx={{ mb: 6 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: '#f8fafc', mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component="span" sx={{ width: 6, height: 24, bgcolor: '#38bdf8', borderRadius: 1 }} />
                            3. Core Components
                        </Typography>
                        <Grid container spacing={3}>
                            {details.components?.map((comp, idx) => (
                                <Grid item xs={12} sm={6} key={idx}>
                                    <Box sx={{ bgcolor: '#0f172a', p: 3, borderRadius: 2, height: '100%', border: '1px solid #334155' }}>
                                        <Typography variant="h6" sx={{ color: '#38bdf8', fontWeight: 700, mb: 1 }}>{comp.name}</Typography>
                                        <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>{comp.desc}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Divider sx={{ borderColor: '#334155', my: 4 }} />

                    <SectionBlock title="4. Key Engineering Decisions" content={details.decisions} />
                    <Divider sx={{ borderColor: '#334155', my: 4 }} />

                    <SectionBlock title="5. Reliability & Scale" content={details.reliability_scale} />
                    <Divider sx={{ borderColor: '#334155', my: 4 }} />

                    <SectionBlock title="6. Lessons Learned" content={details.lessons} />
                </Paper>
            </Container>
        </Box>
    );
}
