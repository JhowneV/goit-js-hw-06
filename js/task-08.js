document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('All fields must be filled in.');
      return; 
    }

    const formData = {
      email: email,
      password: password
    };

    console.log(formData);
    document.querySelector('.login-form').reset();
});
  