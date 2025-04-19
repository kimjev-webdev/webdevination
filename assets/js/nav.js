// === this file handles the hover colours andd behaviour for the navbar and also manages the logic for the preloader.  ===

// === Function Declarations (hoisted to top) ===

// Handles dropdown nav highlighting & hover behavior
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
    });

    // Toggle dropdown on click
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

    // Remove 'menu-current' when another link is clicked
    navLinks.forEach(link => {
      if (link !== dropdownToggle) {
        link.addEventListener('click', () => {
          dropdownToggle.classList.remove('menu-current');
        });
      }
    });
  }
}

// Handles fade-out and removal of the portal preloader
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Optional: Add a delay if you want to savor the portal
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000); // matches fade-out time
  }, 500); // delay before starting the fade (optional)
}

// === Execute ===
document.addEventListener('DOMContentLoaded', handleDropdownHighlighting);
window.addEventListener('load', hidePreloader);
