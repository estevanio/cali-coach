/* eslint-disable react/no-unescaped-entities */

'use client';

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AboutSpecialtySection = ({ content }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const { header, items } = content;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          {header}
        </Typography>
      </Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column"}>
        {items.map((item) => (
          <Grid item key={item.name}container justifyContent="center" xs={12} md={6}>
            <Box>
              <Typography variant={"h4"} gutterBottom sx={{ fontWeight: 700 }}>
                {item.name}
              </Typography>
              <Typography component={"p"} color={"text.secondary"}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutSpecialtySection;
