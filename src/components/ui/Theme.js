import { createTheme } from '@mui/material/styles';

const evalBlue = "#0d6efd";
const evalBlue2 = "#0044ff"; // Blue 2
const evalBlue3 = "#006edd"; // Blue Figma
const evalBlue4 = "#0066ff"; // Blue light
const evalIndigo = "#6610f2";
const evalPurple = "#6f42c1";
const evalPink = "#d63384";
const evalRed = "#dc3545";
const evalOrange = "#fd7e14";
const evalOrange2 = "#ff4400";  // Orange2
const evalOrange3 = "#ffcc00";  // Orange3
const evalYellow = "#ffc107";
const evalGreen = "#198754";
const evalTeal = "#20c997";
const evalCyan = "#0dcaf0";
const evalGray = "#E7E7E7";

const theme = createTheme({
    palette: {
      common: {
        evalPrimary: `${evalBlue3}`,
        evalSecondary: `${evalCyan}`,
        evalRed: `${evalRed}`,
      },
      primary: {
        // light: will be calculated from palette.primary.main,
        main: `${evalBlue3}`,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: `${evalBlue4}`,
        main: `${evalCyan}`,
        // dark: will be calculated from palette.secondary.main,
        contrastText: `${evalOrange3}`,
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
        fontFamily: "Roboto",
        titulo: {
          //fontFamily: "Roboto",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "48px",
          letterSpacing: "0.15000000596046448px",
          textAlign: "left",
          color: `${evalBlue3}`,
        },
        subtitulo: {
          //fontFamily: "Roboto",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "48px",
          letterSpacing: "0.15000000596046448px",
          textAlign: "left",
          color: `${evalBlue3}`,
          paddingLeft: 2,
        },
    },
    panel: {
      curso: {
        width: "800px",
      }
    }
});

export default theme;