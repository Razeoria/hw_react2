import { css } from "@emotion/react";

export const footerContactsTitleStyle = css`
    font-size: 20px;
    color: #fefefe;
    margin-bottom: 32px;
    letter-spacing: 0.5px;
`;

export const footerContactsItemStyle = css`
    margin-bottom: 10px;
    list-style-type: none;
`;

export const footerContactsLinkStyle = (color) => css`
    text-decoration: none;
    font-size: 16px;
    color: ${color};
    transition: color 0.3s ease;

    &:hover {
        color: #fefefe;
        text-decoration: underline;
    }
`;

