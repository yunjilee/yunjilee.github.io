import React from 'react';
import {ThemeContext} from '../../theme-context';

import './SocialIcons.css';
import '../../../libs/fontawesome/fontawesome-all.min.js'

const SocialIcons = (props, context) => {
  return (
		<ThemeContext.Consumer>
      	{theme => (
		    <div className="social-icons animate-icons">
	        <a target="_blank" rel="noopener noreferrer" href="https://github.com/yunjilee" style={ { color: theme.iconColor } }><i className="fab fa-github"></i></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yunjileebb11" style={ { color: theme.iconColor } }><i className="fab fa-behance-square"></i></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yunjilee" style={ { color: theme.iconColor } }><i className="fab fa-linkedin"></i></a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.dropbox.com/s/qcgwt7psfmeve0h/yl_resume.pdf?dl=0" style={ { color: theme.iconColor } }><i className="fa fa-file-alt"></i></a>
	      </div>
			)}
		</ThemeContext.Consumer>
  );
};

export default SocialIcons;
