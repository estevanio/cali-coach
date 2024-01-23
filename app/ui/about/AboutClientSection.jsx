'use client';

import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";

const mock = [
  {
    name: "OCTA",
    title: "Orange County Transportation Authority",
    avatar: "/assets/OCTA-logo.jpg",
  },
  {
    name: "CHP",
    title: "Senior Frontend Developer",
    avatar: "/assets/CHP-logo.jpg",
  },
];

const AboutClientSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          Our Clients
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box
              width={1}
              height={1}
              component={Card}
              boxShadow={0}
              variant={"outlined"}
              bgcolor={"alternate.main"}
            >
              <CardContent sx={{ padding: 3 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar sx={{ marginRight: 3 }}>
                    <Avatar
                      src={item.avatar}
                      variant={"rounded"}
                      sx={{ width: 100, height: 100, borderRadius: 2 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{ variant: "h7", fontWeight: 700 }}
                    secondaryTypographyProps={{ variant: "subtitle1" }}
                  />
                </ListItem>
              </CardContent>
              <CardActions>
                <Link href="#" underline="hover">
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutClientSection;
