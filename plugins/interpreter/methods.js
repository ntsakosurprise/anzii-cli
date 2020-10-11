const { configurationErrorTask } = require("simple-git/src/lib/tasks/task")


let methods = {}
methods.init = function(){
  
 
	this.logSync("Interpreter is initialising") 
	this.listens({
		"start-io-operations": this.handleInterpreterCliInput.bind(this),
		"prompt-user": this.handlePromptUser.bind(this)
	})

}


methods.handleInterpreterCliInput = function(data){

 
	const self = this  
	const pao = self.pao
	const contains = pao.pa_contains
	const arg = self.arg 
	const figlet = self.figlet 
	const chalk = self.chalk 
	let stopFurtherExecution = false 
   
	
	
	// self.logSync("Handling send-output Cli event") 
	// self.logSync("About to send output to std")  

	
	
	const commands = arg({
		
		 
		  '--cli': Boolean, 
		  '--web': Boolean, 
		  '--remote': Boolean,
		  '--git': Boolean,
		  '--yes': Boolean, 
		  '--install': Boolean, 
		  '-c': '--cli',
		  '-w': '--web',
		  '-r': '--remote',
		  '-g': '--git', 
		  '-y': '--yes', 
		  '-i': '--install',
		
	},{
		
		argv: pao.PROMPT.slice(2)
	})

	
	// let set = {
		
	// 	defApp: arg['--yes'],
	// 	command: arg["create-anzii-app"],
	// 	web: arg['--web'] || false, 
	// 	cli: arg['--cli'] || false,
	// 	remote: arg['--remote'] || false,
	// 	git: arg['--git'] || false 
		
	
	// }

	console.log('THE COMMANDS INTERPRETER')
	console.log(commands)
	console.log(commands._[0]) 

	if(commands._.length > 0 && commands._[0] !== 'cli'){


        if(Object.keys(commands).length <= 1) {


			let com = commands._[0] 
			if(com === '--help' || com === '-h') com = 'help'
			if(com == '--version' || com === '-v') com = 'version'
			if(com === 'create-anzii-app'){ com = 'createAnziiAppCommand'}
			else{com = `${com}Command`}

			if(self[com]){

				return self[com]() 
				

			}else{

				process.exit(1)
			}

		}


		for(let cmd =0; cmd < commands._.length; ++cmd){

			if(contains(self.commands,cmd)){

				if(self[cmd]) self[cmd]() 
				stopFurtherExecution = true
				break;
			}else{

				console.log('EMMITTING TO SCAFFOLD')
				self.emit({type: 'create-anzii-app',data: commands}) 
				break
			}

		}
		
	}else{

		return self.showAvailableCommands()

	}
	
	if(stopFurtherExecution) return
	let message = [  { 
    
		name: 'apptype', 
		type: 'list', 
		message: 'What type of anzii app would you like to create?', 
		choices: ['backend/api/web','cli']
	 
	 
		 }
		]

	console.log(
		chalk.yellow(
		  figlet.textSync('Welcome to ANZII-CLI', { horizontalLayout: 'full' })
		)
	  );
	
	  self.prompt({message})
	  .then((input)=>{

		console.log(input)
		console.log(chalk.green(
			'Question successfully answered'
		  )) 


	  })
	  .catch((e)=>{

		console.log(chalk.red('An error occured prompting for input')); 
		process.exit(1)

	  })

	  
	 

	
	
	
} 


methods.handlePromptUser = function(data){
 
	const self = this  
	const {callback} = data 
	self.prompt(message) 
	

} 



methods.handleCommands = function(parsedCommands){

 
	const self = this 
	const commands = self.commands
	self.logSync("Handling possible tasks storage") 
	self.logSync(data) 
	if(commands.alias){
		
		if(commands.alias === parsedCommands.command){
			
			 self.emit({type: commands.command,data: {callback: self.getFeedback.bind(this),commands:parsedCommands}})
			
		}else{
			
			self.logSync(`command: ${parsedCommand} command is not recognised as anzii cli command, please type "anzii --help" to see a list of valid anzii commands.`)
		}
	}
	
} 

methods.getFeedback = function(data){
 
	const self = this 
	let {message} = data 
	self.outPut(message)
} 

methods.prompt = function(data){
 


 return	new Promise((resolve,reject)=>{

		const self = this 
		// const {callback} = data 
		const {message} = data
		const inquirer = self.inquirer 

		// input = await inquirer.prompt(message) 
		// return input
		
		return inquirer.prompt(message) 
			.then((input)=>{
				
				resolve(input)
			}) 
			.catch((e)=>{
				
				reject(e)
			})
	

	})
	
	
	
} 


methods.outPut = function(data){
 
	const self = this 
	const chalk = self.chalk 
	const figlet = self.figlet 

	console.log(chalk.yellow(
	
	 figlet.textSync("Anzii",{horizontal: "full"})
	
	))
} 

methods.showAvailableCommands = function(){
 
	const self = this 
	const chalk = self.chalk 
	let mainHelp = `

	${chalk.greenBright('anzii [command] <options>')}
	  ${chalk.cyan.bold('create-anzii-app')} ................ Creates anzii app
	  ${chalk.cyan.bold('version')} ............ show the current version of anzii-cli
	  ${chalk.cyan.bold('help')} ............... show help menu for a command
	`

	console.log(mainHelp)
} 


methods.helpComand = function(){
 
	const self = this 
	const chalk = self.chalk 
	let help = `

	${chalk.greenBright('help <options>')}
	  ${chalk.cyan.bold('-c | --cli')} ................ Creates anzii cli app
	  ${chalk.cyan.bold('-w | --web')} ............ Creates anzii app suitable for building web pages, apis, and any backend
	  ${chalk.cyan.bold('-r | --remote')} ............... Creates a remote repo and initial commit for you anzii app 
	  ${chalk.cyan.bold('-help | --help')} ............... Shows help menu for create-anzii-app command
	  ${chalk.cyan.bold('-g | --git')} ............... Initializes git for you anzii app
	  ${chalk.cyan.bold('-y | --yes')} ............... Creates anzii app with default settings
	`

	console.log(help)


} 

methods.versionCommand = function(){
 
	const self = this 
	const chalk = self.chalk 
	let help = `

	${chalk.greenBright('version <options>')}
	  ${chalk.cyan.bold('-c | --cli')} ................ Creates anzii cli app
	  ${chalk.cyan.bold('-w | --web')} ............ Creates anzii app suitable for building web pages, apis, and any backend
	  ${chalk.cyan.bold('-r | --remote')} ............... Creates a remote repo and initial commit for you anzii app 
	  ${chalk.cyan.bold('-help | --help')} ............... Shows help menu for create-anzii-app command
	  ${chalk.cyan.bold('-g | --git')} ............... Initializes git for you anzii app
	  ${chalk.cyan.bold('-y | --yes')} ............... Creates anzii app with default settings
	`

	console.log(help)

} 


methods.createAnziiAppCommand = function(){
 
	const self = this 
	const chalk = self.chalk 
	let help = `

	${chalk.greenBright('create-anzii-app <options>')}
	  ${chalk.cyan.bold('-c | --cli')} ................ Creates anzii app suitable for building cli apps
	  ${chalk.cyan.bold('-w | --web')} ............ Creates anzii app suitable for building web pages, apis, and any backend
	  ${chalk.cyan.bold('-r | --remote')} ............... Creates a remote repo and an initial commit for your anzii app 
	  ${chalk.cyan.bold('-h | --help')} ............... Shows help menu for create-anzii-app command
	  ${chalk.cyan.bold('-g | --git')} ............... Initializes git for your anzii app
	  ${chalk.cyan.bold('-y | --yes')} ............... Creates anzii app with default settings
	`

	console.log(help)
} 





module.exports = methods