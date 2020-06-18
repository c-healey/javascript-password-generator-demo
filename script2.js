// let passwordLength = prompt("enter a length for the password");
// console.log(passwordLength);

// let useUppercase = prompt("edo you want to use uppercase characters");
// console.log(useUppercase);

// if(useUppercase === 'yes'){
//     choices = choices + uppercaseChars;
// }

const genPasswordBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generatePassword = () => {
  let valuesLower = "abcdefghijklmnopqrstuvwxyz";
  let valuesUpper = valuesLower.toUpperCase();
  let valuesNumber = "0123456789";
  let valuesSpecial = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let values = "";

  let password = "";

  // set password length/complexity
  let complexity = document.getElementById("slider").value;

  // set values depending on what is checked
  if (document.getElementById("values-upper").checked) {
    values = values + valuesUpper;
  }
  if (document.getElementById("values-lower").checked) {
    values = values + valuesLower;
  }
  if (document.getElementById("values-number").checked) {
    values = values + valuesNumber;
  }
  if (document.getElementById("values-special").checked) {
    values = values + valuesSpecial;
  }

  //    generate password by randomly selecting 'complexity' number of values
  for (let i = 0; i < complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  return password;
};
const writePassword = () => {
  let password = generatePassword();

  passwordEl.value = password;
};
genPasswordBtn.addEventListener("click", writePassword);
