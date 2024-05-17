document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const question = document.getElementById('question').value;

    fetch('/submit-question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('questionForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting your question.');
    });
});
