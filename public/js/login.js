const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const usernameel = document.querySelector('#username-login');
  const passwordel = document.querySelector('#password-login').value.trim();

  // if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username: usernameel, password: passwordel }),
      headers: { 'Content-Type': 'application/json' },
    });
   
    console.log(response)

    //If successful, the code inside this block executes
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  // }
};





//Uses document.querySelector to find the element with the ID login-form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


