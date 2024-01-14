import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";


const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 720, md: 1236 }}
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4, sm: 6, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

const Hero = ({ headline, message }) => {
  const theme = useTheme();

  return (
    <Box
      minHeight={350}
      height={"auto"}
      position={"relative"}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        background: "url(/images/forestroad.jpg) no-repeat center bottom",
        backgroundSize: "cover"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundImage: `linear-gradient(31deg, ${theme.palette.brand.seal} 0%, #000000 74%)`,
          opacity: "0.5",
          zIndex: 1
        }}
      />
      <Container position={"relative"} zIndex={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <Box>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                    color: "common.white"
                  }}
                >
                  {headline}
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  color="text.primary"
                  sx={{
                    fontWeight: 500,
                    color: "common.white"
                  }}
                >
                  {message}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
