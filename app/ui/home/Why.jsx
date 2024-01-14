import * as React from "react";
import {} from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForestIcon from "@mui/icons-material/Forest";

const ReasonBlock = ({ item }) => {
  const theme = useTheme();

  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ paddingX: "10px" }}>
      <Typography
        variant={"h5"}
        align="center"
        sx={{ fontWeight: 700, color: theme.palette.brand.seal }}
      >
        <ForestIcon sx={{ color: theme.palette.brand.green }} />
        {item.label}
      </Typography>
      <Typography align="center" variant={"body"} color="brand.seal">
        {item.description}
      </Typography>
      <br />
    </Box>
  );
};

const Why = ({ title, subtitle, items }) => {
  const theme = useTheme();

  let halfLength = Math.floor(items.length / 2);
  let leftItems = items.slice(0, halfLength);
  let rightItems = items.slice(halfLength, items.length);

  return (
    <Box
      paddingY={{ xs: 4, sm: 6, md: 8 }}
      sx={{
        backgroundColor: `${theme.palette.brand.beige}`,
        flexGrow: 1
      }}
    >
      <Box
        margin="auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
        maxWidth="lg"
      >
        <Box marginBottom={10}>
          <Typography
            gutterBottom
            align={"center"}
            variant={"h3"}
            fontWeight={700}
            sx={{
              color: `${theme.palette.brand.seal}`
            }}
          >
            {title}
          </Typography>
          <Typography
            color={"text.primary"}
            align={"center"}
            variant={"h5"}
            sx={{
              color: `${theme.palette.brand.brown}`
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        {/* Outer grid */}
        <Grid
          container
          directiom="row"
          columnSpacing={2}
          rowSpacing={5}
          margin="auto"
          sx={{
            color: `${theme.palette.brand.seal}`
          }}
        >
          {/* First column */}
          <Grid
            item
            md={4}
            xs={12}

          >
            <Grid container direction="column">
              {leftItems.map((item) => (
                <ReasonBlock key={item.label} item={item} />
              ))}
            </Grid>
          </Grid>
          {/* MIDDLE COLUMN --IMAGE  */}
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              minHeight: "250px",
              background: "url(/images/trees.jpg) no-repeat ",
              backgroundSize: "cover",
              borderRadius: "15px"
            }}
          ></Grid>
          {/* Right column */}
          <Grid
            item
            md={4}
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "15px"
            }}
          >
            <Grid container direction="column">
              {rightItems.map((item) => (
                <ReasonBlock key={item.label} item={item} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Why;
