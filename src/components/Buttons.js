import styled from 'styled-components';
import { typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    s: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
        border-radius: 2px;
    `,
    l: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `,
    warning: () => `
        background-color: ${props => props.theme.status.warningColor};
        border-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColor};

        &:hover {
            background-color: ${props => props.theme.status.warningColorHover};
            border: 2px solid transparent;
            color: ${props => props.theme.textColor};
        }

        &:focus {
            outline: 3px solid ${props => props.theme.status.warningColorHover};
            outline-offset: 2px;
            color: ${props => props.theme.textColor};
        }

        &:active {
            background-color: ${props => props.theme.status.warningColorActive};
            border-color: ${props => props.theme.status.warningColor};
        }
    `,
    primaryButtonWarning: () => `
        background-color: ${props => props.theme.status.warningColor};
        color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
        border: 2px solid ${props => props.theme.status.warningColor};
    `,
    error: () => `
            background: ${props => props.theme.status.errorColor};
            border-color: ${props => props.theme.status.errorColor};
            color: ${props => props.theme.textColorInverted};

            &:hover {
                background-color: ${props => props.theme.status.errorColorHover};
                border: 2px solid transparent;
                color: ${props => props.theme.textColorInverted};
            }
            
            &:focus {
                outline: 3px solid ${props => props.theme.status.errorColorHover};
                outline-offset: 2px;
            }

            &:active {
                background-color: ${props => props.theme.status.errorColorActive};
                border-color: ${props => props.theme.status.errorColor};
            }
    `,
    primaryButtonError: () => `
        background-color: ${props => props.theme.status.errorColor};
        color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonError: () => `
        border: 2px solid ${props => props.theme.status.warningColor};
    `,
    success: () => `
        background: ${props => props.theme.status.successColor};
        border-color: ${props => props.theme.status.successColor};
        color: ${props => props.theme.textColorInverted};

        &:hover {
            background-color: ${props => props.theme.status.successColorHover};
            border: 2px solid transparent;
            color: ${props => props.theme.textColorInverted};
        }

        &:focus {
            outline: 3px solid ${props => props.theme.status.successColorHover};
            outline-offset: 2px;
        }

        &:active {
            background-color: ${props => props.theme.status.successColorActive};
            border-color: ${props => props.theme.status.successColor};
        }
`,
    primaryButtonSuccess: () => `
            background-color: ${props => props.theme.status.successColor};
            color: ${props => props.theme.textColorInverted};
    `,
    secondaryButtonSuccess: () => `
            border: 2px solid ${props => props.theme.status.successColor};
    `
}

const Button = styled.button`
    padding: 8px 16px;
    font-size: ${typeScale.paragraph};
    border-radius: 3px;
    font-family: sans-serif;
    border: 2px solid ${props => props.theme.primaryColor};
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus {
        outline: 3px solid ${props => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props => props.theme.primaryActiveColor};
        border-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:disabled {
        background-color: ${props => props.theme.disabled};
        border-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        opacity: 0.6;
        cursor: not-allowed;
    }
`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    color: white;

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background-color: transparent;
    color: ${props => props.theme.primaryColor};

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background-color: transparent;
    color: ${props => props.theme.primaryColor};
    border-color: transparent;

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
