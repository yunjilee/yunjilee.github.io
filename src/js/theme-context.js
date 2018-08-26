import React from 'react';

export const themes = {
  light: {
	  name: 'main',
	  firstTime: true,
	  colorPrimary: '#FAFAFA',
	  colorAlternate: '#6C7B96',
	  colorHighlight: '#314467',
		colorStandout: '#E2B99C',
	  textPrimary: '#EBEDF0',
		iconColor: '#E2B99C',
	  navBarAlpha: 'rgba(108, 123, 150, 0.75)'
  },
  dark: {
	  name: 'material-grey-alt',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#455A64',
    colorHighlight: '#374850',
    textPrimary: '#FAFAFA',
    navBarAlpha: 'rgba(69, 90, 100, 0.75)'
  },
};

export const ThemeContext = React.createContext(
  themes.light // default value
);
