// Assignment code here
var passwordInfo = {
  length:"0",
  lowercase:"true",
  uppercase:"true",
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
        //set lowercase to true
        this.uppercase = true;
        return;
      }
      //else if user said no
      else if (tempUpperCase.toLowerCase() === "no"){
        //set lowercase to false
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
  }
}

function generatePassword(){
  var password;

  passwordInfo.setLength();
  if(passwordInfo.length === null){
    return password = "Password generation has been canceled";
  }

  passwordInfo.setLowercase();
  if(passwordInfo.lowercase === null){
    return password = "Password generation has been canceled";
  }

  passwordInfo.setUppercase();
  if(passwordInfo.uppercase === null){
    return password = "Password generation has been canceled";
  }

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
