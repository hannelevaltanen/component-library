import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal, PrimaryButton, SecondaryButton, TertiaryButton } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            
            <SecondaryButton onClick={() => setUseDarkTheme(true)}>
                Dark Theme
            </SecondaryButton>

            <SecondaryButton onClick={() => setUseDarkTheme(false)}>
                Default Theme
            </SecondaryButton>

            <SecondaryButton onClick={() => setShowModal(!showModal)}>
                Toggle Modal
            </SecondaryButton>

            <div style={{
                background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <PrimaryButton modifiers={["s"]}>Hello World</PrimaryButton>
                <SecondaryButton modifiers={["l"]}>Hello World</SecondaryButton>
                <TertiaryButton>Hello World</TertiaryButton>
                <PrimaryButton disabled>Hello World</PrimaryButton>

                <PrimaryButton modifiers={["warning"]}>Warning</PrimaryButton>
                <PrimaryButton modifiers={["error"]}>Error</PrimaryButton>
                <PrimaryButton modifiers={["success"]}>Success</PrimaryButton>

                <SignUpModal showModal={showModal} setShowModal={setShowModal} />

                <GlobalStyle />
            </div>

        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));
