import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import NavBarItems from './NavBarItems';
import LanguageSwitch from './LanguageSwitch';
import menuConfig from '../../assets/configs/menuConfig';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', zIndex: 1400, backdropFilter: 'blur(6px)' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%', px: { xs: 2, sm: 3 } }}>
          {/* Mobile Menu Icon (Hamburger) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  bgcolor: '#1e293b',
                  color: '#f8fafc',
                  border: '1px solid #334155',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  minWidth: '200px'
                }
              }}
            >
              {menuConfig.sidebarData.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={item.path}
                  sx={{
                    bgcolor: location.pathname === item.path ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                    color: location.pathname === item.path ? '#38bdf8' : '#f8fafc',
                    '&:hover': {
                      bgcolor: 'rgba(56, 189, 248, 0.2)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ fontSize: '1.25rem', display: 'flex' }}>{item.icon}</Box>
                    <Typography textAlign="center" fontWeight={location.pathname === item.path ? 800 : 600}>
                      {item.title}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <NavBarItems />
          </Box>

          {/* Right-aligned actions */}
          <Box display="flex" alignItems="center">
            <LanguageSwitch size="small" />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
    </>
  );
};

export default NavBar;


