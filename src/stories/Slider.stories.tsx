import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import styled from "styled-components";
import Slider, { SliderProps } from "../components/Slider";
import logo from "../logo.svg";
import { Typography } from "@material-ui/core";

export default {
  title: "Example/Slider",
  component: Slider,
  argTypes: {
    // foo is the property we want to remove from the UI
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Background = styled.div`
  background-color: ${(props) => (props.color ? "#000" : "#fff")};
  color: ${(props) => (props.color ? "#fff" : "#000")};
  height: 100px;
`;

const Template: Story<SliderProps> = ({
  darkMode,
  duration,
  children = "Hello",
  ...restArgs
}) => {
  return (
    <Background color={darkMode}>
      <Slider darkMode={darkMode} duration={duration} {...restArgs}>
        {children}
      </Slider>
    </Background>
  );
};

export const Default = Template.bind({});

export const Span = Template.bind({});
Span.args = {
  children: <span>I am a span</span>,
};
export const Image = Template.bind({});
Image.args = {
  children: <img src={logo} style={{ height: "40vmin" }} alt="logo" />,
};
export const TypographyExample = Template.bind({});
TypographyExample.args = {
  children: (
    <div>
      <Typography variant="h2">This is material-ui's typography</Typography>
    </div>
  ),
};
