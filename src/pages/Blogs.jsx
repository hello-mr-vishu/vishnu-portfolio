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
import blogConfig from '../assets/configs/blogConfig';
import Seo from '../components/Seo';
import { withUtm } from '../utils/withUtm';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    seoTitle: 'Writing & Insights — Vishnu Vardhan',
    seoDesc: 'Notes, articles, and insights on data science, ML, and entrepreneurship.',
    overline: 'Blog',
    title: 'Writing & Insights',
    desc: 'Deep dives and quick notes on ML, data systems, and building products.',
    searchPlaceholder: 'Search posts',
    sortRecent: 'Most Recent',
    sortAZ: 'Title (A → Z)',
    ctaRead: 'Read',
    featured: 'Featured',
    stripQ: 'Looking to ship ML to production?',
    stripSee: 'See projects',
    stripTalk: "Let's talk",
    new: 'New',
    mins: (m) => `${m} min`,
  },
  es: {
    seoTitle: 'Escritura & Notas — Vishnu Vardhan',
    seoDesc: 'Notas, artículos e ideas sobre ciencia de datos, ML y emprendimiento.',
    overline: 'Blog',
    title: 'Artículos y notas',
    desc: 'Análisis profundos y notas rápidas sobre ML, sistemas de datos y creación de productos.',
    searchPlaceholder: 'Buscar artículos',
    sortRecent: 'Más recientes',
    sortAZ: 'Título (A → Z)',
    ctaRead: 'Leer',
    featured: 'Destacados',
    stripQ: '¿Buscas implementar ML en producción?',
    stripSee: 'Ver proyectos',
    stripTalk: 'Hablemos',
    new: 'Nuevo',
    mins: (m) => `${m} min`,
  },
};

// Social/link button (kept minimal)
const LinkButton = ({ link }) => (
  <Tooltip title={link.name} placement="top">
    <IconButton
      size="small"
      component="a"
      href={withUtm(link.url, 'blogs_page')}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      {link.icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>{link.icon}</Box>
      ) : (
        <OpenInNewIcon fontSize="inherit" />
      )}
    </IconButton>
  </Tooltip>
);


const BlogCard = ({ item, lang = 'en', ui = UI.en }) => {
  const desc = item.description_i18n?.[lang] || item.description_i18n?.en || '';
  const categoryLabel =
    typeof item.category === 'string' ? item.category : item.category?.[lang] || item.category?.en;

  const isNew = item.isNew === true || (item.date && Date.now() - new Date(item.date).getTime() < 1000 * 60 * 60 * 24 * 60); // < 60 days

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1e293b', color: '#f8fafc', borderRadius: 4, border: '1px solid #334155', boxShadow: '0 6px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 10px 28px rgba(0,0,0,0.35)' } }}>
      {item.image && (
        <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderBottom: '1px solid #334155' }}
          />
          {categoryLabel && (
            <Chip
              size="small"
              sx={{ bgcolor: '#38bdf8', color: '#0f172a', fontWeight: 800, position: 'absolute', top: 10, left: 10 }}
              label={categoryLabel}
            />
          )}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: -0.2, color: '#38bdf8' }}>
          {item.title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          {item.date && (
            <Typography variant="caption" sx={{ color: '#94a3b8' }}>
              {new Date(item.date).toLocaleDateString()}
            </Typography>
          )}
          {item.read_mins && (
            <Chip size="small" variant="outlined" label={ui.mins(item.read_mins)} sx={{ color: '#94a3b8', borderColor: '#334155' }} />
          )}
          {isNew && <Chip size="small" sx={{ bgcolor: '#38bdf8', color: '#0f172a', fontWeight: 700 }} label={ui.new} />}
        </Stack>
        <Typography variant="body2" sx={{ color: '#cbd5e1' }}>{desc}</Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          {item.links?.map((l) => (
            <LinkButton key={l.name} link={l} />
          ))}
        </Stack>
        {item.links?.[0]?.url && (
          <Button
            size="small"
            variant="contained"
            sx={{ bgcolor: '#38bdf8', color: '#0f172a', fontWeight: 700, '&:hover': { bgcolor: '#0284c7' } }}
            href={withUtm(item.links?.[0]?.url, 'blogs_page')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ui.ctaRead}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

// --------------- PAGE -----------------
export default function Blogs() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent');
  const [lang] = useLang();
  const t = UI[lang];

  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;
  const EMAIL = process.env.EMAIL || '';

  const categories = useMemo(() => {
    const set = new Set(['All']);
    blogConfig.forEach((it) => {
      if (it.category) {
        const label = typeof it.category === 'string' ? it.category : it.category?.[lang] || it.category?.['en'];
        if (label) set.add(label);
      }
    });
    return Array.from(set);
  }, [lang]);

  const items = useMemo(() => {
    const filtered = blogConfig.filter((it) => {
      const label = typeof it.category === 'string' ? it.category : it.category?.[lang] || it.category?.en;
      return category === 'All' ? true : label === category;
    });

    const q = query.trim().toLowerCase();
    const searched = q
      ? filtered.filter((it) =>
        (it.title || '').toLowerCase().includes(q) ||
        (it.description_i18n?.en || '').toLowerCase().includes(q) ||
        (it.description_i18n?.es || '').toLowerCase().includes(q)
      )
      : filtered;

    const sorted = [...searched].sort((a, b) => {
      if (sort === 'az') return (a.title || '').localeCompare(b.title || '');
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });

    return sorted;
  }, [category, query, sort, lang]);

  // --------- Featured row (pinned) ---------
  const featured = useMemo(() => {
    const pinned = items.filter((x) => x.pinned);
    if (pinned.length > 0) return pinned.slice(0, 3);
    // Fallback: show first 3 recent posts
    return items.slice(0, 3);
  }, [items]);

  const rest = useMemo(() => items.filter((x) => !featured.includes(x)), [items, featured]);
  const featuredMd = featured.length === 1 ? 12 : featured.length === 2 ? 6 : 4;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', color: '#f8fafc' }}>
      <Seo title={t.seoTitle} description={t.seoDesc} canonical={canonical} />

      {/* Header */}
      <Box
        sx={{
          background: '#0f172a',
          borderBottom: '1px solid',
          borderColor: '#1e293b',
          py: { xs: 5, md: 8 },
          mb: 0,
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

            {/* Controls */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
              {/* Category chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {categories.map((c) => (
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

      {/* Inline conversion CTA */}
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Box sx={(th) => ({
          p: 2.5,
          border: '1px solid',
          borderColor: '#334155',
          borderRadius: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          justifyContent: 'space-between',
          background: `linear-gradient(90deg, rgba(56, 189, 248, 0.1), transparent)` // secondary with alpha
        })}>
          <Typography sx={{ fontWeight: 700, color: '#e2e8f0' }}>
            {t.stripQ}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" sx={{ bgcolor: '#38bdf8', color: '#0f172a', fontWeight: 700, '&:hover': { bgcolor: '#0284c7' } }} href="/projects">
              {t.stripSee}
            </Button>
            <Button size="small" variant="outlined" sx={{ color: '#38bdf8', borderColor: '#38bdf8', '&:hover': { borderColor: '#38bdf8', bgcolor: 'rgba(56, 189, 248, 0.1)' } }} href={withUtm(EMAIL ? `mailto:${EMAIL}` : '#', 'blogs_inline_cta')}>
              {t.stripTalk}
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Featured row */}
      {featured.length > 0 && (
        <Container maxWidth="lg" sx={{ pt: 4 }}>
          <Typography variant="overline" sx={{ color: '#94a3b8' }}>{t.featured}</Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {featured.map((item) => (
              <Grid key={item.id} item xs={12} md={featuredMd}>
                <BlogCard item={item} lang={lang} ui={t} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      {/* Main grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {rest.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <BlogCard item={item} lang={lang} ui={t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


