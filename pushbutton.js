// An array of button objects with name and link properties
const buttons = [
    { name: "Canvas", link: "https://hse.instructure.com/" },
    { name: "clever", link: "https://clever.com/in/hse/student/portal" },
    { name: "The Roar", link: "https://www.youtube.com/@FHSRoar"},
    { name: "skyward", link: "https://sis.hse.k12.in.us/scripts/wsisa.dll/WService=wsEAplus/seplog01.w"},
    { name: "Tiger Times", link: "https://fisherstigertimes.com/"},
    { name: "chat gpt", link: "https://chatgpt.com/"},
    
    // Add more buttons here as you wish
];

// Function to create buttons and append them to the buttons-container div
function createButtons() {
    const container = document.getElementById('buttons-container');

    buttons.forEach(button => {
        const a = document.createElement('a');
        a.href = button.link;
        a.className = 'button';
        a.textContent = button.name;
        container.appendChild(a);
    });
}

// Call the function to create buttons on page load
createButtons();
