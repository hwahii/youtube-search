import React, { Component } from 'react';
import VideoRenderer from './VideoRenderer';
import { connect } from 'react-redux';
import '../styles/Result.css';
import loadingImg from '../loading.gif';

const mapStateToResultProps = state => {
	return {
		content: state.content,
		pageNum: state.pageNum
	};
};

class Result extends Component {
	onResultClick(id) {
		const w = window.open('about:blank');
		w.location.href = `https://www.youtube.com/watch?v=${id.videoId}`;
	}
	render() {
		let { content, pageNum } = this.props;
		let items = content.items || [];
		if (items.length === 0 && pageNum === 0) {
			return (
				<div className="landing-txt">
					<p>↑</p>
					<p>Search YouTube video here!</p>
				</div>
			);
		}
		// Use Page -1 to show loading component
		if (pageNum === -1) {
			return (
				<div className="loading">
					<img src={loadingImg} alt="loading" />
				</div>
			);
		}
		const currentPageIndex = (pageNum - 1) * 10;
		items = items.slice(currentPageIndex, currentPageIndex + 10);
		return (
			<div className="results">
				<div className="container">
					{items.map(result => (
						<VideoRenderer
							key={result.id.videoId}
							videoId={result.id.videoId}
							snippet={result.snippet}
							onClick={() => this.onResultClick(result.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToResultProps)(Result);
