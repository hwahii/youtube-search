import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/Header.css';

class Header extends Component {
	handleSearchClick(searchText) {
		this.props.fetchSearch(searchText);
		// Toggle Page to -1 to trigger loading component
		this.props.togglePage(-1);
	}
	render() {
		let input;
		return (
			<header className="main-header">
				<div className="container">
					<div className="header-search">
						<input
							ref={node => {
								input = node;
							}}
							placeholder="Search"
						/>
						<button
							onClick={() => this.handleSearchClick(input.value)}
						>
							<i className="fas fa-search"></i>
						</button>
					</div>
				</div>
			</header>
		);
	}
}

export default connect(null, actions)(Header);
