  // eslint-disable


  'use client';

  import { responsiveFontSizes } from "@mui/material";
  import { createTheme } from "@mui/material/styles";
  import shadows from "./shadows";

  export const  getTheme = () => responsiveFontSizes(
      createTheme({
        palette: {
          alternate: {
            main: "#f7faff",
            dark: "#edf1f7"
          },
          brand: {
            seal: "#01313C",
            tan: "#DFC7AE",
            brown: "#96361A",
            green: "#028379",
            red: "#F4765D",
            mint: "#5FC4A7",
            beige: "#FFFCEB"
          },
          cardShadow: "rgba(23, 70, 161, .11)",
          mode: "light",
          primary: {
            main: "#034efd",
            light: "#a0bded",
            dark: "#2f6ad9",
            contrastText: "#fff"
          },
          secondary: {
            light: "#ffb74d",
            main: "#f9b934",
            dark: "#FF9800",
            contrastText: "rgba(0, 0, 0, 0.87)"
          },
          text: {
            primary: "#1e2022",
            secondary: "#677788"
          },
          divider: "rgba(0, 0, 0, 0.12)",
          background: {
            paper: "#ffffff",
            default: "#ffffff",
          }
        },
        shadows: shadows("light"),
        typography: {
          fontFamily: '"Inter", sans-serif',
          button: {
            textTransform: "none",
            fontWeight: "medium",
          },
        },
        zIndex: {
          appBar: 1200,
          drawer: 1300,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontWeight: 400,
                borderRadius: 5,
                paddingTop: 10,
                paddingBottom: 10,
              },
              containedSecondary: { color: "white" },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: {
                borderRadius: 5,
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                borderRadius: 5,
              },
              input: {
                borderRadius: 5,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      })
    );

