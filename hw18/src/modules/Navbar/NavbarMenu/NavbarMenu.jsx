/** @jsxImportSource @emotion/react */
import { NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";

import navbarMenuItems from "./navbarMenuItems";
import { navbarMenuStyle, navbarMenuLinkStyle } from "./styles";

const NavbarMenu = () => {
  const theme = useTheme();

  return (
    <nav>
      <ul css={navbarMenuStyle}>
        {navbarMenuItems.map(({ href, text }) => (
          <li key={href}>
            <NavLink to={href} css={navbarMenuLinkStyle(theme.colors.lightDark)}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMenu;

