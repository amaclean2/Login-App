import React, { Component } from 'react';
import Radium from 'radium';

class Error extends Component {
	getStyles() {
		return {
			errors: {
				margin: '5px 0', 
				color: 'red',
				textAlign: 'center',
				transition: 'all 0.3s',
  		}
		};
	}

  render() {
  	const styles = this.getStyles();
    return (
      <div className="Username">
      	<p style = {styles.errors}>{this.props.error}</p>
      </div>
    );
  }
}

Error = Radium(Error);

export default Error;