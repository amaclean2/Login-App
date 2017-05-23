import React, { Component } from 'react';
import Radium from 'radium';

class Username extends Component {

	getStyles() {
		return {
			opened: {opacity: '1'},
			inputStyle: {
	  		padding: '10px',
				fontSize: '20px',
				border: '1px solid #ccc',
				borderRadius: '3px',
				transition: 'all 1s',
				marginLeft: 'calc(50% - 135px)',
				zIndex: '1',
				width: '250px',
				opacity: '0'
	  	}
		};
	}

	handleChange(e) {
		const username = e.target.value;
		this.props.changeUn(username);
	}

  render() {
  	const styles = this.getStyles();
    return (
      <div className="Username">
      	<input id="username" placeholder="username"
      		onChange={this.handleChange.bind(this)}
      		autoFocus
      		style = {[
      			styles.inputStyle,
      			this.props.opened && styles.opened
      		]}/>
      </div>
    );
  }
}

Username = Radium(Username);

export default Username;