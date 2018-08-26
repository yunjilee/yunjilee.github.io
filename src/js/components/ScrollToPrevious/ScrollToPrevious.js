import React, { Component } from 'react';
import {ThemeContext} from '../../theme-context';
import { toElement as scrollToElement } from '../../utils/scroll';

import './ScrollToPrevious.css';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
			<ThemeContext.Consumer>
	      {theme => (
		      <div
		        className="scroll-to-previous"
		        onClick={(e) => this.scrollToPrevious()}
		      >
		        <div className="arrow bounce" style={{ color: theme.colorPrimary }}>
		          <button className="fas fa-chevron-up fa-2x" href="#" />
		          <div className="scroll-text">Click Me</div>
		        </div>
		      </div>
				)}
			</ThemeContext.Consumer>
    );
  }
}

export default ScrollToPrevious;
