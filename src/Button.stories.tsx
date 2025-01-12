import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'outline', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    block: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

// Base template for creating button stories
const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => <Button {...args} />;

// Primary button
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

// Secondary button
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};

// Success button
export const Success = Template.bind({});
Success.args = {
  children: 'Success Button',
  variant: 'success',
  size: 'md',
};

// Danger button
export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
  size: 'md',
};

// Warning button
export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Button',
  variant: 'warning',
  size: 'md',
};

// Info button
export const Info = Template.bind({});
Info.args = {
  children: 'Info Button',
  variant: 'info',
  size: 'md',
};

// Outline button
// export const Outline = Template.bind({});
// Outline.args = {
//   children: 'Outline Button',
//   variant: 'outline',
//   size: 'md',
// };

// Link button
export const Link = Template.bind({});
Link.args = {
  children: 'Link Button',
  variant: 'link',
  size: 'sm',
};

// Loading button
export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading...',
  variant: 'primary',
  size: 'md',
  loading: true,
};

// Disabled button
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  variant: 'secondary',
  size: 'md',
  disabled: true,
};

// Block button
export const Block = Template.bind({});
Block.args = {
  children: 'Block Button',
  variant: 'primary',
  size: 'lg',
  block: true,
};
