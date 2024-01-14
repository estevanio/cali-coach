import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const How = ({ title, subtitle, items }) => {
  const theme = useTheme();

  return (
    <Box
    sx={{
      backgroundColor: `${theme.palette.brand.mint}`

    }}
    >
      <Box
        width={1}
        margin={"0 auto"}
        paddingX={2}
        maxWidth="lg"
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            fontWeight={700}
            variant={"h3"}
            align={"center"}
            gutterBottom
            data-aos={"fade-up"}
            sx={{
              color: `${theme.palette.brand.beige}`
            }}
          >
            {title}
          </Typography>
          <Typography
            variant={"h5"}
            component={"p"}
            color={"brand.beige"}
            align={"center"}
            data-aos={"fade-up"}

          >
            {subtitle}
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {items.map((item, i) => (
            <Grid key={i} item xs={12} md={i != items.length - 1 ? 6 : 8}>
              <ListItem
                component="div"
                disableGutters
                sx={{
                  alignItems: "center",
                  padding: 0
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: theme.palette.brand.red, color:theme.palette.brand.beige }}>{i + 1}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{
                    variant: "h5",
                    gutterBottom: true,
                    sx: { fontWeight: 700 }
                  }}
                  secondaryTypographyProps={{
                    variant: "body",
                    gutterBottom: true,
                    sx: { fontWeight: 550, color: theme.palette.brand.beige }
                  }}
                  sx={{
                    margin: 0
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default How;
