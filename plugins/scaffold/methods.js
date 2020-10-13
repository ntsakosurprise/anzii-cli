const { configurationErrorTask } = require("simple-git/src/lib/tasks/task")


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
	self.callback = data.callback 
	let commandsLen = Object.keys(data.commands).length 
	let repoName = ''

	if(commandsLen === 1){

		repoName = data.commands.commands[1]
		self.startQuestionnaire({general: ['type','description','git','init','repotype','remote']})
		.then((answers)=>{

			console.log('Questionaire answers')
			// console.log(answers) 
			if(answers.remote && answers.remote.trim() === 'yes'){

				self.getStoredUserToken()
				.then((token)=>{

					if(token){

						self.authenticateUser(token)
						.then((authenticated)=>{

							console.log('THE WEB PLUGIN')
							console.log(authenticated) 

							let options ={

								name: repoName,
								private: answers.private ? true : false,
								description: answers.description.trim() !== '' 
																				? answers.description 
																				: `This is a ${repoName} app`
							}

							self.createRemoteRepo(options)
							.then((repoUrl)=>{

								console.log('THE REMOTE REPO URL')
								console.log(repoUrl)
								self.callback({message: "Finished creating remote url"})

							})
							.catch((e)=>{

								return reject(e)

							})



						})
						.catch((e)=>{

							self.callback({message: 'There was an error authenticating users'}) 
							// process.exit(1)
						})

					}else{



						self.startQuestionnaire({remote: ['provider','username','password']})
						.then((credentials)=>{

							 console.log('THE USER CREDENTIALS')
							 console.log(credentials) 
							 return
							self.getRemoteUserToken(credentials)
							.then((token)=>{

							})
							.catch((e)=>{

							})

							return self.callback({message:{...answers,...credentials}})

						})
						.catch((e)=>{

							return self.callback(e)
						})
					}
				})
				.catch((e)=>{

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

 
	return new Promise((resolve,reject)=>{
   
	   const self = this 
	   const pao = self.pao 
	   const contains = pao.pa_contains
	   const questions = self.questions 
	   let   setToAsk = queries
	   let toAsk = [] 
	   

	   for(let ask in setToAsk){ 

		  
		 if(contains(questions,ask)){
			 
			
			 questions[ask].forEach((q,i)=>{
				
				
				if(setToAsk[ask][i] === q.key ){

					toAsk.push(q)
				}

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

methods.scaffoldWebApp = function(nowiz=true){

//  return new Promise((resolve,reject)=>{

// 	const self = this  
	
	
// 	if(nowiz){
		
// 		self.getScaffoldTemplate()
		
// 	}else{
		
// 		self.getScaffoldTemplate()
// 	}
	
// 	self.getAccessCreds()
// 	.then((cred)=>{
		
// 		 self.requestUserInput() 
// 		 .then((userOptions)=>{
		 	
// 		 }) 
// 		 .catch((e)=>{
		 	
		 	
// 		 })
// 	}) 
// 	.catch((e)=>{
		
		
// 	})
	
  
	
} 

methods.scaffoldCliApp = function(data){


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


methods.getStoredUserToken = function(key){


  return new Promise((resolve,reject)=>{

	const self = this 
	const config = self.config 
	
	 if(!key) return reject(new Error('Invalid token key')) 
	 
	 if(key !== 'access.token') return reject('Invalid token key') 
	 
	 return resolve(config.get('access.token'))
	 
	
	
	
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

		const {createBasicAuth} = self.createBasicAuth 
		const {username,password} = data 
		
		
		const auth = createBasicAuth({ username, password, 
		// async on2Fa() {
		
		// //status.stop();
		// const res = await self.getTwoFactorAuthenticationCode();   
		// //status.start(); 
		// return res.twoFactorAuthenticationCode;
		
		// },
			token: { scopes: ['user', 'public_repo', 'repo', 'repo:status'],
			note: 'ginit: a way to create remote rempos using an api' } 
	  	}); 
		
		auth() 
		.then((res)=>{
			
			if(!res.token) return reject(new Error('Token was not found')) 
			
			self.storeUserConfigs({key:'access.token',value: res.token}) 
			return resolve(res.token)
		})
		.catch((e)=>{

			return reject(e)
			
		})

	
	
	
	})
 

} 






methods.authenticateUser = function(token){


  return new Promise((resolve,reject)=>{

	const self = this 
	const {Octokit} = self
	
	octokit = new Octokit({
		auth: token
	  });

	  resolve(true)
	
	
	
	})
 

} 



methods.storeUserConfigs = function(data){




	const self = this 
	const config = new self.Configstore 
	const {key,value} = data
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



methods.createRemoteRepo = function(options){


  return new Promise((resolve,reject)=>{

	const self = this 
	const {Octokit} = self
	const octokit = new Octokit();


	octokit.repos.createForAuthenticatedUser(options)
	.then((response)=>{

		return resolve(response.data.ssh_url)
	})
	.catch((e)=>{

		return reject(e)
	})


	// const repotype = type === "private" ? "private" || "public"
	
	
	// const  { name, description,  } = data 
	// const repo = {name,description,[repotype]:} 
	
	// .repos.createForAuthenticatedUser(data)
	// .then((response)=>{
	// 	retun response.data.ssh_url
	// })
	// .catch((e)=>{
		
	// }); 
	
	
	
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
	


methods.createLocalRepo = function(data){


  return new Promise((resolve,reject)=>{

	const self = this 
	const config = self.config 
	const {key,value} = data
	
	config.set(key,value)
	
	
	})
 

} 


methods.requestUserInput = function(questions){


  return new Promise((resolve,reject)=>{

	const self = this 
	const inquire = self.inquire 
	
	let inquire = inquire.prompt(questions) 
	
	 return resolve(inquire)
	 

	})
 

} 

methods.gitInit = function(initFolder){

	const self = this 
	const git = self.simpleGit(initFolder) 
    // git.cwd(initFolder)
	git.init()
	.add('./*')
	.commit('Add initial commit to this repo')
	.catch((e)=>{

		console.log('GIT INIT ERROR')
		console.log(e)
	})

	// git.init()
    //   .then(git.add('.gitignore'))
    //   .then(git.add('./*'))
    //   .then(git.commit('Initial commit'))
    //   .then(git.addRemote('origin', url))
    //   .then(git.push('origin', 'master'));

	// const result = await execa('git', ['init'], {
	// 	cwd: initFolder
	//   });
	//   if (result.failed) {
	// 	return Promise.reject(new Error('Failed to initialize git'));
	//   }
	//   return;

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