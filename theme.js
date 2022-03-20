import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#58B62C",
      200: "#5D8D10",
      300: "#ECF9E5",
      400: "#1C2815",
      500: "#097E46",
      600: "#293C15",
    },
  },
  fonts: {
    heading: "Akira, sans-serif",
    body: "Roboto, sans-serif",
  },
});
export default theme;
