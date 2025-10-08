function openTab(evt, contentPath) {
  // Get all tab buttons and remove 'active' class
  const tabButtons = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Add 'active' class to the clicked button
  evt.currentTarget.classList.add("active");

  // Load content from the relative path
  fetch(contentPath)
    .then(response => response.text())
    .then(html => {
      document.getElementById("tab-content-container").innerHTML = html;
    })
    .catch(error => console.error('Error loading tab content:', error));
}

// Load default tab content on page load
document.addEventListener('DOMContentLoaded', () => {
  openTab({ currentTarget: document.querySelector('.tablinks.active') }, './Html/tab1.html');
});



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();






