import React from 'react';
import { Paper, Typography, Box, Stack, Chip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { useLang } from '../../utils/i18n';

/**
 * Clean, theme‑matched timeline (no heavy gradients), bilingual date tweak
 * Props
 *  - items: Array<{ id, date, icon, title, company, description, tags?: string[] }>
 *  - position: 'alternate' | 'left' | 'right'
 */
const Timeline = ({ items = [] }) => {
  const [lang] = useLang();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const position = isMobile ? 'right' : 'alternate';

  const localizeDate = (d) => {
    if (typeof d !== 'string') return d;
    return lang === 'es' ? d.replace(/Present/i, 'Actualidad') : d;
  };

  return (
    <MuiTimeline position={position} sx={{
      '& .MuiTimelineItem-root:before': { flex: 0, padding: 0 }, // remove default gutter line
    }}>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags = [] } = item || {};

        return (
          <TimelineItem key={id}>
            {/* Date pill (Visible on desktop opposite content) */}
            <TimelineOppositeContent
              sx={{
                my: 'auto',
                display: { xs: 'none', md: 'block' },
                minWidth: { md: 140 },
              }}
            >
              <Chip
                label={localizeDate(date)}
                size="small"
                sx={{
                  bgcolor: '#0f172a',
                  color: '#34d399',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  px: 1
                }}
              />
            </TimelineOppositeContent>

            {/* Axis + dot */}
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={(th) => ({
                  borderColor: '#38bdf8',
                  backgroundColor: '#1e293b',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,.15)'
                })}
              >
                <Box sx={(th) => ({ fontSize: 22, color: '#38bdf8' })}>{icon}</Box>
              </TimelineDot>
              <TimelineConnector sx={(th) => ({ backgroundColor: '#1e293b', width: 2 })} />
            </TimelineSeparator>

            {/* Card content */}
            <TimelineContent sx={{ py: 1, px: 2 }}>
              <Paper
                elevation={0}
                sx={(th) => ({
                  p: 3,
                  borderRadius: 4,
                  border: `none`,
                  backgroundColor: '#1e293b',
                  color: '#e2e8f0',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.25)',
                  },
                })}
              >
                <Stack spacing={1}>
                  {/* Unified Date Pill inside the card (Visible only on Mobile) */}
                  <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 1 }}>
                    <Chip
                      label={localizeDate(date)}
                      size="small"
                      sx={{
                        bgcolor: '#0f172a',
                        color: '#34d399',
                        border: '1px solid rgba(52, 211, 153, 0.3)',
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        px: 1
                      }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.2, color: '#38bdf8' }}>
                    {title}
                  </Typography>
                  {company && (
                    <Typography variant="subtitle2" sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>
                      {company}
                    </Typography>
                  )}
                  {description && (
                    <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.6 }}>
                      {description}
                    </Typography>
                  )}

                  {/* Tags: compact, high‑contrast but subtle */}
                  {Array.isArray(tags) && tags.length > 0 && (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 1 }}>
                      {tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          sx={(th) => ({
                            bgcolor: '#0f172a',
                            border: `none`,
                            color: '#94a3b8',
                            fontWeight: 700,
                          })}
                        />
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;



