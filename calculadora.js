const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


//Loop for each botton
buttons.forEach((item) => {
  item.onclick = () => {
    
    //clear botton
    if (item.id == "clear") {
      display.innerText = "";
    //clear botton

    //backspace botton, extract all values except the last one witht he substr function.
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    //backspace botton

    /*Math expression botton: Here we use the eval function to make strings a valide math expression: let expression = "2 + 3";
   let result = eval(expression); 
   console.log(result); // 5 */
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    //eval function


    //If there is not a value entered yet, a message will apper for 2 secods saying: Add values to start!        
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Add values to start!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
const text = document.querySelector(".text");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  text.classList.toggle("dark")
  isDark = !isDark;
};