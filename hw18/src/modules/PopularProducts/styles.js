import { css } from "@emotion/react";

export const popularProductsStyle = css`
    margin-bottom: 60px;
    padding-top: 20px;
`;

export const productListStyle = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 32px;
    justify-content: center;
`;
