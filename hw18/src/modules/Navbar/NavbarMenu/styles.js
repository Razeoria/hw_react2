import { css } from "@emotion/react";

export const navbarMenuStyle = css`
    display: flex;
    gap: 56px;
    align-items: center;
    padding-left: 0;
    list-style: none;
`;

export const navbarMenuLinkStyle = (color) => css`
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    color: ${color};
    transition: color 0.2s ease;

    &.active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
    }

    &:hover {
    color: #e0e0e0;
    }
`;
