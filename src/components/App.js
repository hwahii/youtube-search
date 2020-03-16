import React, { Component } from 'react';
import Header from './Header';
import Result from './Result';
import PageBar from './PageBar';
import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Result />
				<PageBar />
			</div>
		);
	}
}
export default App;
