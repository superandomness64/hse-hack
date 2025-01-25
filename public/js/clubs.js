const user = JSON.parse(localStorage.getItem('user'));
const schoolName = user.school === 'hse' ? 'HSE' : 'Fishers';
const teach = user.teacher;

// Initialize club lists
let fishersClubs = [];
let hseClubs = [];

// Create buttons for clubs
function createButtonsFromClubs(clubs, school, teach) {
    const container = document.getElementById('buttons-container');
    container.innerHTML = ''; // Clear existing buttons

    clubs.forEach(club => {
        const button = document.createElement('div');
        button.className = 'button';
        button.style.backgroundColor = school === "Fishers" ? "red" : "blue";
        button.innerHTML = `<h2>${club.name}</h2><em>${club.teacher}</em>`;
        button.addEventListener('click', () => {
            displayClubInfo(club);
        });
        container.appendChild(button);
    });

    if (teach) {
        const addClubButton = document.createElement('div');
        addClubButton.className = 'button';
        addClubButton.style.backgroundColor = school === "Fishers" ? "red" : "blue";
        addClubButton.innerHTML = `<h2>Add Club</h2>`;
        addClubButton.addEventListener('click', teacherAddClub);
        container.appendChild(addClubButton);
    }
}

// Display club info in a modal
function displayClubInfo(club) {
    const overlay = document.getElementById('modal-overlay');
    const image = club.image || 'img/questionmark_white.png';
    overlay.innerHTML = `
        <div class="modal-content visible">
            <span class="close">&times;</span>
            <img src="${image}" alt="${club.name} logo" style="max-width: 100%; height: auto; display: block; margin: 0 auto 20px;">
            <h2>${club.name}</h2>
            <em>${club.teacher}</em>
            <p>${club.description}</p>
            <p><strong>Meeting Info:</strong> ${club.meetingInfo}</p>
        </div>
    `;
    overlay.querySelector('.close').addEventListener('click', hideModalContent);
    overlay.classList.add('visible');
}

// Teacher adding a new club
function teacherAddClub() {
    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = `
        <div class="modal-content visible">
            <span class="close">&times;</span>
            <input type="text" id="name" placeholder="Club name">
            <input type="text" id="teacher" placeholder="Teacher name">
            <input type="text" id="description" placeholder="Description">
            <input type="text" id="img" placeholder="Image URL">
            <input type="text" id="meetingInfo" placeholder="Meeting Info">
            <button type="button" id="postButton">Post</button>
        </div>
    `;
    overlay.querySelector('.close').addEventListener('click', hideModalContent);

    const postButton = document.getElementById('postButton');
    postButton.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const teacher = document.getElementById('teacher').value.trim();
        const description = document.getElementById('description').value.trim();
        const image = document.getElementById('img').value.trim();
        const meetingInfo = document.getElementById('meetingInfo').value.trim();
    
        if (!name || !teacher || !description || !image || !meetingInfo) {
            alert("Please fill in all fields.");
            return;
        }
    
        const newClub = { name, teacher, description, meetingInfo, image };
        const endpoint = schoolName === 'Fishers' ? '/api/fishersclubs' : '/api/hseclubs';
    
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClub),
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`Server error: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                alert("Club added successfully!");
                if (schoolName === 'Fishers') {
                    fishersClubs = data;
                } else {
                    hseClubs = data;
                }
                createButtonsFromClubs(
                    schoolName === 'Fishers' ? fishersClubs : hseClubs,
                    schoolName,
                    teach
                );
                hideModalContent();
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while adding the club.");
            });
    });
    

    overlay.classList.add('visible');
}

// Hide modal content
function hideModalContent() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('visible');
    overlay.innerHTML = ''; // Clear content
}

// Fetch initial club data based on the school
document.addEventListener('DOMContentLoaded', () => {
    const endpoint = schoolName === 'Fishers' ? '/api/fishersclubs' : '/api/hseclubs';
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch clubs.');
            }
            return response.json();
        })
        .then(data => {
            if (schoolName === 'Fishers') {
                fishersClubs = data;
                createButtonsFromClubs(fishersClubs, schoolName, teach);
            } else {
                hseClubs = data;
                createButtonsFromClubs(hseClubs, schoolName, teach);
            }
        })
        .catch(error => {
            console.error(error);
            alert("An error occurred while fetching clubs.");
        });
});
