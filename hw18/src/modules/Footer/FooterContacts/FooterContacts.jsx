/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";

import footerContactsItems from "./footerContactsItems";

import {
  footerContactsTitleStyle,
  footerContactsItemStyle,
  footerContactsLinkStyle,
} from "./styles";

const FooterContacts = () => {
  const theme = useTheme();

  return (
    <section>
      <h3 css={footerContactsTitleStyle}>Наши контакты</h3>
      <ul>
        {footerContactsItems.map(({ href, text }) => (
          <li key={text} css={footerContactsItemStyle}>
            <a href={href} css={footerContactsLinkStyle(theme.colors.lightDark)}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterContacts;

