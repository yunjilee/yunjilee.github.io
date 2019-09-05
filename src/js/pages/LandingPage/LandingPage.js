import React from 'react';
import {ThemeContext} from '../../theme-context';
import SocialIcons from '../../components/SocialIcons/SocialIcons.js';
import NavBar from '../../components/NavBar/NavBar.js';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext.js';
// import BrowserNotes from '@components/BrowserNotes';

import './LandingPage.css';

const LandingPage = (props, context) => {
  return (
		<ThemeContext.Consumer>
      {theme => (
				<div style={{ backgroundColor: theme.colorAlternate }} className="landing-page">
					<NavBar />
					<main style={{ color: theme.colorPrimary }}>
						<div className="intro-wrapper">
							<div className="intro-name">Hi, I'm <span style={{ color: theme.colorStandout }}>Yunji</span></div>
							<pre className="tagline">
								Full-Stack Developer  /  Designer  /  Food Enthusiast
							</pre>
							<SocialIcons />
						</div>
					</main>
					<ScrollToNext pageSelector=".about-page" />
				</div>
      )}
    </ThemeContext.Consumer>
  );
};

export default LandingPage;
