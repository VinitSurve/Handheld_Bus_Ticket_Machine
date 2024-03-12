const switchEl = document.querySelector('.switch input'); // Find the checkbox element

switchEl.addEventListener('change', function() { // Add event listener for checkbox change
  if (this.checked) {
    document.body.classList.add('dark-mode'); // Add 'dark-mode' class to body on check
  } else {
    document.body.classList.remove('dark-mode'); // Remove 'dark-mode' class on uncheck
  }
});
