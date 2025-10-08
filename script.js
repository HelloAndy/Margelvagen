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
