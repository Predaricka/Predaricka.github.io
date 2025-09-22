(async function(){
  const root = document.getElementById('sidebar-root');
  if(!root) return;

  try {
    const res = await fetch('sidebar.html', { cache: 'no-store' });
    root.innerHTML = await res.text();

    // highlight active menu item
    const current = location.pathname.split('/').pop() || 'index.html';
    root.querySelectorAll('.side-nav a').forEach(a => {
      if (a.getAttribute('href') === current) {
        a.classList.add('active');
      }
    });
  } catch (err) {
    console.error('Sidebar failed:', err);
  }
})();
