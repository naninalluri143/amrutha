 // Event listener for the form submission
 document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const aadhaar = document.getElementById('aadhaar').value;

    // Create an object with the input data
    const inputData = {
        name,
        email,
        age,
        sex,
        address,
        phone,
        aadhaar
    };
console.log(inputData);
alert('Email sent successfully');

    // Make a POST request to your NestJS backend
//     fetch('http://localhost:3000', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             // Add any necessary headers (e.g., authentication token) here
//         },
//         body: JSON.stringify(inputData), // Send input data as JSON
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response data from the backend
//         const dataContainer = document.getElementById('dataContainer');
//         dataContainer.innerHTML = `<p>Data from Backend: ${JSON.stringify(data)}</p>`;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Handle errors here (e.g., display an error message to the user)
//     });
});