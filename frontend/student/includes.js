document.addEventListener('DOMContentLoaded', function () {
    function loadHTML(selector, url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(data => {
          document.querySelector(selector).innerHTML = data;
          if (selector === '#nav-placeholder') {
            highlightActiveNav();
          }
        })
        .catch(error => console.error('Error loading', url, ':', error));
    }
  
    loadHTML('#nav-placeholder', 'nav.html');
    loadHTML('#footer-placeholder', 'footer.html');
  
    function highlightActiveNav() {
      const navLinks = document.querySelectorAll('#nav-placeholder .nav-link');
      const currentPage = window.location.pathname.split('/').pop();
      navLinks.forEach(link => {
        if (link.href && link.href.includes(currentPage)) {
          link.classList.add('active');
        }
      });
    }
  });
  