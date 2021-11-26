// Assignment code here
var passwordInfo = {
  length:"0",
  lowercase:true,
  uppercase:true,
  numeric:true,
  specialCharacters:true,
  setLength(){

    //loop until input is either canceled or correctly inputed
    while(true){
      var tempLength = window.prompt("Please input the length of password you wish to generate");

      //if user pressed cancel
      if(tempLength === null){
        //set length to null
        this.length = null;
        return;
      }

      //else if the user inputed a number, and it was between 8 and 128
      else if((!isNaN(parseInt(tempLength))) && parseInt(tempLength) >= 8 && parseInt(tempLength) <=128){
        //set length of password to length inputed
        this.length = tempLength;
        return;
      }

      //tell user their input was invalid, and ask if they wish to try again. If yes, return to top, if cancel, set length to null.
      else{
        if(!window.confirm("Please input a number between 8 and 128")){
          this.length = null;
          return;
        }
      }
    }
  },
  setLowercase(){
    //loop until input is either canceled or correctly inputed
    while(true){
      
      var tempLowerCase = window.prompt("Do you wish to include lowercase letters in your password? Yes or No?");

      //if user pressed cancel
      if(tempLowerCase === null){
        //set length to null
        this.lowercase = null;
        return;
      }

      //else if user said yes
      else if (tempLowerCase.toLowerCase() === "yes"){
        //set lowercase to true
        this.lowercase = true;
        return;
      }
      //else if user said no
      else if (tempLowerCase.toLowerCase() === "no"){
        //set lowercase to false
        this.lowercase = false;
        return;
      }
      //else the user did not enter a valid answer
      else{
        if(!window.confirm("Please answer with a yes or no.")){
          this.lowercase = null;
          return;
        }
      }
    }
  },
  setUppercase(){
    //loop until input is either canceled or correctly inputed
    while(true){
      
      var tempUpperCase = window.prompt("Do you wish to include uppercase letters in your password? Yes or No?");

      //if user pressed cancel
      if(tempUpperCase === null){
        //set length to null
        this.uppercase = null;
        return;
      }

      //else if user said yes
      else if (tempUpperCase.toLowerCase() === "yes"){
        //set uppercase to true
        this.uppercase = true;
        return;
      }
      //else if user said no
      else if (tempUpperCase.toLowerCase() === "no"){
        //set uppercase to false
        this.uppercase = false;
        return;
      }
      //else the user did not enter a valid answer
      else{
        if(!window.confirm("Please answer with a yes or no.")){
          this.uppercase = null;
          return;
        }
      }
    }
  },
  setNumeric(){
    //loop until input is either canceled or correctly inputed
    while(true){
          
      var tempNumeric = window.prompt("Do you wish to include numbers in your password? Yes or No?");

      //if user pressed cancel
      if(tempNumeric === null){
        //set length to null
        this.numeric = null;
        return;
      }

      //else if user said yes
      else if (tempNumeric.toLowerCase() === "yes"){
        //set numeric to true
        this.numeric = true;
        return;
      }
      //else if user said no
      else if (tempNumeric.toLowerCase() === "no"){
        //set numeric to false
        this.numeric = false;
        return;
      }
      //else the user did not enter a valid answer
      else{
        if(!window.confirm("Please answer with a yes or no.")){
          this.numeric = null;
          return;
        }
      }
    }
  },
  setSpecialCharacters(){
    //loop until input is either canceled or correctly inputed
    while(true){
          
      var tempSpecialCharacters = window.prompt("Do you wish to include Special Characters in your password? Yes or No?");

      //if user pressed cancel
      if(tempSpecialCharacters === null){
        //set length to null
        this.specialCharacters = null;
        return;
      }

      //else if user said yes
      else if (tempSpecialCharacters.toLowerCase() === "yes"){
        //set numeric to true
        this.specialCharacters = true;
        return;
      }
      //else if user said no
      else if (tempSpecialCharacters.toLowerCase() === "no"){
        //set numeric to false
        this.specialCharacters = false;
        return;
      }
      //else the user did not enter a valid answer
      else{
        if(!window.confirm("Please answer with a yes or no.")){
          this.specialCharacters = null;
          return;
        }
      }
    }
  }
}

function randomizePassword(){
  
  //set temp variables
  var passwordCharacters = [];
  var randomizedPassword = null;

  //check which criteria were selected
  if(passwordInfo.lowercase){
    passwordCharacters.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
  }
  if(passwordInfo.uppercase){
    passwordCharacters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  if(passwordInfo.numeric){
    passwordCharacters.push("0","1","2","3","4","5","6","7","8","9");
  }
  if(passwordInfo.specialCharacters){
    passwordCharacters.push("!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~");
  }

  //iterate through the length of the password specified, randomizing and building password
  for(var i = 0; i < passwordInfo.length; i++){
    if(randomizedPassword === null)
    {
      randomizedPassword = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
    else{
      randomizedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }
  }

  //return final password
  return randomizedPassword;
}

function generatePassword(){
  
  //set temp variables
  var password;
  var promptValidated = false;

  //while at least one criteria hasn't been chosen
  while(promptValidated === false)
  {
    //set length of password
    passwordInfo.setLength();
    if(passwordInfo.length === null){
      return password = "Password generation has been canceled";
    }

    //set whether or not user wants lowercase in their password
    passwordInfo.setLowercase();
    if(passwordInfo.lowercase === null){
      return password = "Password generation has been canceled";
    }

    //set whether or not user wants uppercase in their password
    passwordInfo.setUppercase();
    if(passwordInfo.uppercase === null){
      return password = "Password generation has been canceled";
    }

    //set whether or not user wants numbers in their password
    passwordInfo.setNumeric();
    if(passwordInfo.numeric === null){
      return password = "Password generation has been canceled";
    }

    //set whether or not user wants special characters in their password
    passwordInfo.setSpecialCharacters();
    if(passwordInfo.specialCharacters === null){
      return password = "Password generation has been canceled";
    }

    //if the user said no to all the criteria
    if(passwordInfo.lowercase === false && passwordInfo.uppercase === false && passwordInfo.numeric === false && passwordInfo.specialCharacters === false){
      
      //tell user they must select at least 1 criteria
      window.alert("You must say yes to at least one criteria to generate password. Please try again!");
    }

    //otherwise break out of the loop and create password based off criteria chosen
    else{
      promptValidated = true;
    }
  }
  password = randomizePassword();
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
