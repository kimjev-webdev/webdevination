// nav.js

// --- Function to handle dropdown highlighting and hover behavior ---
function handleDropdownHighlighting() {
  const dropdown = document.querySelector('.nav-item.dropdown');
  const dropdownToggle = dropdown?.querySelector('.nav-link');
  const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (dropdown && dropdownToggle && dropdownMenu) {
    // Show dropdown on mouseenter
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('dropdown-open');
      dropdownToggle.classList.add('menu-current');
      dropdownMenu.classList.add('show');
    });

    // Hide dropdown on mouseleave
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('dropdown-open');
      dropdownMenu.classList.remove('show');
      // Retain 'menu-current' to keep the text green after collapsing
    });

    // Toggle 'menu-current' on click
    dropdownToggle.addEventListener('click', () => {
      if (dropdown.classList.contains('dropdown-open')) {
        dropdown.classList.remove('dropdown-open');
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.add('menu-current');
      } else {
        dropdown.classList.add('dropdown-open');
        dropdownMenu.classList.add('show');
        dropdownToggle.classList.add('menu-current');
      }
    });

    // Remove 'menu-current' when other nav links are clicked
    navLinks.forEach(link => {
      if (link !== dropdownToggle) {
        link.addEventListener('click', () => {
          dropdownToggle.classList.remove('menu-current');
        });
      }
    });
  }
}

// --- Execute after the DOM is fully loaded ---
document.addEventListener('DOMContentLoaded', handleDropdownHighlighting);
