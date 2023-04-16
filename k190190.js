const searchBox = document.querySelector('#searchBox');
const projectList = document.querySelector('#projectList');

searchBox.addEventListener('input', () => {
  const searchTerm = searchBox.value.toLowerCase();
  const projects = projectList.getElementsByTagName('li');

  Array.from(projects).forEach((project) => {
    const projectText = project.textContent.toLowerCase();

    if (projectText.includes(searchTerm)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});

function redirectToPage() {
    window.location.href = "k190190_projects.html";
  }
  function redirectToHome() {
    window.location.href = "k190190_homepage.html";
  }
  function redirectToEducation() {
    window.location.href = "k190190_education.html";
  }
  function redirectToCertifications() {
    window.location.href = "k190190_certifications.html";
  }
