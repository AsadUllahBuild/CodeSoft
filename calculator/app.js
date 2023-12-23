document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        // Sirf numbers, decimal point, aur kuch specific operators ko allow karna
        const validInputs = /[0-9./*+-]/;
        if (validInputs.test(value)) {
          display.value += value;
        } else if (value === '=') {
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        } else if (value === 'AC') {
          display.value = '';
        } else if (value === 'DEL') {
          display.value = display.value.slice(0, -1);
        }
      });
    });
  
    display.addEventListener('input', function() {
      // Sirf numbers, decimal point, aur kuch specific operators ko allow karna
      const regex = /[^0-9./*+-]/g;
      this.value = this.value.replace(regex, '');
    });
  });
  