/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ContactJoinSection = ({ content }) => {
  const { header, subHeader } = content;
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box>
          <Typography fontWeight={700} variant={"h5"} gutterBottom>
            {header}
          </Typography>
          <Typography>{subHeader}</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button variant="contained" color="primary" size="large">
            Download
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactJoinSection;
