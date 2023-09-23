function contactForm() {
  // Get form field values
  const teamName = document.getElementById('teamName')?.value;
  const topic = document.getElementById('topic')?.value;
  const email = document.getElementById('email')?.value;
  const firstname = document.getElementById('firstname')?.value;
  const mail = document.getElementById('mail')?.value;
  const message = document.getElementById('message')?.value;

  // The API request URL
  const baseUrl = 'https://backend.getlinked.ai';
  const apiUrl = `${baseUrl}/hackathon/contact-form`;

  // JSON object with the form data
  const formData = {
    email: mail || email,
    phone_number: '0903322445533',
    first_name: firstname || 'Space Explore',
    message,
  };

  console.log(formData);

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      //  API response
      console.log('API response:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
}
