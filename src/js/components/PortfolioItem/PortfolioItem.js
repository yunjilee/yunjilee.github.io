import React from 'react';
import {ThemeContext} from '../../theme-context';
import './PortfolioItem.css';

const PortfolioItem = (props, context) => {
  if (props.render) return props.render;
  else
    return (
			<ThemeContext.Consumer>
	      {theme => (
		      <div
		        className="portfolio-item"
		        style={{ backgroundColor: theme.colorPrimary, color: theme.colorAlternate }}
		      >
		        <div className="portfolio-item__title">Badass</div>

		        <div className="portfolio-item__desc">
		          I do badass things and kickass everyday! I do badass things and
		          kickass everyday! I do badass things and kickass everyday!
		        </div>
		        <div className="portfolio-item__icon">
		          <i className="fab fa-js" />
		          <i className="fab fa-react" />
		          <i className="fab fa-html5" />
		        </div>
		        <div className="portfolio-item__links">
		          <a src="#">Code</a>
		          <a src="#">Blog</a>
		        </div>
		      </div>
				)}
			</ThemeContext.Consumer>
    );
};

export default PortfolioItem;
