document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let input = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerText;
  
        if (buttonValue === 'AC') {
          input = '';
        } else if (buttonValue === 'DEL') {
          input = input.slice(0, -1);
        } else if (buttonValue === '=') {
          try {
            input = eval(input).toString();
          } catch {
            input = 'Error';
          }
        } else {
          input += buttonValue;
        }
  
        inputBox.value = input;
      });
    });
  });
  