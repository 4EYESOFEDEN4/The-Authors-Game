console.log("TAG Engine initialised");

function loadWorld(worldName) {
  const content = document.getElementById("content");

  if (worldName === "world1") {
    content.innerHTML = `
      <h2>World 1 Loaded</h2>
      <p>The 12‑Realm Liturgical Engine is active.</p>
    `;
  }

  if (worldName === "world2") {
    content.innerHTML = `
      <h2>World 2 Loaded</h2>
      <p>Saint’s Soulscape is active.</p>
    `;
  }
}
