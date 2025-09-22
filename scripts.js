// Highlight current page in nav
(function() {
  const here = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('nav.site a').forEach(a=>{
    const href = a.getAttribute('href');
    const abs = new URL(href, location.origin).pathname.replace(/\/+$/, '') || '/';
    if (abs === here) a.classList.add('active');
  });
})();
