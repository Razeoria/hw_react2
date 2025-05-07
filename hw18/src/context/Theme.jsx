import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        lightDark: "rgba(255, 255, 255, 0.6)",
        darkLight: "rgba(0, 0, 0, 0.6)",
        lightBg: "#f4f4f4",
        inputBorder: "#bbbbbb",
        inputBorderFocus: "#222222"
    }
};

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
