/** @jsxImportSource @emotion/react */

import { containerStyle } from "./styles";

const Container = ({ children }) => {
    return (
    <main css={containerStyle}>
        {children}
    </main>
    );
};

export default Container;
