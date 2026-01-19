import { createTheme } from "@mantine/core";

export const THEME = createTheme({
  components: {
    Button: {
      defaultProps: {
        c: "rgba(227, 227, 225, 1)",
      },
    },
  },
});

export const inputStyles = {
  input: {
    backgroundColor: "white",
    color: "black",
    fontSize: "0.65rem",
  },
};

