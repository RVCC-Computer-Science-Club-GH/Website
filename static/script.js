const body = document.body;
const modeToggle = document.querySelector('.mode-toggle');

// event listener for the theme toggle
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateIframeTheme();
});

// function to update the iframe URL
const iframe = document.querySelector('iframe');

function updateIframeTheme() {
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const url = iframe.src;
  const params = new URLSearchParams(url.split('?')[1]);
  params.set('theme', theme);
  iframe.src = `${url.split('?')[0]}?${params.toString()}`;
}


// event listener for the hidden input field
const hiddenInput = document.querySelector('.hidden-input');
const usernameField = document.querySelector('.username');

hiddenInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    usernameField.textContent = hiddenInput.value;
    hiddenInput.value = ''; // clear the input field
  }
});