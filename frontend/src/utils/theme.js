import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: { main: "rgba(81, 84, 206, 1)" },
    error: { main: "#d32f2f" },
  },
  background: "#F2F3F7",
  text: { primary: "#7E7E7E" },
  gradient: "linear-gradient(138.72deg, #5154CE -0.66%, #7B5BBC 86.47%)",
  heading2: "#333333",
  heading1: "#000000",

  typography: {
    h2: {
      fontWeight: "700",
      fontSize: "39px",
    },
    h3: {
      fontWeight: "700",
      fontSize: "30px!important",
      "@media (max-width:600px)": {
        fontSize: "25px!important",
      },
    },
    h6: {
      fontWeight: "500",
      fontSize: "10px",
    },
    textField: {
      height: "50px!important",
    },
  },
  MuiCard: {
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  components: {
    // Name of the component

    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       "@media (max-width:400px)": {
    //         padding: "0!important",
    //       },
    //     },
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            fontSize: "13px",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "40px",
          backgroundColor: "none!important",
        },
        // The props to change the default for.
        // No more ripple, on the whole application 💣!
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
          borderRadius: "10px!important",
        },
        // The props to change the default for.
        // No more ripple, on the whole application 💣!
      },
    },
  },
});

// [theme.breakpoints.down("xs")]: {
//   overrides: {
//     MuiTypography: {
//       root: {
//         fontSize: "12px!important",
//       },
//     },
//   },
// },
