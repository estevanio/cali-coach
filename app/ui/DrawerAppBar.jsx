"use client";

import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { getTheme } from '@/app/lib/theme';


import Link from 'next/link';



export  function DrawerAppBar({ children, ...props }) {
  const drawerWidth = 240;
const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" }
];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const isMd = useMediaQuery(theme.breakpoints.up("md"), {
  //   defaultMatches: true,
  // });
  const themeMode = "light";
  const theme = getTheme("light");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Cars2Trees
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: `${theme.palette.brand.seal}`,
          color: `${theme.palette.brand.beige}`
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: "flex"
            }}
          >
            <img
              height="60px"
              src="images/logo.svg"
              style={{ margin: "10px" }}
            ></img>
            <Typography
              variant="h6"
              component="a"
              sx={{
                height: "100%",
                display: { xs: "none", sm: "block" },
                paddingX: "15px"
              }}
            >
              Cars2Trees
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" }
            }}
          >
            {navItems.map((item) => (
              <Link href={item.url} key={item.name}>
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        <ThemeProvider theme={getTheme(themeMode)}>
          <Paper elevation={0}>
            {children}
          </Paper>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
