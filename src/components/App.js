/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-08-15 14:07:48
 * @version $Id$
 */
import React, { Component } from 'react';
import NavLink from './NavLink.js';
require('./../less/reset.less');
require('./../less/more.less');
class App extends Component {
	/**
	 * [constructor description]
	 * @param  {[type]} props [description]
	 * @return {[type]}       [description]
	 */
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return <div>
           {this.props.children}
         </div>;
	}
}

export default App;
