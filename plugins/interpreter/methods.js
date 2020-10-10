

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
	const arg = self.arg 
	const figlet = self.figlet 
	const chalk = self.chalk 
	
	
	
	// self.logSync("Handling send-output Cli event") 
	// self.logSync("About to send output to std")  

	
	
	const commands = arg({
		
		 
		  '--cli': Boolean, 
		  '--web': Boolean, 
		  '--remote': Boolean,
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

	
	let set = {
		
		defApp: arg['--yes'],
		command: arg["create-anzii-app"],
		web: arg['--web'] || false, 
		cli: arg['--cli'] || false,
		remote: arg['--remote'] || false,
		git: arg['--git'] || false 
		
	
	}

	self.logSync('THE COMMANDS INTERPRETER')
	self.logSync(set) 
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

module.exports = methods