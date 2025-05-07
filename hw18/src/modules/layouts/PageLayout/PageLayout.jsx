/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const pageLayoutStyle = css`
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100dvh;
    background-color: #fefefe;
`;

const PageLayout = ({ children }) => {
    return <section css={pageLayoutStyle}>{children}</section>;
};

export default PageLayout;
