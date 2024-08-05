document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
            
            // Gather the form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            city: formData.get('city'),
            Dob: formData.get('dob'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Convert the data to a JSON object
        const jsonData = JSON.stringify(data, null, 2); // Pretty print JSON

        // Display the JSON data on the webpage
        document.getElementById('jsonOutput').textContent = jsonData;
});
