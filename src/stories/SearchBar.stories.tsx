/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchBar, { SearchBarProps } from 'components/SearchBar';

export default {
  title: 'BobaX/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchLabel: 'Search',
  searchQuery: '',
  setSearchQuery: () => {},
};

export const WithQuery = Template.bind({});
WithQuery.args = {
  searchLabel: 'Search',
  searchQuery: 'Hello',
  setSearchQuery: () => {},
};
