function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `User ID: ${data.id}`;
    })
    .catch(function(error) {
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `Error: ${error.message}`;
    });
}
