
const methods  = require("./methods")

const execa = require('execa'); 
const Listr = require('listr'); 
const pkgInstall  = require('pkg-install');

const Configstore = require('configstore'); 
const Octokit = require('@octokit/rest'); 
const { createBasicAuth } = require("@octokit/auth-basic");
// const pkg = require('../package.json')
// const conf = new Configstore(pkg.name);

class Scaffold{
  
  
  constructor(pao){

     this.pao = pao 
    //  this.octokit = new Octokit() 
     this.createBasicAuth = createBasicAuth
     this.questions = {
     	  	
	
		
	
	
		remote: [ 
		
			{ 
			
				name: 'provider', 
				type: 'list',
				key: 'provider', 
				message: 'Which remote provider do you use?', 
				choices: ['Github','Bitbucket']
				
			},
			{ 

				name: 'username', 
				type: 'input',
				key: "username", 
				message: 'Enter your GitHub username or e-mail address:', 
				validate: function( value ) {
						if (value.length) { 
						return true;
						}else{ 
							return 'Please enter your username or e-mail address.';
						} 
				
					} 
				
		
			},
			{ 

				name: 'password', 
				type: 'password',
				key: 'password', 
				message: 'Enter password:', 
				validate: function( value ) {

					if (value.length) { 
					return true;
					}else{ 
						return 'Please enter your password:';
					} 
				
				} 
		
		
			}
		
		], 
		getTwoFactor: [

		{ 
			name: 'twoFactorAuthenticationCode',
			type: 'input', 
			message: 'Enter your two-factor authentication code:', 
			validate: function(value) {

					if (value.length) { return true;
					} else { return 'Please enter your two-factor authentication code.';
					} 
					
					} 
				
		}
		
		],
		general: [
		
			{ 

			name: 'apptype', 
			type: 'list', 
			key: 'type',
			message: 'What type of anzii app would you like to create?', 
			choices: ['backend/api/web','cli']
		
		
			},
			{ 

			name: 'description', 
			type: 'input', 
			key: 'description',
			message: 'Please provide an optional project description:', 
			validate: function( value ) {
				if (value.length) { 
					return true;
				}else{ 
					return 'Please enter your password.';
				} 
		
			} 
		
		
			},
			{ 
			name: 'git', 
			type: 'list', 
			message: 'Should we initialize git for you?', 
			key: 'git',
			choices: ['Yes','No']
			},
			{ 
				name: 'init', 
				type: 'list', 
				message: 'Should we initialize npm for you?', 
				key: 'init',
				choices: ['Yes','No']

			},
			{ 
				name: 'repotype', 
				type: 'list', 
				key: 'repotype',
				message: 'Should this be a public or private repo?', 
				choices: ['Public','Private']
			},
			{ 
				name: 'remote', 
				type: 'list', 
				message: 'Should we create a remote repository for you?', 
				key: 'remote',
				choices: ['Yes','No']

			}
		
		
		
		
		]
    	 
    	
    }
    
     this.init = methods.init 
     this.handleScaffoldApp = methods.handleScaffoldApp
	 this.handleScaffoldCommands = methods.handleScaffoldCommands 
	 this.startQuestionnaire = methods.startQuestionnaire 
	 this.getInterpreterFeed = methods.getInterpreterFeed
	
     
    
 

  }


  

}

module.exports = Scaffold 
