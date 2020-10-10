const methods = require("./methods")

const arg = require('arg') 
const chalk = require('chalk') 
const figlet = require('figlet') 
const cleya = require('clear') 
const inquirer = require('inquirer')


class Interpreter{
  
  
  constructor(pao){

    this.pao = pao 
    this.arg = arg
    this.chalk = chalk 
    this.figlet = figlet
    this.clear = cleya
    this.inquirer = inquirer
    this.commands = [{
    	  
    	  command: "scaffold-app",
    	  alias: 'create-anzii-app',
    	  arguments: {
    	  	
    	  	 cli: {
    	  	 	 options: ["git"]
    	  	 	
    	  	 }
    	  	
    	  }
 
    }] 
    
   
     this.init = methods.init
     this.handleInterpreterCliInput = methods.handleInterpreterCliInput 
     this.handlePromptUser = methods.handlePromptUser
     this.handleCommands = methods.handleCommands 
     this.getFeedback = methods.getFeedback 
     this.prompt = methods.prompt 
     this.outPut = methods.outPut 

     

  }


  

}

module.exports = Interpreter