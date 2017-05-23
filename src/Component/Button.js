import React, { Component } from 'react';
import Radium from 'radium';

class Button extends Component {
	getStyles() {
		return {
			moved: {top: '330px'},
			active: {top: '310px'},
			hide: {display: 'none'},
			button: {
  			':hover': {
					backgroundColor: '#183238',
					cursor: 'pointer',
					boxShadow: '0px 2px 9px rgba(0,0,0,0.8)',
					color: '#FFFFFF'
				},
				position: 'absolute',
				left: 'calc(50% - 50px)',
				width: '100px',
				border: 'none',
				padding: '10px 0',
				backgroundColor: '#5386AC',
				color: '#F2F2F2',
				boxShadow: '0px 2px 5px rgba(0,0,0,0.5)',
				transition: 'all 0.3s ease-in-out',
				textTransform: 'uppercase',
				borderRadius: '3px',
				top: '200px',
				display: 'block',
				zIndex: '2'
  		}
		};
	}

  render() {
  	const styles = this.getStyles();
    return (
      <div className="Button">
      	<button
      		style = {[
      			styles.button,
      			this.props.hide && styles.hide,
      			this.props.mactive && styles.active,
      			this.props.moved && styles.moved
      		]}
      		id="loginbtn"
      		onClick={this.props.handleClick}>
      			{this.props.button}
      	</button>
      </div>
    );
  }
}

Button = Radium(Button);

export default Button;