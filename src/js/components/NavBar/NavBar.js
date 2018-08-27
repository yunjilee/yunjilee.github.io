import React, { Component } from 'react';
import {ThemeContext} from '../../theme-context';
import { toElement as scrollToElement } from '../../utils/scroll';

import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false,
			hover: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.navBar.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

	hoverOn() {
		this.setState({
			hover: true
		});
	}

	hoverOff() {
		this.setState({
			hover: false
		});
	}

	openEmail() {
		window.location.href = `mailto:yunjilee@usc.edu`;
	}

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';

    return (
			<ThemeContext.Consumer>
	      {theme => (
		      <navBar
		        className={stickyClass}
		        ref={(elem) => {
		          this.navBar = elem;
		        }}
		        style={this.state.isSticky
				      ? { backgroundColor: theme.navBarAlpha, color: theme.colorPrimary }
				      : { backgroundColor: theme.colorAlternate, color: theme.colorPrimary }
						}
		      >
						<div
							className="magic-wand bounce-xy"
							onClick={(e) => this.openEmail()}
							style={ this.state.hover ? { color: theme.colorStandout } : { color: theme.colorPrimary } }
							onMouseEnter={(e) => this.hoverOn()}
							onMouseLeave={(e) => this.hoverOff()}
						>
		          <button className="fas fa-envelope fa-lg" href="#" />
		          <div className="magic-text">Contact Me</div>
		        </div>
		        <style jsx="true">
		          {`
		            .menu__item:hover {
									color: ${theme.colorStandout};
		            }
		          `}
		        </style>
		        <div className="menu">
		          <div
		            className="menu__item active"
		            onClick={(e) => this.scrollToPage('.about-page')}
		          >
		            About
		          </div>
		          <div
		            className="menu__item"
		            onClick={(e) => this.scrollToPage('.portfolio-page')}
		          >
		            Projects
		          </div>
		        </div>
		      </navBar>
				)}
			</ThemeContext.Consumer>
    );
  }
}

export default NavBar;
