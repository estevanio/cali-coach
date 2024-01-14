'use client';

import { Box } from '@mui/material';
import { getTheme } from '@/app/lib/theme';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const AppFooter = () => {
  const theme = getTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: `${theme.palette.brand.green}`,
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hours
            </Typography>
            {hours.map((item) => (
              <Typography variant="body2" color="text.secondary" key={item}>
                {item}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>3
        </Grid>*/}
        <Box>
          <Typography variant="body1" sx={{ color: '#FFFCEB' }} align="center">
            {'Copyright © '}
            Cars2Trees {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
