        // 1. Get the elements we need
        const themeToggleButton = document.getElementById('theme-toggle');
        const bodyElement = document.body;

        // 2. Add the event listener using an anonymous function (like the "BEFORE" image)
        themeToggleButton.addEventListener('click', function() {
            // Toggles the 'dark-mode' class on the body
            bodyElement.classList.toggle('dark-mode');
        });

