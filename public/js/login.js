function login() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const school = document.getElementById('school').value;  s  
    if (name && email) {
        localStorage.setItem('user', JSON.stringify({ name, email,  school}));
    } else {
        localStorage.setItem('user', JSON.stringify({ school }));
    }
    
    window.location.href = 'index.html'; // Redirect to main page
}
