document.addEventListener('DOMContentLoaded', function () {
    // Get the registration button and add a click event listener
    var registerButton = document.getElementById('register-btn');
    if (registerButton) {
      registerButton.addEventListener('click', function () {
        // Get the username and password from the input fields
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
  
        // Check if username and password are not empty
        if (username && password) {
          // Call the backend API for user registration
          registerUser(username, password);
        } else {
          alert('Please enter both username and password.');
        }
      });
    }
  });
  
  // Function to make an API call for user registration
  function registerUser(username, password) {
    // Replace 'YOUR_BACKEND_API_URL/register' with the actual registration endpoint
    var apiUrl = 'YOUR_BACKEND_API_URL/register';
  
    // Prepare data for the API request
    var data = {
      username: username,
      password: password
    };
  
    // Make a POST request to the backend API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseData => {
        // Handle the response from the backend
        console.log('Registration response:', responseData);
  
        // Optionally, you can update the UI based on the response
        // For example, show a success message or redirect to a new page
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  }
  