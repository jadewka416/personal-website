/* --- 1. TYPEWRITER EFFECT --- */
const texts = ["UX/UI Design", "Business analytics", "Digital marketing"];
let count = 0;
let index = 0;

function type() {
  const textElement = document.getElementById("text");
  if (!textElement) return;

  if (index < texts[count].length) {
    let currentText = texts[count];
    let letter = currentText.slice(0, ++index);
    textElement.textContent = letter;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2500);
  }
}

function erase() {
  const textElement = document.getElementById("text");
  if (index > 0) {
    let currentText = texts[count];
    let letter = currentText.slice(0, --index);
    textElement.textContent = letter;
    setTimeout(erase, 50);
  } else {
    count = (count + 1) % texts.length;
    setTimeout(type, 500);
  }
}

/* --- 2. MOBILE MENU FUNCTIONS --- */
// This matches the onclick="toggleMenu()" in your HTML
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Handle clicking the "Projects" dropdown on mobile
document.addEventListener("DOMContentLoaded", () => {
  const dropbtn = document.querySelector(".dropbtn");
  
  if (dropbtn) {
    dropbtn.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Stop page from jumping
        const dropdownContent = dropbtn.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      }
    });
  }

  // Start typewriter
  if (document.getElementById("text")) {
    setTimeout(type, 500);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Existing typewriter and nav logic...
  if (document.getElementById("text")) {
    setTimeout(type, 500);
  }
  initNav();

  // 1. Disable Right-Click (Context Menu)
  document.addEventListener('contextmenu', event => event.preventDefault());

  // 2. Disable Keyboard Shortcuts (Ctrl+C, Ctrl+U, Ctrl+S, F12)
  document.addEventListener('keydown', (e) => {
    if (
      e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's') || 
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });
});

// Prevent dragging images
document.querySelectorAll('img').forEach(img => {
  img.oncontextmenu = () => false; // Extra layer of right-click protection
  img.onmousedown = (e) => e.preventDefault(); // Prevents dragging
});

function openNavDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');
    
    // Toggle the visibility
    dropdown.classList.toggle('show-dropdown');
    
    // Optional: Smooth scroll to the top so they see the menu open
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close the dropdown if the user clicks away from it
window.onclick = function(event) {
    if (!event.target.matches('#learn-more') && !event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-dropdown')) {
                openDropdown.classList.remove('show-dropdown');
            }
        }
    }
}

function openNavDropdown() {
    const navLinks = document.getElementById("navLinks");
    const dropdownContent = document.querySelector('.dropdown-content');

    // 1. If mobile menu is hidden, open it first
    if (window.innerWidth <= 768) {
        navLinks.classList.add('active'); // Matches standard hamburger menu logic
    }

    // 2. Force the dropdown to show
    dropdownContent.classList.toggle('show-dropdown');

    // 3. Scroll to top so they see the menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}