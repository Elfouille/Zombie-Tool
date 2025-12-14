async function loadConfig() {
  if (!window.MAPS_CONFIG) throw new Error("MAPS_CONFIG introuvable (maps.js non chargé)");
  return window.MAPS_CONFIG;
}

function qs(name) {
  const u = new URL(location.href);
  return u.searchParams.get(name);
}

function go(url) { location.href = url; }

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
}
