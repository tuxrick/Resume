import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' }, 
    { text: 'Experience', path: '/experience' }, 
    { text: 'Education', path: '/education' }, 
    { text: 'Skills', path: '/skills' }
];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text}>
            <RouterLink to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
              <ListItemText primary={item.text} />
            </RouterLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{backgroundColor:"#5376B5"}}>
      <Toolbar>
        <IconButton
          color="#5376B5"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }} // Menú hamburguesa visible solo en pantallas pequeñas
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ricardo Hernández
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Tabs visibles en pantallas medianas y grandes */}
          {navItems.map((item) => (
            <RouterLink to={item.path} key={item.text} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">{item.text}</Button>
            </RouterLink>
          ))}
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
