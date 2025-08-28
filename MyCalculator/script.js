let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const btn = e.target.innerHTML;

    if (btn == '=') {
      try {
        string = eval(string).toString();
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error";
      }
    }

    else if (btn == 'M+') {
      try {
        memory += eval(string);
        alert("Memory: " + memory);

      } catch {}
    }

    else if (btn == 'M-') {
      try {
        memory -= eval(string);
        alert("Memory: " + memory);

      } catch {}
    }

    else if (btn == 'MR') {
      string = memory.toString();
      document.querySelector('input').value = string;
    }

    else if (btn == 'MC') {
      memory = 0;
    }

    else if (btn == 'A/C') {
      string = "";
      document.querySelector('input').value = string;
    }

    else {
      string += btn;
      document.querySelector('input').value = string;
    }
  });
});

window.onload = function() {
  document.getElementById('display').value = '0';
};

