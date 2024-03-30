import styled from "styled-components";

interface GradientTextProps {
    gradientStart: string;
    gradientEnd: string;
}

export const GradientText = styled.div<GradientTextProps>`
color: transparent;
background:  linear-gradient(to bottom, ${props => props.gradientStart}, ${props => props.gradientEnd});
-webkit-background-clip: text;
background-clip: text;
transition: background-color 0.5s ease;
`