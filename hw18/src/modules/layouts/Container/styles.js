import { css } from "@emotion/react";

export const containerStyle = css`
    width: 100%;
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 640px) {
    max-width: 560px;
    }

    @media (min-width: 920px) {
    max-width: 880px;
    }

    @media (min-width: 1240px) {
    max-width: 1240px;
    }

    @media (min-width: 1600px) {
    max-width: 1440px;
    }
`;
