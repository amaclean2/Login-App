import React, { Component } from 'react';
import Button from './Button';
import Username from './Username';
import Password from './Password';
import Error from './Error';
import Radium from 'radium';
import check from '../check-white.svg';
import './Login.css';

class Login extends Component {
	constructor() {
    super();
    this.state = {
    	opened: false,
    	windowOpen: false,
    	hide: false,
    	heading: "Login to continue",
    	btnText: "Login",
    	movedActive: false,
    	movedDown: false,
    	unView: false,
    	pasView: false,
      username: "",
      password: "",
      error: ""
    }
  }

	changeUn(un) {
		this.setState({username: un});
	}

	changePswd(pswd) {
		this.setState({password: pswd});
	}

	handleClick() {
		if(!this.state.unView && !this.state.pasView) {
			this.setState({
				heading: "Please enter your username",
				movedActive: true,
				windowOpen: true,
				unView: true
			});
			setTimeout(() => {this.setState({opened: true});}, 100);
		}

		else if(this.state.username === '' && this.state.unView) {
			this.setState({
				error: "You haven't entered a username",
				movedDown: true
			});
		}
		else if (this.state.unView) {
			this.setState({
				opened: false,
				unView: false,
				pasView: true, error: '',
				heading: "Please enter your password",
				btn: "password",
				movedDown: false
			});
		}
		else if(this.state.password === '' && this.state.pasView) {
			this.setState({
				error: "You haven't entered a password",
				movedDown: true
		});
		}
		else if (this.state.pasView) {
			this.setState({
				pasView: false,
				heading: "You are logged in",
				error: '',
				hide: true,
				movedDown: false
			});
		}
	}

	getStyles() {
  	return {
  		check: {
  			margin: 'auto',
  			width: '120px',
  			backgroundColor: 'green',
  			borderRadius: '50%'
  		},
  		block: { display: 'block' },
  		hide: { display: 'none' },
  		header: {textAlign: 'center'},
  		open: {
  			height: '350px',
  			boxSizing: 'border-box',
  			padding: '75px 5%',
  			maxWidth: '550px'
  		},
  		oper: {transition: 'all 0.3s'},
  		screen: {
  			width: '100%',
  			boxSizing: 'border-box',
  			maxWidth: '350px',
				backgroundColor: '#F6F6F6',
				borderRadius: '5px',
				padding: '35px 3%',
				margin: '100px auto',
				transition: 'all 0.3s ease-in-out',
				height: '200px',
				boxShadow: '0 1px 8px rgba(0,0,0,0.5)',
  		},
  		'@media (maxWidth: 400px)': {
  			screen: { boxShadow: '0 0 0 #fff' }
  		}
  	};
  }

  render() {
  	const styles = this.getStyles();

  	let field;
  	if (this.state.unView) {
  			field = <Username opened={this.state.opened} changeUn={this.changeUn.bind(this)} />;
		} else if (this.state.pasView) {
				field = <Password opened={this.state.opened} username={this.state.username} changePswd={this.changePswd.bind(this)} />;
		}
  	else
  		field = null;

    return (
      <div className="Login">
      	<div id="loginScreen"
      		style={[
      			styles.screen,
      			this.state.windowOpen && styles.open
      		]}>
					<h2 id="instructions" style={styles.header} >{this.state.heading}</h2>
					<img style={[styles.hide, styles.check, this.state.hide && styles.block ]} src={check} alt="check_mark" />
					<div id="operations" style={styles.oper}>
						<div id="text">
						<Error error={this.state.error} />
						{field}
						</div>
						<Button 
							moved={this.state.movedDown}
							handleClick={this.handleClick.bind(this)}
							button={this.state.btnText}
							hide={this.state.hide}
							mactive={this.state.movedActive}
						/>
					</div>
				</div>
      </div>
    );
  }
}

Login = Radium(Login);

export default Login;
