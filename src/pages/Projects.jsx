import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Search as SearchIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import projectConfig from '../assets/configs/projectConfig';
import Seo from '../components/Seo';
import { withUtm } from '../utils/withUtm';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    seoTitle: 'Projects | Vishnu Vardhan',
    seoDesc: 'Open-source libraries, systems, and real-world projects by Vishnu Vardhan.',
    overline: 'Selected Work',
    title: 'Projects',
    desc:
      'A curated collection spanning production-grade libraries, data systems, and this website. Filter, search, and explore.',
    searchPlaceholder: 'Search projects',
    sortRecent: 'Recent',
    sortAZ: 'A → Z',
    ctaView: 'View',
  },
  es: {
    seoTitle: 'Proyectos | Vishnu Vardhan',
    seoDesc: 'Librerías open-source, sistemas y proyectos reales de Vishnu Vardhan.',
    overline: 'Trabajo destacado',
    title: 'Proyectos',
    desc:
      'Una colección curada que abarca librerías, modelos de ML y este sitio web. Filtra, busca y explora.',
    searchPlaceholder: 'Buscar proyectos',
    sortRecent: 'Recientes',
    sortAZ: 'A → Z',
    ctaView: 'Ver',
  },
};

const LinkButton = ({ link }) => (
  <Tooltip title={link.name} placement="top">
    <IconButton
      size="small"
      component="a"
      href={withUtm(link.url, 'projects_page')}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      {link.icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>
          {link.icon}
        </Box>
      ) : (
        <OpenInNewIcon fontSize="inherit" />
      )}
    </IconButton>
  </Tooltip>
);

const ProjectCard = ({ project, lang = 'en' }) => {
  const desc = project.description_i18n?.[lang] || project.description_i18n?.en || '';

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1e293b', color: '#f8fafc', borderRadius: 4, border: '1px solid #334155', boxShadow: '0 6px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px rgba(0,0,0,0.35)' } }}>
      {/* Image placeholder 16:9 to prevent layout shift */}
      <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(1.05) contrast(1.05)',
            borderBottom: '1px solid #334155'
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: -0.2, color: '#38bdf8' }}>
          {project.title}
        </Typography>
        {project.tags && project.tags.length > 0 && (
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
            {project.tags.map((t) => (
              <Chip key={t} size="small" label={t} sx={{ fontWeight: 600, fontSize: '0.75rem', bgcolor: '#0f172a', color: '#94a3b8', border: 'none' }} />
            ))}
          </Stack>
        )}
        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>
          {desc}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          {project.links?.map((l) => (
            <LinkButton key={l.name} link={l} />
          ))}
        </Stack>
        <Button
          size="small"
          variant="contained"
          sx={{ bgcolor: '#38bdf8', color: '#0f172a', fontWeight: 700, '&:hover': { bgcolor: '#0284c7' } }}
          href={withUtm(project.links?.[0]?.url || '#', 'projects_page')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {UI[lang].ctaView}
        </Button>
      </CardActions>
    </Card>
  );
};

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent');
  const [lang] = useLang();
  const t = UI[lang];

  const projects = useMemo(() => {
    const filtered = projectConfig.filter((p) => {
      if (category === 'All') return true;
      return p.tags && p.tags.includes(category);
    });

    const q = query.trim().toLowerCase();
    const searched = q
      ? filtered.filter(
        (p) =>
          (p.title || '').toLowerCase().includes(q) ||
          (p.description_i18n?.en || '').toLowerCase().includes(q) ||
          (p.description_i18n?.es || '').toLowerCase().includes(q) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      )
      : filtered;

    return [...searched].sort((a, b) => {
      if (sort === 'az') return (a.title || '').localeCompare(b.title || '');
      return 0; // 'recent' keeps config order
    });
  }, [category, query, sort, lang]);

  const categoryChips = useMemo(() => {
    const labels = new Set(['All']); // keep sentinel value; display text stays as-is
    projectConfig.forEach((p) => {
      if (p.tags) {
        p.tags.forEach((t) => labels.add(t));
      }
    });
    return Array.from(labels);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', color: '#f8fafc' }}>
      <Seo title={t.seoTitle} description={t.seoDesc} />

      {/* Header */}
      <Box
        sx={{
          background: '#0f172a',
          borderBottom: '1px solid',
          borderColor: '#1e293b',
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: '#38bdf8', fontWeight: 800 }}>
              {t.overline}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -0.8, color: '#f8fafc' }}>
              {t.title}
            </Typography>
            <Typography sx={{ color: '#cbd5e1', maxWidth: 720 }}>
              {t.desc}
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ xs: 'stretch', md: 'center' }}
            >
              {/* Category chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {categoryChips.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    onClick={() => setCategory(c)}
                    sx={{
                      borderRadius: 10,
                      fontWeight: 600,
                      bgcolor: c === category ? '#38bdf8' : '#1e293b',
                      color: c === category ? '#0f172a' : '#cbd5e1',
                      border: '1px solid',
                      borderColor: c === category ? '#38bdf8' : '#334155',
                      '&:hover': {
                        bgcolor: c === category ? '#0284c7' : '#334155',
                      }
                    }}
                  />
                ))}
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              {/* Search + sort */}
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  size="small"
                  placeholder={t.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  sx={{
                    minWidth: 220,
                    '& .MuiOutlinedInput-root': {
                      color: '#f8fafc',
                      bgcolor: '#1e293b',
                      '& fieldset': { borderColor: '#334155' },
                      '&:hover fieldset': { borderColor: '#38bdf8' },
                      '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
                    },
                    '& .MuiSvgIcon-root': { color: '#94a3b8' }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Divider flexItem orientation="vertical" sx={{ borderColor: '#334155' }} />
                <Select
                  size="small"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  sx={{
                    color: '#f8fafc',
                    bgcolor: '#1e293b',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: '#334155' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#38bdf8' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#38bdf8' },
                    '.MuiSvgIcon-root': { color: '#94a3b8' }
                  }}
                >
                  <MenuItem value="recent">{t.sortRecent}</MenuItem>
                  <MenuItem value="az">{t.sortAZ}</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, bgcolor: '#0f172a' }}>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.id} item xs={12} sm={6} md={4}>
              <ProjectCard project={p} lang={lang} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}



