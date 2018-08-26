import React from 'react';
import {ThemeContext} from '../../theme-context';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem.js';
import ScrollToPrevious from '../../components/ScrollToPrevious/ScrollToPrevious.js';
import portfolioItems from './portfolio-items';

import './PortfolioPage.css';

const PortfolioPage = (props, context) => {
  return (
		<ThemeContext.Consumer>
      {theme => (
		    <div className="portfolio-page" style={{ backgroundColor: theme.colorAlternate }}>
		      <div className="content-grid">
		        <h1 style={{ color: theme.colorPrimary }}>Portfolio</h1>
		        <div className="portfolio-wrapper">
		          <style jsx="true">
		            {`
		              .portfolio-item {
		                background-color: ${theme.colorPrimary};
		                color: ${theme.colorAlternate};
		              }
		              .portfolio-item a {
		                color: ${theme.colorAlternate};
		              }
		              .portfolio-item__links a:hover {
		                border-bottom: 2px solid ${theme.colorAlternate};
		              }
		            `}
		          </style>
		          {/* <PortfolioItem /> */}
		          {portfolioItems.map((item, i) => (
		            <PortfolioItem render={item.render} key={i} />
		          ))}
		        </div>
		      </div>
					<ScrollToPrevious pageSelector=".about-page" />
		    </div>
			)}
		</ThemeContext.Consumer>
  );
};

export default PortfolioPage;
