"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Mission = ({ title, description }) => {
  const theme = useTheme();


  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.brand.tan}`
      }}
    >
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin={"0 auto"}
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box
          component={"a"}
          display={"block"}
          width={1}
          height={1}
          sx={{
            textDecoration: "none",
            transition: "all .2s ease-in-out",
            "&:hover": {
              transform: `translateY(-${theme.spacing(1 / 2)})`
            }
          }}
        >
          <Box
            component={Card}
            width={1}
            height={1}
            boxShadow={4}
            display={"flex"}
            flexDirection={{ xs: "column", md: "row-reverse" }}
            sx={{ backgroundImage: "none" }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50%" },
                position: "relative"
              }}
            >
              <Box
                component={"img"}
                loading="lazy"
                height={1}
                width={1}
                src="/seedling.jpg"
                alt="..."
                sx={{
                  objectFit: "cover",
                  filter:
                    theme.palette.mode === "dark" ? "brightness(0.7)" : "none"
                }}
              />
              <Box
                component={"svg"}
                viewBox="0 0 112 690"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  top: "-50%",
                  left: 0,
                  right: 0,
                  color: `${theme.palette.brand.green}`,
                  transform: "scale(2)",
                  height: 1,
                  width: "auto",
                  transformOrigin: "top center",
                  display: { xs: "none", md: "block" }
                }}
              >
                <path
                  d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                  fill="currentColor"
                />
              </Box>
            </Box>
            <CardContent
              sx={{
                position: "relative",
                width: { xs: 1, md: "50%" },
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: `${theme.palette.brand.green}`
              }}
            >
              <Box>
                <Typography
                  color={theme.palette.brand.beige}
                  variant={"h3"}
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography variant="h6" color="brand.beige">
                  {description}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
