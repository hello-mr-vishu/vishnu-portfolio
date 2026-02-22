import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import architectureConfig from '../assets/configs/architectureConfig';

const AnimatedBackground = () => (
    <Box
        sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            overflow: 'hidden',
            zIndex: 0,
            opacity: 0.4,
            background: `
        radial-gradient(circle at 15% 50%, rgba(56, 189, 248, 0.15), transparent 25%),
        radial-gradient(circle at 85% 30%, rgba(52, 211, 153, 0.15), transparent 25%)
      `,
        }}
    >
        {/* Simple animated CSS mesh placeholder */}
        <Box sx={{
            width: '200%', height: '200%',
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'pan 20s linear infinite',
            '@keyframes pan': {
                '0%': { transform: 'translate(0, 0)' },
                '100%': { transform: 'translate(-40px, -40px)' }
            }
        }} />
    </Box>
);

const ArchitectureCard = ({ system }) => (
    <Card sx={{
        height: '100%', display: 'flex', flexDirection: 'column',
        backgroundColor: '#1e293b', color: '#f8fafc',
        borderRadius: 4, border: '1px solid #334155',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
            borderColor: '#38bdf8'
        },
        position: 'relative', overflow: 'hidden'
    }}>
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #334155' }}>
            {system.icon}
            <Typography variant="h5" fontWeight={800} sx={{ letterSpacing: -0.2, color: '#f8fafc' }}>
                {system.title}
            </Typography>
        </Box>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
            <Typography variant="h6" sx={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.4 }}>
                {system.summary}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {system.tags.map((t) => (
                    <Chip key={t} size="small" label={t} sx={{ fontWeight: 600, fontSize: '0.75rem', bgcolor: '#0f172a', color: '#94a3b8', border: '1px solid #334155' }} />
                ))}
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <Button
                component={Link}
                to={`/architecture/${system.id}`}
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                    mt: 2,
                    color: '#38bdf8', borderColor: '#38bdf8',
                    fontWeight: 700,
                    '&:hover': { bgcolor: 'rgba(56,189,248,0.1)', borderColor: '#38bdf8' }
                }}
            >
                View Architecture
            </Button>
        </CardContent>
    </Card>
);

const SectionHeading = ({ children }) => (
    <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, letterSpacing: -0.5, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box component="span" sx={{ width: 8, height: 32, bgcolor: '#38bdf8', borderRadius: 1 }} />
        {children}
    </Typography>
);

export default function Architecture() {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', color: '#f8fafc', pb: 10 }}>
            <Seo title="AI Systems Architecture | Vishnu Vardhan" description="Production-grade AI agents, RAG pipelines, and orchestration systems." />

            {/* Hero Section */}
            <Box sx={{ position: 'relative', pt: { xs: 10, md: 15 }, pb: { xs: 8, md: 12 }, borderBottom: '1px solid #1e293b', overflow: 'hidden' }}>
                <AnimatedBackground />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack spacing={3} maxWidth="800px">
                        <Typography variant="overline" sx={{ color: '#38bdf8', fontWeight: 800, fontSize: '1rem', letterSpacing: 2 }}>
                            Engineering Portfolio
                        </Typography>
                        <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: -1.5, fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1 }}>
                            AI Systems <br />
                            <Box component="span" sx={{ color: '#34d399' }}>Architecture</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#cbd5e1', fontWeight: 400, lineHeight: 1.6, pt: 2 }}>
                            Production-grade AI agents and orchestration layers engineered for reliability, scale, and real-world deployment.
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            {/* Philosophy Section */}
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <SectionHeading>Engineering Philosophy</SectionHeading>
                <Typography variant="body1" sx={{ color: '#94a3b8', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '900px', mb: 2 }}>
                    I design AI systems as structured execution pipelines — separating reasoning from action, enforcing validation between LLM outputs and backend tools, and instrumenting every layer for observability.
                </Typography>
                <Typography variant="h6" sx={{ color: '#34d399', fontWeight: 700, mb: 8 }}>
                    Scalable. Deterministic. Production-safe.
                </Typography>
            </Container>

            {/* Architecture Grid Section */}
            <Container maxWidth="lg" sx={{ mb: 10 }}>
                <SectionHeading>Deployed Systems</SectionHeading>
                <Grid container spacing={4}>
                    {architectureConfig.map((sys) => (
                        <Grid key={sys.id} item xs={12} md={4}>
                            <ArchitectureCard system={sys} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Principles Section */}
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#1e293b', p: { xs: 4, md: 6 }, borderRadius: 4, border: '1px solid #334155' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#f8fafc' }}>
                        Production Engineering Principles
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: 'Stateless Agents', desc: 'Reasoning nodes must scale horizontally without relying on local memory.' },
                            { title: 'Defensive Execution', desc: 'LLM outputs are untrusted inputs. Strict Pydantic parsing and validation layers are non-negotiable.' },
                            { title: 'Asynchronous Tooling', desc: 'API calls and database queries must run asynchronously to prevent blocking the orchestration thread.' },
                            { title: 'Comprehensive Tracing', desc: 'Token usage, latency, and reasoning paths must be fully observable via Langsmith/Datadog.' }
                        ].map((principle, idx) => (
                            <Grid item xs={12} sm={6} key={idx}>
                                <Box sx={{ borderLeft: '3px solid #34d399', pl: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#f8fafc', mb: 1 }}>{principle.title}</Typography>
                                    <Typography variant="body2" sx={{ color: '#cbd5e1' }}>{principle.desc}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
}
