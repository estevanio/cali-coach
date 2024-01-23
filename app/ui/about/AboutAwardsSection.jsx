'use client';

import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const mock = [
  {
    title: "Google Drive",
    subtitle:
      "A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.",
    icon: "https://assets.maccarianagency.com/svg/logos/google-drive.svg",
  },
  {
    title: "Google Ad Manager",
    subtitle:
      "A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.",
    icon: "https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg",
  },
];

const Awards = () => {
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
          Awards
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Box
              component={Card}
              width={1}
              height={1}
              data-aos={"fade-up"}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              flexDirection={"column"}
              display={"flex"}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  component={Avatar}
                  width={{ xs: 60, md: 80 }}
                  height={{ xs: 60, md: 80 }}
                  marginBottom={2}
                  src={item.icon}
                />
                <Typography
                  variant={"h6"}
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awards;
