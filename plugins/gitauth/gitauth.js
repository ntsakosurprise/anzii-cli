
const methods = require("./methods")
const  octonode = require('octonode')



class Gitauth{
  
  
  constructor(pao){

    this.pao = pao 
    this.github = octonode 
   
   
     this.init = methods.init
     this.handleGitAuth = methods.handleGitAuth
    
     
    

  }


  

}

export default Gitauth