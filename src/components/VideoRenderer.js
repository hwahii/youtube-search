import React, { Component } from 'react';
import '../styles/VideoRenderer.css';

class VideoRenderer extends Component {
	render() {
		let { onClick, videoId, snippet } = this.props;
		return (
			<li key={videoId} className="video-item" onClick={onClick}>
				<img
					className="video-pic"
					src={snippet.thumbnails.medium.url}
					alt="thumbnails"
				/>
				<div className="video-txt">
					<h3>{snippet.title}</h3>
				</div>
			</li>
		);
	}
}

export default VideoRenderer;
