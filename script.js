// Tab Navigation
const tabs = document.querySelectorAll('.tab-button');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => {
      content.classList.remove('active');
      if (content.id === tab.dataset.tab) {
        content.classList.add('active');
      }
    });
  });
});

// Form Validation
const form = document.getElementById('signup-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Email Validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.value || !emailRegex.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Password Validation
  const password = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
