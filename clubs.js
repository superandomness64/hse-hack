// Grab all the modal elements
const modalElements = document.querySelectorAll('.modal');

// Function to create buttons from modal content data
function createButtonsFromModals() {
    const container = document.getElementById('buttons-container');

    modalElements.forEach(modal => {
        const modalContent = modal.querySelector('.modal-content');
        const title = modalContent.querySelector('h2').textContent;
        const teacher = modalContent.querySelector('em').textContent;
        const paragraphs = modalContent.querySelectorAll('p');

        let buttonLabel = `${title} - ${teacher}`;

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = buttonLabel;
        button.addEventListener('click', () => {
            displayModalContent(modalContent);
        });
        container.appendChild(button);
        
        // Hide the original modal content to avoid displaying it directly on the page
        modal.style.display = 'none';
    });
}

// Function to display modal content
function displayModalContent(modalContent) {
    const overlay = document.getElementById('modal-overlay');
    overlay.innerHTML = ''; // Clear previous content

    const cloneContent = modalContent.cloneNode(true);
    overlay.appendChild(cloneContent);
    
    const closeBtn = overlay.querySelector('.close');
    closeBtn.addEventListener('click', hideModalContent);
    
    overlay.classList.add('visible');
}

// Function to hide modal content
function hideModalContent() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('visible');
}

// Call the function to create buttons on page load
document.addEventListener('DOMContentLoaded', createButtonsFromModals);
