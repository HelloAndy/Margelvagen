// script.js - small initializer

document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('js-enabled');

  const COLOR_KEY = 'margel_primary_color';
  const defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#7b6b3c';

  function applyColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);

    document.querySelectorAll('.color-swatch').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.color.toLowerCase() === color.toLowerCase());
    });

    // Update external link icon color
    const encodedColor = encodeURIComponent(color);
    const iconSvg = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${encodedColor}" viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/><path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/></svg>')`;
    document.documentElement.style.setProperty('--external-link-icon', iconSvg);
  }

  const saved = localStorage.getItem(COLOR_KEY);
  if (saved) applyColor(saved);

  document.querySelectorAll('.color-swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.dataset.color;
      applyColor(color);
      localStorage.setItem(COLOR_KEY, color);
    });
  });
});
