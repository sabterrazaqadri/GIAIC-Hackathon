// Get the resume data from localStorage
const resumeData = JSON.parse(localStorage.getItem('resumeData'));

// Check if there is data in localStorage
if (resumeData) {
  // Populate the resume with data
  document.getElementById('resume-name').textContent = `Name: ${resumeData.name}`;
  document.getElementById('resume-title').textContent = `Title: ${resumeData.title}`;
  document.getElementById('resume-email').textContent = resumeData.email;
  document.getElementById('resume-phone').textContent = resumeData.phone;
  document.getElementById('resume-github').textContent = resumeData.github;
  document.getElementById('resume-linkedin').textContent = resumeData.linkedin;
} else {
  // If no data is found, redirect to the form page
  window.location.href = "index.html"; // Change the URL to your form page
}
