function wireThemeToggle(){
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = document.getElementById('theme-icon');

  function currentTheme(){ return document.documentElement.getAttribute('data-theme') || 'light'; }
  function paintIcon(){
    icon.innerHTML = currentTheme() === 'dark'
      ? '<circle cx="12" cy="12" r="4.5"/><path d="M12 2 V4 M12 20 V22 M4 12 H2 M22 12 H20 M4.9 4.9 L6.3 6.3 M17.7 17.7 L19.1 19.1 M19.1 4.9 L17.7 6.3 M6.3 17.7 L4.9 19.1"/>'
      : '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/>';
  }

  btn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try{ localStorage.setItem('theme', next); }catch(e){ /* stockage indisponible, on ignore */ }
    paintIcon();
  });

  paintIcon();
}
document.addEventListener('DOMContentLoaded', wireThemeToggle);
