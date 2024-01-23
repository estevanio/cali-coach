import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Container = ({ children, ...rest }) => (
  <Box
    maxWidth={{ sm: 600, md: 900 }}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4, md: 8 }}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
