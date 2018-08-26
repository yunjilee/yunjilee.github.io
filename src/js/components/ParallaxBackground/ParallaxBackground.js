import React from 'react';
import {ThemeContext} from '../../theme-context';

import './ParallaxBackground.css';

const ParallaxBackground = (props, context) => {
  return (
		<ThemeContext.Consumer>
      {theme => (
		    <div className="parallax" style={{ color: theme.colorStandout }}>
		      <div id="stars1" />
		      <div id="stars2" />
		      <div id="stars3" />
		    </div>
			)}
		</ThemeContext.Consumer>
  );
};

export default ParallaxBackground;
