// Get form and input elements
const form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get input values
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const github = document.getElementById('github').value;
  const linkedin = document.getElementById('linkedin').value;

  // Store the data in localStorage
  localStorage.setItem('resumeData', JSON.stringify({
    name,
    title,
    email,
    phone,
    github,
    linkedin
  }));

  // Redirect to the resume page
  window.location.href = "resume.html"; // You can change this to whatever your second page is
});
