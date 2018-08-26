import React from 'react';
import {ThemeContext} from '../../theme-context';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext.js';
import { Container, Row, Col } from 'reactstrap';

import profile from './Profile.png';
import './AboutPage.css';

const AboutPage = (props, context) => {
  return (
		<ThemeContext.Consumer>
      {theme => (
		    <div className="about-page" style={{ backgroundColor: theme.colorAlternate }}>
		      <style jsx="true">
		        {`
		          .highlight {
		            background-color: ${theme.colorHighlight};
		          }
		          ::selection {
		            background-color: ${theme.colorHighlight};
		          }
		        `}
		      </style>
		      <div className="content-grid">

						<div className="flexcol">
						  <div className="flexrow">
						    <div className="item1">
								<h1 style={{ color: theme.colorPrimary }}>About</h1>
									<div className="about-wrapper">
										<div className="about-content" style={{ color: theme.textPrimary }}>
												<p>
													I'm currently a junior studying computer science at USC, graduating in <span className="highlight">May 2020</span>.
												</p>
												<p>
													Although I have infinitely more to learn, I aspire to become a great software engineer. This past
													summer, I interned at <span className="highlight">DRW Holdings</span> in Chicago and developed full-stack web apps for the Compliance Team.
													Currently, I'm attending university full-time and working as a <span className="highlight">teaching assistant</span> for ITP 435 (Professional C++).
												</p>
												<p>
													Besides the tech stuff, some other things I enjoy include: graphic design, quality UI/UX, cooking, watching The Office,
													exploring different cuisines, and learning new, bizzare facts about the world.
												</p>
												<p>
													You can take a look at my resume{' '}
													<a
														target="_blank"
														rel="noopener noreferrer"
														href="https://www.dropbox.com/s/qcgwt7psfmeve0h/yl_resume.pdf?dl=0"
														style={{ color: theme.colorStandout, fontWeight: 400 }}
													><i className="fa fa-hand-point-right" /> here <i className="fa fa-hand-point-left" /></a>.
												</p>
											</div>
										</div>
									</div>
								<div className="space"></div>
						    <div className="item2">
									<img src={profile} width="400"/>
								</div>
						  </div>
						</div>
	      	</div>
		      <ScrollToNext pageSelector=".portfolio-page" />
		    </div>
			)}
		</ThemeContext.Consumer>
  );
};

export default AboutPage;
