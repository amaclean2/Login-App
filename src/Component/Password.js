import React, { Component } from 'react';
import Radium from 'radium';

class Password extends Component {

	getStyles() {
		return {
			opened: {opacity: '1'},
			inputStyle: {
	  		padding: '10px',
				fontSize: '20px',
				border: '1px solid #ccc',
				borderRadius: '3px',
				transition: 'all 0.4s',
				position: 'absolute',
				left: 'calc(50% - 135px)',
				zIndex: '1',
				width: '250px'
	  	}
		};
	}

	handleChange(e) {
		const username = e.target.value;
		this.props.changePswd(username);
	}

  render() {
  	const styles = this.getStyles();

    return (
      <div className="Password">
      	<input id="password" type="password"
      		onChange={this.handleChange.bind(this)}
      		placeholder={'password for ' + this.props.username} 
      		autoFocus
      		style = {[
      			styles.inputStyle,
      			this.props.opened && styles.opened
      		]}/>
      </div>
    );
  }
}

Password = Radium(Password);

export default Password;