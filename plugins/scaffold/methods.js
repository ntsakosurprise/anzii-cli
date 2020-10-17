


const methods = {}

methods.init = function(){
  
  
	this.listens({
		
		'create-anzii-app': this.handleScaffoldApp.bind(this)
	})
	
	
}


methods.handleScaffoldApp = function(data){

 
	const self = this 
	const pao = self.pao 
	const getWorkingFolder =  pao.pa_getWorkingFolder 
	const createFolderContent = pao.pa_createFolderContent 
	const makeFolderSync = pao.pa_makeFolderSync 
	const getRootDir = pao.pa_getRootDir 	
	// const git = self.simpleGit() 
	// var github = self.github
	// const client = github.client('d52e1b732cfdab165ac9322d079b33ea23ba6fe9')
	self.callback = data.callback 

	// client.repo({
	// 	name: "anzii-cli-tes"
	// },(err,res)=>{

	// 	console.log(err)
	// 	console.log(res)
	// }).destroy()
	

	// var client = github.client({

	// 	username: 'ntsakosurprise',
	// 	password: '19900323rose@59'
	// }) 
	// var scopes = {
	// 	'scopes': ['user', 'repo', 'gist'],
	// 	'note': 'admin script'
	//   };

	//   github.auth.config({

	// 	username: 'ntsakosurprise',
	// 	password: '19900323rose@59'

	//   }).revoke( function (err) {
	// 	if (err) throw err;
	// 	console.log(id)
	// 	client.me().info((err,res)=>{
	// 				console.log('THE INFO ABOUT THE USER')
	// 				console.log(err)
	// 				console.log(res)
	// 	})
	//   });

	// console.log(client.user())

	// client.me().info(
	// 	(err,res)=>{
	// 	console.log('THE INFO ABOUT THE USER')
	// 	console.log(err)
	// 	console.log('Check the client login or username below:')
	// 	console.log(res)}) 

	// return 

	// 	// for(let e=0; e < res.length; e++){

	// 	// 	if(res[e].primary === true){

	// 	// 		console.log('THE PRIMARY EMAIL')
	// 	// 		console.log(res[e].email)
	// 	// 		break;
	// 	// 	}
	// 	// }
	// 	// console.log(res.ssh_url)
	// 	// console.log(res.clone_url)
	// 	// console.log(res.svn_url) 
	// 	// console.log(res.git_url)
	// })

// 	github.auth.config({

// 	username: 'iiprodakts',
// 	password: '19900323rose@59'

//   }).login(scopes, function (err, id, token, headers) {
		
// 		console.log('THE AUTHENTICATION SCOPES')
// 		console.log(err)
// 		console.log(id, token); 
		// client.me().info(
		// 	(err,res)=>{
		// 	console.log('THE INFO ABOUT THE USER')
		// 	console.log(err)
		// 	console.log(res.login)
			// console.log(res.ssh_url)
			// console.log(res.clone_url)
			// console.log(res.svn_url) 
			// console.log(res.git_url)
		// })
		
		// 'git@github.com:iiprodakts/anzii-cli-tes.git',
// 	  }); 


// git.cwd(initFolder)



    //  try{

	// 	console.log('Trying to commic to github')
	// 	git.init()
	// 	.add('./*')
	// 	.commit('Add initial commit to this repo')
	// 	// .addRemote('origin', 'https://github.com/iiprodakts/anzii-cli-tes.git')
	// 	.push('origin', 'master')
	// 	.catch(err => console.error(err));
		

		// git.init().addRemote('origin', 'git@github.com:iiprodakts/anzii-cli-tes.git')
		//   	.catch(err => console.error(err)); 
		  
		//   git@github.com:iiprodakts/anzii-cli-tes.git 
		//   https://github.com/iiprodakts/anzii-cli-tes.git 
		//   https://github.com/iiprodakts/anzii-cli-tes.git
	

	//  }catch(e){

	// 	console.log('AN ERROR OCCURED TRYING TO COMMIT')
	// 	console.log(E)

	//  }
	


    

	// client.me().repo({

	// 	name: 'anzii-cli-test',
	// 	private: false,
	// 	description: "A test repo for anzii cli tool:test"

	// },
	// 	(err,res)=>{
	// 	console.log('THE INFO ABOUT THE USER')
	// 	console.log(err)
	// 	// console.log(res.clone_url) 
	// 	console.log(res.ssh_url)
	// 	console.log(res.clone_url)
	// 	console.log(res.svn_url) 
	// 	console.log(res.git_url)
	// 	console.log('Trying to commic to github')
	// 	git.init()
	// 	.add('./*')
	// 	.commit('Add initial commit to this repo')
	// 	.addRemote('origin', res.clone_url)
	// 	.push('origin', 'master')
	// 	.catch(err => console.error(err));
	// 	// self.storeUserConfigs({key: 'access.token',value: "505768acf47e8ce425e72b7bc26ccdcf4455100b"})
	// })

	
	// return


	// self.getStoredUserToken('anzii-cli')
	// .then((token)=>{

	// 	console.log('GITHUB TOKEN')
	// 	console.log(token)
	// })
	// .catch((e)=>{

	// 	console.log('TOKEN ERROR')
	// 	console.log(e)
	// })

	

	// return console.log(client.project())
	
	// client.info((res)=>{

	// 	console.log(res)

	// })

	// client.get('/users', {}, function (err, status, body, headers) {

	// 	console.log(err)
	// 	console.log(status)
	// 	console.log(headers)
	// 	console.log(body); //json object

	//   });

	// console.log(ghme)


	
	let commandsLen = Object.keys(data.commands).length 
	let repoName = ''

	if(commandsLen === 1){

		repoName = data.commands.commands[1]
		self.startQuestionnaire({general: ['type','description','git','init','repotype','remote']})
		.then((answers)=>{

			console.log('Questionaire answers')
			// console.log(answers) 
			if(answers.remote && answers.remote.toLowerCase().trim() === 'yes'){


				self.getStoredUserToken()
				.then((token)=>{

					// console.log('THE TOKEN RETURNED FROM GETSTOREDuSERTOKEN')
					// console.log(token) 
					if(!token){

						self.startQuestionnaire({remote: ['provider','username','password']})
						.then((credentials)=>{

							 console.log('THE USER CREDENTIALS')
							 console.log(credentials) 
			
							self.getRemoteUserToken(credentials)
							.then((token)=>{

								let templatePath = `${getRootDir()}/templates/web` 
								let dir = {templatePath,folderName: data.commands.commands[1]} 
								let newFolder = `${getWorkingFolder()}/${dir.folderName}`
							
								self.startPostAuthenticationTasks(token.token,answers,repoName)
								.then((repoUrl)=>{

									let tasks = [
										{ title: 'Create remote repository', task: () => ''},
										{ title: 'Create project folder', task: () => self.makeFolder(newFolder)},
										{ title: 'Copy project files', task: () => self.pao.pa_createFolderContent(dir.templatePath,dir.folderName)},
										{ title: 'Initialize git repo', task: () => self.gitInit(newFolder,repoUrl)},
									]
	
									self.runTasks(tasks,dir) 
									.then((completedTasks)=>{
	
										// console.log('%s Project ready', chalk.green.bold('DONE'));
										return self.callback({message:'Project Ready!'})
	
									})
									.catch((e)=>{
										return self.callback({message:e})
									})

								})

							})
							.catch((e)=>{
								// return self.callback({message:{...answers,...credentials}})

								return self.callback(e)

							})

							

						})
						.catch((e)=>{

							return self.callback(e)
						})


					}else if(token.token){

							// console.log('THE TOKEN IS SET')
							// console.log(token.token)
							let templatePath = `${getRootDir()}/templates/web` 
							let dir = {templatePath,folderName: data.commands.commands[1]} 
							let newFolder = `${getWorkingFolder()}/${dir.folderName}`

							self.startPostAuthenticationTasks(token.token,answers,repoName)
							.then((repoUrl)=>{

								let tasks = [
									{ title: 'Create remote repository', task: () => ''},
									{ title: 'Create project folder', task: () => self.makeFolder(newFolder)},
									{ title: 'Copy project files', task: () => self.pao.pa_createFolderContent(dir.templatePath,dir.folderName)},
									{ title: 'Initialize git repo', task: () => self.gitInit(newFolder,repoUrl)},
								]

								self.runTasks(tasks,dir) 
								.then((completedTasks)=>{

									// console.log('%s Project ready', chalk.green.bold('DONE'));
									return self.callback({message:'Project Ready!'})

								})
								.catch((e)=>{
									return self.callback({message:e})
								})

							})
							.catch((e)=>{

								// console.log('ERROR STARTING POST AUTH')
								console.log(e)
							})
					}else{
	
						self.getRemoteUserToken(token.creds)
						.then((remoteToken)=>{

							let templatePath = `${getRootDir()}/templates/web` 
							let dir = {templatePath,folderName: data.commands.commands[1]} 
							let newFolder = `${getWorkingFolder()}/${dir.folderName}`

							let mergeAnswers = {...token.creds,description: answers.description}
							self.startPostAuthenticationTasks(remoteToken.token,mergeAnswers,repoName)
							.then((repoUrl)=>{

								let tasks = [
									{ title: 'Create remote repository', task: () => ''},
									{ title: 'Create project folder', task: () => self.makeFolder(newFolder)},
									{ title: 'Copy project files', task: () => self.pao.pa_createFolderContent(dir.templatePath,dir.folderName)},
									{ title: 'Initialize git repo', task: () => self.gitInit(newFolder,repoUrl)},
								]

								self.runTasks(tasks,dir) 
								.then((completedTasks)=>{

									// console.log('%s Project ready', chalk.green.bold('DONE'));
									return self.callback({message:'Project Ready!'})

								})
								.catch((e)=>{
									return self.callback({message:e})
								})

							})
							.catch((e)=>{


							})
							
						})
						.catch((e)=>{
							return self.callback({message: 'There was an error getting remote token'})
						})

							
					}
				})
				.catch((e)=>{

					 console.log(e)
					 return self.callback({message: 'There was an error getting stored user token'})
				})

				
			}else{

				
			
				//console.log(loadFile('./.config.js'))

				// console.log('Templates path') 
				// console.log(`${getRootDir()}/templates/web`)
				
				let templatePath = `${getRootDir()}/templates/web` 
				let dir = {templatePath,folderName: data.commands.commands[1]} 
				let newFolder = `${getWorkingFolder()}/${dir.folderName}`

				let tasks = [

					{ title: 'Create project folder', task: () => self.makeFolder(newFolder)},
					{ title: 'Copy project files', task: () => self.pao.pa_createFolderContent(dir.templatePath,dir.folderName)},
					{ title: 'Initialize git repo', task: () => self.gitInit(newFolder)},
				]
				//console.log(templatePath) 
			
				self.runTasks(tasks,dir) 
				.then((completedTasks)=>{

					// console.log('%s Project ready', chalk.green.bold('DONE'));
					return self.callback({message:'Project Ready!'})

				})
				.catch((e)=>{
					return self.callback({message:e})
				})
				// createFolderContent(templatePath,data.commands.commands[1])

				
			}
			

		})
		.catch((e)=>{

			return self.callback(e)
		})

	}else{

		return self.callback({message: `The length of the commands object is ${commandsLen}`})


	}
	

	
} 

methods.startQuestionnaire = function(queries){ 

	console.log('QUERIES FOR QUESTIONAIRRE')
	console.log(queries)
	return new Promise((resolve,reject)=>{
   
	   const self = this 
	   const pao = self.pao 
	   const contains = pao.pa_contains
	   const questions = self.questions 
	   let   setToAsk = queries
	   let toAsk = [] 
	   

	   for(let ask in setToAsk){ 

		  
		 if(contains(questions,ask)){
			 
			 console.log('THE QUESTIONS OBJ CONTAINS PROP')
			
			 setToAsk[ask].forEach((v,i)=>{
				
				questions[ask].forEach((q)=>{

					if(v === q.key){

						toAsk.push(q)
					}

				})
				// console.log(i)
				// console.log(setToAsk[ask][i])
				// console.log(q)
				// console.log(q.key)
				
				// if(setToAsk[ask][i] === q.key ){

				// 	toAsk.push(q)
				// }

			 })
		 }


	   }

	//    console.log('THE QUESTIONS')
	//    console.log(toAsk)


	   self.emit({type:'prompt-user',data:{
	  	  
			query: toAsk,
			callback: self.getInterpreterFeed.bind(self,resolve,reject),
		
	 
		}})

	   


	   })
	   
   
	
   }


methods.decideAppType = function(data){ 

 
 return new Promise((resolve,reject)=>{

	const self = this 
	const {options} = data 
	options && options.cli 
	  ? self.scaffoldCliApp(resolve,reject,data) 
	  : self.scaffoldApp(resolve,reject,data)
	
	
	})
	

 
} 



methods.isExistingDir = function(dir){


  return new Promise((resolve,reject)=>{

	const self = this 
	if(pao.isDir(dir)){
		
		resolve()
	}else{
		
		reject()
	}
		
	
	
	})
 

} 


methods.getStoredUserToken = function(){


  return new Promise((resolve,reject)=>{

	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const config = new self.Configstore(loadFile('./package.json').name) 
	// console.log(config)
	// console.log(loadFile('./package.json').name)
	// console.log(config.get)
	// console.log(config.all)
	// console.log(config.get('iiprodakts'))
	let allStoredKeys = config.all

	if(allStoredKeys){

		let storedKeys = Object.keys(allStoredKeys)

		// console.log('THE STORED KEYS')
		// console.log(storedKeys)
		self.questions.account[0].choices = [...storedKeys]
		self.questions.account[0].choices.push('Another account')
		// console.log(self.questions.account[0].choices)

		self.startQuestionnaire({account: ['account']})
		.then((confirmAnswer)=>{
			 
			//  console.log('THE CONFIRM ANSWER')
			//  console.log(confirmAnswer.account.toLowerCase().trim()  === 'another account' )
			 if(confirmAnswer.account.toLowerCase().trim() === 'another account'){

				self.startQuestionnaire({remote: ['username','password']})
				.then((answers)=>{

					console.log('Answers in getStoredConfig')
					console.log(answers)
					return resolve({creds: answers})

				})
				.catch((e)=>{

					return reject(e)
				})
			 }else{

			

					 return resolve(allStoredKeys[confirmAnswer.account])

				
			 }

		})
		.catch((e)=>{

			return reject(e)
		})
		// resolve(allStoredKeys) 


	}else{

		return resolve(false)
	}
	
	//  if(!key) return reject(new Error('No token has been provided')) 
	//  return resolve(config.get(key))
	 
	
	
	})
 

} 





methods.getAccessCreds = function(data){


  return new Promise((resolve,reject)=>{

	const self = this 
	
	  self.emit({type:'prompt-user',data:{
	  	  
	  	   query: self.getRemoteAccess,
	  	   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
	  	   
	  	
	  }})
	
	
	
	})
 

} 


methods.getTwoFactorAuthentication = function(data){


  return new Promise((resolve,reject)=>{

	const self = this 
	
	  self.emit({type:'prompt-user',data:{
	  	  
	  	   query: self.getTwoFactor,
	  	   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
	  	   
	  	
	  }})
	
	
	
	})
 

} 



methods.getRemoteUserToken = function(data){


  return new Promise((resolve,reject)=>{

		const self = this 
		const github = self.github 
		const {username,password} = data 
		const scopes = {
			'scopes': ['user', 'repo', 'gist'],
			'note': 'Anzii-cli remote repository creation'
		  };


		  github.auth.config({

			 username,password

			}).login(scopes, function (err, id, token, headers) {
			
				// console.log('THE AUTHENTICATION SCOPES')
				if(err){

					console.log('Git hub login error')
					reject(err)

				}else{
					
					let accessToken = {token: token,tokenID: id, userID: username}
					
					self.storeUserConfigs({key:username,value:accessToken }) 
					return resolve(accessToken)

				}
				// console.log(id, token); 
				// client.me().repo({
				// 	"name": "anzii-cli-test-app",
				// 	"private": false,
				// 	"description": "This is a test app created via anzii-cli"},
				// 	(err,res)=>{
				// 	console.log('THE INFO ABOUT THE USER')
				// 	console.log(err)
				// 	console.log(res)
				// })
			
			
		}); 

		// const createBasicAuth = self.createBasicAuth 
		// const {username,password} = data 
		
		// console.log('THE AUTHENTICATION IS ABOUT TO KICKIN')
		
		// const auth = createBasicAuth({ type: 'token', 
		// // async on2Fa() {
		
		// // //status.stop();
		// // const res = await self.getTwoFactorAuthenticationCode();   
		// // //status.start(); 
		// // return res.twoFactorAuthenticationCode;
		
		// // },
		// 	token: { scopes: ['user', 'public_repo', 'repo', 'repo:status'],
		// 	note: 'ginit: a way to create remote rempos using an api' } 
		//   }); 
		  
	
		// auth() 
		// .then((res)=>{
			
		// 	if(!res.token) return reject(new Error('Token was not found')) 
			
		// 	self.storeUserConfigs({key:'access.token',value: res.token}) 
		// 	return resolve(res.token)
		// })
		// .catch((e)=>{

		// 	return reject(e)
			
		// })

	
	
	
	})
 

} 


methods.authenticateUser = function(token){

//   console.log('AUTHENTICATE USERS')
//   console.log(token)
  return new Promise((resolve,reject)=>{

	const self = this 
	const github = self.github
	const client = github.client(token) 
	return resolve(client)
	
  })
 

} 

methods.startPostAuthenticationTasks = function(token,answers,repoName){

	// console.log('STARTpostauthentication tasks')
	// console.log(token)
	// console.log(answers)
	// console.log(repoName)

	return new Promise((resolve,reject)=>{
  
	  const self = this 
	  self.authenticateUser(token)
	  .then((client)=>{

		//   console.log('THE WEB PLUGIN')
		//   console.log(client) 

		  let options ={

			  name: repoName,
			  private: answers.private ? true : false,
			  description: answers.description.trim() !== '' 
															  ? answers.description 
															  : `This is a ${repoName} app`
		  }

		  self.createRemoteRepo(client,options)
		  .then((repoUrl)=>{

			  console.log('THE REMOTE REPO URL')
			  console.log(repoUrl)
			  return resolve(repoUrl)
			//   self.callback({message: "Finished creating remote url"})

		  })
		  .catch((e)=>{

			  return reject(e)

		  })



	  })
	  .catch((e)=>{
		 console.log('Error authenticating') 
		 console.log(e)
		 return reject(e)
		  // process.exit(1)
	  })

	  
	  
	})
   
  
  } 
  

methods.storeUserConfigs = function(data){




	const self = this 
	const pao = self.pao
	const loadFile = pao.pa_loadFile
	const {key,value} = data 
	const config = new self.Configstore(loadFile('./package.json').name) 
	config.set(key,value)
	
	

 

} 


methods.getScaffoldOptions = function(data){


  return new Promise((resolve,reject)=>{

	const self = this 
	
	  self.emit({type:'prompt-user',data:{
	  	  
	  	   query: self.getScaffolOpts,
	  	   callback: self.getInterpreterFeed.bind(self,resolve,reject,res),
	  	   
	  	
	  }})
	
	
	
	})
 

} 



methods.createRemoteRepo = function(authenticatedClient,options){

//  console.log('CREATE REMOTE REPO')
//  console.log(authenticatedClient)
//  console.log(options)

  return new Promise((resolve,reject)=>{

		const self = this 

		authenticatedClient.me().repo(options,

			(err,res)=>{
			if(err){

				console.log('Failed to create remote repo') 
				return reject(err)

			}else{

				let url = res.clone_url
				return resolve(url)
			}
		})
	
	
	
	
	 })
 

} 


methods.getInterpreterFeed = function(resolve,reject,res = null){

	 const self = this 

	 if(!res){

		return reject(new Error('There was an error collecting answers'))
	 }else{

		return resolve(res)
	 }

	 
	
} 
	


 

methods.gitInit = function(initFolder,remoteUrl=null){

	const self = this 
	const git = self.simpleGit(initFolder) 
	// git.cwd(initFolder)
	
	if(remoteUrl){

		 git.init()
		.add('.')
		.commit('Add initial commit to this repo')
		.addRemote('origin',remoteUrl)
		.push('origin', 'master')
		.catch((e)=>{

			console.log('GIT INIT ERROR')
			console.log(e)
		})

	}else{

		git.init()
		.add('./*')
		.commit('Add initial commit to this repo') 
		.catch((e)=>{

			console.log('GIT INIT ERROR')
			console.log(e)
		})

	}
	

	

} 




methods.getScaffoldTemplate= function(type="web"){


 return new Promise((resolve,reject)=>{ 
 
 
 	  const self = this 
      const pao = self.pao 
    	
    	 
	    // const templates = pao.getFolderContentSync(`${__dirname/templates}) 
	    // const webpath = `${__dirname}/templates/type`
	    // const workingFolder = pao.getWorkingFolder() 
	    // pao.makeFolderSync(`workingFolder/repo`)	
	    // pao.putContentInFolder(webpath,repo) 
	    
	    
	    
		
		
	  
	
 	
 	
 })
 

} 


methods.npmInit = function(data){


       return new Promise((resolve,reject)=>{

	     	const self = this 
	const {options} = data 
	options && options.cli ? self.scaffoldCliApp : self.scaffoldApp
	self.logSync("Handling send-outpit Cli event") 
	self.logSync("About to send output to std") 
	self.logCli(data.message)
		
	
	
	})
 

} 




methods.packagesInstall = function(data){


       return new Promise((resolve,reject)=>{

	     	const self = this 
	const {options} = data 
	options && options.cli ? self.scaffoldCliApp : self.scaffoldApp
	self.logSync("Handling send-outpit Cli event") 
	self.logSync("About to send output to std") 
	self.logCli(data.message)
		
	
	
	})
 

} 


methods.makeGitRmote = function(data){


       return new Promise((resolve,reject)=>{

	     	const self = this 
	const {options} = data 
	options && options.cli ? self.scaffoldCliApp : self.scaffoldApp
	self.logSync("Handling send-outpit Cli event") 
	self.logSync("About to send output to std") 
	self.logCli(data.message)
		
	
	
	})
 

} 



methods.handleTask = function(data){
 
	const self = this 
	let {input,task} = data 
	self.emit({type: task,data:{input}})
} 


methods.makeFolder = function(filepath){
 
	const self = this 
	const pao = self.pao 
	const getWorkingFolder =  pao.pa_getWorkingFolder 
	const createFolderContent = pao.pa_createFolderContent 
	const makeFolderSync = pao.pa_makeFolderSync 
	const getRootDir = pao.pa_getRootDir 

	return makeFolderSync(filepath)
} 


methods.runTasks = async function(toRun,dir){
	
	const self = this 
	const Listr = self.Listr

	const tasks = new Listr(toRun);

	await tasks.run() 
	return true
	
	
	
}


module.exports = methods