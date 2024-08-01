document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    fetch('https://formspree.io/f/myzgwdzz', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
      .then(result => {
        window.location.href = 'success.html'; // Redirect to success page
      }).catch(error => {
        document.getElementById('message').textContent = 'There was an error submitting your application. 😔';
        document.getElementById('message').style.color = '#dc3545'; // Red color
      });
});
