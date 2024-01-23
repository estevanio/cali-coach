/* eslint-disable react/no-unescaped-entities */
'use client';

import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              California Coach
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Proudly serving Southern California Since 2000.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
            >
              Call Now
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box height={1} width={1} maxWidth={500}>
            <Box
              component={"img"}
              src={"assets/traffic.jpg"}
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
