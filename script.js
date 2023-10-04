document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('flexSwitchCheckDefault');
    const body = document.body;
    const mainContainer = document.getElementById('main-container');

    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

    function applyStyle(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            mainContainer.id = 'main-container-2';
        } else {
            body.classList.remove('dark-mode');
            mainContainer.id = 'main-container'; 
        }
    }

    applyStyle(isDarkModeEnabled);

    checkbox.addEventListener('change', function () {
        applyStyle(this.checked);

        localStorage.setItem('darkModeEnabled', this.checked.toString());
    });
});

// ----------------------------------------------

const bsTab = new bootstrap.Tab('#myTab')
