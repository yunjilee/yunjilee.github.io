import React, { Component } from 'react';
import {ThemeContext} from '../../theme-context';
import { toElement as scrollToElement } from '../../utils/scroll';

import './ScrollToNext.css';
import '../../../libs/fontawesome/fontawesome-all.min.js'

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
			<ThemeContext.Consumer>
	      {theme => (
		      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
		        <div className="arrow bounce" style={{ color: theme.colorPrimary }}>
		          <div className="scroll-text">Click Me</div>
		          <button className="fas fa-chevron-down fa-2x" href="#" />
		        </div>
		      </div>
				)}
			</ThemeContext.Consumer>
    );
  }
}

export default ScrollToNext;
