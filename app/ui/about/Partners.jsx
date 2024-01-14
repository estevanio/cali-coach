/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const content = {
  title: "Our Partners",
  items: [
    {
      label: "One Tree Planted",
      link: "https://onetreeplanted.org/",
      description:
        "We are proud to collaborate with One Tree Planted for our tree-planting initiatives."
    },
    {
      label: "Southside Towing",
      link: "http://southsidetowing.info/",
      description:
        "Southside Towing graciously provides logistical support, ready to pick up your donation at a moments notice."
    }
  ]
};

const Partners = () => {
  const { title, items } = content;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column"}>
        {items.map((item, index) => (
          <Grid item container alignItems={"center"} xs={12} md={6} key={index}>
            <Box>
              <Typography variant={"h4"} gutterBottom sx={{ fontWeight: 700 }}>
                {item.label}
              </Typography>
              <Typography component={"p"}>{`${item.description}`}</Typography>
            </Box>
            <Box marginTop={2} display={"flex"} justifyContent={"flex-end"}>
              <Button
                endIcon={
                  <Box
                    component={"svg"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Partners;
