document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.loading_bar > div');
    const percentage = document.querySelector('.percentage');
    const loadingMsg = document.querySelector('.loading_msg');
    const originalLoadingMsg = loadingMsg.textContent;
    let currentSection = 0;

    function changeSectionColor() {
        if (currentSection < sections.length) {
            sections[currentSection].style.background = 'var(--clr-e-l-blue)';
            currentSection++;
            percentage.textContent = `${Math.round((currentSection / sections.length) * 100)}%`;

            if (currentSection === sections.length) {
                loadingMsg.textContent = 'ONGI 100% TÄIS!';
            }
        } else {
            clearInterval(interval);
            setTimeout(() => {
                currentSection = 0;
                resetSectionsColor();
                interval = setInterval(changeSectionColor, getRandomInterval());
            }, 5000);
        }
    }

    function resetSectionsColor() {
        sections.forEach(section => {
            section.style.background = 'var(--clr-d-l-blue)';
        });
        percentage.textContent = '0%';
        loadingMsg.textContent = originalLoadingMsg;
    }

    function getRandomInterval() {
        return Math.floor(Math.random() * (3000 - 1000) + 1000);
    }

    let interval = setInterval(changeSectionColor, getRandomInterval());
});