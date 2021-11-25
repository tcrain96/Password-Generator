// Assignment code here
var passwordInfo = {
  length:"0",
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
      }

      //tell user their input was invalid, and ask if they wish to try again. If yes, return to top, if cancel, set length to null.
      else{
        if(!window.confirm("Please input a number between 1 and 128")){
          this.length = null;
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
    password = "Password generation has been canceled";
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
