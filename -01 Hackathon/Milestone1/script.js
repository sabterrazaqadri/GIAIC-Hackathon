var toggleButton = document.getElementById('toggleSkillsBtn');
var skillsSection = document.querySelector('#skills ul');
var isVisible = true;
var toggleSkills = function () {
    if (isVisible) {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
    else {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    isVisible = !isVisible;
};
toggleButton.addEventListener('click', toggleSkills);
