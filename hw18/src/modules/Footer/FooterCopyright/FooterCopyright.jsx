/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import { footerCopyrightStyle } from "./styles";

const FooterCopyright = () => {
  const theme = useTheme();

  return (
    <footer>
      <p css={footerCopyrightStyle(theme.colors.lightDark)}>
        © 2024 Sneaker Store — все права защищены
      </p>
    </footer>
  );
};

export default FooterCopyright;

