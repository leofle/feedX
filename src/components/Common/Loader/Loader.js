import React, { Component } from 'react'
import './Loader.css';

export default class Loader extends Component {
	state = {
		elems: 4
	}
	render() {
		return (
			<div className="lds-ellipsis">
			{Array(this.state.elems).fill().map((item, index)=>{
				return <div key={index} style={{backgroundColor: this.props.color}}></div>;
			})}
			</div>
		)
	}
}
