function login() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const school = document.getElementById('school').value;
    const
teacher = false;
    if(email.indexOf("teacher")!=-1){
        teacher = true;

    }  s  
    if (name && email) {
        localStorage.setItem('user', JSON.stringify({ name, email,  school, teacher}));
    } else {
        localStorage.setItem('user', JSON.stringify({ school }));
    }
    
    window.location.href = 'index.html'; // Redirect to main page
}
