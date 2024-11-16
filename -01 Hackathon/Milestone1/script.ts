const toggleButton = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.querySelector('#skills ul') as HTMLElement;

let isVisible = true

const toggleSkills = (): void => {
  if (isVisible) {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  } else {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  }
  isVisible = !isVisible;
};

toggleButton.addEventListener('click', toggleSkills);