/*jshint esversion: 11 */
/* jshint node: true */
/* jshint -W079 */  // Suppress __dirname/__filename redefinition warning

// this file handles hover colours and behaviour for the navbar, and manages the logic for the portal-style preloader. 
//  it is not responsible for the actual preloader animation, which is handled in the CSS.
function handleDropdownHighlighting() {
  const dropdown = document.querySelector('.nav-item.dropdown');
  const dropdownToggle = dropdown?.querySelector('.nav-link');
  const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (dropdown && dropdownToggle && dropdownMenu) {
    // open dropdown on mouse enter
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('dropdown-open');
      dropdownToggle.classList.add('menu-current');
      dropdownMenu.classList.add('show');
    });

    // close dropdown on mouse leave
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('dropdown-open');
      dropdownMenu.classList.remove('show');
    });

    // toggle dropdown on click
    dropdownToggle.addEventListener('click', () => {
      if (dropdown.classList.contains('dropdown-open')) {
        dropdown.classList.remove('dropdown-open');
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.add('menu-current'); // maintain highlight when closed
      } else {
        dropdown.classList.add('dropdown-open');
        dropdownMenu.classList.add('show');
        dropdownToggle.classList.add('menu-current');
      }
    });

    // Remove highlight from dropdown when another nav link is clicked
    navLinks.forEach(link => {
      if (link !== dropdownToggle) {
        link.addEventListener('click', () => {
          dropdownToggle.classList.remove('menu-current');
        });
      }
    });
  }
}

// portal Preloader Logic

 // retrieves the next portal animation direction.
 // alternates between 'open' and 'close' each time the page loads.
 // stores the last used direction in localStorage.
 // @returns {string} - the next portal direction ('open' or 'close').
function getNextPortalDirection() {
  const last = localStorage.getItem('portalDirection');
  const next = last === 'open' ? 'close' : 'open';
  localStorage.setItem('portalDirection', next);
  return next;
}

 // plays the appropriate portal animation based on the stored direction.
 // applies CSS animation for either opening or closing the portal.
 // smooth easing function is used for a polished look.
function playPortalAnimation() {
  const portal = document.querySelector('.portal-ring');
  const mask = document.querySelector('.mask-center');
  if (!portal || !mask) return; // defensive: exit if elements aren't present

  const direction = getNextPortalDirection();
  const animName = direction === 'open' ? 'portalOpen' : 'portalClose';

  // use a smooth cubic-bezier curve for animation
  const animationStyle = `${animName} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`;

  portal.style.animation = animationStyle;
  mask.style.animation = animationStyle;
}

 //handles hiding the preloader after the portal animation plays.
 //first triggers the portal animation.
 //then fades out the preloader element smoothly.
 //finally removes the preloader from the display.
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return; // defensive: exit if preloader element isn't found

  playPortalAnimation();

  // fade out after the portal animation finishes
  setTimeout(() => {
    preloader.style.transition = 'opacity 1s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none'; // fully hide it after fade-out
    }, 1000);
  }, 1500); // 1.5s delay matches the portal animation length
}

// script Initialization
// executes dropdown highlighting logic once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', handleDropdownHighlighting);

// executes preloader hide logic after all assets (images, etc.) are fully loaded.
window.addEventListener('load', hidePreloader);
