// === this file handles the hover colours and behaviour for the navbar and also manages the logic for the preloader. ===

// === Function Declarations (hoisted to top) ===

// Handles dropdown nav highlighting & hover behavior
function handleDropdownHighlighting() {
  const dropdown = document.querySelector('.nav-item.dropdown');
  const dropdownToggle = dropdown?.querySelector('.nav-link');
  const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (dropdown && dropdownToggle && dropdownMenu) {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('dropdown-open');
      dropdownToggle.classList.add('menu-current');
      dropdownMenu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('dropdown-open');
      dropdownMenu.classList.remove('show');
    });

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

    navLinks.forEach(link => {
      if (link !== dropdownToggle) {
        link.addEventListener('click', () => {
          dropdownToggle.classList.remove('menu-current');
        });
      }
    });
  }
}

// Gets and toggles portal animation direction
function getNextPortalDirection() {
  const last = localStorage.getItem('portalDirection');
  const next = last === 'open' ? 'close' : 'open';
  localStorage.setItem('portalDirection', next);
  return next;
}

// Applies the appropriate animation (open or close)
function playPortalAnimation() {
  const portal = document.querySelector('.portal-ring');
  const mask = document.querySelector('.mask-center');
  if (!portal || !mask) return;

  const direction = getNextPortalDirection();
  const animName = direction === 'open' ? 'portalOpen' : 'portalClose';

  // Use smooth cubic-bezier easing
  const animationStyle = `${animName} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`;

  portal.style.animation = animationStyle;
  mask.style.animation = animationStyle;
}

// Handles fade-out and removal of the portal preloader
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Play correct animation first
  playPortalAnimation();

  // Fade out after animation
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  }, 1500); // wait for portal animation to finish first
}

// === Execute ===
document.addEventListener('DOMContentLoaded', handleDropdownHighlighting);
window.addEventListener('load', hidePreloader);
