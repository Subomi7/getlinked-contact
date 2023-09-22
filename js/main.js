const doc = document.getElementById('contactForm');
console.log({ doc });
doc.addEventListener('submitButton', function (e) {
  e.preventDefault();

  // Get form field values
  const teamName = document.getElementById('teamName').value;
  const topic = document.getElementById('topic').value;
  const email = document.getElementById('email').value;
  const firstname = document.getElementById('firstname').value;
  const mail = document.getElementById('mail').value;
  const message = document.getElementById('message').value;

  // Construct the API request URL
  const apiUrl = '{{baseUrl}}/hackathon/registration'; // Replace with your API URL

  // Create a JSON object with the form data
  const formData = {
    email: 'sample@eexample.com',
    phone_number: '0903322445533',
    first_name: 'Space Explore',
    message: 'I need further info',
  };

  //request to the API
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response here, e.g., display a success message
      console.log('API response:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
});
