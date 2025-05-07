/** @jsxImportSource @emotion/react */

import footerSocialLinksItems from "./footerSocialLinksItems";
import { footerSocialLinksListStyle } from "./styles";

const FooterSocialLinks = () => {
  return (
    <ul css={footerSocialLinksListStyle}>
      {footerSocialLinksItems.map(({ href, icon }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialLinks;

