// Get the login form element
const loginForm = document.querySelector('form');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input field values
  const nameInput = document.getElementById('name');
  const passwordInput = document.getElementById('password');

  // Get the values entered by the user
  const name = nameInput.value;
  const password = passwordInput.value;

  // Perform validation
  if (name.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    passwordInput.focus();
    return;
  }

  // Process the login data (e.g., send it to a server for authentication)
  // You can replace this code with your own logic
  if (name === 'Test' && password === 'Admin123') {
    alert('Login successful!');
    // Redirect to the Products page
    window.location.href = 'products.html';
  } else {
    alert('Invalid credentials. Please try again.');
    // Clear the form fields or perform any other action
  }

  // Reset the form fields
  loginForm.reset();
});

// Function to be called when the "Sign In" button is clicked
function signIn() {
  // Place any additional code you want to run when the "Sign In" button is clicked
  console.log('Sign In button clicked!');
}

// Add a click event listener to the "Sign In" button
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', signIn);

// Get the forgot password form element
const forgotPasswordForm = document.querySelector('form');

// Add event listener for form submission
forgotPasswordForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input field values
  const emailInput = document.getElementById('email');

  // Get the value entered by the user
  const email = emailInput.value;

  // Perform validation
  if (email.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  // Simulate sending an email with reset instructions
  const subject = 'Reset your password - Anatomy Cap';
  const body = `Hello, your reset password link is here. Click on the link to reset your password.`;
  const resetPasswordLink = 'https://www.example.com/reset-password'; // Replace with the actual reset password link

  // Open a new pop-up window with the reset instructions message
  const popupMessage = `We sent you an email with instructions to set up a new password. Check your inbox, including the spam folder.`;
  window.open('', 'Reset Password', 'height=300,width=400');
  document.write(popupMessage);

  // Simulate sending an email (server-side operation)
  sendResetPasswordEmail(email, subject, body);

  // Reset the form fields
  forgotPasswordForm.reset();
});

// Function to send reset password email (simulated server-side operation)
function sendResetPasswordEmail(email, subject, body) {
  console.log('Sending reset password email...');
  console.log('To:', email);
  console.log('Subject:', subject);
  console.log('Body:', body);
}

// Function to open the reset password pop-up window
function openResetPasswordWindow() {
  window.open('reset-password.html', 'Reset Password', 'height=300,width=400');
}

// Function to be called when the "Reset Password" button is clicked
function resetPassword() {
  const newPasswordInput = document.getElementById('newPassword');
  const confirmationInput = document.getElementById('confirmation');

  const newPassword = newPasswordInput.value;
  const confirmation = confirmationInput.value;

  if (newPassword.trim() === '') {
    alert('Please enter a new password.');
    newPasswordInput.focus();
    return;
  }

  if (confirmation.trim() === '') {
    alert('Please confirm the new password.');
    confirmationInput.focus();
    return;
  }

  if (newPassword !== confirmation) {
    alert('New password and confirmation password do not match.');
    newPasswordInput.value = '';
    confirmationInput.value = '';
    newPasswordInput.focus();
    return;
  }

  alert('Password reset successful!');
  // Perform any necessary actions (e.g., update password in the backend)

  // Close the reset password pop-up window
  window.close();
}

// Add a click event listener to the "Reset Password" button
const resetPasswordButton = document.getElementById('resetPasswordButton');
resetPasswordButton.addEventListener('click', resetPassword);
