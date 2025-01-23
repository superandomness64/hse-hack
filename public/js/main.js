document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        const schoolName = user.school === 'hse' ? 'HSE' : 'Fishers';
        document.getElementById('school-name').textContent = `Welcome to ${schoolName}`;
        
        if (user.name && user.email) {
            document.getElementById('user-info').textContent = `Logged in as ${user.name} (${user.email})`;
        }
    } else {
        localStorage.setItem('user', JSON.stringify({ school: 'fishers' }));
        document.getElementById('school-name').textContent = 'Welcome to Fishers';
    }
});

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html'; // Redirect to login page
}
