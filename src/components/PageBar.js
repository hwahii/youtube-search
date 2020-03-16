import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../styles/PageBar.css';
const mapStateToPageBarProps = state => {
	return {
		content: state.content,
		pageNum: state.pageNum
	};
};
class PageBar extends Component {
	render() {
		let { content, pageNum } = this.props;
		let items = content.items || [];
		if (items.length === 0 || pageNum <= 0) {
			return <div></div>;
		} else {
			let pages = [];
			let totalPage = Math.ceil(items.length / 10);
			for (let i = 1; i <= totalPage; i++) {
				pages.push({ id: i, num: i });
			}
			return (
				<div className="page-bar">
					{pages.map(page => (
						<div
							key={page.id}
							className="page-button"
							style={
								page.id === pageNum
									? { background: '#f75956', color: '#fff' }
									: { background: 'none' }
							}
							onClick={() => this.props.togglePage(page.num)}
						>
							{page.num}
						</div>
					))}
				</div>
			);
		}
	}
}
export default connect(mapStateToPageBarProps, actions)(PageBar);
